// let count = 50

// count = count + 50;
// count = count-75
// count = count + 45;


// console.log(count);


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let count = 0
// function incrementButton (){
//     document.getElementById("increment-btn").onclick= function (){
//             count = count+1
//             document.getElementById("count-el").innerHTML = count
//     }
// }

// incrementButton()

// let count = 0
// function increment (){
//     count = count + 1
//     console.log (count)
// }

// let countEL = document.getElementById("count-el")

// let count = 0
// function increment (){
//     count = count + 1
//     countEL .innerText = count
// }

let countEL = document.getElementById("count-el")
let count = 0
function increment() {
    count  += 1
    countEL.textContent= count
}
// increment()




 let saveEL = document.getElementById("save-el")
  
function save () {
 let countStr = count + " -  "
 saveEL.textContent += countStr
 countEL.textContent= 0
 count = 0

}
// save()
// let username = "per"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + " !"
// console.log(messageToUser)

// let name = "Racheal"
// let greeting = "Hi , my name is "
// myGreeting= greeting + name
// console.log(myGreeting)

// let welcomeEL = document.getElementById("welcome-el")

// let name = "Racheal"
// let greeting = "Welcome"
// welcomeEL.innerText = greeting + ", " + name + "."

// welcomeEL.innerText  += " 🖖 "
