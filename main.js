/* 
SIN LIMITE DE CONVINACIONES
*/


const numeroDePreguntasDelExamen = document.getElementById("nºDePreguntasDelExamen");
console.log(numeroDePreguntasDelExamen);

var doc = new jsPDF();
document.getElementById("añadirPregunta").addEventListener("click", añadirElemento());


function añadirElemento() {
    let lista = [];
    let elemento = document.getElementById("item-a-añadir");
    lista.push(elemento);
    document.getElementById("item-a-añadir").value = "";
    console.log(numeroDePreguntasDelExamen);
    return lista;
}


/* let pregutasPosibles = ["¿Qué es Al-Andalus y cómo surgió?", "¿Cuál fue el período de tiempo que Al-Andalus existió en la Península Ibérica?", "¿Cuáles fueron las principales ciudades de Al-Andalus?", "¿Cuáles fueron las religiones presentes en Al-Andalus y cómo coexistieron?", "¿Quiénes fueron los principales líderes y dinastías que gobernaron Al-Andalus?"]; */


let pregutasPosibles = añadirElemento();


/* 
GENERAR ARRAY DE TODAS LAS POSIBLES CONVIANCIONES
 */
function combinations(pregutasPosibles, k) {
    let result = [];
    function backtrack(start, combination) {
        if (combination.length === k) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i < pregutasPosibles.length; i++) {
            combination.push(pregutasPosibles[i]);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }

    backtrack(0, []);
    return result;
}



/* 
    ESCOGER UN EXAMEN AL AZAR DE TODOS LOS POSIBLES
*/
function chosseOneExamn(listExams){
    let exam = listExams[Math.floor(Math.random() * listExams.length)];
    return exam;
}
/* 
DESCARGAR PDF DE TODOS LOS POSIBLES EXAMENES
 */
function arrayToReadablePDF(questions, title) {
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(16);

    doc.text("TITULO " + title + "\n", 10, 20);


    doc.setFontType("normal");
/*     doc.text("\nNúmero de posibles examenes: "+questions.length, 10, 20);
 */    doc.setFontSize(12);

    questions.forEach((question, index) => {
        doc.addPage();

        //doc.text(`${index + 1}. ${question}\n`, 10, (index + 2) * 15);

        // doc.text("EXAMEN DE PRUEBA");
        doc.text("\nExamen de prueba", 10, (index + 2) * 15);

        question.forEach((answer, answerIndex) => {
            doc.text(`${answerIndex + 1}. ${answer}\n`, 10, (index + 3 + answerIndex) * 15);
        });
    });

    doc.save("preguntas_Al-Andalus.pdf");
}
console.log(combinations(pregutasPosibles, numeroDePreguntasDelExamen));//EN CADA ARRAY HABRA SOLO 5 
console.log( chosseOneExamn(combinations(pregutasPosibles, numeroDePreguntasDelExamen), "- EXAMEN ELEGIDO -"));
arrayToReadablePDF(
    chosseOneExamn(combinations(pregutasPosibles, numeroDePreguntasDelExamen), "- EXAMEN ELEGIDO -")
        );

// ARRAY DE PALABRAS , NUMERO DE PALABRAS PARA CADA ARRAY DEFINITIVO

