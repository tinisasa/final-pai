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

$(function() {
  $(window).scroll(function() {
    var mass = Math.max(8, 48-0.1*$(this).scrollTop()) + 'px';
    console.log(($(this).scrollTop()));
    $('#expandable').css({'font-size': mass, 'line-height': mass});
    if($(this).scrollTop() > 400) {
      $('#expandable').addClass('fadeOutUp');
    };
    if($(this).scrollTop() > 870) {
      $('#blurred-text').addClass('fadeIn centered-and-still');
    }
    if($(this).scrollTop() > 1000) {
      var blurValue = scale($(this).scrollTop(), 1000, 1350, 0, 4);
      $('#blurred-text').css({'filter': 'blur(' + blurValue + 'px)'});
    }
    if($(this).scrollTop() > 1350) {
      $('#blurred-text').addClass('fadeOut');
    }
    if($(this).scrollTop() > 1800) {
      $('#blurred-text').removeClass('centered-and-still');
    }
  });
});

  function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
          tag = "",
          writingTag = false,
          tagOpen = false,
          typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        
          if (writingTag === true) {
              tag += HTML[cursorPosition];
          }

          if (HTML[cursorPosition] === "<") {
              tempTypeSpeed = 0;
              if (tagOpen) {
                  tagOpen = false;
                  writingTag = true;
              } else {
                  tag = "";
                  tagOpen = true;
                  writingTag = true;
                  tag += HTML[cursorPosition];
              }
          }
          if (!writingTag && tagOpen) {
              tag.innerHTML += HTML[cursorPosition];
          }
          if (!writingTag && !tagOpen) {
              if (HTML[cursorPosition] === " ") {
                  tempTypeSpeed = 0;
              }
              else {
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              }
              t.innerHTML += HTML[cursorPosition];
          }
          if (writingTag === true && HTML[cursorPosition] === ">") {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              writingTag = false;
              if (tagOpen) {
                  var newSpan = document.createElement("span");
                  t.appendChild(newSpan);
                  newSpan.innerHTML = tag;
                  tag = newSpan.firstChild;
              }
          }

          cursorPosition += 1;
          if (cursorPosition < HTML.length - 1) {
              setTimeout(type, tempTypeSpeed);
          }

      };

      return {
          type: type
      };
  }

  var typer = document.getElementById('typewriter');

  typewriter = setupTypewriter(typewriter);

  typewriter.type();


  