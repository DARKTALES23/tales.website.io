
/* ==================================================
   TEMA CLARO / ESCURO
   ================================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});


/* ==================================================
   LISTA DE MÚSICAS
   ================================================== */

const musicas = [

    {
        arquivo: "assets/musicas/musica1.mp3",
        nome: "Paisley Patterns",
        artista: "Jamie Paige"
    },

    {
        arquivo: "assets/musicas/musica2.mp3",
        nome: "Dyad",
        artista: "Jamie Paige"
    },

    {
        arquivo: "assets/musicas/musica3.mp3",
        nome: "Não me faça falar",
        artista: "Yun Li"
    },

    {
        arquivo: "assets/musicas/musica4.mp3",
        nome: "Ally",
        artista: "Jamie Paige"
    },

    {
        arquivo: "assets/musicas/musica5.mp3",
        nome: "Hold me tightly",
        artista: "Jamie Paige"

    }

];


/* ==================================================
   ELEMENTOS
   ================================================== */

const audio =
    document.getElementById("audio");

const playButton =
    document.getElementById("playButton");

const playerProgress =
    document.getElementById("playerProgress");

const musicTitle =
    document.getElementById("musicTitle");

const musicArtist =
    document.getElementById("musicArtist");


/* ==================================================
   ESCOLHER MÚSICA
   ================================================== */

function escolherMusica() {

    const indice =
        Math.floor(
            Math.random() * musicas.length
        );

    const musica =
        musicas[indice];


    audio.src =
        musica.arquivo;

    musicTitle.textContent =
        musica.nome;

    musicArtist.textContent =
        musica.artista;

}


/* ==================================================
   TOCAR / PAUSAR
   ================================================== */

playButton.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "Ⅱ";

    } else {

        audio.pause();

        playButton.textContent = "▶";

    }

});


/* ==================================================
   BARRA DE PROGRESSO
   ================================================== */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) {
            return;
        }

        const progresso =
            (audio.currentTime / audio.duration) * 100;

        playerProgress.style.width =
            progresso + "%";

    }
);


/* ==================================================
   QUANDO TERMINAR
   ================================================== */

audio.addEventListener(
    "ended",
    () => {

        escolherMusica();

        audio.play();

    }
);


/* ==================================================
   ESCOLHER UMA MÚSICA AO ABRIR A PÁGINA
   ================================================== */

escolherMusica();
