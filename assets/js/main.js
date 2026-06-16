/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				document.body.classList.remove('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile) {
			document.body.classList.add('is-mobile');
		} else {

			breakpoints.on('>medium', function() {
				document.body.classList.remove('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				document.body.classList.add('is-mobile');
			});

		}

	// Scrolly.
		document.querySelectorAll('.scrolly').forEach(function(el) {
			el.addEventListener('click', function(event) {
				var href = el.getAttribute('href');
				if (!href || href.charAt(0) !== '#' || href.length < 2) return;
				var target = document.querySelector(href);
				if (!target) return;
				event.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			});
		});

})();
