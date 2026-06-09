import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change background of .trust-item-icon to var(--rose-gold-gradient)
css = re.sub(r'\.trust-item-icon\{width:54px;height:54px;margin:0 auto 16px;background:var\(--black\);display:flex;align-items:center;justify-content:center;\}', r'.trust-item-icon{width:54px;height:54px;margin:0 auto 16px;background:var(--rose-gold-gradient);display:flex;align-items:center;justify-content:center;}', css)

# Change fill of .trust-item-icon svg to var(--white)
css = re.sub(r'\.trust-item-icon svg\{width:24px;height:24px;fill:var\(--rose-gold-gradient\);\}', r'.trust-item-icon svg{width:24px;height:24px;fill:var(--white);}', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Trust items updated")
