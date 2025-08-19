// var carouselWidth = $(`.carousel-inner`)[0].scrollWidth;
// var cardWidth = $(`.carousel-item`).width();

// var scrollPosition = 0;
// $(`.carousel-control-next`).on(`click`, function () {
//     if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
//         console.log("scrollPosition = " +scrollPosition);
//         console.log("carouselWidth = " +carouselWidth);
//         console.log("cardWidth = " +cardWidth);
//         console.log("next");
//         scrollPosition = scrollPosition + cardWidth;
//         $(`.carousel-inner`).animate({ scrollLeft: scrollPosition }, 600);
//     }
// });
// $(`.carousel-control-prev`).on(`click`, function () {
//     if (scrollPosition > 0) {
//         console.log("prev");
//         scrollPosition = scrollPosition - cardWidth;
//         $(`.carousel-inner`).animate({ scrollLeft: scrollPosition }, 600);
//     }
// });
$('.multiple-card-slider .carousel').each(function(){
  var currentCarouselId = '#' + $(this).attr('id');
  const multipleItemCarousel = document.querySelector(currentCarouselId);

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
    wrap: false
})
    var carouselWidth = $(currentCarouselId+" .carousel-inner")[0].scrollWidth;
    var cardWidth = $(currentCarouselId +" .carousel-item").width();
    var scrollPosition = 0;

    // next button

    $(currentCarouselId +" .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth ) {//4 = the number of card displaied +1 
        scrollPosition += cardWidth;
        $(currentCarouselId +" .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          150
        );
      }
    });

    // prev button
    $(currentCarouselId +" .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(currentCarouselId+" .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          150 ///???? why 600 ??
        );
      }
    });
  });
  