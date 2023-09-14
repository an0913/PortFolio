$(function() {
    const elements = $('.txt');
    const duration = 600;
    const interval = 4000;
    let currentIndex = 0;

    function showNextElement() {
        const currentElement = elements.eq(currentIndex);
        const nextIndex = (currentIndex + 1) % elements.length;
        const nextElement = elements.eq(nextIndex);

        currentElement.fadeOut(duration, function() {
            nextElement.fadeIn(duration);
            currentIndex = nextIndex;
        });
    }

    elements.hide();
    elements.eq(0).fadeIn(duration);
    setInterval(showNextElement, interval);

    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
      $('#ws').click(function(){
         $('.grid').isotope({ filter:'.ws' })
      })
      $('#all').click(function(){
        $('.grid').isotope({ filter:'.grid-item' })
     })
     $('#mo').click(function(){
        $('.grid').isotope({ filter:'.mo' })
     })
     $('#wd').click(function(){
        $('.grid').isotope({ filter:'.wd' })
     })
     $('#ed').click(function(){
        $('.grid').isotope({ filter:'.ed' })
     })




     $(function() {
        let isAnimationStarted = false;
        const scrollYThreshold = 2150;
      
        $(window).scroll(function() {
          const scrollY = $(this).scrollTop();
      
          if (scrollY >= scrollYThreshold && !isAnimationStarted) {
            isAnimationStarted = true;
            animateSkills();
          } else if (scrollY < scrollYThreshold) {
            isAnimationStarted = false;
          }
        });
      
        function animateSkills() {
          // Reset animation
          $('.bar_wrap').css('width', '0');
      
          // html animation
          $('.html .bar_wrap').animate({ width: '95%' }, 2000);
      
          // css animation
          $('.css .bar_wrap').delay(500).animate({ width: '95%' }, 2000);
      
          // js animation
          $('.js .bar_wrap').delay(1000).animate({ width: '80%' }, 2000);
      
          // jquery animation
          $('.jquery .bar_wrap').delay(1500).animate({ width: '85%' }, 2000);
      
          // figma animation
          $('.figma .bar_wrap').delay(2000).animate({ width: '100%' }, 2000);
      
          // ps animation
          $('.ps .bar_wrap').delay(2500).animate({ width: '90%' }, 2000);
        }
      });
      
      

      $('#works .inner .gnb li').click(function(){
        $('#works .inner .gnb li').removeClass('on')
        $(this).addClass('on')
      })


      $('header .inner .gnb li').click(function(){
        let num =  $(this).index()
        console.log(num)

        if(num == 0){
            $('body,html').animate({'scrollTop':0},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }else if(num == 1){
            $('body,html').animate({'scrollTop':1342},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
          else if(num == 2){
            $('body,html').animate({'scrollTop':4864},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
          else if(num == 3){
            $('body,html').animate({'scrollTop':7333},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
        //   else if(num == 4){
        //     $('body,html').animate({'scrollTop':4320},800)
        //     $('header .gnb li').removeClass('on')
        //     $(this).addClass('on')
        //   }
         
    
        


    })
    $(window).scroll(function(){
        let num = $(document).scrollTop()
  
        if(num > 0 && num < 1340){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(0).addClass('on')
        }else if(num > 1335 && num < 4864){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(1).addClass('on') 
        }
        else if(num > 4862 && num < 7330){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(2).addClass('on') 
        }
        else if(num > 7331){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(3).addClass('on') 
        }
       
  
      })

      $('#works .inner .grid .pic a').lightBox({
        overlayBgColor:'#111',
        overlayOpacity:0.8,
        containerResizeSpeed:500,
         imageLoading:'./images/lightbox-ico-loading.gif',//이미지 로딩시
        imageBtnClose:'./images/close.png',//이미지 닫기 버튼
        // imageBtnPrev:'./images/lightbox-btn-prev.gif',//이미지 이전 버튼
        // imageBtnNext:'./images/lightbox-btn-next.gif',//이미지 다음 버튼
        txtImage:'Design',

    })
      
});