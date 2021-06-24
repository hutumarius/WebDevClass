let myString = "intecbrussel"
let myNumber = 10;
let logicVar = true;
let myArray = [1.2,3]
let myObject = {id:1, user: 'root'}
let myUsers = [{id:1, user: 'root'}, {id:2, user: 'admin'}]


localStorage.setItem ('myString', myString)
localStorage.setItem ('myNumber', myNumber)
localStorage.setItem ('logicVar', logicVar)
localStorage.setItem ('myArray', myArray)
//localStorage.setItem ('myObject', myObject)
//localStorage.setItem ('myUsers', myUsers)

//JSON.parse and JSON.stringiffy

let myNewObject = JSON.stringify(myObject)
localStorage.setItem('myObject', myNewObject)
console.log (typeof myNewObject, typeof myObject)


//console.log (typeof localStorage.getItem('myArray'))
//console.log (typeof localStorage.getItem('myObject'))

localStorage.setItem ('users', JSON.stringify(myUsers))


let books = [{id:1, bookname: 'book1', author: 'Leo Tolstoy'}, {id:2, user: 'book2', author: 'William Shakespeare'}]
localStorage.setItem('books', JSON.stringify(books))

let tempBooks = JSON.parse(localStorage.getItem('books'))

let newBook = {
    id:3,
    bookname: 'book3',
    author: 'Victor Hugo',
}

tempBooks.push(newBook)
localStorage.setItem ('books', JSON.stringify(tempBooks))
console.log(tempBooks)