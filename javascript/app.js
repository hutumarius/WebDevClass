

let destiny = {
    firstname: 'Marius',
    lastname: 'Hutu',
    age: 41,
    adress: {
        city: 'Brussel',
        steet: 'Masui',
        postcode: 1000,
    },
    

    
    phoneNumbers: {
        type: 'home',
        number: '04384730484',
    },

    children: ['Vlad', 'Eric'],
    spouse: 'Delia',
};

let output1 = "My name is" + destiny.firstname + destiny.lastname;
let output2 = "My adress is" + destiny.adress;
let output3 = destiny.spouse + "is my spose";
let output4 = "We have" + destiny.children;



console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);




