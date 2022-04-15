var slideIndex = 0;
      showSlides();
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // Change image every 2 seconds
      }

      window.onscroll = function () {
        scrollFunction();
      };
  


      // function scrollFunction() {
      //   if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      //     document.getElementById("sectionid").style.marginTop = "0px";
      //     document.getElementById("sectionid").style.top = "0px";
      //     document.getElementById("sectionid").style.background = "#ffffff";
      //     document.getElementById("sectionid").style.position = "fixed";
      //     document.getElementById("sectionid").style.width = "100%";
      //     document.getElementById("sectionid").style.height = "93px";
      //     document.getElementById("sectionid").style.visibility = "visible";
      //   } else {
      //     document.getElementById("sectionid").style.marginTop = "0px";
      //     document.getElementById("sectionid").style.paddingBottom = "30px";
      //     document.getElementById("sectionid").style.background = "#ffffff";
      //   }
      // }