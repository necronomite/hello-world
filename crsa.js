//CTRL+SHIFT+I  and  PASTE INTO THE CONSOLE IN CHROME. HIT ENTER
var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);

//PASTE THIS NEXT. HIT ENTER. DONE.
/
$("input[onclick$='1)']").each(function( index ) {
this.click();
});
