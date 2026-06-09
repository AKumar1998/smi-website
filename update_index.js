const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update H2 color
html = html.replace(
  '<h2 class="title-lg reveal" data-delay="80" style="color:var(--white);">Complete Security<br>Solutions</h2>',
  '<h2 class="title-lg reveal" data-delay="80" style="color:var(--black);">Complete Security<br>Solutions</h2>'
);

// Define replacements for icons
const icons = [
  { img: 'placeholder-automotive.jpg', alt: 'Automotive Armouring' },
  { img: 'placeholder-vip.jpg', alt: 'VIP & VVIP Protection' },
  { img: 'placeholder-defence.jpg', alt: 'Defence & Paramilitary' },
  { img: 'placeholder-blast.jpg', alt: 'Bomb & Blast Protection' },
  { img: 'placeholder-drone.jpg', alt: 'Anti-Drone Innovation' },
  { img: 'placeholder-engineering.jpg', alt: 'Engineering & Fabrication' }
];

let iconIndex = 0;
html = html.replace(/<div class="service-icon">[\s\S]*?<\/div>/g, () => {
  if(iconIndex < icons.length) {
    const icon = icons[iconIndex++];
    return '<div class="service-image"><img src="./assets/' + icon.img + '" alt="' + icon.alt + '"></div>';
  }
  return '';
});

fs.writeFileSync('index.html', html);
console.log('index.html updated successfully.');
