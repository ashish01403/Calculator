
    'use strict'
    var textcontainer = document.querySelector('.input');
    var textcontainerans = document.querySelector('.answer');
    var allkeys = document.querySelectorAll('.keys');
    var string = '';
    Array.from(allkeys).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML == '='){
                string = eval(string);
                // console.log(string); 
                textcontainerans.value = string;
            }
            else if(e.target.innerHTML == 'AC'){
                string = "";
                textcontainer.value =string;
                textcontainerans.value = string;
            }
            else if(e.target.innerHTML == 'DEL'){
                // console.log("test");
                string = string.substring(0,string.length-1);
                // console.log(string);
                textcontainer.value = string;
            }
            else{
                string = string+e.target.innerHTML;
                textcontainer.value = string;
            }
        });
    });
