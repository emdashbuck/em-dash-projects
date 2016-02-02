<!DOCTYPE html>
<html>
<head>
<title>MVP ToDo App</title>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<script type='text/javascript' src='http://emdashbuck.com/projects/inc/todo.js' defer='true'></script>
</head>
<body class="mvp-todo">
<div id="primary">
<div class="controls">
<h1>List</h1>
<button id="undo" onclick="undoButtonClick()"><i class="fa fa-undo"></i></button>
</div>
<div class="list">
<p contenteditable="true" id="listitem1">
	<button contenteditable="false" onclick="listButtonClick('listitem1')">&nbsp;</button> 
	List Item 1
<i contenteditable="false" class="fa fa-trash-o" onclick=trashButtonClick('listitem1')></i>
</p>

<p contenteditable="true" id="listitem2" class="x">
	<button contenteditable="false" onclick="listButtonClick('listitem2')">&nbsp;</button> 
	List Item 2
	<i contenteditable="false" class="fa fa-trash-o" onclick=trashButtonClick('listitem2')></i>
</p>

<p contenteditable="true" id="listitem3" class="o">
	<button contenteditable="false" onclick="listButtonClick('listitem3')">&nbsp;</button> 
	List Item 3
	<i contenteditable="false" class="fa fa-trash-o" onclick=trashButtonClick('listitem3')></i>
</p>

<p contenteditable="true" id="listitem4" class="del">
	<button contenteditable="false" onclick="listButtonClick('listitem4')">&nbsp;</button> 
	List Item 4
	<i contenteditable="false" class="fa fa-undo" onclick=trashButtonClick('listitem4')></i>
</p>

</div>

</body>
</html>