var Links = {
  SetColor:function (color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i < links.length){
      links[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');//이 코드는 없어도 될거 같은데
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('pink');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Links.SetColor('black');
  }
}
