/* ═══════════════════════════════════ */
/* SMI BCB MODEL SWITCHER */
/* ═══════════════════════════════════ */

(function () {

  const section =
    document.querySelector('.smi-bcb-tech-specs');

  if (!section) return;

  const tabs =
    section.querySelectorAll('.smi-bcb-tab');

  const rating =
    section.querySelector('[data-bcb-rating]');

  const weight =
    section.querySelector('[data-bcb-weight]');

  const models = {

    2: {
      rating: '2 Kg TNT Equivalent',
      weight: 'Approx. 297 Kg'
    },

    3: {
      rating: '3 Kg TNT Equivalent',
      weight: 'Approx. 397 Kg'
    }

  };

  tabs.forEach(tab => {

    tab.addEventListener('click', () => {

      const model =
        tab.dataset.model;

      if (!models[model]) return;

      tabs.forEach(t => {
        t.classList.remove('active');
      });

      tab.classList.add('active');

      rating.style.opacity = 0;
      weight.style.opacity = 0;

      setTimeout(() => {

        rating.textContent =
          models[model].rating;

        weight.textContent =
          models[model].weight;

        rating.style.opacity = 1;
        weight.style.opacity = 1;

      }, 160);

    });

  });

})();