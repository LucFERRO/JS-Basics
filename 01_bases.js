/**
 * jsdoc.com
 */

// Executer ces commandes sur la console en allant dans le dossier JS et faire "node" + nom du fichier js
console.log("Hello World !"); 
console.warn("BANNED");
console.error("Ici il y a une erreur");

var maVar = "Je suis une variable vieille et globale";
let age = 22;
const anneeDeNaissance = 1999;

console.log(maVar, age, anneeDeNaissance);

age = age + 1
console.log(age)

// anneeDeNaissance = 1998          IMPOSSIBLE DE MODIFIER UNE CONSTANTE
// console.log(anneeDeNaissance)    (const)

/** Type de variable !
 * String
 * Number
 * Boolean
 * Object
 * Array
 * Null
 * Undefined
 */

let isAdmin = false
let meteo = {           //<-- {} Déclaration d'un objet (Object)
    temperature : 25,
    vent : "faible"
};

const apprenant = [     //<-- [] Déclaration d'un tableau (Array)
    "Luc",
    "Simon",
    "Mathile","Myriam","Florian",
    2021,
    ["Nicolas","Christophe"]
];

console.table(apprenant); //<-- Afficher un tableau
console.table(apprenant[1]); //<-- Afficher un element d'un tableau
console.table(apprenant[6][1]); //<-- Aller chercher une info dans un tableau dans un tableau

console.log(meteo);
console.log(meteo.temperature);  //<-- Aller chercher une valeur dans un objet

console.log("Bonjour " + apprenant[1] + " Aujourd'hui tu es en forme"); //<-- Concaténation en JS
console.log(`Bonjour ${apprenant[1]} Aujourd'hui tu es en forme`); //<-- VERSION ++

console.log(age + "1"); //<-- Ne jamais faire de calcul via un string !!!

console.log(typeof age); //<-- Verifier le type d'une valeur

// if (age < 18){
//     console.log("Refusé")
// }else{
//     console.log("Autorisé")
// }

if (age <= 40 && age > 18){
    console.log("T'est pas si vieux et tu as le droit de rentrer")
}else{
    console.log("Tu n'as pas encore l'age requis")
}

if (age === 40){
    console.log("TU OBTIENS UN CADEAU !")
}

/**
 * = --> Affectation
 * == --> Comparaison
 * === --> Egalité Stricte (Doit être forcement egal au type et a la valeur choisie)
 */

if (!isAdmin){ 
    console.log("Pas d'acces")
}
/**
 * Si l'on met un boolean dans un if il va testé de base si il est vrai donc pas besoin de mettre de condition
 * et si l'on veut faire l'inverse il suffit de mettre un ! devant la variable pour dire l'inverse comme en php
 */

function direBonjour(prenom){
    console.log(`Bonjour ${prenom}`)
}

console.log("-----Boucle while-----");    //BOUCLE WHILE
let i=0;
while (i < apprenant.length) {  //<-- .length pour utilisé la longeur du tableau !!
    direBonjour(apprenant[i]);
    i++;
}

console.log("-----Boucle for-----")   //BOUCLE FOR
for(let i = 0; i<5; i++){
    direBonjour(apprenant[i]);
}


apprenant.forEach(element => {          //BOUCLE FOREACH
    console.log(element);
});



