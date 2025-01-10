(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


   //gallary  ith cncted alla on cheynm ath @anandhu
   
        const marquee = document.querySelector('.marquee');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let scrollAmount = 0;
        const scrollStep = 250;


        nextBtn.addEventListener('click', () => {
        scrollAmount += scrollStep;
        marquee.style.transform = `translateX(-${scrollAmount}px)`;
        });


        prevBtn.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            marquee.style.transform = `translateX(-${scrollAmount}px)`;
        }
        });


        function openModal(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = "block";
        modalImage.src = imageSrc;
        }


        function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = "none";
        }
//gallary end


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    document.addEventListener("DOMContentLoaded", () => {
        const carousel = document.querySelector(".program-carousel");
        const boxes = [...document.querySelectorAll(".program-box")];
        boxes.forEach((box) => {
            const clone = box.cloneNode(true);
            carousel.appendChild(clone);
        });
    });



})(jQuery);

