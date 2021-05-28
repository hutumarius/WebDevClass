

let person = [
    {name: "Ana", score: '10'},
    {name: "Marius", score: '5'},
    {name: "Andrei", score: '8'},
    {name: "Monica", score: '7'},
    {name: "Razvan", score: '3'},
    {name: "Dan", score: '9'},
    {name: "Alina", score: '10'},
]

person.filter(function (x){
    return x.score >= 7;
})



console.log (person.filter)