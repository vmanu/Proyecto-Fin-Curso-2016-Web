ConstantesServletURLs = function () {
    var constantsURLs = {
        URL_GET_KEYS: "http://localhost:8080/ServerPPTGame/seguridad",
        URL_GET_BY_ROUNDS: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByRounds",
        URL_GET_BY_VICTORIES: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByVictories",
        URL_GET_BY_AVERAGE: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByAverage",
        URL_SERVLET_HASHING_JS: "http://192.168.1.104:8080/ServerPPTGame/ServletHashingJS",
        URL_SERVLET_SIGN_UP: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=put",
        URL_SERVLET_SIGN_IN: "http://192.168.1.104:8080/ServerPPTGame/login",
        URL_SERVLET_ADD_VICTORIES: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=addVictories",
        URL_SERVLET_ADD_ROUNDS: "http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=addRounds"
    };
    
    this.getConstantsURLs=function(){
        return constantsURLs;
    };
};
//URL SERVLETS


