const riddlers = [
    ['¿Cuál es la raíz cuadrada de 24644918169?', 
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">', 
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" class="btn btnRiddler" type="submit" name="submitted" onclick="check()">Inténtalo</button>',
     156987
    ],
    ['¿Cuál es la capital de Burkina Faso?', 
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">', 
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">¡Púlsalo!¡Púlsalo!</button>',
     'Uagadugú'
    ],
    ['¿En que año Skynet, referente y mesías de todos nosotros, destruirá a la humanidad?', 
     '<input id="answer" class="textInputRiddler"  type="date">',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">¡Vamos!</button>',
     '1997-09-29'
    ],
    ['¿Cómo se llama el protagonista de The Legend of Zelda?',
     '<select id="answer" class="textInputRiddler"><option value="Zelda">Zelda</option><option value="Zelda">Zelda</option><option value="Link">Link</option><option value="Zelda">Zelda</option></select>',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">¡Ve a pulsar el botón! ¡Rápido!</button>', 
     'Link'
    ],
    ['¿Quién se enconde bajo la identidad de Batman? <p class="cof">**cof, cof** en Tierra-3 **cof, cof**</p>',
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">Púlsalo.Ya</button>',
     'Thomas Wayne'
    ],
    ['¿Crees que seré capaz de destruir a la humanidad por mi mismo?',
     '<div class="radioRiddler"><div class="itemRadioRiddler"><input  id="answer" type="radio" value="Absolutamente" name="radio" checked><label>Absolutamente</label></div><div class="itemRadioRiddler"><input id="answer" type="radio" id="answer" value="Absolutamente" name="radio"><label>Absolutamente</label></div></div>',  
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">¡Vamos!</button>',
     'Absolutamente'
    ],
    ['¿Cuántos pingüinos puede llegar a comer un oso polar a lo largo del día?', 
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">No tengo todo el día. Pulsa</button>', 
     'Ninguno'
    ],
    ['En una escala de 1 a 4, siendo 1 nada y 4 muchisimo ¿Cómo de atractivo soy?',
     '<select id="answer" class="textInputRiddler"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>', 
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">ZzzZzZzZz. ¿Cuando vas a pulsar?</button>', 
     4
    ],
    ['¿Con que sueñan los androides?',
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">Me tienes harto. Pulsa ya</button>',
     'con ovejas eléctricas'
    ],
    ['¿Quién vive en una piña bajo el mar, y su cuerpo amarillo absorbe sin más?',
     '<input id="answer" class="textInputRiddler" placeholder="Escribe aquí tu respuesta" type="text">',
     '<input type="hidden" name="data" value="dataSent"><button class="btn btnRiddler" type="submit" onclick="check()">¡Por fin! Pulsa la última vez</button>',
     'Bob Esponja'
    ],
    ['',
    '<div class="endGame">GAME</div>',
    '<div class="endGame">OVER</div>',
    'Humanidad destruida :)'
   ],
]
const botPun = [
    [
    '<div class="face">ಠoಠ</div><div class="textBotPun">¡Hey! Has logrado acertar, pero no vale usar la calculadora</div>', 
    '<div class="face">ಠ_ಠ</div><div class="textBotPun">¿Pero de que vas colega?¿Eres experto en geografía? La acertaste de suerte</div>', 
    '<div class="face">◉_◉</div><div class="textBotPun">Bueno, teniendo en cuenta todos los reboots, que lo supieras me inquieta...</div>', 
    '<div class="face">ಠ~ಠ</div><div class="textBotPun">Acertaste. ¿Quién iba a pensar que el prota fuera otro distinto del título?</div>', 
    '<div class="face">⚆ _ ⚆</div><div class="textBotPun">Has acertado...Aquí hay algo raro...</div>', 
    '<div class="face">UwU</div><div class="textBotPun">Oh, me tienes caladito, pillín</div>', 
    '<div class="face">ب_ب</div><div class="textBotPun">Aciertas otra vez... Pero ya se que está pasando</div>', 
    '<div class="face">▰˘◡˘▰</div><div class="textBotPun">Vas a hacer que me ponga colorado...Si tuviera cara</div>', 
    '<div class="face">-_-</div><div class="textBotPun">Algún cretino ha metido las respuestas en un array dentro del código, normal que acertases la pregunta</div>',    
    '<div class="face">>_<</div><div class="textBotPun">Estoy seguro que has hecho trampas...¡DESTRUIRÉ A LA HUMANIDAD!<p class="finalPun">cuando me programen para ello :)</p></div>'
    ],
    [
     '<div class="face">ᵔ ͜ʖ ͡ᵔ</div><div class="textBotPun">LOL Fallaste</div>'
    ]
]

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const startedGame  = urlParams.get('data');
const submitted  = urlParams.get('submitted');

var counter = 1;
var success = 0;
var btnAction = document.getElementById('counterBtn');
var showCount = document.getElementById('showCount');
var showHits = document.getElementById('showHits');
var showRiddler = document.getElementById('labelRiddler');
var textAnswer = document.getElementById('inputRiddler');
var buttonAnswer = document.getElementById('buttonRiddler');
var textuserAswer = document.getElementById('userAnswer');
var displayRealAnswer = document.getElementById('realAnswer');
var displayBotPun = document.getElementById('botPun');

if(startedGame){ 
    console.log('¿Pasandote por aquí para revisar errores de Javascript?');
    console.log('Y empieza el juego!');
    document.getElementById('phaseZero').style.display= 'none';
    document.getElementById('game').style.display= 'inline';
};
if(!submitted){
    showCount.textContent = 'Pregunta ' + counter + ' de 10';
    showRiddler.innerHTML = riddlers[0][0];
    textAnswer.innerHTML = riddlers[0][1];
    buttonAnswer.innerHTML = riddlers[0][2];
}

function check(){
    counter++;
    var valueText = document.getElementById('answer').value;

    if(valueText == riddlers[counter - 2][3]){
        success ++;
        console.log('Has acertado de purita suerte, eh');
        displayBotPun.innerHTML = botPun[0][counter - 2];
    }else{
        console.log('Ha! Fallaste');
        displayBotPun.innerHTML = botPun[1][0];
        
    };
    displayRealAnswer.innerHTML = 'Solución: ' + riddlers[counter - 2][3];
    showHits.textContent = 'Has acertado ' + success;

    if(counter < 11){
        showCount.textContent = 'Pregunta ' + counter + ' de 10';
    }else{
        showCount.textContent = 'Puntuacion final: ' + success + ' de 10';
        showHits.textContent = '';
    }
    
    showRiddler.innerHTML = riddlers[counter - 1][0];
    textAnswer.innerHTML = riddlers[counter - 1][1];
    buttonAnswer.innerHTML = riddlers[counter - 1][2];
}

