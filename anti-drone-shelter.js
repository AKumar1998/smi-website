/* ───────────────────────────── */
/* ADS PARALLAX */
/* ───────────────────────────── */

const adsParallax =
    document.querySelector('.ads-parallax-image');

if (adsParallax) {

    window.addEventListener('scroll', () => {

        const section =
            document.querySelector('.ads-parallax-threat');

        const rect =
            section.getBoundingClientRect();

        const offset =
            rect.top * -0.18;

        adsParallax.style.transform =
            `translateY(${offset}px)`;

    });

}