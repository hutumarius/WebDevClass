

let destiny = {
    firstname: 'Marius',
    lastname: 'Hutu',
    age: 41,
    adress: {
        city: 'Brussel',
        steet: 'Masui',
        postcode: 1000
    },
    

    
    phoneNumbers: {
        type: 'home',
        number: '04384730484'
    },

    children: ['Vlad', 'Eric'],
    spouse: 'Delia',

    future:function(){
        console.log('Hello')
        console.log(`My name is ${destiny.firstname} ${destiny.lastname} and i am married with ${destiny.spouse}\nI am ${destiny.age} years old\n We have ${destiny.children.toString ()} and came one year ago to ${destiny.adress}\nYou can contact us at ${destiny.phoneNumbers}`)
    }
};

destiny.future ();