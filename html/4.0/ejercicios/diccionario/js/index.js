var input = document.querySelector('input.campo');

var select = document.querySelector('.select select');

var options = '';
var regEx;
var opciones;

var textarea = document.querySelector('textarea');

var palabras = [
    'Abstraction', 'Acoplamiento', 'Agregación', 'Algoritmo', 'Ambito de clase','Análisis', 'Aplicación', 'Array','Egolatría','Criollo','Elucubración', 'Calificación', 'Capacidad','Evaluación final','Evidencias','Examen oral','Incidentes críticos','Instructor','Interés','Mentoría','Monitorización','Tutor','Temblor','Prueba objetiva','Profesores noveles','Metodo','Atributos','Glosario','Galeón','Galaxia','país','paciencia','zafiro','zaguán','tamarindo','tambor','vacaciones','vacuna','valeriana','nacer','nación','teclado','agua','Voz','Testa Motors','Lenguaje de programacion','Depurador','Diseño', 'Encapsulamiento', 'Sintaxis'
];

var definiciones = [
    'Propiedad y/o técnica de software que oculta los detalles de la implementación.',
    'Medida del grado en el que un objeto o componente depende de otro.',
    'Relación en la que un objeto se compone o está construido de uno o más objetos, de modo que la colección completa representa un todo.',
    'Método que describe cómo se resuelve un problema en término de las acciones que se ejecutan y especifica el orden en que se ejecutan estas acciones. ',
    'Las variables privadas definidas fuera de los métodos internos a la clase tienen ámbito de clase.',
    'Proceso de identificación, modelado y descripción de lo que hace un sistema y de cómo trabaja',
    'Programa autónomo Java tal como cualquier programa escrito utilizando un lenguaje de alto nivel',
    'Objeto contenedor que almacena una secuencia indexada de los mismos tipos de datos.',
    'Culto y veneración que una persona se profesa a sí mismo.',
    'Que es característico de la cultura y la tradición de un país hispanoamericano.',
    'Pensamiento o reflexión sobre algo conseguido tras un intenso trabajo intelectual.',
    'Expresión numérica o nominal que genera normalmente un profesor',
    'Habilidad genera',
    'Comprobación de los resultados logrados al final de un proceso y valoración',
    'Actuaciones observables o trabajos presentados por los alumnos para ser evaluados.',
    'Prueba para determinar el nivel de aprendizaje de los estudiantes',
    'Hechos o acontecimientos que resultan especialmente relevantes',
    'Se dice del docente que actúa pretendiendo sólo “llenar la cabeza” del estudiante de contenidos teóricos. ',
    'Señala una tendencia observable en la conducta de una persona a preferir',
    'Acción tutorial desarrollada por compañeros. ',
    'Seguimiento periódico del trabajo del alumno para corregir errores',
    'Docente que se responsabiliza de realizar la acción tutorial con un grupo de estudiantes. ',
    'movimiento sismico',
    'Modalidad de prueba escrita usada para la evaluación del aprendizaje',
    'Profesores recién incorporados a la docencia universitaria. ',
    'Algoritmo asociado a un objeto (o a una clase de objetos), cuya ejecución se desencadena tras la recepción de un "mensaje". ',
    'características que tiene la clase',
    'Lista breve en la que se explica el significado de las palabras más difíciles o más importantes de un texto.',
    'Conjunto de estrellas, planetas, polvo interestelar, gases y partículas que giran alrededor de un centro y ocupan una parte del universo.',
    'Barco antiguo grande de vela con 3 o 4 palos diseñado por los españoles.',
    'Área geográfica que tiene su propio gobierno y sus leyes.',
    'Capacidad de aguantar situaciones desagradables, dolorosas, ofensivas o pesadas sin quejarse',
    'Piedra preciosa de color azul. Es tan valiosa como los diamantes.',
    'Patio cubierto en la entrada de algunas casas. Está situado al entrar por la puerta de la calle.',
    'Árbol tropical de tronco grueso y muy alto. La corteza es gris. Tiene flores de color amarillo',
    'Instrumento musical de percusión.',
    'Tiempo de descanso de una actividad habitual, como el trabajo o los estudios.',
    'Líquido que los médicos inyectan a una persona o a un animal para evitar enfermedades. ',
    'Planta de tallo recto y hojas puntiagudas.',
    'Salir una persona o animal del vientre de su madre. Salir un animal de un huevo o una planta de una ...',
    'Grupo de personas que viven en un mismo territorio y con un mismo gobierno',
    'Periferico de una conputadora',
    'Liquido vita lapra la vida','Sonido que emite una persona al hablar','Empresa de Elon Musk',
    'Es un lenguaje formal que, mediante una serie de instrucciones, le permite a un programador escribir un conjunto de órdenes, acciones consecutivas, datos y algoritmos para, de esa forma, crear programas que controlen el comportamiento físico y lógico de una máquina.',
    'Herramienta para ayudar a la localización de errores de un programa',
    'Localización y protección de las características internas y estructura de un objeto',
    'Un conjunto de reglas que especifica la composición de programas a partir de palabras reservadas, símbolos y caracteres. '
]

// for(let i = 0;i<palabras.length;i++) {
//     options += `<option value='${i}'>${palabras[i]}</option>`;
// }
// select.innerHTML = options;
select.size = select.length;

const mostrarDefinicion = () => {
    opciones.forEach(opcion => {
        opcion.addEventListener('click', ()=> {
            textarea.value = definiciones[opcion.value];
            console.log(opcion.value);
        });
    });
};

const limpiarLista = () => {
    options = '';
    select.innerHTML = options;
};

input.addEventListener('keyup', ()=> {

    limpiarLista();
    regEx = new RegExp(`${input.value}`, 'gim');
    console.log(regEx);
    if((input.value).length == 0){
        textarea.value = '';
    }else {
        for(let i = 0;i<palabras.length;i++) {
            if(regEx.test(palabras[i])) {
                options += `<option value='${i}'>${palabras[i]}</option>`;
            }
        }
    }
    select.innerHTML = options;
    select.size = 25;

    opciones = document.querySelectorAll('.select select option');
    mostrarDefinicion();

});
