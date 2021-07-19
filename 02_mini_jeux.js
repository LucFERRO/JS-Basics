//Minijeu

// Ordi choisit au hasard un nombre entre 1 et 10. On a 3 essais pour trouver ce nombre.
//         Si bonne rép: Message de félicitations et affichage du numéro en question
//         Sinon: pas de chance, afficher le mauvais numéro et retenter

function minijeu(a,b,c){
    var num = Math.floor(Math.random() * 10);
    if (a!=num){
        console.log(`Pas de chance ! ${a} n'est pas le bon numéro ! Il te reste 2 chances.`);
        if (b!=num){
            console.log("Pas de chance ! "+b+" n'est pas le bon numéro ! Il te reste une dernière chance !");
            if (c!=num){
                console.log("Pas de chance ! "+c+" n'est pas le bon numéro ! Le bon numéro était "+num+" ! Tu dois 5 euros à Christophe !");
            } else {
                console.log("Bravo, c'était bien le "+num+" ! Tu as eu chaud!");
            }
        } else {
            console.log("Bravo, il te restait encore une chance au pire. C'était bien le "+num+".");
        }
    } else {
        console.log('Bravo ! Le numéro était ' +num+'. Du premier coup !');
    }
}


// function minijeuavecindication(a,b,c){
//     var num = Math.floor(Math.random() * 10);
//     if (a<num){
//         console.log("Pas de chance ! "+a+" n'est pas le bon numéro ! Le bon nombre est plus grand. Il te reste 2 chances.");
//         if (b!=num){
//             console.log("Pas de chance ! "+b+" n'est pas le bon numéro ! Il te reste une dernière chance !");
//             if (c!=num){
//                 console.log("Pas de chance ! "+c+" n'est pas le bon numéro ! Le bon numéro était "+num+" ! Tu dois 5 euros à Christophe !");
//             } else {
//                 console.log("Bravo, c'était bien le "+num+" ! Tu as eu chaud!");
//             }
//         } else {
//             console.log("Bravo, il te restait encore une chance au pire. C'était bien le "+num+".");
//     } elseif (a>num) {
//         console.log("Pas de chance ! "+a+" n'est pas le bon numéro ! Le bon nombre est plus petit. Il te reste 2 chances.");
//         if (b!=num){
//             console.log("Pas de chance ! "+b+" n'est pas le bon numéro ! Il te reste une dernière chance !");
//             if (c!=num){
//                 console.log("Pas de chance ! "+c+" n'est pas le bon numéro ! Le bon numéro était "+num+" ! Tu dois 5 euros à Christophe !")
//             } else {
//                 console.log("Bravo, c'était bien le "+num+" ! Tu as eu chaud!");
//             }
//         } else {
//         }
//     } else {
//         console.log('Bravo ! Le numéro était ' +num+'. Du premier coup !');
//     }
// }

// minijeu(2,5,7);

function minijeusansinput(a,b,c){
    var num = Math.floor(Math.random() * 10);
    if (a==num){
        console.log("Bravo ! Le numéro était " +num);
    }
    else{
        console.log("Pas de chance ! "+a+" n'est pas le bon numéro ! Il te reste 2 chances.");
    }
    if (b==num){
        console.log("Bravo ! Le numéro était " +num);
    }
    else{
        console.log("Pas de chance ! "+b+" n'est pas le bon numéro ! Il te reste une dernière chance !");
    }
    if (c==num){
        console.log("Bravo ! Le numéro était " +num);
    }
    else{
        console.log("Pas de chance ! "+c+" n'est pas le bon numéro ! Le bon numéro était "+num+" ! Tu dois 5 euros à Christophe !");
    }
}

// minijeusansinput(2,5,7);
function jeuavecswitch(a,b,c){
var num = Math.floor(Math.random() * 10);
switch (a<num) {
    case (a<num):
        console.log("Mauvaise réponse! Le bon chiffre est plus grand. Il te reste deux essais. ");
        switch (b) {
            case (b<num):
                console.log("Pas de chance ! "+b+" n'est pas le bon numéro! Le bon chiffre est plus grand. ! Il te reste une dernière chance !");
                switch (c){
                    case (c==num):
                        console.log("Tu as eu chaud, c'était ta dernière chance, mais tu as réussi à trouver "+num+".");
                        break;
                    default:
                        console.log("Tout faux !");
                        break;
                }
            case (b>num):
                console.log("Pas de chance ! "+b+" n'est pas le bon numéro! Le bon chiffre est plus petit. ! Il te reste une dernière chance !");
                switch (c){
                    case (c==num):
                        console.log("Tu as eu chaud, c'était ta dernière chance, mais tu as réussi à trouver "+num+".");
                        break;
                    default:
                        console.log("Tout faux !");
                        break;
                }
            default:
                console.log("Bravo, tu as trouvé en deux essais que le bon chiffre était "+num+".");
                break;
        }
    case (a>num):
        console.log("Mauvaise réponse! Le bon chiffre est plus petit. Il te reste deux essais. ");
        switch (b) {
            case (b<num):
                console.log("Pas de chance ! "+b+" n'est pas le bon numéro! Le bon chiffre est plus grand. ! Il te reste une dernière chance !");
                switch (c){
                    case (c==num):
                        console.log("Tu as eu chaud, c'était ta dernière chance, mais tu as réussi à trouver "+num+".");
                        break;
                    default:
                        console.log("Tout faux !");
                        break;
                }
            case (b>num):
                console.log("Pas de chance ! "+b+" n'est pas le bon numéro! Le bon chiffre est plus petit. ! Il te reste une dernière chance !");
                switch (c){
                    case (c==num):
                        console.log("Tu as eu chaud, c'était ta dernière chance, mais tu as réussi à trouver "+num+".");
                        break;
                    default:
                        console.log("Tout faux !");
                        break;
                }
            default:
                console.log("Bravo, tu as trouvé en deux essais que le bon chiffre était "+num+".");
                break;
        }
    default :
        console.log("Bravo ! Du premier coup ! Le chiffre était "+num+".")
    }
}

// jeuavecswitch(2,5,7);


function password_gen(n) {                                                                                                         //Gen a password with n characters
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';    //Wanted characters  
    var UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var specials = '&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';
    var numbers = '0123456789'
    var len = characters.length; 
    var randomupper = Math.random() * UPPERS.length;  
    var upper = UPPERS[randomupper];    
    var randomspecial = Math.random() * specials.length;  
    var special = specials[randomspecial];  
    var randomnumber = Math.random() * numbers.length;  
    var number = numbers[randomnumber];                                                      
    for ( var i = 0; i < n; i++ ) {
    result += characters.charAt(Math.random() * len);
    }
    var RNG = Math.random() * result.length;
    var RNG2 = Math.random() * result.length;
    var RNG3 = Math.random() * result.length;
    while (RNG==RNG2) {
        RNG2 = Math.random();
    }
    while (RNG3==RNG || RNG3==RNG2){
        RNG3 = Math.random();
    }
    console.log(result);
    resultarray = Object.assign([], result);
    resultarray.splice(RNG,1,upper);
    resultarray.splice(RNG2,1,special);
    resultarray.splice(RNG3,1,number);
    return resultarray.join('')
}

console.log(password_gen(5));