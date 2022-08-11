$(document).ready(function(){
    $(".left-searchbox").focusin(function(){
        $(this).find(".label").hide(300);
        $(this).find(".label1").show(300);
        $(this).find(".input").css({"margin":"0px","box-shadow":" 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 15%)","width":"100%"});
        $(this).find(".input").css({"border-radius":"0px", "padding": "13px 10px 13px 56px"});
    });
    $(".left-searchbox").focusout(function(){
        $(this).find(".label").show(300);;
        $(this).find(".label1").hide(300);
        $(this).find(".input").css({"margin":"6px","box-shadow":"none","width":"96%"});
        $(this).find(".input").css({"border-radius":"50px", "padding": "7px 10px 7px 56px"});
    });
    $(".left2").focusin(function(){
        $(this).find(".input").css({"box-shadow":"none"});
        $(".left2").css({"border-bottom":"0"})
     });
    $(".label").click(function(){
        $(".input").focusin();
    });
    $(".label1").click(function(){
        $('.search-results').val("");
        $('.chat').show();
        $(".input").focusout();
        $(".chat-display").hide();
        $('b').contents().unwrap();
    });
    $(".display-chats").click(function(){
        $(".content-in-left").hide();
        $(".content-in-left2").show(400);
        $(".left2-input").focus();
    });
    $(".back-left").click(function(){
        $(".content-in-left2").hide();
        $(".content-in-left").show(400);
    });
    $(".options1").click(function(){
        $(".dropdown-menu1").toggle(400);
        $(".opt-div3").addClass('div1');
    });   
    $(".options").click(function(){
        $(".dropdown-menu").toggle(400);
        $(".opt").addClass('div1');
    });
    $("body").click(function(event) {
         if($(event.target).attr('class') != 'options' && $(event.target).attr('class') != 'dropdown-menu'){
             $(".dropdown-menu").hide(100);
             $(".opt").removeClass('div1');
         }
        if($(event.target).attr('class') != 'options1' && $(event.target).attr('class') != 'dropdown-menu1'){
             $(".dropdown-menu1").hide(100);
             $(".opt-div3").removeClass('div1');
         }
        if($(event.target).attr('id') != 'file' && $(event.target).attr('class') != 'dropdown-file'){
             $(".dropdown-file").hide(100);
         }
    }); 
    $(".searchs").click(function(){
        $(".content-leftt").addClass('add-left');
        $(".content-in-right").addClass('add2-width').removeClass('content-in-right');
        $(".right-container3").show();
        $(".right-container2").addClass('right-add');
        $(".span1").addClass('footer-span');
        $(".span-input").addClass('footer-input');
        var e = $('.pp').text();
        $(".left-p").text("Search for messages with "+e);
        $(".label-searchs").hide(300);;
        $(".label1-searchs").show(300);
        $(".input-searchs").focus();
        $(".input-searchs").css({"margin":"0px","box-shadow":" 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 15%)","width":"100%"});
        $(".input-searchs").css({"border-radius":"0px", "padding": "13px 10px 13px 56px"});
    });
    $(".close").click(function(){
        $(".content-leftt").removeClass('add-left');
        $(".add2-width").removeClass('add2-width').addClass('content-in-right');
        $(".right-container3").hide();
        $(".right-container2").removeClass('right-add');
        $(".span1").removeClass('footer-span');
        $(".span-input").removeClass('footer-input');
    });
    $(".message").keyup(function(){
        var txt = $('.message').val();
        if(txt==""){
            $(".span-toggle").show();
            $(".span-toggle2").hide();
        }
        else {
           $(".span-toggle2").show();
            $(".span-toggle").hide();
        }
    });
    $(".chat-group").click(function(){
        $(".content-in-left2").hide();
        $(".content-in-left3").show(300);
        $(".left3-input").focus();
    });
    $(".new-group").click(function(){
        $(".content-in-left").hide();
        $(".content-in-left3").show(300);
        $(".left3-input").focus();
    });
    $(".back-before").click(function(){
        $(".content-in-left3").hide();
        $(".content-in-left2").show(300);
    });
    $(".search-results").keyup(function(){
        $('.chat-display').css("display","flex");
        var input = $("input").val();
        if (input==""){
            $('.chat-display').hide();
            $('.chat').show();
            $('b').contents().unwrap();
        }
        else {
            
        var input2 = input[0].toUpperCase();
        var input3 = input.slice(1);
        var input4 = input2+input3;
        var input5 = input.toUpperCase();
            $(".chat").each(function(){
                var name = ($(this).find('.name').text());
                var condition1 = name.includes(input);
                var condition2 = name.includes(input4);
                var condition3 = name.includes(input5);
                if(condition1==true) {
                    var out = $(this).find('.name').text().replaceAll(input,"<b>"+ input +"</b>");
                    $(this).find('.name').html(out);
                    $(this).show();
                    }
               else if(condition2==true) {
                    var out = $(this).find('.name').text().replaceAll(input4,"<b>"+ input4 +"</b>");
                    $(this).find('.name').html(out);
                    $(this).show();
                    }
                
               else if(condition3==true) {
                    var out = $(this).find('.name').text().replaceAll(input5,"<b>"+ input5 +"</b>");
                    $(this).find('.name').html(out);
                    $(this).show();
                    }
                else {
                    $(this).hide();
                    }
            });
        }
    });
      $('.message').keypress(function(event) {
        if (event.keyCode == 13) {
            var a = $('.message').val();
          var d = new Date();
            var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        $('.right-container2-body').append('<div class="chat-mes"><a class="chat-mes-in"><span>'+a+'</span><small class="time">'+n+'</small></a></div>');
        $('.message').val('');
        $(".span-toggle2").hide();
        $(".span-toggle").show();

        }
              });
    $('.span-toggle2').click(function(){
        var a = $('.message').val();
          var d = new Date();
            var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        $('.right-container2-body').append('<div class="chat-mes"><a class="chat-mes-in"><span>'+a+'</span><small class="time">'+n+'</small></a></div>');
        $('.message').val('');
        $(".span-toggle2").hide();
        $(".span-toggle").show();
    });

$(".span-file").click(function(){ 
    $(".dropdown-file").toggle(400);
});
    $('.color3').click(function(){
        $('.file-input').trigger('click');
    });
     
$('.btn2').click(function(){
        $('.file-input').trigger('click');
    });
     $('input[type="file"]').change(function(e) {
                var f1 = e.target.files[0].name;
         $(".right-container2").hide();
                $(".right-container4").show();
                $(".selected-file").text(f1);
      var div = '<div class="container4-footer-file"><i class="fas fa-file"></i>';
         $('.right-container4-footer').prepend(div);
            });

    $(".backk").click(function(){
         $(".right-container2").show();
                $(".right-container4").hide();
        $(".container4-footer-file").hide();
    });
});