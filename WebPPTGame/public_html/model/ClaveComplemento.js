/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ClaveComplemento=function(){
    var claveComplemento={
        claves:[],
        complementos:[]
    };
    
    this.getClaveComplemento=function(){
        return claveComplemento;
    };
    
    this.getClaves=function(){
        return this.getClaveComplemento().claves;
    };
    
    this.getComplementos=function(){
        return this.getClaveComplemento().complementos;
    };
};

