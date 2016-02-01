/*Cheatsheet
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var	x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object
*/
/*Finding HTML Elements
	document.getElementById(id)	Find an element by element id
	document.getElementsByTagName(name)	Find elements by tag name
	document.getElementsByClassName(name)	Find elements by class name*/
/*Changing HTML Elements
	element.innerHTML =  new html content	Change the inner HTML of an element
	element.attribute = new value	Change the attribute value of an HTML element
	element.setAttribute(attribute, value)	Change the attribute value of an HTML element
	element.style.property = new style	Change the style of an HTML element*/
/*Adding and Deleting Elements
	document.createElement(element)	Create an HTML element
	document.removeChild(element)	Remove an HTML element
	document.appendChild(element)	Add an HTML element
	document.replaceChild(element)	Replace an HTML element
	document.write(text)	Write into the HTML output stream
		Never use document.write() after the document is loaded. It will overwrite the document.*/
/*Adding Events Handlers
	document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event*/
/*Finding HTML Objects
	Property	Description	DOM
	document.anchors	Returns all <a> elements that have a name attribute	1
	document.baseURI	Returns the absolute base URI of the document	3
	document.body	Returns the <body> element	1
	document.cookie	Returns the document's cookie	1
	document.doctype	Returns the document's doctype	3
	document.documentElement	Returns the <html> element	3
	document.documentMode	Returns the mode used by the browser	3
	document.documentURI	Returns the URI of the document	3
	document.domain	Returns the domain name of the document server	1
	document.embeds	Returns all <embed> elements	3
	document.forms	Returns all <form> elements	1
	document.head	Returns the <head> element	3
	document.images	Returns all <img> elements	1
	document.implementation	Returns the DOM implementation	3
	document.inputEncoding	Returns the document's encoding (character set)	3
	document.lastModified	Returns the date and time the document was updated	3
	document.links	Returns all <area> and <a> elements that have a href attribute	1
	document.readyState	Returns the (loading) status of the document	3
	document.referrer	Returns the URI of the referrer (the linking document)	1
	document.scripts	Returns all <script> elements	3
	document.strictErrorChecking	Returns if error checking is enforced	3
	document.title	Returns the <title> element	1
	document.URL	Returns the complete URL of the document	1
*/
/*http://www.w3schools.com/js/js_htmldom_events.asp onload, onunload, onchange*/
/*For adding lines later: http://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_event_keycode*/
/*
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
*/
/*Use this function + queries to create back history to undo?
The history.back() method loads the previous URL in the history list.

This is the same as clicking the Back button in the browser.
*/

/*This function is meant to be run when the user clicks one of the list buttons.

If a button inside of an HTML #list element is clicked, check its parent element class (pec).*/

function listButtonClick($pid) {
	var $pec = document.getElementById($pid).className;
	switch($pec) {
    case "o": document.getElementById($pid).className = "x";
        break;
    case "x": document.getElementById($pid).className = "";
        break;
    default: document.getElementById($pid).className = "o";
	}
}

/*This function is meant to be run when the user clicks the trash icon*/

function trashButtonClick($pid){ document.getElementById($pid).className = "del"; }