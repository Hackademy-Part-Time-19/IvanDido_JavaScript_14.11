let quantita_stock=30;

let ordinare = parseInt(prompt("Vuoi effettuare un ordine? Digita 1(si), 2(no)"))

if(ordinare==1){
    var quantita_ordinata = parseInt(prompt("Quante unità vuoi ordinare?"))
    if(quantita_ordinata<=quantita_stock){
        console.log("Grazie per effettuato l'ordine! Alla prossima")
    } else {console.log("Quantità non disponibili.")}
    
} else console.log("Arrivederci, alla prossima")
