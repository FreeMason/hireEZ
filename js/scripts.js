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

	/* Scroll to Top Button */

