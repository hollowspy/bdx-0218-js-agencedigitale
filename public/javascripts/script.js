/* Scirpt de transformation de la Navbar  */
$(document).ready(function() {
  $(window).on("scroll", function() {

    if ($(window).scrollTop() >= 10) {
      $(".navbar").addClass("compressed");
      $(".navbar-brand").css("display", "block");
    } else {
      $(".navbar").removeClass("compressed");
      $(".navbar-brand").css("display", "none");
    }


    if ($(window).scrollTop() >window.innerHeight) {
     
      $(".navbar-brand").css("display", "block");
    } else {
     
      $(".navbar-brand").css("display", "none");
    }

  });

   // ajout de slick
  $(".slick").slick({
      dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 981,
        // breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 721,
        // breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
});


/* Script de la serious bar lors du scroll */ 

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


// ///////////////////
// TEXT ANIMATION BLOG
// ///////////////////



// Create the array with the text you want to write
var txt2write = new Array(
    "Wild Not YOU / BLOG.",
    );

// Variables
var speed = 60; // You can set the speed here. + is slower
var index = 0;
text_pos = 0;
var str_length = txt2write[0].length;
var contents, row;

// Function
function type_text() {
    // Init the content with blank
    contents = '';
    row = Math.max(0, index - 9);
    while (row < index) {
        // Each sentence will end with a <br />
        contents += txt2write[row++] + '\r<br />';
    }

    // Write the text
    $( "div.writeit" ).html( contents + txt2write[index].substring(0, text_pos) + "<span class='after'>_</span>" );

    if (text_pos++ == str_length) {
        text_pos = 0;
        index++;
        if (index != txt2write.length) {
            str_length = txt2write[index].length;
            setTimeout("type_text()", 800);
        }
    } else {
        setTimeout("type_text()", speed);
    }

}

type_text();