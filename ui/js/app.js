$(() => {
  window.addEventListener("message", (event) => {
    let data = event.data;

    if (!data.pauseMenuOn) {
      $(".hud-container").css("display", "block");

      $(".health").css("width", data.health + "%");
      $(".armor").css("width", data.armor + "%");
      $(".hunger").css("height", data.hunger + "%");
      $(".hunger-top").css("width", data.hunger + "%");
      $(".thirst").css("height", data.thirst + "%");
      $(".thirst-top").css("width", data.thirst + "%");
      $(".stamina").css("height", data.stamina + "%");

      if (data.health <= data.healthAlert) {
        $(".health-alert").addClass("blink-anim");
        $(".health-alert").css("display", "block");
        $(".health").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".health-alert").removeClass("blink-anim");
        $(".health-alert").css("display", "none");
        $(".health").css("box-shadow", "0px 0px 4px rgba(65, 155, 53, 1)");
      }
      if (data.armor <= data.armorAlert && data.armor != 0) {
        $(".armor-alert").addClass("blink-anim");
        $(".armor-alert").css("display", "block");
        $(".armor").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".armor-alert").removeClass("blink-anim");
        $(".armor-alert").css("display", "none");
        $(".armor").css("box-shadow", "0px 0px 4px rgba(67, 109, 175, 1)");
      }
      if (data.hunger <= data.hungerAlert) {
        $(".hunger-alert").addClass("blink-anim");
        $(".hunger-alert").css("display", "block");
        $(".hunger").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
        $(".hunger-top").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".hunger-alert").removeClass("blink-anim");
        $(".hunger-alert").css("display", "none");
        $(".hunger").css("box-shadow", "0px 0px 4px rgba(236, 178, 3, 1)");
        $(".hunger-top").css("box-shadow", "0px 0px 4px rgba(236, 178, 3, 1)");
      }
      if (data.thirst <= data.thirstAlert) {
        $(".thirst-alert").addClass("blink-anim");
        $(".thirst-alert").css("display", "block");
        $(".thirst").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
        $(".thirst-top").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".thirst-alert").removeClass("blink-anim");
        $(".thirst-alert").css("display", "none");
        $(".thirst").css("box-shadow", "rgba(101, 137, 182, 1)");
        $(".thirst-top").css("box-shadow", "rgba(101, 137, 182, 1)");
      }

      if (data.vehicle) {
        $("#stamina").hide("fast");
        $("#hunger").hide("fast");
        $("#thirst").hide("fast");
        $("#hunger-top").show("fast");
        $("#thirst-top").show("fast");
        $(".hud-wrapper").css("bottom", "0.3%");
      } else {
        $("#stamina").show("fast");
        $("#hunger").show("fast");
        $("#thirst").show("fast");
        $("#hunger-top").hide("fast");
        $("#thirst-top").hide("fast");
        $(".hud-wrapper").css("bottom", "0.6%");

        if (data.stamina) {
          $(".stamina-icon").attr("src", "img/stamina.svg");
        }
        if (data.swim) {
          $(".stamina-icon").attr("src", "img/swim.svg");
        }
        if (data.breath) {
          $(".stamina-icon").attr("src", "img/breath.svg");
        }
      }
    } else {
      $(".hud-container").css("display", "none");
    }
  });
});
