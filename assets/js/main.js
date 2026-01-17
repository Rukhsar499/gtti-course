
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }

// course edit

  // document.querySelectorAll('.course-card').forEach(card => {
  //   card.addEventListener('click', function () {

  //     // sab cards se active hatao
  //     document.querySelectorAll('.course-card').forEach(c => {
  //       c.classList.remove('active');
  //     });

  //     // jispe click hua usko active banao
  //     this.classList.add('active');
  //   });
  // });







 



