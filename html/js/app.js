$(function () {
  window.addEventListener("message", function (event) {
    $(".health").css("width", event.data.health + "%");
    $(".armor").css("width", event.data.armor + "%");
    $(".hunger").css("height", event.data.hunger + "%");
    $(".thirst").css("height", event.data.thirst + "%");
    $(".stamina").css("height", event.data.stamina + "%");

    if (event.data.health <= 50) {
      $(".health-alert").css("display", "block");
      $(".health-alert").animate({ opacity: 1 }, 500);
      $(".health-alert").animate({ opacity: 0 }, 500);
    }
    if (event.data.hunger <= 25) {
      $(".hunger-alert").css("display", "block");
      $(".hunger-alert").animate({ opacity: 1 }, 500);
      $(".hunger-alert").animate({ opacity: 0 }, 500);
    }
    if (event.data.thirst <= 25) {
      $(".thirst-alert").css("display", "block");
      $(".thirst-alert").animate({ opacity: 1 }, 500);
      $(".thirst-alert").animate({ opacity: 0 }, 500);
    }

    if (event.data.vehicle == false) {
      $("#fuel").hide("fast");
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
      $("#fuel").show("fast");
      $("#stamina").hide("fast");
      $(".fuel").css("height", event.data.fuel + "%");
      if (event.data.fuel <= 25) {
        $(".fuel-alert").css("display", "block");
        $(".fuel-alert").animate({ opacity: 1 }, 500);
        $(".fuel-alert").animate({ opacity: 0 }, 500);
      }
    }
  });
});
