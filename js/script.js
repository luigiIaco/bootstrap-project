let prezzoCommissione="";
let PrezzoFinaleScreen=document.getElementById('prezzoFinale');
let ButtonSubmit=document.getElementById('invia');

let arrayCodiciSconto=["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];


let Form=document.getElementById("form");
Form.addEventListener("submit",function(event) {
    event.preventDefault();
    let codiceSconto=document.getElementById("input5").value;
    let typeOfWork=document.getElementById('seleziona').value;
    let oreLavoro=document.getElementById("input0").value;
    oreLavoro=parseInt(oreLavoro);
    if(typeOfWork=="Front-end") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
        prezzoCommissione=oreLavoro*15.30;
        prezzoCommissione*=0.25;
        ButtonSubmit.style.backgroundColor="yellow";
        }
        else{
            prezzoCommissione=oreLavoro*15.30;
            console.log("codice inserito non valido");
            ButtonSubmit.style.backgroundColor="red";

        }
    }
    else if(typeOfWork=="Back-End") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
            prezzoCommissione=oreLavoro * 20.50
            prezzoCommissione*=0.25;
            ButtonSubmit.style.backgroundColor="yellow";
            }
            else{
              prezzoCommissione=oreLavoro*20.50;
              console.log("codice inserito non valido")
              ButtonSubmit.style.backgroundColor="red";
            }
    }
    else if(typeOfWork=="Project Analisys") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
            prezzoCommissione=oreLavoro * 33.60;
            prezzoCommissione*=0.25;
            ButtonSubmit.style.backgroundColor="yellow";
            }
            else{
            prezzoCommissione=oreLavoro * 33.60;
            console.log("codice inserito non valido")
            ButtonSubmit.style.backgroundColor="red";

            }
    }
    PrezzoFinaleScreen.innerHTML=prezzoCommissione.toFixed(2)+"€";
    for (let i = 0; i < arrayCodiciSconto.length; i++) {
        if(arrayCodiciSconto[i]==codiceSconto) {
            arrayCodiciSconto.splice(i,1);
        }
        
    }
})


