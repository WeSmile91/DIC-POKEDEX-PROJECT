

const printName = document.querySelector(".card");


function printCardHtml(s1, s2, s3, s4) {

    let boxbox = document.createElement('div');
    boxbox.className = 'container';

    const containFirstBox = document.createElement('div');
    containFirstBox.className = 'container1';
    const firstBox = document.createElement('p');
    firstBox.innerHTML = s1;
    containFirstBox.appendChild(firstBox);


    const containSecondBox = document.createElement('div');
    containSecondBox.className = 'container2';
    const secondBox = document.createElement('p');
    secondBox.innerHTML = s2;
    containSecondBox.appendChild(secondBox);

 
    const circleBox = document.createElement('img');
    circleBox.src = s3;


    const containAfficherBox = document.createElement('div');
    containAfficherBox.className = 'container4';
    const afficherNom = document.createElement('p');
    afficherNom.innerHTML = s4;
    containAfficherBox.appendChild(afficherNom);

    boxbox.appendChild(containFirstBox);
    boxbox.appendChild(containSecondBox);
    boxbox.appendChild(circleBox);
    boxbox.appendChild(containAfficherBox);

    return boxbox;

}

//function toto(arg){
//}

//const toto = arg => {

//}


const buttonsendName = document.querySelector(".btn-send");
buttonsendName.addEventListener("click", function () {
    let premierS = document.getElementById("boxx");

    const takeInfoCard = fetch(`https://pokeapi.co/api/v2/pokemon/${premierS.value}`)
       .then((res) => {
        res.json()
            .then(json => {
                console.log(json)
                printName.appendChild(printCardHtml(json.id, json['types'][0]['type']['name'], `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${json.id}.svg`, json.name))
            })
            .catch(() => {
                console.log("ERRORRRRRRRRR2");
            })
    })
        .catch(() => {
             console.log("ERRORRRRRRRRR1");
        })

    



    //printName.appendChild(printCardHtml(infoCard.id, "secondS.value", "thirdS.value", infoCard.name));
})

