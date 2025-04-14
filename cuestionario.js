let listaNumerosSorteados = new Set();
let pregunta;
let puntaje = 0;
const preguntas = {
    1: {
        pregunta: "¿Cuál es la capital de Colombia?",
        opciones: {
            A: "Bogotá",
            B: "Medellín",
            C: "Cali",
            D: "Barranquilla"
        },
        respuestaCorrecta: 'A'
    },
    2: {
        pregunta: "¿Cuál es el río más largo de Colombia?",
        opciones: {
            A: "Río Magdalena",
            B: "Río Amazonas",
            C: "Río Orinoco",
            D: "Río Cauca"
        },
        respuestaCorrecta: 'B'
    },
    3: {
        pregunta: "¿Cuál es el deporte más popular de Colombia?",
        opciones: {
            A: "Fútbol",
            B: "Béisbol",
            C: "Ciclismo",
            D: "Boxeo"
        },
        respuestaCorrecta: 'A'
    },
    4: {
        pregunta: "¿Qué océano baña las costas de Colombia?",
        opciones: {
            A: "Océano Atlántico",
            B: "Océano Pacífico",
            C: "Océano Índico",
            D: "Océano Ártico"
        },
        respuestaCorrecta: 'B'
    },
    5: {
        pregunta: "¿Quién fue el líder de la independencia de Colombia?",
        opciones: {
            A: "Simón Bolívar",
            B: "Francisco de Miranda",
            C: "José de San Martín",
            D: "Antonio Nariño"
        },
        respuestaCorrecta: 'A'
    },
    6: {
        pregunta: "¿En qué año comenzó la independencia de Colombia?",
        opciones: {
            A: "1810",
            B: "1821",
            C: "1808",
            D: "1830"
        },
        respuestaCorrecta: 'A'
    },
    7: {
        pregunta: "¿Cómo se llama la moneda oficial de Colombia?",
        opciones: {
            A: "Peso",
            B: "Dólar",
            C: "Euro",
            D: "Bolívar"
        },
        respuestaCorrecta: 'A'
    },
    8: {
        pregunta: "¿Cuál es el nombre del presidente actual de Colombia?",
        opciones: {
            A: "Iván Duque",
            B: "Gustavo Petro",
            C: "Juan Manuel Santos",
            D: "Álvaro Uribe"
        },
        respuestaCorrecta: 'B'
    },
    9: {
        pregunta: "¿Cuál es la flor nacional de Colombia?",
        opciones: {
            A: "Orquídea",
            B: "Rosa",
            C: "Tulipán",
            D: "Girasol"
        },
        respuestaCorrecta: 'A'
    },
    10: {
        pregunta: "¿Qué es la cumbia?",
        opciones: {
            A: "Un baile y música tradicional",
            B: "Una danza africana",
            C: "Una comida típica",
            D: "Un festival de música"
        },
        respuestaCorrecta: 'A'
    },
    11: {
        pregunta: "¿En qué ciudad se encuentra el famoso Castillo de San Felipe?",
        opciones: {
            A: "Cali",
            B: "Cartagena",
            C: "Medellín",
            D: "Santa Marta"
        },
        respuestaCorrecta: 'B'
    },
    12: {
        pregunta: "¿Cómo se llama la famosa laguna de la Guajira?",
        opciones: {
            A: "Laguna de Tota",
            B: "Laguna de la Cocha",
            C: "Laguna de los Padres",
            D: "Laguna de la Ranchería"
        },
        respuestaCorrecta: 'D'
    },
    13: {
        pregunta: "¿Qué bebida típica colombiana se hace a base de caña de azúcar?",
        opciones: {
            A: "Aguardiente",
            B: "Cerveza",
            C: "Vino de palma",
            D: "Ron"
        },
        respuestaCorrecta: 'A'
    },
    14: {
        pregunta: "¿Qué es el Carnaval de Barranquilla?",
        opciones: {
            A: "Un festival de música",
            B: "Una fiesta religiosa",
            C: "Una fiesta de origen africano",
            D: "Un desfile de carrozas"
        },
        respuestaCorrecta: 'C'
    },
    15: {
        pregunta: "¿En qué región de Colombia se encuentran los Llanos Orientales?",
        opciones: {
            A: "Amazonas",
            B: "Cauca",
            C: "Orinoquía",
            D: "Andina"
        },
        respuestaCorrecta: 'C'
    },
    16: {
        pregunta: "¿Qué ciudad es conocida como la ‘Ciudad de la Eterna Primavera’?",
        opciones: {
            A: "Medellín",
            B: "Cali",
            C: "Bogotá",
            D: "Cartagena"
        },
        respuestaCorrecta: 'A'
    },
    17: {
        pregunta: "¿Quién es conocido como el ‘Ojo de Vidrio’?",
        opciones: {
            A: "Carlos Vives",
            B: "Gabriel García Márquez",
            C: "Fernando Botero",
            D: "Luis Carlos Galán"
        },
        respuestaCorrecta: 'D'
    },
    18: {
        pregunta: "¿Qué evento importante tuvo lugar en la ciudad de Cúcuta en 1821?",
        opciones: {
            A: "La firma de la independencia",
            B: "La Gran Convención de Cúcuta",
            C: "La batalla de Boyacá",
            D: "La creación de la Gran Colombia"
        },
        respuestaCorrecta: 'B'
    },
    19: {
        pregunta: "¿Qué significa el término ‘salsa’ en la música colombiana?",
        opciones: {
            A: "Ritmo del Caribe",
            B: "Estilo de danza afrocolombiana",
            C: "Estilo de música tropical",
            D: "Un tipo de fiesta"
        },
        respuestaCorrecta: 'C'
    },
    20: {
        pregunta: "¿En qué ciudad se encuentra la famosa Plaza de Bolívar?",
        opciones: {
            A: "Cartagena",
            B: "Cúcuta",
            C: "Bogotá",
            D: "Pereira"
        },
        respuestaCorrecta: 'C'
    },
    21: {
        pregunta: "¿Qué es la arepa?",
        opciones: {
            A: "Una bebida típica",
            B: "Una tortilla de maíz",
            C: "Un dulce tradicional",
            D: "Un plato a base de carne"
        },
        respuestaCorrecta: 'B'
    },
    22: {
        pregunta: "¿Cuál es la montaña más alta de Colombia?",
        opciones: {
            A: "Pico Cristóbal Colón",
            B: "Pico Bolívar",
            C: "Nevado del Ruiz",
            D: "Pico de la Nieves"
        },
        respuestaCorrecta: 'A'
    },
    23: {
        pregunta: "¿Qué es el ‘Muisca’?",
        opciones: {
            A: "Un tipo de pan",
            B: "Un grupo indígena",
            C: "Una danza tradicional",
            D: "Un río"
        },
        respuestaCorrecta: 'B'
    },
    24: {
        pregunta: "¿En qué región se encuentra el Parque Nacional Natural Tayrona?",
        opciones: {
            A: "Cundinamarca",
            B: "Atlántico",
            C: "Magdalena",
            D: "Norte de Santander"
        },
        respuestaCorrecta: 'C'
    },
    25: {
        pregunta: "¿Qué famosa isla colombiana es conocida por sus playas y aguas cristalinas?",
        opciones: {
            A: "Isla de San Andrés",
            B: "Isla del Rosario",
            C: "Isla Gorgona",
            D: "Isla de Providencia"
        },
        respuestaCorrecta: 'A'
    },
    26: {
        pregunta: "¿Qué animal es símbolo de la fauna colombiana?",
        opciones: {
            A: "Jaguar",
            B: "Cóndor",
            C: "Llama",
            D: "Oso de anteojos"
        },
        respuestaCorrecta: 'B'
    },
    27: {
        pregunta: "¿Cuál es la fiesta más importante de Medellín?",
        opciones: {
            A: "Feria de las Flores",
            B: "Carnaval de Barranquilla",
            C: "Festival Vallenato",
            D: "Feria de Cali"
        },
        respuestaCorrecta: 'A'
    },
    28: {
        pregunta: "¿Qué es la empanada colombiana?",
        opciones: {
            A: "Una bebida dulce",
            B: "Un pastelito relleno",
            C: "Un plato a base de carne",
            D: "Un tipo de pan"
        },
        respuestaCorrecta: 'B'
    },
    29: {
        pregunta: "¿Qué ciudad es conocida como la ‘Perla del Caribe’?",
        opciones: {
            A: "Santa Marta",
            B: "Cartagena",
            C: "Barranquilla",
            D: "Cúcuta"
        },
        respuestaCorrecta: 'B'
    },
    30: {
        pregunta: "¿Qué famoso escritor colombiano ganó el Nobel de Literatura en 1982?",
        opciones: {
            A: "Gabriel García Márquez",
            B: "Mario Vargas Llosa",
            C: "Jorge Luis Borges",
            D: "Carlos Vives"
        },
        respuestaCorrecta: 'A'
    },
    31: {
        pregunta: "¿Quién pintó la famosa obra ‘La Guernica’?",
        opciones: {
            A: "Pablo Picasso",
            B: "Frida Kahlo",
            C: "Diego Rivera",
            D: "Salvador Dalí"
        },
        respuestaCorrecta: 'A'
    },
    32: {
        pregunta: "¿Cuál es la principal fuente de energía en Colombia?",
        opciones: {
            A: "Carbón",
            B: "Gas natural",
            C: "Hidroelectricidad",
            D: "Energía solar"
        },
        respuestaCorrecta: 'C'
    },
    33: {
        pregunta: "¿Cuál es el volcán activo más alto de Colombia?",
        opciones: {
            A: "Nevado del Ruiz",
            B: "Galeras",
            C: "Nevado de Huila",
            D: "Cumbal"
        },
        respuestaCorrecta: 'A'
    },
    34: {
        pregunta: "¿En qué año fue la independencia de Colombia?",
        opciones: {
            A: "1810",
            B: "1816",
            C: "1821",
            D: "1800"
        },
        respuestaCorrecta: 'A'
    },
    35: {
        pregunta: "¿Cuál es la principal zona geográfica de Colombia?",
        opciones: {
            A: "Amazonía",
            B: "Andina",
            C: "Caribe",
            D: "Pacífica"
        },
        respuestaCorrecta: 'B'
    },
    36: {
        pregunta: "¿Cuál es el deporte nacional de Colombia?",
        opciones: {
            A: "Ciclismo",
            B: "Fútbol",
            C: "Tejo",
            D: "Béisbol"
        },
        respuestaCorrecta: 'C'
    },
    37: {
        pregunta: "¿Qué canción es el himno nacional de Colombia?",
        opciones: {
            A: "La Canción del Oro",
            B: "La Cucaracha",
            C: "Himno Nacional de la República de Colombia",
            D: "Cumbia Real"
        },
        respuestaCorrecta: 'C'
    },
    38: {
        pregunta: "¿Cuál es el principal símbolo de la independencia de Colombia?",
        opciones: {
            A: "La bandera tricolor",
            B: "El cóndor",
            C: "La flor de la orquídea",
            D: "El sombrero vueltiao"
        },
        respuestaCorrecta: 'A'
    },
    39: {
        pregunta: "¿Qué ciudad es conocida como la ‘Ciudad de las Murallas’?",
        opciones: {
            A: "Santa Marta",
            B: "Cartagena",
            C: "Barranquilla",
            D: "Medellín"
        },
        respuestaCorrecta: 'B'
    },
    40: {
        pregunta: "¿Qué animal es símbolo nacional de Colombia?",
        opciones: {
            A: "El cóndor",
            B: "El jaguar",
            C: "El oso de anteojos",
            D: "La llama"
        },
        respuestaCorrecta: 'A'
    },
    41: {
        pregunta: "¿Qué autor colombiano escribió ‘Cien años de soledad’?",
        opciones: {
            A: "Gabriel García Márquez",
            B: "Carlos Vives",
            C: "Fernando Botero",
            D: "Jorge Luis Borges"
        },
        respuestaCorrecta: 'A'
    },
    42: {
        pregunta: "¿Qué es el ‘Carnaval de Negros y Blancos’?",
        opciones: {
            A: "Un evento cultural en Cali",
            B: "Una festividad del sur de Colombia",
            C: "Un festival del carnaval",
            D: "Una fiesta de Santa Marta"
        },
        respuestaCorrecta: 'B'
    },
    43: {
        pregunta: "¿Cuál es la famosa cadena montañosa que cruza Colombia de sur a norte?",
        opciones: {
            A: "Los Andes",
            B: "Los Pirineos",
            C: "Los Alpes",
            D: "Los Apalaches"
        },
        respuestaCorrecta: 'A'
    },
    44: {
        pregunta: "¿Qué significa la palabra ‘Café’ en Colombia?",
        opciones: {
            A: "Una bebida alcohólica",
            B: "Una planta de la región",
            C: "Un alimento tradicional",
            D: "Una bebida energética"
        },
        respuestaCorrecta: 'B'
    },
    45: {
        pregunta: "¿En qué ciudad se encuentra la famosa Plaza de Bolívar?",
        opciones: {
            A: "Cartagena",
            B: "Cúcuta",
            C: "Bogotá",
            D: "Pereira"
        },
        respuestaCorrecta: 'C'
    },
    46: {
        pregunta: "¿Quién fue el último presidente de la Gran Colombia?",
        opciones: {
            A: "Simón Bolívar",
            B: "Antonio Nariño",
            C: "José Antonio Páez",
            D: "Francisco de Miranda"
        },
        respuestaCorrecta: 'A'
    },
    47: {
        pregunta: "¿Qué famoso escritor colombiano ganó el Premio Nobel de Literatura?",
        opciones: {
            A: "Gabriel García Márquez",
            B: "Mario Vargas Llosa",
            C: "Carlos Vives",
            D: "Fernando Botero"
        },
        respuestaCorrecta: 'A'
    },
    48: {
        pregunta: "¿Qué es el ‘Sombrero Vueltiao’?",
        opciones: {
            A: "Un sombrero típico de la región",
            B: "Un instrumento musical",
            C: "Una danza tradicional",
            D: "Una comida típica"
        },
        respuestaCorrecta: 'A'
    },
    49: {
        pregunta: "¿Qué cantante colombiano es conocido por su estilo único de música vallenata?",
        opciones: {
            A: "Carlos Vives",
            B: "Shakira",
            C: "Juanes",
            D: "J Balvin"
        },
        respuestaCorrecta: 'A'
    },
    50: {
        pregunta: "¿Cómo se llama el principal aeropuerto de Bogotá?",
        opciones: {
            A: "Aeropuerto Internacional El Dorado",
            B: "Aeropuerto Rafael Núñez",
            C: "Aeropuerto José María Córdova",
            D: "Aeropuerto Alfonso Bonilla Aragón"
        },
        respuestaCorrecta: 'A'
    },
    51: {
        pregunta: "¿En qué región de Colombia se encuentra el Parque Natural Los Nevados?",
        opciones: {
            A: "Región Andina",
            B: "Región Amazonía",
            C: "Región Caribe",
            D: "Región Pacífica"
        },
        respuestaCorrecta: 'A'
    },
    52: {
        pregunta: "¿Qué famoso escritor colombiano escribió ‘El Amor en los Tiempos del Cólera’?",
        opciones: {
            A: "Gabriel García Márquez",
            B: "Mario Vargas Llosa",
            C: "Carlos Vives",
            D: "Jorge Luis Borges"
        },
        respuestaCorrecta: 'A'
    },
    53: {
        pregunta: "¿Qué ciudad colombiana es famosa por su arquitectura colonial y su murallas históricas?",
        opciones: {
            A: "Cartagena",
            B: "Santa Marta",
            C: "Barranquilla",
            D: "Medellín"
        },
        respuestaCorrecta: 'A'
    },
    54: {
        pregunta: "¿Quién fue el último emperador inca que murió en territorio colombiano?",
        opciones: {
            A: "Túpac Amaru",
            B: "Atahualpa",
            C: "Pachacuti",
            D: "Huayna Cápac"
        },
        respuestaCorrecta: 'B'
    },
    55: {
        pregunta: "¿Cuál es la principal industria colombiana?",
        opciones: {
            A: "Agricultura",
            B: "Minería",
            C: "Turismo",
            D: "Petróleo"
        },
        respuestaCorrecta: 'D'
    },
    56: {
        pregunta: "¿Cómo se llama el famoso Carnaval de la región de la Costa Caribe?",
        opciones: {
            A: "Carnaval de Barranquilla",
            B: "Carnaval de Negros y Blancos",
            C: "Feria de las Flores",
            D: "Carnaval de Santa Marta"
        },
        respuestaCorrecta: 'A'
    },
    57: {
        pregunta: "¿Cuál es la mayor fuente de turismo en Colombia?",
        opciones: {
            A: "El Caribe",
            B: "Los parques naturales",
            C: "Las ciudades coloniales",
            D: "Los centros comerciales"
        },
        respuestaCorrecta: 'B'
    },
    58: {
        pregunta: "¿Qué es la música ‘vallenata’?",
        opciones: {
            A: "Una música tradicional de la región Caribe",
            B: "Un género de salsa",
            C: "Un estilo de música ranchera",
            D: "Una música del interior del país"
        },
        respuestaCorrecta: 'A'
    },
    59: {
        pregunta: "¿En qué ciudad se encuentran las ruinas de San Agustín?",
        opciones: {
            A: "Neiva",
            B: "Popayán",
            C: "Medellín",
            D: "Cúcuta"
        },
        respuestaCorrecta: 'A'
    },
    60: {
        pregunta: "¿Quién fue el líder guerrillero más famoso de Colombia en la década de 1980?",
        opciones: {
            A: "Pablo Escobar",
            B: "Manuel Marulanda",
            C: "Carlos Castaño",
            D: "Tirofijo"
        },
        respuestaCorrecta: 'B'
    }
};

