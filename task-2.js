let name = prompt("Write our name");
let age = prompt("Write your age");
let hobbies = "";
if (confirm("Do you want to write ur hobies?")) {
    hobbies = prompt("Write your hobbies");
}
alert(`Name: ${name}\nAge: ${age}\nHobbies: ${hobbies}`);
