//creating function
function changeMode(size, weight, transform, background, color){
    //closure function
    return function(){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

//creating function
function main(){
    //creating styles
    const spooky = changeMode(9,'bold','uppercase','pink','green');
    const darkMode = changeMode(12,'bold','capitalize','black','white');
    const screamMode = changeMode(12,'normal','lowercase','white','black');

    //creating paragraph
    const welcome = document.createElement('p');
    welcome.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcome);

    //adding button
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);

    const darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.addEventListener("click", darkMode);
    document.body.appendChild(darkButton);

    const screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.addEventListener("click", screamMode);
    document.body.appendChild(screamButton);
}

main();