const letras = ['A', 'B', 'C', 'D'];

function generarNumeroSecreto() {
    // Si ya se sortean todos los números, mostrar el mensaje
    if (listaNumerosSorteados.size === 60) {
        asignarTextoElemento('p', 'Terminaste el cuestionario y respondiste: '+ puntaje + ' Preguntas correctas de 60' );
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('verificarIntento').setAttribute('disabled','true');
        document.getElementById('preguntaAleatoria').setAttribute('disabled','true');
        return null; // No hay números disponibles
    }

    let numeroGenerado;
    // Generamos un número no repetido
    do {
        numeroGenerado = Math.floor(Math.random() * 60) + 1;
    } while (listaNumerosSorteados.has(numeroGenerado));

    // Añadimos el número generado al Set
    listaNumerosSorteados.add(numeroGenerado);

    return numeroGenerado;
}




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function validarEntrada(input) {
    const valor = input.value;
    const regex = /^[a-dA-D]$/;

    if (!regex.test(valor)) {
        // Si el valor no es válido, lo reseteamos
        input.setCustomValidity("Solo se permiten las letras a, b, c o d (mayúsculas o minúsculas)");
        input.value = ''; // Reseteamos el campo si el valor no es válido
    } else {
        input.setCustomValidity(""); // Limpiamos el mensaje de error si es válido
    }
}


