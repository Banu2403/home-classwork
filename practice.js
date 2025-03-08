
// function sum(a, b) {
//     console.log(a + b);
//     }

//     sum(12, 13 );

//     2ci teleb:

//     - Sum function-i 3cu bir parametr goturecek. Parametrin adi action. action string olacaq
//     - Eger action === "cem" -> a ve b-ni toplayib console-da gostersin
//     - Eger action === 'ferq' -> a ve b-ni cixacaqsiz, console-da gosterin




function sum(a, b, action) {
    switch (action) {
        case "plus":
            console.log(a + b)
            break;
    
   
    case "minus":
        console.log(a - b)
        break;
   } 
}
sum(prompt(), prompt(), prompt())































