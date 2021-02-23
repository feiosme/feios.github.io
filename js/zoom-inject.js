//所有图片开启灯箱
$("#nexmoe-content article:not(.nexmoe-py) img:not(.LinkCard-image)").each(function() {
  $(this).attr("data-action", "zoom");
  $(this).attr("alt", "Photo");
  $(this).attr("title", "点击图片放大");
});

console.log('zoom-inject.js')