// USO:
function mostrarPregunta() {
    const numero = generarNumeroSecreto(); // Genera un número aleatorio
    pregunta = preguntas[numero];    // Obtiene la pregunta correspondiente
    asignarTextoElemento('h1', `Pregunta ${listaNumerosSorteados.size} de 60`)

    if (pregunta) {
        // Mostrar en consola (opcional)
        console.log(`${numero}. ${pregunta.pregunta}`);
        for (const [letra, texto] of Object.entries(pregunta.opciones)) {
            console.log(`${letra}. ${texto}`);
        }

        // Mostrar en el HTML
        const texto = `${numero}. ${pregunta.pregunta}<br><br>Opciones:<br>` +
            Object.entries(pregunta.opciones)
                .map(([letra, texto]) => `${letra}. ${texto}`)
                .join('<br>');

        asignarTextoElemento('p', texto);
    }
    document.getElementById('verificarRespuesta').removeAttribute('disabled');
    document.getElementById('preguntaAleatoria').setAttribute('disabled','true');
    document.getElementById('valorUsuario').focus();
}


function verificarIntento() {
    // Obtenemos la respuesta del usuario
    let respuestaUsuario = document.getElementById('valorUsuario').value.toUpperCase(); // Aseguramos que sea mayúscula
    console.log(respuestaUsuario);
    
    // Verificamos si la respuesta del usuario está vacía
    const respuestaCorrecta = pregunta.respuestaCorrecta; // Respuesta correcta de la pregunta actual
    if (respuestaUsuario === '') {
        // Si no hay respuesta, mostramos la alerta
        alert('!!! ⚠️NO INGRESASTE NINGUNA RESPUESTA⚠️ ¡¡¡');
        // No cambiamos el estado de los botones, solo mantenemos la desactivación
        document.getElementById('verificarRespuesta').removeAttribute('disabled');
        return; // Salimos de la función para evitar más cambios
    }

    // Comprobamos si la respuesta es correcta
    if (respuestaUsuario === respuestaCorrecta) {
        // Respuesta correcta
        asignarTextoElemento('p', '¡Acertaste!');
        puntaje++;
        limpiarCaja();
        document.getElementById('preguntaAleatoria').removeAttribute('disabled');
        document.getElementById('verificarRespuesta').setAttribute('disabled','true');
    
    } else {
        // Respuesta incorrecta
        asignarTextoElemento('p', 'Respuesta incorrecta');
        limpiarCaja();
        document.getElementById('preguntaAleatoria').removeAttribute('disabled');
        document.getElementById('verificarRespuesta').setAttribute('disabled','true');
    }
    document.getElementById('valorUsuario').focus();
}


function limpiarCaja(){
    document.getElementById('valorUsuario').value = ''; // Limpiar el campo de texto
}

function reiniciarJuego() {
    // Restaurar los textos iniciales en h1 y p
    document.getElementById('tituloPregunta').textContent = 'Cuestionario sobre Colombia'; // Título original
    document.getElementById('opcionesTexto').textContent = 'Selecciona la respuesta correcta.'; // Texto de instrucciones

    // Vaciar el campo de entrada
    limpiarCaja();

    // Reiniciar botones
    document.getElementById('preguntaAleatoria').removeAttribute('disabled');
    document.getElementById('verificarRespuesta').setAttribute('disabled', true);
    document.getElementById('reiniciar').setAttribute('disabled', true);

    // Limpiar la lista de números sorteados
    listaNumerosSorteados.clear();

    // Si tienes alguna acción adicional para reiniciar, puedes agregarla aquí.
    puntaje = 0;
}



// Iniciar el ciclo

window.mostrarPregunta = mostrarPregunta;



