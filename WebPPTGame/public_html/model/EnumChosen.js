/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, que contiene un ordinal y un nombre identificador.
 * @returns {EnumChosen}
 */
EnumChosen = function () {
    var ordinal;
    var name;

    //GETTERS
    this.getOrdinal = function () {
        return ordinal;
    };
    this.getName = function () {
        return name;
    };
    
    //SETTERS
    this.setOrdinal = function (ord) {
        ordinal=ord;
    };
    this.setName = function (nm) {
        name=nm;
    };

};

