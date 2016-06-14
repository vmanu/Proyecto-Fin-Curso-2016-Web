ConstantesServletURLs = function () {
    var constantsURLs = {
        URL_GET_KEYS: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/seguridad",
        URL_GET_BY_ROUNDS: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=getByRounds",
        URL_GET_BY_VICTORIES: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=getByVictories",
        URL_GET_BY_AVERAGE: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=getByAverage",
        URL_SERVLET_HASHING_JS: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletHashingJS",
        URL_SERVLET_SIGN_UP: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=put",
        URL_SERVLET_SIGN_IN: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/login",
        URL_SERVLET_ADD_VICTORIES: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=addVictories",
        URL_SERVLET_ADD_ROUNDS: "http://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ServletDB?op=addRounds"
    };
    
    this.getConstantsURLs=function(){
        return constantsURLs;
    };
};
//URL SERVLETS


