
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
  } 
});

console.log('fancybox.js')