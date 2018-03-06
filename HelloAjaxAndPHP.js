var xmlhttp;  // reference to XMLHttpRequest object

window.onload=function(){
	getAjaxData();
}

function getAjaxData() {	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function (){
		showAjaxData();
	};
	xmlhttp.open("GET","HelloAjaxAndPHP.php",true);
	xmlhttp.send();	
}

function showAjaxData() {
	if(xmlhttp.readyState==4 && xmlhttp.status==200) {
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	}
}