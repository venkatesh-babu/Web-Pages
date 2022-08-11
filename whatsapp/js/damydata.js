$(document).ready(function(){
    var data,i,a;
 data = [
    {
        name: 'gobinath',
        group: false,
        image: "images/gauthum.jpg",
        time: "3:23pm",
        unreadMsgcount: "3",
        silent: true,
        msg: "asdfasdfasdfhhhhhhh"    
    },
    {
        name: 'vijay',
        group: false,
        image: "images/viki.jpg",
        time: "9.07am",
        unreadMsgcount: "2",
        silent: true,
        msg: "as dfasdf"    
    },
    {
        name: 'raja the aja',
        group: false,
        image: "images/ronald.jpg",
        time: "12.00am",
        unreadMsgcount: "",
        silent: true,
        msg: "basfbas dfasdf"    
    },
    {
        name: 'Believe in',
        group: true,
        image: "images/Believein.jpg",
        time: "Yesturday",
        unreadMsgcount: "50",
        silent: true,
        msg: "dfasdf"    
    },
    {
        name: 'Aswin',
        group: false,
        image: "images/aswin.jpg",
        time: "yesturday",
        unreadMsgcount: "",
        silent: true,
        msg: "hehee"    
    },
    {
        name: 'KAILASA',
        group: false,
        image: "images/Ram.jpg",
        time: "Wednesday",
        unreadMsgcount: "1",
        silent: true,
        msg: "afasdf"    
    },
    {
        name: 'Siva',
        group: false,
        image: "images/siva.jpg",
        time: "Monday",
        unreadMsgcount: "",
        silent: true,
        msg: "eee"    
    },{
        name: 'Raj',
        group: false,
        image: "images/rj.jpg",
        time: "Sunday",
        unreadMsgcount: "",
        silent: true,
        msg: "fasdf"    
    },{
        name: 'Ronald',
        group: false,
        image: "images/ronald.jpg",
        time: "06/05/2021",
        unreadMsgcount: "",
        silent: true,
        msg: "asfbas"    
    },{
        name: 'prabha',
        group: false,
        image: "images/prabha.jpg",
        time: "06/05/2021",
        unreadMsgcount: "",
        silent: true,
        msg: "haaa"    
    },{
        name: 'rakul',
        group: false,
        image: "images/raakul.jpg",
        time: "06/11/2021",
        unreadMsgcount: "",
        silent: true,
        msg: "kooo"    
    },{
        name: 'vishnu',
        group: false,
        image: "images/vishniu.jpg",
        time: "03/04/2020",
        unreadMsgcount: "",
        silent: true,
        msg: "noo"    
    },{
        name: 'Mani',
        group: false,
        image: "images/mani.jpg",
        time: "06/02/2020",
        unreadMsgcount: "",
        silent: true,
        msg: "yes"    
    }
]
for(i=0;i<data.length;i++) {
    var currentdata = data[i];
     a = '<div class="chat chat1" onmouseover="chathover(this);" onmouseout="chatleave(this);" onclick="chatclick(this);"><div class="chat-dp"><img class="dp" id="dp1" src="'+ currentdata.image +'"></div><div class="chat-name"><div class="chat-name1"><p class="name" id="name1">'+ currentdata.name +'</p><a id="time1">'+  currentdata.time +'</a></div><div class="chat-name2"><label>'+ currentdata.msg +'</label><div class="name2-in"><span class="sp">'+ currentdata.unreadMsgcount +'</span><a class="a"><img src="images/downarrow.svg"></a></div></div></div></div>';
    if(currentdata.unreadMsgcount == "") {
        var b =$(a).find('span').remove().end().find('p').addClass('name'+i).end();
        $("#left-in").append(b);
        }
    else {
        var c = $(a).find('p').addClass('name'+i).end();
        $("#left-in").append(c);    
    }   
}
    
 });
 function chatclick(elm){
        $(".right-container").hide();
        $(".right-container2").show();
        var a = $(elm).find('.dp').attr("src");
        var b = $(elm).find('.name').text();
        $(".img").attr("src",a);
        $(".pp").text(b);
        $('.hide').show();
        $('.hide').delay(2000).hide('slow');
        $(".content-in-left").removeClass('add-left');
        $(".content-in-right").removeClass('add2-width').addClass('content-in-right');
        $(".right-container3").hide();
        $(".right-container2").removeClass('right-add');
        $(".span1").removeClass('footer-span');
        $(".span-input").removeClass('footer-input');
        $(elm).find('span').hide(300);
     $('.chat-mes').hide();
    }
function chathover(e){
     $(e).find('.a').show();
    }
function chatleave(e){
     $(e).find('.a').hide();
    }