/*
Este script detecta o navegador em uso analisando a string userAgent fornecida pelo navegador. 
Ele procura por substrings específicas dentro dessa string para determinar se o navegador é Opera, 
Internet Explorer/Edge, Mozilla Firefox, Vivaldi, Brave, Google Chrome ou Safari. 
As informações do userAgent e o nome do navegador são então exibidas em elementos HTML específicos na página.
*/                
document.addEventListener("DOMContentLoaded", function() {
                let e = "";
                
                e = "Propriedade userAgent: " + navigator.userAgent;
                document.getElementById("info").innerHTML = e;
            
                let userAgent = navigator.userAgent.toLowerCase();
                let browserName = "Desconhecido";
                
                if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
                    browserName = "Opera";
                } else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
                    browserName = "Internet Explorer ou Edge";
                } else if (userAgent.indexOf('firefox') > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('safari') > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
                    browserName = "Safari";
                } else if (userAgent.indexOf('brave') > -1 && userAgent.indexOf('brave') === -1) {
                                browserName = "Brave";
                } else if (userAgent.indexOf('vivaldi') > -1 && userAgent.indexOf('vivaldi') === -1) {
                                                browserName = "Vivaldi";                
                }
                document.getElementById("browser").innerHTML = "Navegador: " + browserName;
            });
            