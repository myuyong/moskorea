$(function(){
    let deviceWidth=$(window).width();
    //만약 접속한 브라우저의 가로길이가 1400 미만이면 메뉴는 아코디언 메뉴

    //태블릿과 모바일에서 메뉴 버튼을 클릭하면 내비게이션이 오른쪽에서 나타남
    $(".menubtn .MB").click(function(){
        $('.menu').animate({'top':0});
    });
    $(".menu .CB").click(function(){
        $('.menu').animate({'top':'-100vh'});
    });
    if(deviceWidth<1400){
        $("nav > ul > li > a").click(function(e){
            e.preventDefault();
            //만약 클릭한 메뉴에 active클래스가 없다면
            if($(this).attr("class") !="active"){
                //모든 메뉴에서 active제거
                $("nav > ul > li > a").removeClass("active");
                //마이너스 avtive 추가
                $("nav > ul > li > a .minus").removeClass(" active");
                //클릭한 메뉴만 active설정
                $(this).addClass("active");
                //모든 서브메뉴는 들어감
                $("nav .sub").slideUp();
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 나옴
                $(this).next().slideDown();
            //클릭한 메뉴에 active 클래스가 설정되어 있다면 
            }else{
                //클릭한 메뉴에서 active 제거 
                $(this).removeClass("active");
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 들어감
                $(this).next().slideUp();
            };
        });
        //접속한 기기의 가로길이가 1400px이상이면 주메뉴에 마우스 오버했을때 서브메뉴와 서브메뉴배경이 나타나고, 마우스 아웃했을 때 서브메뉴와 서브메뉴배경이 사라짐.
    }else{
        $("nav > ul > li > a").mouseenter(function(){
            $(".sub").stop().slideDown();
            $(".sub_bg").stop().slideDown();
        });
        $('header').mouseleave(function(){
            $('.sub').stop().slideUp();
            $('.sub_bg').stop().slideUp()
        })
    }
    $('.ep1').show();
    $('.s2 .centerBox .tab_menu div a').click(function(e){
        e.preventDefault();
        let idx = $(this).parent().index();
        console.log(idx);
        $('.s2 .centerBox .tab_menu div a').removeClass('active2');
        $(this).addClass('active2');
        $('.s2 .centerBox .swiper').hide();
        $('.s2 .centerBox .swiper').eq(idx).show();
    });
    //  $(function(){
//     $('.tab_title a').click(function(e){
//         e.preventDefault();
//         let idx=$(this).index();
//         $('.tab_title a').removeClass('active');
//         $(this).addClass('active');
//         $('.tab_con div').hide();
//         $('.tab_con div').eq(idx).fadeIn();
//     });
// }); 
    const progressCircle1 = document.querySelector(".mySwiper1 .autoplay-progress svg");
        const progressContent1 = document.querySelector(".mySwiper1 .autoplay-progress span");
        var swiper = new Swiper(".mySwiper1", {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          observeParents :true,
          loopedSlides:1,
          autoplay: {
            delay:  10000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle1.style.setProperty("--progress", 1 - progress);
              progressContent1.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
    const progressCircle2 = document.querySelector(".mySwiper2 .autoplay-progress svg");
        const progressContent2 = document.querySelector(".mySwiper2 .autoplay-progress span");
        var swiper = new Swiper(".mySwiper2", {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          observeParents :true,
          loopedSlides:1,
          autoplay: {
            delay:  10000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle2.style.setProperty("--progress", 1 - progress);
              progressContent2.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
    const progressCircle3 = document.querySelector(".mySwiper3 .autoplay-progress svg");
        const progressContent3 = document.querySelector(".mySwiper3 .autoplay-progress span");
        var swiper = new Swiper(".mySwiper3", {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          observeParents :true,
          loopedSlides:1,
          autoplay: {
            delay:  10000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle3.style.setProperty("--progress", 1 - progress);
              progressContent3.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
    const progressCircle4 = document.querySelector(".mySwiper4 .autoplay-progress svg");
        const progressContent4 = document.querySelector(".mySwiper4 .autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          observeParents :true,
          loopedSlides:1,
          autoplay: {
            delay:  10000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle4.style.setProperty("--progress", 1 - progress);
              progressContent4.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
});

