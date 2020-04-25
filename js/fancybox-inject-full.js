/**
//？判断是否启用图片灯箱
$("#nexmoe-content article:not(.nexmoe-py) img[alt^='?']").each(function(){
  if (!$(this).hasClass('LinkCard-image')) {
      $(this).attr("data-src", $(this).attr("src"));
      $(this).attr("src", "");
      $(this).addClass("lazyload");
      $(this).attr("referrerPolicy", "no-referrer");
      if($(this).parent()[0].localName!=="a"){
        var element = document.createElement('a');
        $(element).attr("data-fancybox", "gallery");
        $(element).attr("href", $(this).attr("data-src"));
        $(this).wrap(element)
      }
  }
})
*/

//所有图片开启灯箱
$("#nexmoe-content img:not(.LinkCard-image)").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});

$("article:not(.nexmoe-py) img:not(.LinkCard-image)").each(function() {
  if($(this).parent()[0].localName!=="a"){
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("data-src"));
    $(this).wrap(element);
    //$("fancybox.bg")
    //$(element).addStyle('.fancybox-container {backdrop-filter: saturate(180%) blur(20px);}');

  } 
});

console.log('fancybox.js')


/**
$("#nexmoe-content img[alt^='?']").each(function(){
    if (!$(this).hasClass('LinkCard-image')) {
        $(this).attr('data-src', $(this).attr('src')).removeAttr('src').addClass('lazyload').attr('referrerpolicy', 'no-referrer');

        let element = document.createElement('a');
        element.setAttribute('href', $(this).data('src'))
        element.setAttribute('data-facnybox', 'gallery');
        
        $(this).wrap(element)
    }
})
 */