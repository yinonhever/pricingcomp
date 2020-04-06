/* Responding to every toggle switch */

$("#toggler").change(function () {
  if ($("#toggler").prop("checked") === true) {
    changePrices(199.99, 249.99, 399.99);
  }
  else {
    changePrices(19.99, 24.99, 39.99);
  }
})


/* Toggling the switch when arrow keys are pressed */

$("body").keydown(function (event) {
  if (event.keyCode === 37) {
    if ($("#toggler").prop("checked") === false) {
      $("#toggler").prop("checked", true);
      changePrices(199.99, 249.99, 399.99);
    }
  }

  if (event.keyCode === 39) {
    if ($("#toggler").prop("checked") === true) {
      $("#toggler").prop("checked", false);
      changePrices(19.99, 24.99, 39.99);
    }
  }
})


/* Changing the displayed prices */

function changePrices(basic, professional, master) {
  $(".basic").text(basic);
  $(".professional").text(professional);
  $(".master").text(master);
}


/* Changing style of the clicked card */

$(".card").click(function () {
  if ($(this).hasClass("card-middle")) {
    $(this).removeClass("card-middle");
  }
  else {
    $(".card").removeClass("card-middle");
    $(this).addClass("card-middle");
  }
})