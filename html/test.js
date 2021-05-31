let numbers = [0,1,2,3,4,5,6,7,8,9,10]

//output 1) 0 100 200 300 400 500 600 700 800 900 1000 

/*
for (let i=0; i<=1000; i+=100){
    console.log(i)
} */


// Output 2) 1 2 4 8 16 32 64 128


    
    /*for(n of numbers){
 // console.log(n)
  if(n%3==0){
    let result = Number(n)+3
    console.log(result,"test")
  }
}
  }
}

//Output 3) 0 2 4 6 8 10

/*for (n of numbers) {
    if (n % 2 == 0) {
    console.log(n);
  
   }
} */

//Output 4) 3 6 9 12

/*for(n of numbers){
 // console.log(n)
  if(n%3==0){
    let result = Number(n)+3
    console.log(result,"test")
  }
}
*/


//Output 5) 9 8 7 6 5 4 3 2 1 0



for (n of numbers.reverse()) {
  if (n<10)
  console.log (n)
}
