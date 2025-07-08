(function ($) {
  "use strict";

  //   offcanvas menu js offcanvas-overlay
  $(".offcanvas-btn").on("click", function () {
    $(".offcanvas-menu, .offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-close, .offcanvas-overlay ").on("click", function () {
    $(".offcanvas-menu, .offcanvas-overlay").removeClass("active");
  });

  /* Data Background js */
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // sidebar toggler 
  $(".bars").click(function () {

    // টগল sidebar_active ক্লাস
    $("aside.sidebar").toggleClass("sidebar_active");

    // টগল আইকন (fa-bars থেকে fa-times এবং বিপরীতভাবে)
    const icon = $(this).find(".navbar-toggler i");
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }
  });


  // mobile menu toggle 
  // Toggle mobile menu
    $(".nav-toggle").on("click", function () {
      $(".nav-menu").toggleClass("active");
     
    });
   

    // Accordion-style dropdown menu
    $(".menu-item.dropdown .menu-link").on("click", function (e) {
      e.preventDefault();
      const parent = $(this).parent();
      const isOpen = parent.hasClass("open");

      // Close all other dropdowns
      $(".menu-item.dropdown").not(parent).removeClass("open").find(".dropdown-menu").slideUp(300);

      // Toggle the clicked dropdown
      parent.toggleClass("open");
      parent.find(".dropdown-menu").slideToggle(300);
    });
  //   // fixed menu js
  //   $(window).on("scroll", function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll < 120) {
  //       $("#sticky-header").removeClass("sticky-menu");
  //       $("#header-fixed-height").removeClass("active-height");
  //     } else {
  //       $("#sticky-header").addClass("sticky-menu");
  //       $("#header-fixed-height").addClass("active-height");
  //     }
  //   });

  //   // // Magnific popup js
  //   $(".parent-container").magnificPopup({
  //     delegate: ".gallery-popup",
  //     type: "image",
  //     gallery: {
  //       enabled: true,
  //     },
  //   });

  //   // video popup js
  //   $(".vidplay").magnificPopup({
  //     type: "iframe",
  //     iframe: {
  //       markup:
  //         '<div class="mfp-iframe-scaler">' +
  //         '<div class="mfp-close"></div>' +
  //         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //         "</div>",
  //       patterns: {
  //         youtube: {
  //           index: "youtube.com/",
  //           id: "v=",
  //           src: "https://www.youtube.com/embed/%id%?autoplay=1",
  //         },
  //       },
  //       srcAction: "iframe_src",
  //     },
  //   });

  //   // Project horizontal scroll js
  //   let horizontalSection = document.querySelector(".horizontal-scroll");
  //   if (horizontalSection) {
  //     gsap.to(".horizontal-scroll", {
  //       x: () => horizontalSection.scrollWidth * -1,
  //       xPercent: 100,
  //       scrollTrigger: {
  //         trigger: ".horizontal-scroll",
  //         start: "top 40%",
  //         end: "+=2000px",
  //         pin: ".ep-project-section-two",
  //         scrub: 1.4,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   }

  //   // simpleParallax js
  //   var image = document.getElementsByClassName("imageParallax");
  //   new simpleParallax(image, {
  //     delay: 1,
  //     transition: "cubic-bezier(0,0,0,1)",
  //     scale: 1.3,
  //   });

  //   // split text animation
  //   if ($(".split-text").length > 0) {
  //     let st = $(".split-text");
  //     if (st.length == 0) return;
  //     gsap.registerPlugin(SplitText);
  //     st.each(function (index, el) {
  //       el.split = new SplitText(el, {
  //         type: "lines,words,chars",
  //         linesClass: "tp-split-line",
  //       });
  //       gsap.set(el, {
  //         perspective: 400,
  //       });
  //       if ($(el).hasClass("right")) {
  //         gsap.set(el.split.chars, {
  //           opacity: 0,
  //           x: "50",
  //           ease: "Back.easeOut",
  //         });
  //       }
  //       if ($(el).hasClass("left")) {
  //         gsap.set(el.split.chars, {
  //           opacity: 0,
  //           x: "-50",
  //           ease: "circ.out",
  //         });
  //       }
  //       if ($(el).hasClass("up")) {
  //         gsap.set(el.split.chars, {
  //           opacity: 0,
  //           y: "80",
  //           ease: "circ.out",
  //         });
  //       }
  //       if ($(el).hasClass("down")) {
  //         gsap.set(el.split.chars, {
  //           opacity: 0,
  //           y: "-80",
  //           ease: "circ.out",
  //         });
  //       }
  //       el.anim = gsap.to(el.split.chars, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 90%",
  //         },
  //         x: "0",
  //         y: "0",
  //         rotateX: "0",
  //         scale: 1,
  //         opacity: 1,
  //         duration: 0.4,
  //         stagger: 0.02,
  //       });
  //     });
  //   }

    // // banner slider js
    $(".banner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      // prevArrow: `<i class="fas arrow arrow-prev fa-arrow-left"></i>`,
      // nextArrow: `<i class="fas arrow arrow-next fa-arrow-right"></i>`,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

  //   // // Service two slider js
  //   $(".service-slider-two").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     dots: true,
  //     infinite: true,
  //     arrows: false,
  //     speed: 500,
  //     prevArrow: `<i class="fas arrow arrow-prev fa-arrow-left"></i>`,
  //     nextArrow: `<i class="fas arrow arrow-next fa-arrow-right"></i>`,
  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });

  //   // // Testimonial slider js
  //   $(".testimonial-slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     dots: false,
  //     infinite: true,
  //     arrows: false,
  //     speed: 500,
  //   });

  //   // // Testimonial two slider js
  //   $(".testimonial-two-slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     dots: true,
  //     infinite: true,
  //     arrows: false,
  //     speed: 500,
  //   });

  //   // // Blog slider js
  //   $(".blog-slider").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     dots: false,
  //     infinite: true,
  //     arrows: true,
  //     speed: 500,
  //     prevArrow: `<i class="fa-solid arrows arrow-prev fa-arrow-left"></i>`,
  //     nextArrow: `<i class="fa-solid arrows arrow-next fa-arrow-right"></i>`,
  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   // // Image reveal js
  //   let revealContainers = document.querySelectorAll(".reveal");
  //   revealContainers.forEach((container) => {
  //     let image = container.querySelector("img");
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         toggleActions: "play none none none",
  //       },
  //     });

  //     tl.set(container, {
  //       autoAlpha: 1,
  //     });

  //     if (container.classList.contains("zoom-out")) {
  //       // Zoom-out effect
  //       tl.from(image, 1.5, {
  //         scale: 1.4,
  //         ease: Power2.out,
  //       });
  //     } else if (
  //       container.classList.contains("left") ||
  //       container.classList.contains("right")
  //     ) {
  //       let xPercent = container.classList.contains("left") ? -100 : 100;
  //       tl.from(container, 1.5, {
  //         xPercent,
  //         ease: Power2.out,
  //       });
  //       tl.from(image, 1.5, {
  //         xPercent: -xPercent,
  //         scale: 1,
  //         delay: -1.5,
  //         ease: Power2.out,
  //       });
  //     }
  //   });

  //   // /* Odometer Active js */
  //   $(".odometer").appear(function (e) {
  //     var odo = $(".odometer");
  //     odo.each(function () {
  //       var countNumber = $(this).attr("data-count");
  //       $(this).html(countNumber);
  //     });
  //   });

  //   // Team move and active js
  //   var team_item = gsap.utils.toArray(".team-item");
  //   let hover_img = gsap.utils.toArray(".hover-image");

  //   // Function to move the service image on mouse move
  //   function ServiceImageMove(event, item) {
  //     const contentBox = item.getBoundingClientRect();
  //     const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
  //     const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

  //     hover_img.forEach((img) => {
  //       gsap.to(img, {
  //         x: dx,
  //         y: dy,
  //       });
  //     });
  //   }

  //   // Add hover effect only for screens larger than 768px
  //   if (window.innerWidth > 767) {
  //     team_item.forEach((item, i) => {
  //       item.addEventListener("mousemove", (event) => {
  //         ServiceImageMove(event, item);
  //       });

  //       item.addEventListener("mouseleave", () => {
  //         hover_img.forEach((img) => {
  //           gsap.to(img, {
  //             x: 0,
  //             y: 0,
  //           });
  //         });
  //       });
  //     });

  //     // Add active team class on hover
  //     $(".team-item").hover(function () {
  //       $(".team-item").removeClass("active-team");
  //       $(this).addClass("active-team");
  //     });
  //   }

  //   // back to top js
  //   let btn = $(".scroll-to-top");

  //   $(window).scroll(function () {
  //     btn.toggleClass("show", $(window).scrollTop() > 300);
  //   });

  //   btn.click(function (e) {
  //     e.preventDefault();
  //     if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  //       $("html").animate(
  //         {
  //           scrollTop: 0,
  //         },
  //         1000
  //       );
  //     } else {
  //       $("html, body").animate(
  //         {
  //           scrollTop: 0,
  //         },
  //         0
  //       );
  //     }
  //   });

  //   // Mobile menu js start
  //   $(".mobile-topbar .bars").on("click", function () {
  //     $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  //     return false;
  //   });

  //   $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
  //     $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  //   });

  //   $(".sub-mobile-menu ul").hide();
  //   $(".sub-mobile-menu a").on("click", function () {
  //     $(".sub-mobile-menu ul").not($(this).next("ul")).slideUp(300);
  //     $(".sub-mobile-menu a i")
  //       .not($(this).find("i"))
  //       .removeClass("fa-chevron-up")
  //       .addClass("fa-chevron-down");
  //     $(this).next("ul").slideToggle(300);
  //     $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  //   });

  //   // ===================================
  //   // ===================================
  //   // ===================================
  //   // Save scroll position before page unload
  //   window.addEventListener("beforeunload", function () {
  //     localStorage.setItem("scrollPosition", window.scrollY);
  //   });

  //   // Restore scroll position on page load
  //   window.addEventListener("load", function () {
  //     if (localStorage.getItem("scrollPosition") !== null) {
  //       window.scrollTo(0, localStorage.getItem("scrollPosition"));
  //     }
  //   });

  // ===================================
  // ===================================
  // ===================================
})(jQuery);
