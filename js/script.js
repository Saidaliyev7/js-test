// $(document).ready(function(){
//     $(document).scroll(function () {
//         $(".nese").each(function() {
            
           
//             if($(this).offset().top +$(this).innerHeight() >=$(window).scrollTop() && $(this).offset().top <=$(window).scrollTop()+ $(window).height() ) {
//                 $(this).addClass("active")
               
//             }
//             else {
//                 $(this).removeClass("active") 
//             }
//            //console.log()
//         })
        

//     })
// })

$(document).ready(function(){
    $(window).scroll(function () {
        var i=0;
        $("section").each(function() {
            
           

            if($(this).offset().top +$(this).outerHeight()  >=$(window).scrollTop() && $(this).offset().top <=$(window).scrollTop()+ $(window).height() ) {
              $(".navbar").find('a[href="#'+$(this).attr('class')+'"]').addClass("actv")
                
                $(this).addClass("active")
                
            }
            else {
                $(".navbar").find('a[href="#'+$(this).attr('class')+'"]').removeClass("actv")
                $(this).removeClass("active") 
            }
            if($(this).hasClass("active")) {
                console.log($(this).offset().top +$(this).innerHeight()  )
                console.log($(window).scrollTop())
            }
           console.log()
        
        })
        

    })
})