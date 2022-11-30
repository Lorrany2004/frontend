    
    var temperatura = prompt ("temperatura");
    temperatura = parseFloat (temperatura);
    if (temperatura>38) {
        document.write ("Está com febre!");
        console.log("Está com febre!");
    }
    
    else {
        document.write ("Sem febre!");
        console.log ("Sem febre!");
    }

    function mutiply (a,b) {
        c= a*b;
        return c;
    }