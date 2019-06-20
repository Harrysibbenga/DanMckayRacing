var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (window.outerWidth >= 576) {
    if (prevScrollpos < currentScrollPos) {
	  document.getElementById("main-nav").style.top = "0";
    } else {
	  document.getElementById("main-nav").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}

var truncate = function (elem, limit, after) {

	// Make sure an element and number of items to truncate is provided
	if (!elem || !limit) return;

	// Get the inner content of the element
	var content = elem.textContent || elem.innerText;
	content = content.trim();

	// Convert the content into an array of words
	// Remove any words above the limit
	content = content.split(' ').slice(0, limit);

	// Convert the array of words back into a string
	// If there's content to add after it, add it
	content = content.join(' ') + (after ? after : '');

	// Inject the content back into the DOM
	if (elem.textContent) {
		elem.textContent = content;
	} else {
		elem.innerText = content;
	}

};

const elems = Array.prototype.slice.apply(
  document.querySelectorAll('.truncate-text')
);

elems.forEach((elem) => {
  truncate(elem, 16, '...');
});