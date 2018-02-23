$(document).ready(function(){
    $(document).scroll(function () {
        $(".nese").each(function() {
            
           
            if($(this).offset().top +$(this).innerHeight() >=$(window).scrollTop() && $(this).offset().top <=$(window).scrollTop()+ $(window).height() ) {
                $(this).addClass("active")
               
            }
            else {
                $(this).removeClass("active") 
            }
           //console.log()
        })
        

    })
})