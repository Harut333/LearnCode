// // Set Item
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// let itemm = localStorage.getItem("lastname");
// console.log(itemm)


// // localStorage.removeItem(key);

// localStorage.setItem("lastname", "Doe");
// let item = localStorage.getItem("lastname")
// console.log(item)

var myObj, myJSON, text, obj;
//Storing data:
myObj = { "name":"John", "age":31, "city":"New York" };
myJSON = JSON.stringify(myObj);

console.log(typeof myJSON)

localStorage.setItem("testJSON", myJSON);
//Retrieving data:
text = localStorage.getItem("testJSON");


obj = JSON.parse(text);
console.log(typeof obj)



document.getElementById("demo").innerHTML = obj.name;



localStorage.removeItem("testJSON")
localStorage.setItem("testJSON", "myJSON");
localStorage.setItem("testJSON2", "myJSON2");
localStorage.setItem("testJSON3", "myJSON3");

localStorage.clear()
console.log(localStorage.length)

sessionStorage.setItem