import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .services-section
css = re.sub(r'\.services-section\{background:var\(--black\);\}', r'.services-section{background:var(--white);}', css)

# Replace .services-grid
css = re.sub(r'\.services-grid\{display:grid;grid-template-columns:repeat\(3,1fr\);gap:2px;\}', r'.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}', css)

# Replace .service-card
css = re.sub(r'\.service-card\{background:var\(--dark\);padding:40px 30px;position:relative;overflow:hidden;cursor:pointer;transition:background \.35s cubic-bezier\(\.4,0,\.2,1\);\}', r'.service-card{background:var(--off-white);padding:30px;position:relative;overflow:hidden;cursor:pointer;transition:background .35s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1); border-radius: 8px;}', css)

# Replace .service-card:hover
css = re.sub(r'\.service-card:hover\{background:#2d2d2d;\}', r'.service-card:hover{background:#e8ecef; transform:translateY(-4px);}', css)

# Replace .service-card.blast-card
css = re.sub(r'\.service-card\.blast-card\{background:#000a1a;\}', r'.service-card.blast-card{background:var(--off-white);}', css)

# Replace .service-card.blast-card:hover
css = re.sub(r'\.service-card\.blast-card:hover\{background:#001030;\}', r'.service-card.blast-card:hover{background:#e8ecef;}', css)

# Remove the old icon classes and replace with service-image
old_icon_css = r'\.service-icon\{[^\}]+\}\n\.service-card:hover \.service-icon\{[^\}]+\}\n\.service-icon svg\{[^\}]+\}\n\.service-card:hover \.service-icon svg\{[^\}]+\}'
new_image_css = r'.service-image{width:100%;height:180px;border-radius:6px;overflow:hidden;margin-bottom:22px;background:var(--grey-dark);}\n.service-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.4,0,.2,1);}\n.service-card:hover .service-image img{transform:scale(1.04);}'
css = re.sub(old_icon_css, new_image_css, css)

# Replace .service-card h3
css = re.sub(r'\.service-card h3\{font-family:var\(--font-cond\);font-size:17px;font-weight:700;letter-spacing:1\.5px;text-transform:uppercase;color:var\(--white\);margin-bottom:11px;\}', r'.service-card h3{font-family:var(--font-cond);font-size:20px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--black);margin-bottom:11px;}', css)

# Replace .service-card p
css = re.sub(r'\.service-card p\{font-size:clamp\(15px,1\.3vw,17px\);font-weight:300;line-height:1\.75;color:var\(--grey-light\);\}', r'.service-card p{font-size:clamp(15px,1.3vw,17px);font-weight:300;line-height:1.75;color:var(--grey-mid);margin-bottom:24px;}', css)

# Replace .service-link
css = re.sub(r'\.service-link\{display:inline-flex;align-items:center;gap:8px;font-family:var\(--font-cond\);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var\(--white\);margin-top:20px;transition:gap \.3s;\}', r'.service-link{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-cond);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--white);background:var(--rose-gold-gradient);padding:12px 24px;border-radius:50px;transition:all .3s;}', css)

# Replace .service-link:hover
css = re.sub(r'\.service-link:hover\{gap:14px;\}', r'.service-link:hover{background:var(--rose-gold-gradient-dark);transform:translateY(-2px);box-shadow:0 6px 16px rgba(30,58,138,.25);gap:12px;}', css)

# Replace .service-link svg
css = re.sub(r'\.service-link svg\{width:12px;height:12px;fill:none;stroke:var\(--white\);stroke-width:2\.5;\}', r'.service-link svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.5;}', css)


with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("done")
