import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_section = """
  <!-- ═══ MAKE IN INDIA STATEMENT ═══ -->
  <section class="section mii-section reveal">
    <div class="mii-bg">
      <div class="mii-bg-map"></div>
      <div class="mii-bg-gradient"></div>
    </div>
    <div class="container mii-container">
      <div class="mii-content">
        <span class="tag mii-tag reveal" data-delay="0">Aatmanirbhar Bharat</span>
        <h2 class="title-lg mii-title reveal" data-delay="80">100% Indigenous.<br><em>Global Standards.</em></h2>
        <p class="body-text mii-text reveal" data-delay="160">
          Since 1995, Secure Mobile India has been at the forefront of indigenous defence manufacturing. Every product, from inception to fabrication, is proudly developed on Indian soil, embodying the true spirit of self-reliance while meeting the most rigorous international ballistic and blast standards.
        </p>
        <div class="mii-logos reveal" data-delay="240">
          <img src="./assets/logo.png" alt="SMI Logo" class="mii-smi-logo">
          <div class="mii-divider"></div>
          <!-- Placeholder for Make in India logo, user can replace with actual SVG or PNG -->
          <img src="./assets/make-in-india-placeholder.png" alt="Make in India" class="mii-mii-logo">
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ NEWS PREVIEW ═══ -->"""

html = html.replace('  <!-- ═══ NEWS PREVIEW ═══ -->', new_section)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("index.html updated")
