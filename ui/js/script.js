$(() => {
  window.addEventListener('message', (e) => {
    const data = e.data;
    if (!data.pauseMenuOn) {
      $('.hud-container').show();

      $('.health').css('width', data.health + '%');
      $('.armor').css('width', data.armor + '%');
      $('.hunger').css('height', data.hunger + '%');
      $('.hunger-top').css('width', data.hunger + '%');
      $('.thirst').css('height', data.thirst + '%');
      $('.thirst-top').css('width', data.thirst + '%');
      $('.stamina').css('height', data.stamina + '%');

      if (data.action === 'ui') {
        if (data.ui) {
          $('.hud-menu').fadeIn('fast');

          $('#close').on('click', function () {
            $.post('http://dlrms_hud/dlrms_hud:close', JSON.stringify({}));
          });

          $(document).keyup(function (e) {
            if (e.key === 'Escape') {
              $.post('http://dlrms_hud/dlrms_hud:close', JSON.stringify({}));
            }
          });

          $('#healthchk').on('change', function () {
            this.checked ? $('#health').show('fast') : $('#health').hide('fast');
          });
          $('#armorchk').on('change', function () {
            this.checked ? $('#armor').show('fast') : $('#armor').hide('fast');
          });
          $('#hungerchk').on('change', function () {
            this.checked ? $('#hunger').show('fast') : $('#hunger').hide('fast');
          });
          $('#thirstchk').on('change', function () {
            this.checked ? $('#thirst').show('fast') : $('#thirst').hide('fast');
          });
          $('#hungerinchk').on('change', function () {
            this.checked ? $('#hunger-top').show('fast') : $('#hunger-top').hide('fast');
          });
          $('#thirstinchk').on('change', function () {
            this.checked ? $('#thirst-top').show('fast') : $('#thirst-top').hide('fast');
          });
          $('#staminachk').on('change', function () {
            this.checked ? $('#stamina').show('fast') : $('#stamina').hide('fast');
          });
        } else {
          $('.hud-menu').fadeOut('fast');
        }
      } else if (data.action === 'hud') {
        if (data.health <= data.healthAlert) {
          $('.health-alert').addClass('blink-anim');
          $('.health-alert').css('display', 'block');
          $('.health').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
        } else {
          $('.health-alert').removeClass('blink-anim');
          $('.health-alert').css('display', 'none');
          $('.health').css('box-shadow', '0px 0px 4px rgba(65, 155, 53, 1)');
        }
        if (data.armor <= data.armorAlert && !data.armor == 0) {
          $('.armor-alert').addClass('blink-anim');
          $('.armor-alert').css('display', 'block');
          $('.armor').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
        } else {
          $('.armor-alert').removeClass('blink-anim');
          $('.armor-alert').css('display', 'none');
          $('.armor').css('box-shadow', '0px 0px 4px rgba(67, 109, 175, 1)');
        }
        if (data.hunger <= data.hungerAlert) {
          $('.hunger-alert').addClass('blink-anim');
          $('.hunger-alert').css('display', 'block');
          $('.hunger-top').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
          $('.hunger').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
        } else {
          $('.hunger-alert').removeClass('blink-anim');
          $('.hunger-alert').css('display', 'none');
          $('.hunger-top').css('box-shadow', '0px 0px 4px rgba(236, 178, 3, 1)');
          $('.hunger').css('box-shadow', '0px 0px 4px rgba(236, 178, 3, 1)');
        }
        if (data.thirst <= data.thirstAlert) {
          $('.thirst-alert').addClass('blink-anim');
          $('.thirst-alert').css('display', 'block');
          $('.thirst-top').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
          $('.thirst').css('box-shadow', '0 0 0 rgba(0,0,0,1)');
        } else {
          $('.thirst-alert').removeClass('blink-anim');
          $('.thirst-alert').css('display', 'none');
          $('.thirst-top').css('box-shadow', 'rgba(101, 137, 182, 1)');
          $('.thirst').css('box-shadow', 'rgba(101, 137, 182, 1)');
        }

        if (data.vehicle) {
          $('#hts').hide('fast');
          $('#hud-top').show('fast', function () {
            $('#hud-top').css('display', 'flex');
          });
        } else {
          $('#hts').show('fast');
          $('#hud-top').hide('fast');

          if (data.stamina) {
            $('.stamina-icon').attr('src', 'img/stamina.svg');
          }
          if (data.swim) {
            $('.stamina-icon').attr('src', 'img/swim.svg');
          }
          if (data.breath) {
            $('.stamina-icon').attr('src', 'img/breath.svg');
          }
        }
      }
    } else {
      $('.hud-container').hide();
    }
  });
});
