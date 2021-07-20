//Les str
const characters_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';  
const UPPERS_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specials_str = '&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';
const numbers_str = '0123456789'
//Les array
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "&", "é", "(", "-", "è", "_", "ç", "à", ")", "=", "~", "#", "{", "[", "|", "`", "@", "]", "}", "^", "$", "ù", "*", ",", ";", ":", "!", "¨", "£", "%", "µ", "?", ".", "/", "§"];
const UPPERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specials = ["&", "é", "(", "-", "è", "_", "ç", "à", ")", "=", "~", "#", "{", "[", "|", "`", "@", "]", "}", "^", "$", "ù", "*", ",", ";", ":", "!", "¨", "£", "%", "µ", "?", ".", "/", "§"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 



// NON OPTIMISE

function password_gen(n) {                                                                                                         //Gen a password with n characters
    let result = '';                                              
    for ( var i = 0; i < n; i++ ) {
      result += characters_str.charAt(Math.random() * characters_str.length);
   }
   return result
}

// console.log(password_gen(25));

// function password_genbonus(n) {                                                                                                         //Gen a password with n characters
//     let result = '';
//     const len = characters.length; 
//     const randomupper = Math.random() * UPPERS.length;  
//     const upper = UPPERS[randomupper];    
//     const randomspecial = Math.random() * specials.length;  
//     const special = specials[randomspecial];  
//     const randomnumber = Math.random() * numbers.length;  
//     const number = numbers[randomnumber];                                                      
//     for ( let i = 0; i < n; i++ ) {
//     result += characters.charAt(Math.random() * len);
//     }
//     const RNG = Math.random() * result.length;
//     const RNG2 = Math.random() * result.length;
//     const RNG3 = Math.random() * result.length;
//     while (RNG==RNG2) {
//         RNG2 = Math.random();
//     }
//     while (RNG3==RNG || RNG3==RNG2){
//         RNG3 = Math.random();
//     }
//     console.log(result);
//     resultarray = Object.assign([], result);
//     console.log(resultarray);
//     resultarray.splice(RNG,1,upper);
//     resultarray.splice(RNG2,1,special);
//     resultarray.splice(RNG3,1,number);
//     return resultarray.join('')
// }

// console.log(password_gen(5));



// PRESQUE OPTIMISE ???
function password_genopt(n) {                                                                                                         //Gen a password with n characters
    let result = '';                                                 
    for ( var i = 0; i < n; i++ ) {
      result += randomcharfromstr(characters_str);
   }
   return result
}
// console.log(password_genopt(15));



// function password_genoptbonus(n) {                                                                                                        
//     let result = '';
//     const len = characters.length; 
//     // const randomupper = Math.random() * UPPERS.length;  
//     const upper = randomcharfrom(UPPERS);    
//     // const randomspecial = Math.random() * specials.length;  
//     const special = randomcharfrom(specials);  
//     // const randomnumber = Math.random() * numbers.length;  
//     const number = randomcharfrom(numbers);                                                      
//     for ( let i = 0; i < n; i++ ) {
//         result += randomcharfrom(characters);
//     }
//     const RNG = Math.random() * result.length;
//     const RNG2 = Math.random() * result.length;
//     const RNG3 = Math.random() * result.length;
//     while (RNG==RNG2) {
//         RNG2 = Math.random();
//     }
//     while (RNG3==RNG || RNG3==RNG2){
//         RNG3 = Math.random();
//     }
//     // console.log(result);
//     resultarray = Object.assign([], result);
//     // console.log(resultarray);
//     resultarray.splice(RNG,1,upper);
//     resultarray.splice(RNG2,1,special);
//     resultarray.splice(RNG3,1,number);
//     return resultarray.join('')
// }

// console.log(password_genoptbonus(5));


///////////////////////////////////////////////////////////////////////////////////

function shuffle(str) {                               
    var i, j, x;
    for (i = str.length - 1; i>0; i-- ) {             // ou     for (i = 0 ; i < array.length - 1; i++ ) ???
        j = Math.floor(Math.random() * (i + 1));
        x = str[i];
        str[i] = str[j];
        str[j] = x;
    }
    return str
}

function shufflearray(array) {                               
    var i, j, x;
    for (i = array.length - 1; i>0; i-- ) {             // ou     for (i = 0 ; i < array.length - 1; i++ ) ???
        j = Math.floor(Math.random() * (i + 1));
        x = array[i|0];
        array[i|0] = array[j|0];
        array[j|0] = x;
    }
    return array
}

function shuffleWord(word) {                            // shuffle Luc
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

function randomcharfromstr(str){                                    // Pioche un random char from str/array
    return str.charAt(Math.random() * str.length)
}

function randomcharfromarray(array){
    return array[Math.random() * array.length|0]
}

// var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var teststr = '1234567891011';
// console.log(teststr);
// console.log(shuffle(teststr));                         

function final_generator_str(n) {                              // Fonctionne mais avec str et pas array donc suit pas la consigne                                                                                     
    let result = '';
    result += randomcharfromstr(UPPERS_str);
    result += randomcharfromstr(specials_str);  
    result += randomcharfromstr(numbers_str);                                                     
    for ( let i = 0; i < n-3; i++ ) {
        result += randomcharfromstr(characters_str);
    }
    return shuffle(Object.assign([],result)).join('')           //str to array (avec Object.assign) pour shuffle, puis join('') pour array to str
}

// console.log(final_generator_str(15));

function triche(n) {                                              // prends les array mais les passe en str donc ???consigne???                                                                    
    let result = '';
    result += randomcharfromstr(UPPERS.join(''));
    result += randomcharfromstr(specials.join(''));  
    result += randomcharfromstr(numbers.join(''));                                                     
    for ( let i = 0; i < n-3; i++ ) {
        result += randomcharfromstr(characters.join(''));
    }
    return shuffle(Object.assign([],result)).join('')           //str to array (avec Object.assign) pour shuffle, puis join('') pour array to str
}

// console.log(triche(15));


function final_generator_array(n) {                             // fonction finale mais avec shuffle Luc                                                                                
    let result = '';
    result += randomcharfromarray(UPPERS);
    result += randomcharfromarray(specials);  
    result += randomcharfromarray(numbers);                                                     
    for ( let i = 0; i < n-3; i++ ) {
        result += randomcharfromarray(characters);
    }
    var pass = shuffleWord(result);             // Pourquoi le shuffle de Luc marche et pas les shufflestr et shufflearray alors qu'ils marchent dans le navigateur
    return pass        
}

console.log(final_generator_array(15));