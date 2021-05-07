

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
    spouse: 'Delia'
};

let output = `

My name is ${destiny.firstname} ${destiny.lastname} and i am married with ${destiny.spouse}. 
I am ${destiny.age} years old. 
We have ${destiny.children.toString ()} and come one year ago to ${destiny.adress}.
You can contact us ${destiny.phoneNumber}.

`


console.log (output)







