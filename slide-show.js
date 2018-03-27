(function(){
    var ssCurrent = 0;
    var ssPrevSlide;
    var ssSlides = document.querySelectorAll('#slide-show .slide');
    var ssSlideWidth = '640';

    function ShowNextSlide(){
        ssPrevSlide = ssCurrent;
        ssCurrent = (ssCurrent + 1 + ssSlides.length) % ssSlides.length;
        ssSlides[ssCurrent].classList.add('show');
        ssSlides[ssPrevSlide].style.zIndex = '7777';
        ssSlides[ssCurrent].style.zIndex = '8888';
        //ssSlides[ssPrevSlide].classList.remove('show');
        animate('left');
    }
    function ShowPrevSlide(){
        ssPrevSlide = ssCurrent;
        ssCurrent = (ssCurrent - 1 + ssSlides.length) % ssSlides.length;
        ssSlides[ssCurrent].classList.add('show');
        ssSlides[ssPrevSlide].style.zIndex = '7777';
        ssSlides[ssCurrent].style.zIndex = '8888';
        //ssSlides[ssPrevSlide].classList.remove('show');
        animate('right');
    }

    function animate(direction){
        var left = ssSlideWidth;
        if (direction == 'right'){
            left = left * -1;
        }
        ssSlides[ssCurrent].style.left = left + 'px';
        var interval = setInterval(function(){
            if (direction == 'right'){
                left = left + 20;
            } else {
                left = left - 20;
            }
            if (left == 0){
                clearInterval(interval);
                ssSlides[ssPrevSlide].classList.remove('show');
            }
            ssSlides[ssCurrent].style.left = left + 'px';
        },5)
    }

    document.getElementById('next').onclick = function(){
        ShowNextSlide();
    }
    document.getElementById('prev').onclick = function(){
        ShowPrevSlide();
    }
}())

