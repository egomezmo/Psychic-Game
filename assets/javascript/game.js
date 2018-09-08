

var arrayCountry = ["Argentina", "Australia","Belgium", "Brazil",
            "Colombia","Costarica","Croatia","Denmark",
            "Egypt","England","France","Germany",
            "Iceland","+Iriran","Japan","Korearepublic",
            "Mexico","Moroco","Nigeria","Panama",
            "Peru","Poland","Portugal","Russia",
            "Saudiarabia","Senegal","Servia","Spain",
            "Sweden", "Switzerland","Tunisia","Uruguay"
];

var randomIndex = Math.floor(Math.random() * 32);        // ESTABLESCO EL INDEX ALEATORIO HASTA 32 POSICIONES
var wGuess = arrayCountry[randomIndex];                 // UTILIZO EL NUMERO PARA TRAER UNA PALABRA DE LA MATRIZ
var sizeWord = Math.round(wGuess.length * 1.2) ;       // ESTABLESCO LA MEDIDA DE LA PALABRA PARA ASIGNAR OPORTUNIDADES 1.2S TAMAÑO DE LA PALABRA


    var res1 = "";
    for (var i = 0; i < wGuess.length; i++) {
        res1 += wGuess.charAt(i) + " ";                         // DIVIDO LA PALABRA EN LETRAS
        document.getElementById("one").innerHTML = res1;        // VEO LA PALABRA EN EL DOM
    }

    document.onkeyup = function(event) {            
        var letra = event.key.toLowerCase();                                // VARIABLE PARA LA LETRA TECLEADA
        document.getElementById("tree").innerHTML = "Letter already guessed: " + letra ;

        var patt = new RegExp(letra);   
        var res = patt.test(wGuess);                                    // COMPARA LA LETRA CON LA PALABRA
        document.getElementById("four").innerHTML =  "La letra esta en la palabra? " + res ;
    };
        if res == true && sizeWord <> 0 {
            sizeWord
            else {
                sizeWord -= 1;
            }
        }
            document.getElementById("two").innerHTML =  "<br>" + "Tu tienes " + sizeWord + " oportunidades";









//document.getElementById("one").innerHTML = "Palabra: " + wGuess;



