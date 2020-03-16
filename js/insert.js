var warning = function () {
	if (document.querySelector('.success').style.display == "none") {
		document.querySelector('.success').style.display = "block";
		if (document.querySelector('.success').classList.contains('success')) {
			document.querySelector('.success').classList.remove('success'); document.querySelector('.success').classList.add('warning');
			
			document.querySelector('.warning').innerHTML = "Something went wrong!";	
		} 
	}
}

var insertCallback = function () {
	let name = document.getElementById('name').value;
	let tel = document.getElementById('tel').value;

	const request = new XMLHttpRequest;
	const url = "phpScripts/send.php";
	const params = "id=1&name=" + name + "&tel=" + tel;

	request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    request.addEventListener("readystatechange", () => 
    {
        if (request.readyState === 4 && request.status === 200) {
        	if (document.querySelector('.success').style.display == "none") {
        		document.querySelector('.success').style.display = "block";
        		document.querySelector('.success').innerHTML = "All Right! Your callback was inserted!";
        	}
        }

		if (request.readyState === 4 && request.status === 401) {
	        console.log(401);
	        warning();
	    }

	    if (request.readyState === 4 && request.status === 500) {
	        console.log(500);
	        warning();
	    }

	})
}

document.querySelectorAll(".get-started-btn").forEach(function callback (elem) {
	elem.addEventListener("click", function () {
		document.querySelector(".banner-wrapper").style.display = "flex";
		document.querySelector('html').style.overflowY = "hidden";
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
		document.querySelector('html').style.overflowY = "auto";
	}
});

document.querySelector('.banner-btn').addEventListener('click', insertCallback() );