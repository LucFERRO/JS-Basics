// NON OPTIMISE

function password_gen(n) {                                                                                                         //Gen a password with n characters
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';       //Wanted characters                                                        
    for ( var i = 0; i < n; i++ ) {
      result += characters.charAt(Math.random() * characters.length);
   }
   return result
}

// console.log(password_gen(25));

function password_genbonus(n) {                                                                                                         //Gen a password with n characters
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';    //Wanted characters  
    const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specials = '&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';
    const numbers = '0123456789'
    const len = characters.length; 
    const randomupper = Math.random() * UPPERS.length;  
    const upper = UPPERS[randomupper];    
    const randomspecial = Math.random() * specials.length;  
    const special = specials[randomspecial];  
    const randomnumber = Math.random() * numbers.length;  
    const number = numbers[randomnumber];                                                      
    for ( let i = 0; i < n; i++ ) {
    result += characters.charAt(Math.random() * len);
    }
    const RNG = Math.random() * result.length;
    const RNG2 = Math.random() * result.length;
    const RNG3 = Math.random() * result.length;
    while (RNG==RNG2) {
        RNG2 = Math.random();
    }
    while (RNG3==RNG || RNG3==RNG2){
        RNG3 = Math.random();
    }
    console.log(result);
    resultarray = Object.assign([], result);
    console.log(resultarray);
    resultarray.splice(RNG,1,upper);
    resultarray.splice(RNG2,1,special);
    resultarray.splice(RNG3,1,number);
    return resultarray.join('')
}

// console.log(password_gen(5));

// PRESQUE OPTIMISE ???

function password_genopt(n) {                                                                                                         //Gen a password with n characters
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';       //Wanted characters                                                        
    for ( var i = 0; i < n; i++ ) {
      result += randomcharfrom(characters);
   }
   return result
}

// console.log(password_genopt(15));

function password_genoptbonus(n) {                                                                                                        
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§'; 
    const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specials = '&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';
    const numbers = '0123456789'
    const len = characters.length; 
    // const randomupper = Math.random() * UPPERS.length;  
    const upper = randomcharfrom(UPPERS);    
    // const randomspecial = Math.random() * specials.length;  
    const special = randomcharfrom(specials);  
    // const randomnumber = Math.random() * numbers.length;  
    const number = randomcharfrom(numbers);                                                      
    for ( let i = 0; i < n; i++ ) {
        result += randomcharfrom(characters);
    }
    const RNG = Math.random() * result.length;
    const RNG2 = Math.random() * result.length;
    const RNG3 = Math.random() * result.length;
    while (RNG==RNG2) {
        RNG2 = Math.random();
    }
    while (RNG3==RNG || RNG3==RNG2){
        RNG3 = Math.random();
    }
    // console.log(result);
    resultarray = Object.assign([], result);
    // console.log(resultarray);
    resultarray.splice(RNG,1,upper);
    resultarray.splice(RNG2,1,special);
    resultarray.splice(RNG3,1,number);
    return resultarray.join('')
}

// console.log(password_genoptbonus(5));


///////////////////////////////////////////////////////////////////////////////////

function shuffle(array) {                               // semble 
    var i, j, x;
    for (i = array.length - 1; i>0; i-- ) {             // ou     for (i = 0 ; i < array.length - 1; i++ ) ???
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array
}

function randomcharfrom(array){
    return array.charAt(Math.random() * array.length)
}

// var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(test);
// console.log(shuffle(test));                          pourtant il marche ici

function final_generator(n) {                                                                                                        
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§'; 
    const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specials = '&é(-è_çà)=~#{[|`@]}^$ù*,;:!¨£%µ?./§';
    const numbers = '0123456789' 
    result += randomcharfrom(UPPERS);
    result += randomcharfrom(specials);  
    result += randomcharfrom(numbers);                                                     
    for ( let i = 0; i < n-3; i++ ) {
        result += randomcharfrom(characters);
    }
    console.log(result);
    const pass = shuffle(result);                       // shuffle marche pas??
    return pass
}

console.log(final_generator(15));