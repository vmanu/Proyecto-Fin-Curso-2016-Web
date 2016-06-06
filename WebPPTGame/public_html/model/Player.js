/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto contenedor de la información de los jugadores.
 * @returns {Player}
 */
Player = function () {
    var player = {
        namePlayer: "",
        tipoJuego: new GameType(),
        numberOfRounds: new RoundsNumber(),
        playing: false,
        numPartidas: 0,
        numVictorias: 0
    };
    
    //GETTER
    this.getPlayer=function(){
        return player;
    };
};

