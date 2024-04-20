function rolldice(){
    const numofdice = document.getElementById("myinp").value;
    const diceres = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimages");
    const values =[];
    const images =[];

    for(let i=0; i < numofdice;i++){
        const value = Math.floor(Math.random() * 6)+1;
        values[i]=value;
        images.push(`<img src="dice images/Dice${value}.png" alt="dice${value}">`)
        
    }
    diceres.textContent = `dice ${values.join(", ")}`
    diceimg.innerHTML = images.join("");



}