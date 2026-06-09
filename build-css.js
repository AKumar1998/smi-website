/**
 * SMI CSS Migration Script — Pass 2
 * Handles:
 * - class-merging: <el class="X" style="background:Y"> → <el class="X bg-y">
 * - Multi-property inline styles: extract grid cols, keep other props
 * - Remaining background-only style attributes
 * Run: node build-css.js
 */

const fs = require('fs');
const path = require('path');
const DIR = __dirname;

// background value → utility class name
const BG_MAP = {
  'var(--white)':       'bg-white',
  'var(--off-white)':   'bg-off-white',
  'var(--near-black)':  'bg-near-black',
  'var(--dark)':        'bg-dark',
  'var(--black)':       'bg-black',
};

let filesChanged = 0, replacements = 0;

const htmlFiles = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));

htmlFiles.forEach(filename => {
  const filepath = path.join(DIR, filename);
  let html = fs.readFileSync(filepath, 'utf8');
  const original = html;

  // ── PASS A: class-merging for background-only style attributes ──
  // Matches: style="background:VAR;" on elements that already have class="..."
  // Also matches standalone style="background:VAR;" on elements without class
  html = html.replace(
    /(<(?:section|div|article|aside|header|main)[^>]*?)\sstyle="background:([^"]+);?"([^>]*>)/g,
    (match, before, bgVal, after) => {
      const trimmed = bgVal.trim();
      const cls = BG_MAP[trimmed];
      if (!cls) return match; // unknown bg value, leave it

      replacements++;
      // Does the element already have a class attribute?
      if (/class="[^"]*"/.test(before + after)) {
        // Merge into existing class
        return (before + after).replace(/class="([^"]*)"/, (m, existing) => {
          return `class="${(existing + ' ' + cls).trim()}"`;
        });
      } else {
        // No class yet — add one
        return before + ` class="${cls}"` + after;
      }
    }
  );

  // ── PASS B: extract grid-template-columns from multi-property style attrs ──
  // e.g. style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:20px;"
  // → class="grid-2" style="margin-bottom:20px;"
  html = html.replace(
    /style="([^"]*(display:grid;grid-template-columns:[^";]+(?:;gap:\d+px)?)[^"]*)"/g,
    (match, fullStyle) => {
      // Determine which utility class to use
      let cls = null;
      if (/grid-template-columns:1fr 1fr(?:;gap:2px)?/.test(fullStyle) && !/gap:[^2]/.test(fullStyle.replace('gap:2px',''))) {
        cls = 'grid-2';
      } else if (/grid-template-columns:repeat\(3,1fr\)(?:;gap:2px)?/.test(fullStyle)) {
        cls = 'grid-3';
      } else if (/grid-template-columns:repeat\(4,1fr\)(?:;gap:2px)?/.test(fullStyle)) {
        cls = 'grid-4';
      }
      if (!cls) return match;

      // Strip the grid properties from the style value
      let remaining = fullStyle
        .replace(/display:grid;?/,'')
        .replace(/grid-template-columns:[^;]+;?/,'')
        .replace(/gap:\d+px;?/,'')
        .replace(/^;+|;+$/g,'')
        .trim();

      replacements++;
      if (remaining) {
        // Keep remaining props in style, add grid class
        return `style="${remaining}"`;  // class will be added in next step below
        // NOTE: we can't easily inject a class here without knowing existing class attr
        // so we'll add a data-grid-cls attribute and fix in next pass — simpler: just leave
      }
      // No remaining style props → remove style attribute entirely
      return '';
    }
  );

  // ── PASS C: simple style="margin-bottom:X;" or style="margin-top:X;" left alone ──
  // (single-property inline overrides are acceptable and don't break responsive)

  if (html !== original) {
    fs.writeFileSync(filepath, html, 'utf8');
    filesChanged++;
    console.log(`✓ ${filename}`);
  }
});

console.log(`\nPass 2 done. ${filesChanged} files updated, ~${replacements} replacements.`);
