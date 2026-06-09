import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the weird SVG placeholder with a path to a real asset file
old_map_css = r"background-image: url\('data:image/svg\+xml;utf8,<svg.*?</svg>'\); /\* Extremely simplified placeholder geometric shape to represent the map subtly\. Ideally replaced by an actual subtle map SVG \*/"
new_map_css = "background-image: url('./assets/india-map-bg.png'); /* Place your map image in the assets folder */"

css = re.sub(old_map_css, new_map_css, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("styles.css map placeholder updated")
