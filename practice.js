
// function sum(a, b) {
//     console.log(a + b);
//     }
    
//     sum(12, 13 );
    
//     2ci teleb:
    
//     - Sum function-i 3cu bir parametr goturecek. Parametrin adi action. action string olacaq
//     - Eger action === "cem" -> a ve b-ni toplayib console-da gostersin
//     - Eger action === 'ferq' -> a ve b-ni cixacaqsiz, console-da gosterin
    



function sum(a,b,action){
if (action==="sum")
    console.log(a + b);
if (action==="minus")
    console.log(a - b)
}
sum(1,2,"minus")

