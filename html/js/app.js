$(function () {
  window.addEventListener("message", function (event) {
    $(".health").css("width", event.data.health + "%");
    $(".armor").css("width", event.data.armor + "%");
    $(".hunger").css("height", event.data.hunger + "%");
    $(".thirst").css("height", event.data.thirst + "%");
    $(".stamina").css("height", event.data.stamina + "%");

    if (event.data.health <= 50) {
      $(".health-alert").css("display", "block");
      $(".health-alert").addClass("blink-anim");
      $(".health").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
    } else {
      $(".health-alert").css("display", "none");
      $(".health-alert").removeClass("blink-anim");
      $(".health").css("box-shadow", "0px 0px 4px rgba(65, 155, 53, 1)");
    }
    if (event.data.hunger <= 25) {
      $(".hunger-alert").css("display", "block");
      $(".hunger-alert").addClass("blink-anim");
      $(".hunger").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
    } else {
      $(".hunger-alert").css("display", "none");
      $(".hunger-alert").removeClass("blink-anim");
      $(".hunger").css("box-shadow", "0px 0px 4px rgba(210, 155, 67, 1)");
    }
    if (event.data.thirst <= 25) {
      $(".thirst-alert").css("display", "block");
      $(".thirst-alert").addClass("blink-anim");
      $(".thirst").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
    } else {
      $(".thirst-alert").removeClass("blink-anim");
      $(".thirst-alert").css("display", "none");
      $(".thirst").css("box-shadow", "rgba(101, 137, 182, 1)");
    }

    if (event.data.vehicle == false) {
      $("#stamina").show("fast");

      if (event.data.swim == false) {
        $(".stamina-icon").attr("src", "img/stamina.svg");
      } else {
        $(".stamina-icon").attr("src", "img/swim.svg");
      }

      if (event.data.breath == true) {
        $(".stamina-icon").attr("src", "img/breath.svg");
      }
    } else {
      $("#stamina").hide("fast");
    }
  });
});
