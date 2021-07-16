$(() => {
  window.addEventListener("message", (event) => {
    let item = event.data;

    if (!item.pauseMenuOn) {
      $(".hud-container").css("display", "block");

      $(".health").css("width", item.health + "%");
      $(".armor").css("width", item.armor + "%");
      $(".hunger").css("height", item.hunger + "%");
      $(".thirst").css("height", item.thirst + "%");
      $(".stamina").css("height", item.stamina + "%");

      if (item.health <= item.healthAlert) {
        $(".health-alert").addClass("blink-anim");
        $(".health-alert").css("display", "block");
        $(".health").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".health-alert").removeClass("blink-anim");
        $(".health-alert").css("display", "none");
        $(".health").css("box-shadow", "0px 0px 4px rgba(65, 155, 53, 1)");
      }
      if (item.armor <= item.armorAlert && item.armor != 0) {
        $(".armor-alert").addClass("blink-anim");
        $(".armor-alert").css("display", "block");
        $(".armor").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".armor-alert").removeClass("blink-anim");
        $(".armor-alert").css("display", "none");
        $(".armor").css("box-shadow", "0px 0px 4px rgba(67, 109, 175, 1)");
      }
      if (item.hunger <= item.hungerAlert) {
        $(".hunger-alert").addClass("blink-anim");
        $(".hunger-alert").css("display", "block");
        $(".hunger").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".hunger-alert").removeClass("blink-anim");
        $(".hunger-alert").css("display", "none");
        $(".hunger").css("box-shadow", "0px 0px 4px rgba(210, 155, 67, 1)");
      }
      if (item.thirst <= item.thirstAlert) {
        $(".thirst-alert").addClass("blink-anim");
        $(".thirst-alert").css("display", "block");
        $(".thirst").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".thirst-alert").removeClass("blink-anim");
        $(".thirst-alert").css("display", "none");
        $(".thirst").css("box-shadow", "rgba(101, 137, 182, 1)");
      }

      if (item.vehicle) {
        $("#stamina").hide("fast");
      } else {
        $("#stamina").show("fast");

        if (item.stamina) {
          $(".stamina-icon").attr("src", "img/stamina.svg");
        }
        if (item.swim) {
          $(".stamina-icon").attr("src", "img/swim.svg");
        }
        if (item.breath) {
          $(".stamina-icon").attr("src", "img/breath.svg");
        }
      }
    } else {
      $(".hud-container").css("display", "none");
    }
  });
});
