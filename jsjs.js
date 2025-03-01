// 1. Userden 2 prompt alin: Name ve Age
// 2. Eger age 20-den Boyukdurse Name-i butun herflerini boyuderek console-da gosterin (toUpperCase ile)
// 3. Eger deyilse Usere alertde yashinin az oldugunu deyin
// 4. Eger yashi 80-den coxdursa qocalmisan deyin (age > 80 => console.log('qocalmisan'))
// 5. Console-da Name ve Age-i birleshdirib daha sonra repeatle age qeder choxaldilmish gosteren gosterin (MIS: name = "Elvin" age = 2 => "Elvin2Elvin2")

let name= prompt("your name")
let age =prompt("your age")

if (age>20) {
    console.log(name.toUpperCase());   
}
 if(age<20) {
    console.log('not enough age')
}
if(age>80) {
    console.log('qocalmisan')
}
console.log( name.concat(age).repeat(age))
