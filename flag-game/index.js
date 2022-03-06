let score = 0;
const country = {
    Morocco: {
        name: "Morocco",
        flag: ["red","green"],
        code: 2
    },
    Algeria: {
        name: "Algeris",
        flag: ["red","green","white"],
        code: 3
    }
}
const countries = ["Morocco", "Algeria", "Serbia"];
function startGame() {
let userGuess1 = ["red", "green"]

   setInterval(function(){
       console.log("time done!")
   }, 420)
 while (countries.length > 0){
     console.log("remaining countries: ", countries.length)
    for(let i = 0; i < countries.length; i++){
        for(let i = 0; i< country.Morocco.flag.length; i++){
            if (userGuess1[i] !=  country.Morocco.flag[i]){
                console.log("wrong");
                countries.pop();
            } else {
                countries.pop();
                score++;
            }
        }
    }
    console.log("your score is: ", score)

 } 

}
