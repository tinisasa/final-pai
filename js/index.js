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
      if ($(this).siblings(":last").is($('#text-change'))) {
        console.log('cambio tamaño')
        $('#text-change').css('font-size', this.value.toString() + "px");
      }
      else if ($(this).siblings(":last").is($('#luminance-change'))) {
        console.log('cambio luminancia')
        $('#luminance-change').css('color', "hsl(0, 0%, " + this.value.toString() + "%");
      }
      else if ($(this).siblings(":last").is($('#hue-change'))) {
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
  $(window).scroll(function () {
    var mass = Math.max(8, 48 - 0.1 * $(this).scrollTop()) + 'px';
    console.log(($(this).scrollTop()));
    $('#expandable').css({ 'font-size': mass, 'line-height': mass });
    if ($(this).scrollTop() > 400) {
      $('#expandable').addClass('fadeOutUp');
    };
    if ($(this).scrollTop() > 870) {
      $('#blurred-text').addClass('fadeIn centered-and-still');
    }
    if ($(this).scrollTop() > 1000) {
      var blurValue = scale($(this).scrollTop(), 1000, 1350, 0, 4);
      $('#blurred-text').css({ 'filter': 'blur(' + blurValue + 'px)' });
    }
    if ($(this).scrollTop() > 1350) {
      $('#blurred-text').addClass('fadeOut');
    }
    if ($(this).scrollTop() > 1800) {
      $('#blurred-text').removeClass('centered-and-still');
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