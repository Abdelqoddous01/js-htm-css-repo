// let username=window.prompt("what is you name");
// console.log("user name :"+username);

let counter=0;


    document.getElementById("increase").onclick=function(){
        counter+=1;
        document.getElementById("count").innerText=counter;
    }
    document.getElementById("decrease").onclick=function(){
        counter-=1;
        document.getElementById("count").innerText=counter;
    }
    document.getElementById("reset").onclick=function(){
        counter=0;
        document.getElementById("count").innerText=counter;
    }

