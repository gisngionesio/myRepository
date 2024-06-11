async function populate(){

    //fa la richiesta dell'URL del json
    const requestURL = "https://gisngionesio.github.io/myRepository/json/titanic.json";

    //fa la la richiesta del file json
    const request = new Request(requestURL);
   
    //da una risposta al file json
    const response = await fetch(request);

    //accede ai dati del file json
    const titanic = await response.json();

    content(titanic);
  
};


function content(obj) {
    const mainElement = document.querySelector('div');
    
    obj.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        if (element.Survived === 1) {
            element.Survived = 'Sì';
        } else if (element.Survived === 0) {
            element.Survived = 'No';
        }
    
        const name = document.createElement('h4');
        name.textContent = `Name: ${element.Name}`;
    
        const sex = document.createElement('p');
        sex.textContent = `Sex: ${element.Sex}`;
    
        const age = document.createElement('p');
        age.textContent = `Age: ${element.Age}`;
    
        const start = document.createElement('p');
        start.textContent = `Embarked: ${element.Embarked}`;
    
        const classe = document.createElement('p');
        classe.textContent = `Class: ${element.Pclass}`;
    
        const survive = document.createElement('p');
        survive.textContent = `Survived: ${element.Survived}`;
    
        card.appendChild(name);
        card.appendChild(sex);
        card.appendChild(age);
        card.appendChild(start);
        card.appendChild(classe);
        card.appendChild(survive);
    
        mainElement.appendChild(card);
    });
}

populate();






