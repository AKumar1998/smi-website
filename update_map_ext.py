import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .png with .svg in styles.css
css = re.sub(r"background-image: url\('\./assets/india-map-bg\.png'\);", r"background-image: url('./assets/india-map-bg.svg');", css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("styles.css extension updated to svg")
