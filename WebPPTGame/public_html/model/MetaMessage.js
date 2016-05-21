/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto que contendrá el tipo de mensaje y el contenido del mismo mandado por el ClientEndpoint en la comunicación con el ServerEndpoint.
 * @returns {MetaMessage}
 */
MetaMessage=function(){
    var metaMessage={
        type:new TypeMessage(),
        content:""
    };
    
    //GETTER
    this.getMetaMessage=function(){
        return metaMessage;
    };
};

