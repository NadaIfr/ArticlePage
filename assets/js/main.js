//Artcile Page
$(window).ready(function(){
    // showing or hide navigate arrow
    $(window).scroll(function(){
        if($(window).scrollTop() > $(".breadcrumb").height()){
            $(".navigate-above").show(500)
        }
        else{
            $(".navigate-above").hide(500)
        }}
    )

    $(".navigate-above a").click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop:  $(".navbar").offset().top
    }, 1000);
        
    })
    $(window).scroll(function(){

        if ($(window).scrollTop()> $(".article-body").height()){
            $(".recents-posts").css({
                position : "sticky",
                top : "20px",

            })
        }
        else{
            $(".recents-posts").css("position","relative")
        }
    })
    $('.search-button').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');
      
        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');
      
        e.preventDefault();
      });

})
