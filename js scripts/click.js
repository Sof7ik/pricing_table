document.querySelectorAll(".get-started-btn").forEach(function callback (elem) {
	elem.addEventListener("click", function () {
		document.querySelector(".banner-wrapper").style.display = "flex";
		document.querySelector('html').style.overflowY = "hidden"
	})
});

document.querySelectorAll('.select-plan').forEach(function callback (elem) {
	elem.addEventListener("click", function () {
		document.querySelector(".banner-wrapper").style.display = "flex";
		document.querySelector('html').style.overflowY = "hidden"
	})
});

document.querySelector('.banner-wrapper').addEventListener("click", function (e) {
	if(e.target === this) {
		document.querySelector(".banner-wrapper").style.display = "none";
		document.querySelector('html').style.overflowY = "auto"
	}
});