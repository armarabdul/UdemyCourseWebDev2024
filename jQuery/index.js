$("h1").css("color", "red");
$("h1").removeClass("head");
$("button").text("changed");
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});
