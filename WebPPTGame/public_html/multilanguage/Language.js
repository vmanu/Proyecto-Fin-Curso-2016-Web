/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto que aloja constantes con valores en español y en inglés para la internacionalización de la aplicación.
 * @returns {Language} Objeto cargado con las constantes de la propiedad 'es' (español) y 'en' (inglés).
 */
Language = function () {
    var lang = {
        es: {
            titleGame: "Piedra, papel, tijera",
            play: "Jugar",
            onlineMode: "Modo online",
            rulesOption: "Reglas del juego",
            rulesGraph: "Reglas (Gráficamente)",
            infoDev: "Información de los desarroladores",
            scores: "Puntuaciones",
            back: "Atrás",
            localMode: "Modo local",
            chooseOption: "Elige opción:",
            game3: "Juego de 3",
            game5: "Juego de 5",
            game9: "Juego de 9",
            chooseNumPlayers: "Elige número de jugadores:",
            onePlayer: "Un jugador",
            twoPlayers: "Dos jugadores",
            chooseRounds: "Elige número de rondas:",
            oneRound: "Una ronda",
            threeRounds: "Tres rondas",
            fiveRounds: "Cinco rondas",
            customedRounds: "Rondas customizadas",
            putYourName: "Pon tu nombre:", 
            playCustomed: "Partida customizada",
            randomly: "Aleatoria",
            draw: "EMPATE!",
            wins: " GANA!",
            wonCount: " ganó:<br>",
            turnOf: " Turno de ",
            fillTheFields: "Rellena todos los campos!",
            failConnection: "Vaya! Algo fue mal con la conexión!",
            player1: "Jugador 1",
            player2: "Jugador 2",
            yourNameHere: "Tu nombre AQUÍ",
            getByRounds: "Número de rondas",
            getByVictories: "Número de victorias",
            getByAverage: "Promedio", 
            orderBy: "Ordenar por:"
        },
        en: {
            titleGame: "Rock, scissors, paper",
            play: "Play",
            onlineMode: "Online mode",
            rulesOption: "Rules of the game",
            rulesGraph: "Rules (Graphically)",
            infoDev: "Info of developers",
            scores: "Scores",
            back: "Back",
            localMode: "Local mode",
            chooseOption: "Choose option:",
            game3: "Game of 3",
            game5: "Game of 5",
            game9: "Game of 9",
            chooseNumPlayers: "Choose number of players:",
            onePlayer: "One player",
            twoPlayers: "Two players",
            chooseRounds: "Elige número de rondas:",
            oneRound: "One round",
            threeRounds: "Three rounds",
            fiveRounds: "Five rounds",
            customedRounds: "Customed rounds",
            putYourName: "Put your name:",
            playCustomed: "Play customed",
            randomly: "Randomly",
            draw: "DRAW!",
            wins: " WINS!",
            wonCount: " won:<br>",
            turnOf: "'s turn",
            fillTheFields: "Fill all the fields!",
            failConnection: "Ups! Something was wrong with connection!", 
            player1: "Player 1",
            player2: "Player 2",
            yourNameHere: "Your name HERE",
            getByRounds: "Number of rounds",
            getByVictories: "Number of victories",
            getByAverage: "Average",
            orderBy: "Order by:"
        }
    };

    this.getLang = function () {
        return lang;
    };
};

