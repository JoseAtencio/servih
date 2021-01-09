
var axios = require('axios');
const url = require("../../.env.js");
var tokenGlobal = "";
var optionGlobal = "";




if (url) {
    function servihOptions(token){
        tokenGlobal = token;
        //optionGlobal = options;
    }    
}else{
    console.log('add .env.js in root')
}


if (url) {
    function serviHttp(path, methods, form){
        
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        Authorization: "Bearer " + tokenGlobal
                    }
                };

                return new Promise((res, rej) => {
                    methods == 'get'?
                    
                    axios
                      .get(
                        `${url}/${path}`,form ,config
                      )
                      .then(response => {
                        res(response.data);
                        
                      })
                      .catch(err => {
                        rej("error al subir " + err);
                      })
                      :null
                      methods == 'post'?
                    
                    axios
                      .post(
                        `${url}/${path}`,form ,config
                      )
                      .then(response => {
                        res(response.data);
                        
                      })
                      .catch(err => {
                        rej("error al subir " + err);
                      })
                      :null
                      methods == 'put'?
                    
                    axios
                      .put(
                        `${url}/${path}`,form ,config
                      )
                      .then(response => {
                        res(response.data);
                        
                      })
                      .catch(err => {
                        rej("error al subir " + err);
                      })
                      :null
                      methods == 'delete'?
                    
                    axios
                      .delete(
                        `${url}/${path}`,form ,config
                      )
                      .then(response => {
                        res(response.data);
                        
                      })
                      .catch(err => {
                        rej("error al subir " + err);
                      })
                      :null
                });
        
        
        
    }    
}else{
    console.log('add .env.js in root')
}



exports.servihOptions = servihOptions;
exports.serviHttp = serviHttp;