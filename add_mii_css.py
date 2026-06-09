import os

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css = """
/* ── MAKE IN INDIA STATEMENT ── */
.mii-section {
  position: relative;
  overflow: hidden;
  background-color: var(--black);
  padding: 120px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mii-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.mii-bg-map {
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 120%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="rgba(255,255,255,0.03)" d="M50 0L80 20L80 80L50 100L20 80L20 20Z"/></svg>'); /* Extremely simplified placeholder geometric shape to represent the map subtly. Ideally replaced by an actual subtle map SVG */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.8;
  filter: blur(2px);
}

.mii-bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 75% 50%, rgba(30,58,138,0.15) 0%, transparent 60%),
              linear-gradient(90deg, var(--black) 30%, transparent 100%);
}

.mii-container {
  position: relative;
  z-index: 1;
}

.mii-content {
  max-width: 650px;
}

.mii-tag {
  color: var(--rose-gold-gradient);
  letter-spacing: 4px;
  font-size: 11px;
  margin-bottom: 24px;
}

.mii-title {
  color: var(--white);
  margin-bottom: 24px;
  line-height: 1;
}

.mii-title em {
  font-style: normal;
  color: rgba(255, 255, 255, 0.5);
}

.mii-text {
  color: rgba(255, 255, 255, 0.65);
  font-size: clamp(16px, 1.4vw, 18px);
  margin-bottom: 48px;
  line-height: 1.8;
}

.mii-logos {
  display: flex;
  align-items: center;
  gap: 32px;
  background: rgba(255, 255, 255, 0.03);
  padding: 24px 40px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  width: fit-content;
}

.mii-smi-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1); /* Ensure it's white */
}

.mii-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
}

.mii-mii-logo {
  height: 56px;
  width: auto;
  object-fit: contain;
  /* If the placeholder is black, invert it. If it's orange/colorful, leave it. We'll leave it assuming it's colorful or white. */
}

@media(max-width: 900px) {
  .mii-bg-map {
    width: 80%;
    right: -10%;
    opacity: 0.4;
  }
  .mii-bg-gradient {
    background: radial-gradient(circle at 50% 50%, rgba(30,58,138,0.15) 0%, transparent 70%),
                linear-gradient(180deg, var(--black) 10%, transparent 100%);
  }
}

@media(max-width: 600px) {
  .mii-section {
    padding: 80px 0;
  }
  .mii-logos {
    flex-direction: column;
    gap: 20px;
    padding: 24px;
    width: 100%;
  }
  .mii-divider {
    width: 50px;
    height: 1px;
  }
}

/* ── TRUST ── */"""

css = css.replace('/* ── TRUST ── */', new_css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("styles.css updated")
