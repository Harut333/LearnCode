// let form1 = document.querySelector(".form1")
// let inp = document.querySelector(".getText")
// let newDiv
// let topp = 0
// function addElement() {
//     for (let i = 0; i < 10; i++) {
//         newDiv = document.createElement("div");
//         top+=100
//         newDiv.style.width = "80%"
//         newDiv.style.height = "70%"
//         newDiv.style.backgroundColor = "red"
//         newDiv.style.position = "absolute"
//         newDiv.style.top = top +"px"
//         console.log(top)
//     }

//     let userArr = [inp.value]
//     console.log(userArr)

//     my_div = document.getElementById("org_div1");
//     form1.appendChild(newDiv, my_div);
// }


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);

    // document.getElementById("myInput").value = "";

}