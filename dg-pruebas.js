function clearPage() {
  document.body.innerHTML = '';
}

let currentPage = '';

function start() {
  document.querySelector('.js-click-aqui-button')
    .addEventListener('click', () => {
      homeScreen()
})

// This will appear after the first click
function homeScreen() {
  clearPage()
  // Inside the first page
  const textPage1 = document.createElement('p');
  textPage1.classList.add('text-page1')
  textPage1.textContent = 'Me tarde mucho haciendo esto, pero no me arrepiento piraña, no es mucho pero se que me dijiste que te gustan mis fotos, entonces puse algunas de nuestras mejores aqui. Tambien puse fotos individuales por si quieres 😂';
  document.body.appendChild(textPage1);

  const gabyImage = document.createElement('img');
  gabyImage.src="images/gaby.JPG";
  gabyImage.classList.add('gaby-image');
  document.body.appendChild(gabyImage);

  const gabyAndDiegoImage = document.createElement('img');
  gabyAndDiegoImage.src="images/diego-gaby-dos.JPG";
  gabyAndDiegoImage.classList.add('gaby-and-diego-image');
  document.body.appendChild(gabyAndDiegoImage);

  const diegoImage = document.createElement('img');
  diegoImage.src="images/diego.JPG";
  diegoImage.classList.add('diego-image');
  document.body.appendChild(diegoImage);

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  // Gaby singles button
  const gabySingles = document.createElement('button');
  gabySingles.classList.add('person-button', 'js-gaby-button');
  gabySingles.textContent = 'Gaby';

  // Gaby and Diego button
  const gabyAndDiego = document.createElement('button');
  gabyAndDiego.classList.add('person-button', 'js-gaby-and-diego-button');
  gabyAndDiego.textContent = 'Gaby & Diego';

  // Diego singles button
  const diegoSingles = document.createElement('button');
  diegoSingles.classList.add('person-button', 'js-diego-button');
  diegoSingles.textContent = 'Diego';

  buttons.appendChild(gabySingles);
  buttons.appendChild(gabyAndDiego);
  buttons.appendChild(diegoSingles);

  document.body.appendChild(buttons);

  
  // Instructions for each button
  document.querySelector('.js-gaby-button') // Ir a pagina de gaby
    .addEventListener('click', () => {
      gabyPage();
    });
  document.querySelector('.js-gaby-and-diego-button') // Ir a pagina de gaby y diego
    .addEventListener('click', () => {
      gabyAndDiegoPage();
    });
  document.querySelector('.js-diego-button') // Ir a pagina de diego
    .addEventListener('click', () => {
      diegoPage();
    });
};

  

  // Gaby's page
  function gabyPage() {
    clearPage();
    // Imagenes en pagina de Gaby
    const gabyUno = document.createElement('img');
    gabyUno.src = "images/gaby-pagina.jpg";
    gabyUno.classList.add('gaby-foto-uno');
    document.body.appendChild(gabyUno);

    const gabyUnoTexto = document.createElement('p');
    gabyUnoTexto.classList.add('gaby-uno-texto');
    gabyUnoTexto.textContent = 'Sigo diciendo que, aunque no lo he visto completamente, me encanta como se te ve tu cabello natural 😍';
    document.body.appendChild(gabyUnoTexto);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button-gaby', 'js-home-button');
    homeButton.textContent = 'Home';
    document.body.appendChild(homeButton);

    const gabyDos = document.createElement('img');
    gabyDos.src = "images/gaby-dos.jpg";
    gabyDos.classList.add('gaby-foto-dos');
    document.body.appendChild(gabyDos);

    const gabyDosTexto = document.createElement('p');
    gabyDosTexto.classList.add('gaby-dos-texto');
    gabyDosTexto.textContent = "Todavia quiero ver este vestido. Me acuerdo de cuando mandaste esta foto y en lo que te concentrabas era en tus super medias de Navidad"
    document.body.appendChild(gabyDosTexto);

    const gabyTres = document.createElement('img');
    gabyTres.src = "images/gaby-tres.jpg";
    gabyTres.classList.add('gaby-foto-tres');
    document.body.appendChild(gabyTres);

    const gabyTresTexto = document.createElement('p');
    gabyTresTexto.classList.add('gaby-tres-texto');
    gabyTresTexto.textContent = "Esta no necesita muchas palabras la vdd, simple malandrosamente boleta 😎"
    document.body.appendChild(gabyTresTexto);

    const gabyCuatro = document.createElement('img');
    gabyCuatro.src = "images/gaby-cuatro.jpg";
    gabyCuatro.classList.add('gaby-foto-cuatro');
    document.body.appendChild(gabyCuatro);

    const gabyCuatroTexto = document.createElement('p');
    gabyCuatroTexto.classList.add('gaby-cuatro-texto');
    gabyCuatroTexto.textContent = "Y esta no podia faltar. Siento que te representa burda 😂 Una vez Barbie, siempre barbie";
    document.body.appendChild(gabyCuatroTexto);

    const helloKittyGif = document.createElement('img');
    helloKittyGif.src = "images/hello-kitty-gaby.gif"
    helloKittyGif.classList.add('hello-kitty-gif-gaby');
    document.body.appendChild(helloKittyGif);

    document.querySelector('.js-home-button')
      .addEventListener('click', () => {
        clearPage();
        homeScreen();
      });
  }

  // Gaby's and Diego's page
  function gabyAndDiegoPage() {
    clearPage();
    const imageContextGabyDiego = document.createElement('p');
    imageContextGabyDiego.classList.add('gaby-diego-context');
    imageContextGabyDiego.textContent = 'Estas tres las guardo con mucho cariño. La de la izquierda fue la primera foto que dejaste que te tomara por decision propia. La segunda es de nuestro primer dia de san valentin juntos (sin duda bastante divertido). La tercera sinceramente es de mis favoritas';
    document.body.appendChild(imageContextGabyDiego);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button', 'js-home-button');
    homeButton.textContent = 'Home';
    document.body.appendChild(homeButton);

    // Imagenes en pagina de Gaby & Diego
    const gabyDiegoUno = document.createElement('img');
    gabyDiegoUno.src = "images/gaby-diego-pagina-uno.JPG";
    gabyDiegoUno.classList.add('gaby-diego-uno');
    document.body.appendChild(gabyDiegoUno);

    const gabyDiegoDos = document.createElement('img');
    gabyDiegoDos.src = "images/gaby-diego-pagina-dos.JPG";
    gabyDiegoDos.classList.add('gaby-diego-dos');
    document.body.appendChild(gabyDiegoDos);

    const gabyDiegoTres = document.createElement('img');
    gabyDiegoTres.src = "images/gaby-diego-pagina-tres.JPG";
    gabyDiegoTres.classList.add('gaby-diego-tres');
    document.body.appendChild(gabyDiegoTres);
    
    const helloKittyGif = document.createElement('img');
    helloKittyGif.src = "images/hello-kitty-gaby.gif";
    helloKittyGif.classList.add('hello-kitty-gif');
    document.body.appendChild(helloKittyGif);

    const helloDanielGif = document.createElement('img');
    helloDanielGif.src = "images/hello-daniel.gif";
    helloDanielGif.classList.add('hello-daniel-gif');
    document.body.appendChild(helloDanielGif);

    document.querySelector('.js-home-button')
      .addEventListener('click', () => {
        clearPage();
        homeScreen();
      });
  }

  // Diego's Page
  function diegoPage() {
    clearPage();
    const diegoContext = document.createElement('p');
    diegoContext.classList.add('diego-context');
    diegoContext.textContent = 'Aqui no tengo muchas de pana, pero es mas que nada pa que se eche vida señora. Para que digas que no te mando fotos';
    document.body.appendChild(diegoContext);

    const diegoUno = document.createElement('img');
    diegoUno.src = "images/diego-uno.PNG";
    diegoUno.classList.add('diego-foto-uno');
    document.body.appendChild(diegoUno);

    const diegoDos = document.createElement('img');
    diegoDos.src = "images/diego-dos.PNG";
    diegoDos.classList.add('diego-foto-dos');
    document.body.appendChild(diegoDos);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button-diego', 'js-home-button');
    homeButton.textContent = 'Home';
    document.body.appendChild(homeButton);

    const diegoTres = document.createElement('img');
    diegoTres.src = "images/diego-tres.PNG";
    diegoTres.classList.add('diego-foto-tres');
    document.body.appendChild(diegoTres);

    const diegoCuatro = document.createElement('img');
    diegoCuatro.src = "images/diego-cuatro.PNG";
    diegoCuatro.classList.add('diego-foto-cuatro');
    document.body.appendChild(diegoCuatro);

    const helloDanielGif = document.createElement('img');
    helloDanielGif.src = "images/hello-daniel.gif";
    helloDanielGif.classList.add('hello-daniel-gif-diego');
    document.body.appendChild(helloDanielGif);

    document.querySelector('.js-home-button')
      .addEventListener('click', () => {
        clearPage();
        homeScreen();
      });
  }
}

start();
homeScreen();