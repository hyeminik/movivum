// 그래프 구현

console.log("시작")

var maxIndex = $("li.graph-bar").length;
for(var i=0; i<maxIndex; i++){
  var val = $("li.graph-bar").eq(i).attr('graph-val');
  var color = $("li.graph-bar").eq(i).attr('graph-color');
  $("li.graph-bar").eq(i).css({
    "left": (i+1)*80+"px",
    "background":color
  }).animate({
    "height":val+"%"
  },800);
}