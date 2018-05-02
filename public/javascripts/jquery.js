/* Scirpt de transformation de la Navbar  */
$(document).ready(function () {
  $(window).on("scroll", function () {

    if ($(window).scrollTop() >= 10) {
      $(".navbar").addClass("compressed");
      $(".navbar-brand").css("display", "block");
    } else {
      $(".navbar").removeClass("compressed");
      $(".navbar-brand").css("display", "none");
    }


    if ($(window).scrollTop() > window.innerHeight) {

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



  /* Script Animation BLOG */

  // Create the array with the text you want to write


  /* Script de la serious bar lors du scroll */

  var a = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
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
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }

  });

  // Url image offre emploi

  $(".search logo_entreprise").each(function () {
    let url = $(this).attr('src');
    console.log(url);
  })



  // //////////////////////
  // PARTIE ADMINISTRATION
  // //////////////////////

  $(".links").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(".divs:visible").hide();
    $("#" + $(this).attr("data-showdiv")).show();
  });

  // remplir la modal dynamiquement
  $('.modifier').click(function (e) {
    e.preventDefault;
    let idModal = $(this).data('target');
    idModal = idModal.substring(1);
    $(this).parents().prevAll('.modal').attr('id', idModal);

    let idTable = $(this).data('rowId');
    $('.modal-id form .form-group').remove();

    $(this).parent().prevAll('.d-table-cell').each(function () {
      let label = $(this).data('label');
      let Txt = $(this).text();
      let name = $(this).data('name');

      if ($(this).data('label') === 'Contenu') {
        let textArea = '<div class="form-group"><label>' +
          label + '</label><textarea class="form-control mceEditor" name="' + name + '">'+Txt+'</textarea></div>';
        $('.modal-id form').prepend(textArea);
      }else if($(this).data('type') === 'file'){
        let upload = '<div class="form-group"><label>' +
            label + '</label><input class="form-control" value="' + Txt +
            '" name="' + name + '" type="file"></input></div>';
        $('.modal-id form').prepend(upload);
    }
      else{
        let input = '<div class="form-group"><label>' + label + '</label><input class="form-control" value="' + Txt + '" name="' + name + '" type="text"></input></div>';
        $('.modal-id form').prepend(input);
      }

    });

    if ($(this).hasClass('bar')) {
      let action = '/admin/bar/' + idTable + '?_method=PUT';
      $('.modal-id form').attr('action', action);
    } else if ($(this).hasClass('missions')) {
      let action = '/admin/missions/' + idTable + '?_method=PUT';
      $('.modal-id form').attr('action', action);
    } else if ($(this).hasClass('collab')) {
      let action = '/admin/collab/' + idTable + '?_method=PUT';
      $('.modal-id form').attr('action', action);
    } else if ($(this).hasClass('contact')) {
      let action = '/admin/contact/' + idTable + '?_method=PUT';
      $('.modal-id form').attr('action', action);
    } else if ($(this).hasClass('blog')) {
      let action = '/admin/blog/' + idTable + '?_method=PUT';
      $('.modal-id form').attr('action', action);
    }
    tinymce.init({
      mode : "specific_textareas",
      editor_selector : "mceEditor"
  });

    $(idModal).modal('show');

  })

}); //fin document.ready
