
    var enterButton = document.getElementById('enterButton');
    var againButton = document.getElementById('againButton');
    var output = document.getElementById('outputText');
 
    var randomNumber = Math.ceil(Math.random()*101);
 
    function checkNumber(){
      var input = document.getElementById('userInput').value;
      if(input == randomNumber){
        output.innerHTML="Your guess is right "+ ", "+ " it was "+ randomNumber;
        output.style.color="green";

        
       

      }
      else if(input>randomNumber && input<101){
        output.innerHTML="Your guess is too high";
      }
      else if(input<randomNumber && input>0){
        output.innerHTML="Your guess is too low";
      }
      else if(input<1){
        output.innerHTML="Lower, it has to be between 1 and 100";
      }
      else if(isNaN(input)){
        output.innerHTML="That's not a number!";
      }
      else{
        output.innerHTML="oops, it has to be between 1 and 100";
      }

      setTimeout(function(){
        output.innerHTML = "";
      }, 2000);
 
    }
 
    enterButton.addEventListener('click', checkNumber);
    againButton.addEventListener('click', function(){
      location.reload();
    })
 