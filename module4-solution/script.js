(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for ( var name in names ) {

  var nameList = names[name];
  
  var firstLetter = nameList.charAt().toLowerCase();
  // console.log(firstLetter);
  
  if ( firstLetter == "j" ) {
    byeSpeaker.speak(nameList);
  } else {
    helloSpeaker.speak(nameList);
  }
}

})(window);