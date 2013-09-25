
	/* ShowHide Veteran Section */

	function showMe (it, box) { 
	var vis = (box.checked) ? "block" : "none"; 
	document.getElementById(it).style.display = vis; 
	} 
	function showMe2 (it) { 
	var vis = document.getElementById(it).style.display 
	if (vis == "block") { document.getElementById(it).style.display = "none"; } 
	else { document.getElementById(it).style.display = "block"; } 
	} 

	/* Email Validation */
	function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\
	".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA
	-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	} 
