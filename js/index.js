// slider

var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
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


  