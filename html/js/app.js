$(function () {
  window.addEventListener("message", function (event) {
    $(".health").css("width", event.data.health + "%");
    $(".armor").css("width", event.data.armor + "%");
    $(".hunger").css("height", event.data.hunger + "%");
    $(".thirst").css("height", event.data.thirst + "%");
    $(".oxygen").css("height", event.data.oxygen + "%");

    if (event.data.health <= 50) {
      $(".health-alert").css("display", "block");
      $(".health-alert").animate({ opacity: 1 }, 500);
      $(".health-alert").animate({ opacity: 0 }, 500);
    } else {
      $(".health-alert").css("display", "none");
    }
    if (event.data.hunger <= 25) {
      $(".hunger-alert").css("display", "block");
      $(".hunger-alert").animate({ opacity: 1 }, 500);
      $(".hunger-alert").animate({ opacity: 0 }, 500);
    } else {
      $(".hunger-alert").css("display", "none");
    }
    if (event.data.thirst <= 25) {
      $(".thirst-alert").css("display", "block");
      $(".thirst-alert").animate({ opacity: 1 }, 500);
      $(".thirst-alert").animate({ opacity: 0 }, 500);
    } else {
      $(".thirst-alert").css("display", "none");
    }

    if (event.data.swim == false) {
      $(".oxygen-icon").attr("src", "img/oxygen.svg");
    } else {
      $(".oxygen-icon").attr("src", "img/swim.svg");
    }

    if (event.data.breath == true) {
      $(".oxygen-icon").attr("src", "img/breath.svg");
    }

    if (event.data.vehicle == false) {
      $("#fuel").hide("fast");
    } else {
      $("#fuel").show("fast");
      $(".fuel").css("height", event.data.fuel + "%");
      if (event.data.fuel <= 25) {
        $(".fuel-alert").css("display", "block");
        $(".fuel-alert").animate({ opacity: 1 }, 500);
        $(".fuel-alert").animate({ opacity: 0 }, 500);
      } else {
        $(".fuel-alert").css("display", "none");
      }
    }
  });
});
