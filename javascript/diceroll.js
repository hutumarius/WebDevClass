// getElementById for element selector

// callback function onclick
   // - random 1-6
   // - print numbers in to placeholder1 and placeholder2 

    
   
   document.getElementById('diceRollerbutton').onclick = diceroll;

   function diceroll() {

        var placeholder1 = document.getElementById("placeholder1");
        var placeholder2 = document.getElementById("placeholder2");

        var status = document.getElementById("status");
    
       
        var dice1 = Math.floor(Math.random()*6)+1; 
        var dice2 = Math.floor(Math.random()*6)+1;

        document.getElementById ("placeholder1").innerHTML = dice1;
        document.getElementById ("placeholder2").innerHTML = dice2;

        if(dice1==dice2){
            document.getElementById("status").innerHTML = "You Won!"}
       

       
        
   }

   
   
   
   
   
   
   
   
   
   




