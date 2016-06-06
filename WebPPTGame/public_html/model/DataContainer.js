/**
 * Objeto contenedor de todos los elementos manejados en la lógica del juego.
 * @returns {DataContainer}
 */
DataContainer = function(){
    var roundsCounter;
    var roundsLimit;
    var victoriesP1;
    var victoriesP2;
    var turno;
    var modalidadJuego=new ModalidadJuego();
    var enumChosen1;
    var enumChosen2;;
    var factorAlgoritmo;
    var idImgPulsada1;
    var idImgPulsada2;
    var nombreJ1;
    var nombreJ2;
    var jugando;
    var mapFichas;
    var mapFichasMaquina;
    /**
     * Método para inicializar los maps que contiene el DataContainer.
     */
    this.initialize=function(){
        inicializaMapFichas();
        inicializaMapFichasMaquina();
        inicializaMapImagesAzul();
        inicializaMapImagesRojo();
    };
    
    //GETTERS
    this.getRoundsCounter=function(){
        return roundsCounter;
    };
    this.getRoundsLimit=function(){
        return roundsLimit;
    };
    this.getVictoriesP1=function(){
        return victoriesP1;
    };
    this.getVictoriesP2=function(){
        return victoriesP2;
    };
    this.isTurno=function(){
        return turno;
    };
    this.getModalidadJuego=function(){
        return modalidadJuego;
    };
    this.getEnumChosen1=function(){
        return enumChosen1;
    };
    this.getEnumChosen2=function(){
        return enumChosen2;
    };
    this.getFactorAlgoritmo=function(){
        return factorAlgoritmo;
    };
    this.getIdImgPulsada1=function(){
        return idImgPulsada1;
    };
    this.getIdImgPulsada2=function(){
        return idImgPulsada2;
    };
    this.getNombreJ1=function(){
        return nombreJ1;
    };
    this.getNombreJ2=function(){
        return nombreJ2;
    };
    this.isJugando=function(){
        return roundsCounter;
    };
    this.getMapFichas=function(){
        return mapFichas;
    };
    this.getMapFichasMaquina=function(){
        return mapFichasMaquina;
    };
    
    //SETTERS
    this.setRoundsCounter=function(contRondas){
        roundsCounter=contRondas;
    };
    this.setRoundsLimit=function(limRondas){
        roundsLimit=limRondas;
    };
    this.setVictoriesP1=function(vP1){
        victoriesP1=vP1;
    };
    this.setVictoriesP2=function(vP2){
        victoriesP2=vP2;
    };
    this.setTurno=function(turn){
        turno=turn;
    };
    this.setModalidadJuego=function(modoJuego){
        modalidadJuego=modoJuego;
    };
    this.setEnumChosen1=function(chosen1){
        enumChosen1=chosen1; 
    };
    this.setEnumChosen2=function(chosen2){
        enumChosen2=chosen2;
    };
    this.setFactorAlgoritmo=function(factorAlg){
        factorAlgoritmo=factorAlg;
    };
    this.setIdImgPulsada1=function(idImg1){
        idImgPulsada1=idImg1;
    };
    this.setIdImgPulsada2=function(idImg2){
        idImgPulsada2=idImg2;
    };
    this.setNombreJ1=function(nJ1){
        nombreJ1=nJ1;
    };
    this.setNombreJ2=function(nJ2){
        nombreJ2=nJ2;
    };
    this.setJugando=function(playing){
        jugando=playing;
    };
    this.setMapFichas=function(mapF){
        mapFichas=mapF;
    };
    this.setMapFichasMaquina=function(mapFMaq){
        mapFichasMaquina=mapFMaq;
    };
    
    /**
     * Método de inicialización del map de fichas, donde el value es el objeto Enum correspondiente a cada variante del juego.
     * @returns {DataContainer.mapFichas|mapF}
     */
    this.inicializaMapFichas=function(){
        var fichas3=new EnumFichas3().getFichas3();
        var fichas5=new EnumFichas5().getFichas5();
        var fichas9=new EnumFichas9().getFichas9();
        mapFichas={
            PAPEL5: fichas5[0],
            SPOCK5: fichas5[1],
            PIEDRA5: fichas5[2],
            TIJERA5: fichas5[3],
            LAGARTO5: fichas5[4],
            PAPEL9: fichas9[0],
            AIRE9: fichas9[1],
            AGUA9: fichas9[2],
            PISTOLA9: fichas9[3],
            PIEDRA9: fichas9[4],
            FUEGO9: fichas9[5],
            TIJERA9: fichas9[6],
            HUMANO9: fichas9[7],
            ESPONJA9: fichas9[8],
            PAPEL3: fichas3[0],
            PIEDRA3: fichas3[1],
            TIJERA3: fichas3[2]
        };
        return mapFichas;
    };
    /**
     * Método de inicialización del map de fichas, donde el value es el id de la imagen que será escogida por la máquina.
     * @returns {mapFMaq|DataContainer.mapFichasMaquina} Map cargado con los id's de la imagen del elemento correspondiente.
     */
    this.inicializaMapFichasMaquina=function(){
        mapFichasMaquina={
            PAPEL: constantsOpsAzul.PAPEL3,
            PIEDRA: constantsOpsAzul.PIEDRA3,
            TIJERA: constantsOpsAzul.TIJERA3,
            SPOCK: constantsOpsAzul.SPOCK5,
            LAGARTO: constantsOpsAzul.LAGARTO5,
            AIRE: constantsOpsAzul.AIRE9,
            AGUA: constantsOpsAzul.AGUA9,
            PISTOLA: constantsOpsAzul.PISTOLA9,
            FUEGO: constantsOpsAzul.FUEGO9,
            HUMANO: constantsOpsAzul.HUMANO9,
            ESPONJA: constantsOpsAzul.ESPONJA9
        };
        return mapFichasMaquina;
    };
    /**
     * Método de inicialización del map de fichas, donde el value es el id de las imágenes azules.
     * @returns {DataContainer.inicializaMapImagesAzul.mapImagesAzul} Map cargado con los id's de las imágenes azules.
     */
    this.inicializaMapImagesAzul=function(){
        var mapImagesAzul={
            PAPEL5: constantsOpsAzul.PAPEL5,
            SPOCK5: constantsOpsAzul.SPOCK5,
            PIEDRA5: constantsOpsAzul.PIEDRA5,
            TIJERA5: constantsOpsAzul.TIJERA5,
            LAGARTO5: constantsOpsAzul.LAGARTO5,
            PAPEL9: constantsOpsAzul.PAPEL9,
            AIRE9: constantsOpsAzul.AIRE9,
            AGUA9: constantsOpsAzul.AGUA9,
            PISTOLA9: constantsOpsAzul.PISTOLA9,
            PIEDRA9: constantsOpsAzul.PIEDRA9,
            FUEGO9: constantsOpsAzul.FUEGO9,
            TIJERA9: constantsOpsAzul.TIJERA9,
            HUMANO9: constantsOpsAzul.HUMANO9,
            ESPONJA9: constantsOpsAzul.ESPONJA9,
            PAPEL3: constantsOpsAzul.PAPEL3,
            PIEDRA3: constantsOpsAzul.PIEDRA3,
            TIJERA3: constantsOpsAzul.TIJERA3
        };
        return mapImagesAzul;
    };
    /**
     * Método de inicialización del map de fichas, donde el value es el id de las imágenes rojas.
     * @returns {DataContainer.inicializaMapImagesRojo.mapImagesRojo} Map cargado con los id's de las imágenes rojas.
     */
    this.inicializaMapImagesRojo=function(){
        var mapImagesRojo={
            PAPEL5: constantsOpsRojo.PAPEL5,
            SPOCK5: constantsOpsRojo.SPOCK5,
            PIEDRA5: constantsOpsRojo.PIEDRA5,
            TIJERA5: constantsOpsRojo.TIJERA5,
            LAGARTO5: constantsOpsRojo.LAGARTO5,
            PAPEL9: constantsOpsRojo.PAPEL9,
            AIRE9: constantsOpsRojo.AIRE9,
            AGUA9: constantsOpsRojo.AGUA9,
            PISTOLA9: constantsOpsRojo.PISTOLA9,
            PIEDRA9: constantsOpsRojo.PIEDRA9,
            FUEGO9: constantsOpsRojo.FUEGO9,
            TIJERA9: constantsOpsRojo.TIJERA9,
            HUMANO9: constantsOpsRojo.HUMANO9,
            ESPONJA9: constantsOpsRojo.ESPONJA9,
            PAPEL3: constantsOpsRojo.PAPEL3,
            PIEDRA3: constantsOpsRojo.PIEDRA3,
            TIJERA3: constantsOpsRojo.TIJERA3
        };
        return mapImagesRojo;
    };
    /**
     * Método que aumenta el contador de rondas de 1 en 1.
     */
    this.avanzaRonda=function(){
        roundsCounter++;
    };
    /**
     * Método que evalúa si se ha llegado al número total de rondas elegidas por el usuario.
     * @returns {Boolean} Devuelve true si se ha llegado al límite de rondas, false en caso contrario.
     */
    this.rondasFinalizadas=function(){
//        var fin=false;
//        if(roundsCounter==roundsLimit){
//            fin=true;
//        }
console.debug("roundCounter en finalizadas",roundsCounter);
console.debug("roundLimit en finalizadas",roundsLimit);
        return roundsCounter==roundsLimit;//fin;
    };
    /*
    this.getOrdinalChosen1=function(){
        return enumChosen1.getOrdinal();
    };
    
    this.getOrdinalChosen2=function(){
        return enumChosen2.getOrdinal();
    };
    
    this.setOrdinalChosen1=function(ord){
        enumChosen1.setOrdinal(ord);
    };
    
    this.setOrdinalChosen2=function(ord){
        enumChosen2.setOrdinal(ord);
    };
    
    this.getNameChosen1=function(){
        return enumChosen1.getName();
    };
    
    this.getNameChosen2=function(){
        return enumChosen2.getName();
    };
    
    this.setNameChosen1=function(name){
        enumChosen1.setName(name);
    };
    
    this.setNameChosen2=function(name){
        enumChosen2.setName(name);
    };
    */
   
   /**
    * Método que aumenta el contador de victorias del jugador 1.
    */
    this.sumaVictoriesP1=function(){
        victoriesP1++;
    };
   /**
    * Método que aumenta el contador de victorias del jugador 2.
    */
    this.sumaVictoriesP2=function(){
        victoriesP2++;
    };
};

