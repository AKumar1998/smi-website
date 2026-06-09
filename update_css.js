const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const oldCSS = `/* ── SERVICES ── */
.services-section{background:var(--black);}
.services-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:52px;gap:32px;flex-wrap:wrap;}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;}
.service-card{background:var(--dark);padding:40px 30px;position:relative;overflow:hidden;cursor:pointer;transition:background .35s cubic-bezier(.4,0,.2,1);}
.service-card::before{content:'';position:absolute;top:0;left:0;width:0;height:3px;background:var(--rose-gold-gradient);transition:width .5s cubic-bezier(.4,0,.2,1);}
.service-card:hover{background:#2d2d2d;}
.service-card:hover::before{width:100%;}
.service-card.blast-card{background:#000a1a;}
.service-card.blast-card:hover{background:#001030;}
.service-num{font-family:var(--font-display);font-size:52px;color:rgba(255,255,255,.04);position:absolute;bottom:14px;right:18px;line-height:1;pointer-events:none;}
.service-icon{width:48px;height:48px;background:rgba(30,58,138,.12);border:1px solid rgba(30,58,138,.3);display:flex;align-items:center;justify-content:center;margin-bottom:22px;transition:background .3s;}
.service-card:hover .service-icon{background:rgba(30,58,138,.12);border-color:var(--rose-gold-gradient);}
.service-icon svg{width:22px;height:22px;fill:var(--rose-gold-gradient);transition:fill .3s;}
.service-card:hover .service-icon svg{fill:white;}
.service-card h3{font-family:var(--font-cond);font-size:17px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--white);margin-bottom:11px;}
.service-card p{font-size:clamp(15px,1.3vw,17px);font-weight:300;line-height:1.75;color:var(--grey-light);}
.service-link{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-cond);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--white);margin-top:20px;transition:gap .3s;}
.service-link:hover{gap:14px;}
.service-link svg{width:12px;height:12px;fill:none;stroke:var(--white);stroke-width:2.5;}`;

const newCSS = `/* ── SERVICES ── */
.services-section{background:var(--white);}
.services-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:52px;gap:32px;flex-wrap:wrap;}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.service-card{background:var(--off-white);padding:30px;position:relative;overflow:hidden;cursor:pointer;transition:background .35s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1); border-radius: 8px;}
.service-card::before{content:'';position:absolute;top:0;left:0;width:0;height:3px;background:var(--rose-gold-gradient);transition:width .5s cubic-bezier(.4,0,.2,1);}
.service-card:hover{background:#e8ecef; transform:translateY(-4px);}
.service-card:hover::before{width:100%;}
.service-card.blast-card{background:var(--off-white);}
.service-card.blast-card:hover{background:#e8ecef;}
.service-num{font-family:var(--font-display);font-size:52px;color:rgba(0,0,0,.04);position:absolute;bottom:14px;right:18px;line-height:1;pointer-events:none;}
.service-image{width:100%;height:180px;border-radius:6px;overflow:hidden;margin-bottom:22px;background:var(--grey-dark);}
.service-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.4,0,.2,1);}
.service-card:hover .service-image img{transform:scale(1.04);}
.service-card h3{font-family:var(--font-cond);font-size:20px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--black);margin-bottom:11px;}
.service-card p{font-size:clamp(15px,1.3vw,17px);font-weight:300;line-height:1.75;color:var(--grey-mid);margin-bottom:24px;}
.service-link{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-cond);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--white);background:var(--rose-gold-gradient);padding:12px 24px;border-radius:50px;transition:all .3s;}
.service-link:hover{background:var(--rose-gold-gradient-dark);transform:translateY(-2px);box-shadow:0 6px 16px rgba(30,58,138,.25);gap:12px;}
.service-link svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.5;}`;

css = css.replace(oldCSS, newCSS);
fs.writeFileSync('styles.css', css);
console.log('styles.css updated successfully.');
