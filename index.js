
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', '4GeeksAcademy'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let numeroRandom;

const generarNumeroRandom = (array) => {
    
    const lengthArray = array.length;

    const numberGenerated = Math.floor(Math.random() * lengthArray);

    return numberGenerated;
       
}

const generarExcusa = () => {


    const elementoExcuse = document.getElementById('excuse');

    elementoExcuse.innerText = `${who[generarNumeroRandom(who)]} ${action[generarNumeroRandom(action)]} ${what[generarNumeroRandom(what)]} ${when[generarNumeroRandom(when)]}`

}

generarExcusa();

setInterval(() => {
    generarExcusa()
}, 3000)

 


