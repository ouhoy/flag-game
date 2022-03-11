let score = 0;
// class Country {
//     constructor(name, colors,flag,capital, image){
//         this.name = name,
//         this.colors = colors,
//         this.flag = flag,
//         this.capital = capital,
//         this.image = image
//     };
//     get(){
//         this.name;
//     }
//     push(){

//     }
// }
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
    },
    Turkey:{
        name: "Ankara",
        flag:["red","white"],
        code: 2
    }
}
const countries = [country.Morocco, country.Algeria, country.Turkey];
function startGame() {
let userGuess1 = ["red", "green"]

//    setInterval(function(){
//        console.log("time done!")
//    }, 420)
 while (countries.length > 0){
     console.log("remaining countries: ", countries.length)
    for(let i = 0; i < countries.length; i++){
        console.log(i)
        console.log(countries[i].flag[i])
        
        for(let i = 0; i< countries[i].flag.length; i++){
            if (userGuess1[i] !=  countries[i].flag[i]){
                
                console.log("wrong");
                countries.pop();
            } else {
                console.log("else here: " , countries)
                countries.pop();
                score++;
            }
        }
    }
    console.log("your score is: ", score)

 } 

}

startGame()