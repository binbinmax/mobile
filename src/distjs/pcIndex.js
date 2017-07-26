var jr = function(){
  $("<link>").attr({ rel: "stylesheet",type: "text/css",href: "//cdn.bootcss.com/aos/1.2.2/aos.css"}).appendTo("head");
  jQuery.getScript("http://cdn.bootcss.com/aos/1.2.2/aos.js", function(data, status, jqxhr) {
    $(function(){
      AOS.init({
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
    })
  });
}


function isBrowser(){
    var Sys={};
    var ua=navigator.userAgent.toLowerCase();
    var s;
    (s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:
    (s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:
    (s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]:
    (s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]:
    (s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0;
    if(Sys.ie){//Js判断为IE浏览器
        if(Sys.ie=='9.0'){//Js判断为IE 9

        }else if(Sys.ie=='8.0'){//Js判断为IE 8

        }else{
           jr();
        }
    }
    if(Sys.firefox){//Js判断为火狐(firefox)浏览器
        jr();
    }
    if(Sys.chrome){//Js判断为谷歌chrome浏览器
        jr();
    }
    if(Sys.opera){//Js判断为opera浏览器
        jr();
    }
    if(Sys.safari){//Js判断为苹果safari浏览器
      jr();
    }
}

isBrowser();
