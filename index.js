$(document).ready(function(){
  var vitesseA= 200 ;
  var vitesse = 0 ;
  setInterval(function(){
     var vitesseB = $("#slider-c").val();
     if (vitesseA != vitesseB){
      vitesse == vitesseB ;
   console.log(vitesseB);
    }

   }, 3000);
if (vitesse != vitesseA ) {

  //device.callFunction("stop");

} else {

}
//  console.log(vitesse);
         //var address = "192.168.43.32";
         //var device = new Device(address);
         $("#submit").click(function(){
          var address=$("#ip").val();
           var joystickView = new JoystickView(150, function(callbackView){
               $("#joystickContent").append(callbackView.render().el);
               setTimeout(function(){
                   callbackView.renderSprite();
               }, 0);
           });
           var device = new Device(address);
            console.log(joystickView.state);
            setInterval(function(){   if (joystickView.state == 0) {
               device.callFunction("stop");
                console.log("stop");
              }; }, 1000);
           joystickView.bind("verticalMove", function(y){
               $("#yVal").html(y);
               console.log(this.state);
               //var address = "192.168.43.32";
               //var device = new Device(address);
               //console.log(y);
               if (y > 0 ) {
                 device.callFunction("forward");
                 console.log("j'avence");

               } else {
                 console.log("je recule ");
                  device.callFunction("backward");
               }
           });
           joystickView.bind("horizontalMove", function(x){
               $("#xVal").html(x);
               if (x > 0) {
                     device.callFunction("left");

               console.log("a droite ");

               } else {
                     device.callFunction("right");
                 console.log("a gauche ");

               }
           });
       });
});
