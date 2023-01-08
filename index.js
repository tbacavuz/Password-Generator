const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
// let length = document.getElementById("lenght");
let length = 14;

function generate(){
    pass1.textContent = random(length);
    pass2.textContent = random(length);
}

function random(length){
    let password = "";
    for(length; length>0; length--){
        password += characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
}


