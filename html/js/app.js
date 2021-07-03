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
        $(".health-alert").css("display", "block");
        $(".health-alert").addClass("blink-anim");
        $(".health").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".health-alert").css("display", "none");
        $(".health-alert").removeClass("blink-anim");
        $(".health").css("box-shadow", "0px 0px 4px rgba(65, 155, 53, 1)");
      }
      if (item.hunger <= item.hungerAlert) {
        $(".hunger-alert").css("display", "block");
        $(".hunger-alert").addClass("blink-anim");
        $(".hunger").css("box-shadow", "0 0 0 rgba(0,0,0,1)");
      } else {
        $(".hunger-alert").css("display", "none");
        $(".hunger-alert").removeClass("blink-anim");
        $(".hunger").css("box-shadow", "0px 0px 4px rgba(210, 155, 67, 1)");
      }
      if (item.thirst <= item.thirstAlert) {
        $(".thirst-alert").css("display", "block");
        $(".thirst-alert").addClass("blink-anim");
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

        if (item.swim) {
          $(".stamina-icon").attr("src", "img/swim.svg");
        } else if (item.breath) {
          $(".stamina-icon").attr("src", "img/breath.svg");
        } else {
          $(".stamina-icon").attr("src", "img/stamina.svg");
        }
      }
    } else {
      $(".hud-container").css("display", "none");
    }
  });
});
