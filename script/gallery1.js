$(document).on('ready', function() {
      $(".regular").slick({
        slidesToShow: 3,
        // initialSlide: 2,
        centerMode: true,
        centerPadding: "10%",
        arrows: false,
        dots: false,
        infinite: true,
        cssEase: 'linear',

        responsive: [
          {
            breakpoint: 1199,
            settings: {
              centerPadding: "10%",
            }
          },
          {
            breakpoint: 699,
            settings: {
              slidesToShow: 1,
              centerPadding: "18%",
            }
          },
        ]
      });
    });