 function myDisplayer(some) {
    console.log("SUM "+some);}
  

  async function myCalculator(num1, num2, myCallback) {
   await new Promise((res,rej)=>{
    setTimeout(() => {
        res(num1+num2)
    }, 4000);}).then(
    value=>
   myCallback(value))
  }
  
  myCalculator(5, 5, myDisplayer);




  
// const flag=false;

// new Promise(function(resolve, reject) {
//     if(flag)
//         setTimeout(()=>{
//             resolve("I love You !!");
//         },5000);
//     else reject("ERROR");
     
//     }).then(
//         value=>
//     console.log(value),
//     err=> console.log(err)
//     );
  
  
