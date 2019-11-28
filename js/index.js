// slider

var rangeSlider = function () {
  var slider = $('.range-slider'),
    range = $('.range-slider__range'),
    value = $('.range-slider__value');

  slider.each(function () {

    value.each(function () {
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function () {
      $(this).next(value).html(this.value);
      console.log(this.value.toString());
      if ($(this).is($('#text-change-input'))) {
        console.log('cambio tamaño')
        $('#text-change').css('font-size', this.value.toString() + "px");
      }
      else if ($(this).is($('#luminance-change-input'))) {
        console.log('cambio luminancia')
        $('#luminance-change').css('color', "hsl(0, 0%, " + this.value.toString() + "%");
      }
      else if ($(this).is($('#hue-change-input'))) {
        console.log('cambio matiz')
        $('#hue-change').css('color', "hsl(" + this.value + ", 50%, 80%");
      }
      $(this).html(this.value);
    });
  });
};

rangeSlider();

// expandable text

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

$(function () {
  $('#container').addClass('fadeIn');
  $(window).scrollTop(0);
  $(window).scroll(function () {
    const zoomValue = scale($(this).scrollTop(), 0, 500, 1, 0);
    $('#expandable').css({ 'zoom': zoomValue });
    if ($(this).scrollTop() <= 100) {
      $('#expandable').css({ 'opacity': 1 });
    };
    if ($(this).scrollTop() > 100) {
      const opacityValue = scale($(this).scrollTop(), 100, 300, 1, 0);
      $('#expandable').css({ 'opacity': opacityValue });
      $('#blurred-text').css({ 'opacity': 0 });
    };
    if ($(this).scrollTop() > 350) {
      const opacityValue = scale($(this).scrollTop(), 350, 400, 0, 1);
      $('#blurred-text').addClass('centered-and-still');
      $('#blurred-text').css({ 'opacity': opacityValue });
    }
    if ($(this).scrollTop() > 600) {
      const blurValue = scale($(this).scrollTop(), 600, 800, 0, 4);
      $('#blurred-text').css({ 'filter': 'blur(' + blurValue + 'px)' });
    }
    if ($(this).scrollTop() > 800) {
      const opacityValue = scale($(this).scrollTop(), 800, 1000, 1, 0);
      $('#blurred-text').css({ 'opacity': opacityValue });
      $('#levelAdjustments').css({ 'opacity': 0 });
    }
    if ($(this).scrollTop() > 1000) {
      $('#blurred-text').removeClass('centered-and-still');
      const opacityValue = scale($(this).scrollTop(), 1000, 1200, 0, 1);
      $('#levelAdjustments').css({ 'opacity': opacityValue });

    }
    if ($(this).scrollTop() > 1800) {
      // $('#blurred-text').removeClass('centered-and-still');
    }
  });
});

function hideMeAndShowNext(elem) {
  var rowParent = $(elem).parentsUntil(".centered-and-still").parent();
  rowParent.addClass('fadeOut');

  rowParent.next().css({ 'display': 'block' });

  rowParent.css({ 'display': 'none' });

  rowParent.next().addClass('fadeIn');
}