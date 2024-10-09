console.log('hellow');

const spellBook = [ 'expelliarumus', 'Accio', 'Expecto Patronum', 'wingardium Leviosa' ];
let mannaPoints = 50;

const castSpell = () => {
    //choose a random spell from the array
    const randomIndex = Math.floor(Math.random() * spellBook.length);

    console.log('randomIndex', randomIndex)
    const randomSpell = spellBook[randomIndex];
    console.log('raondomSpell', randomspell);

    //show the user the spell on the screen
    const spellElement = document.getElementByID('spell');
    const message = `You Cast the ${randomspell} spell`;
    spellElement.textContent = message;

    // subtract 5 manna points from the total
   mannaPoints = mannaPoints - 5;
   console.log('mannaPoints', mannaPoints);

    // show the user the new manna points on the screen
    const mannaElement = document.getElementById('manna-points');
    mannaElement.textContent = mannaPoints;
}