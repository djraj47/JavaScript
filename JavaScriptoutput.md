JS can display data in differnet ways 

--> Writing into an HTML element, using innerHTML.
--> Writing into the HTML output using document.write().
--> Writing into an alert box, using window.alert().
--> Writing into the browser console, using console.log().

Using innerHTML

--> to access an HTML element by id attribute .

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>



Using document.write()

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>



Using window.alert()

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>




Using console.log()

<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>


JavaScript Print 

--> the window.print() method in the browser to print the content of the current window.

<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>