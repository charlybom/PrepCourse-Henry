

document.getElementById('boton1').addEventListener('click', function() {
    document.getElementById('text1').style.display = 'block';
    document.getElementById('text1').textContent = '';
    document.getElementById('text2').textContent = '';
    document.getElementById('text2').style.display= 'block';
    document.getElementById('text3').style.display= 'block';
    var p2 = document.getElementById('text1');
    var p3=  document.getElementById('text2');
    var p4=  document.getElementById('text3');
    document.getElementById('text6').style.display= 'none';
    document.getElementById('text5').style.display= 'none';
   
    if (p2.textContent === "") {
        
        p2.textContent ="El Pec Fly, o vuelo de pecho, es un ejercicio común en el entrenamiento de fuerza que se enfoca en los músculos pectorales (pectoral mayor y pectoral menor), así como en los deltoides anteriores y los músculos serratos. Aquí tienes una descripción de la técnica básica para realizar el Pec Fly en una máquina de cables o en un equipo de pesas:";
        
        p3.textContent ='El press banca es el ejercicio de fuerza por excelencia y uno de los tres de las competiciones de powerlifting junto a la sentadilla y el peso muerto. Se trata de un elemento básico para este tipo de entrenamiento pero, aunque se trate de un ejercicio esencial, es muy fácil caer en error a la hora de hacerlo. Hacer \n de forma incorrecta este ejercicio puede suponer que no estés sacando el máximo potencial y, en algunos casos, llegar a la lesión. Por eso, lo mejor es seguir unos sencillos consejos que te ayudarán a tener el máximo rendimiento \n con el press de banca y además hacerlo de forma segura para lograr un pecho grande y fuerte.';

        p4.textContent ="Técnica del pull over\n El pull over es un ejercicio realizado con mucha frecuencia en gimnasios.\n Como todos los ejercicios que realicemos, se debe conocer la técnica para realizarlo correctamente\nPosición Inicial. Tumbados en el banco, la espalda completamente apoyada en este y los pies en el suelo. Con los brazos extendidos, cogemos una mancuerda con la palma de ambas manos por la parte del disco.\nA continuación, se realiza una flexión de hombro, llevando la mancuerda por encima de la cabeza, realizando una leve flexión del codo. En este movimiento, aprovechando la expansión de la caja toráxica, inspiraremos Una vez la pesa haya llegado a la altura de la cabeza, se volverá a la posición de partida realizando una extensión de hombro, hasta que el ángulo entre el hombro y el tronco forme un ángulo recto, listos para la siguiente repetición.¿Qué músculos trabaja?\n El ejercicio pull over implica dos movimientos principales, la extensión y flexión de hombros, que implican un rango de movimiento muy amplio y movilizan una articulación donde se insertan muchos músculos, por lo que son múltiples los grupos musculares que se trabajan con este ejercicio. Efectúan una acción agonista o antagonista en el movimiento:";
        
        document.getElementById('table1').style.display= 'block';
        
        document.getElementById('mi_video').style.display= 'block';
        document.getElementById('mi_video2').style.display= 'block';
        document.getElementById('mi_video3').style.display= 'block';
        document.getElementById('im4').style.display= 'none';
        document.getElementById('im5').style.display= 'none';
        document.getElementById('im6').style.display= 'none';
        document.getElementById('mi_video4').style.display= 'none';
        document.getElementById('mi_video5').style.display= 'none';
        document.getElementById('mi_video6').style.display= 'none';


    }else{
        p2.textContent ="probando el else";
    }
      
});   

document.getElementById('boton2').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
    
    if (p2.textContent === "parrafo2") {
        p2.style.display="none";
        document.getElementById('mi_video4').style.display= 'block';
        document.getElementById('mi_video').style.display= 'none';
        document.getElementById('mi_video2').style.display= 'none';
        document.getElementById('mi_video3').style.display= 'none';
        document.getElementById('im4').style.display= 'none';
        document.getElementById('im5').style.display= 'none';
        document.getElementById('im6').style.display= 'none';
        document.getElementById('text2').style.display= 'none';
        document.getElementById('text3').style.display= 'none';
        document.getElementById('mi_video5').style.display= 'block';
        document.getElementById('mi_video6').style.display= 'block';
        document.getElementById('text4').style.display= 'block';
        document.getElementById('text6').style.display= 'block';
        document.getElementById('text5').style.display= 'block';
    }else{
        p2.textContent ="probando el else";
    }
      
});   

document.getElementById('boton3').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="informacion de prueba tercer  boton";
    }else{
        p2.textContent ="probando el else";
    }
      
});   

document.getElementById('boton4').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="informacion de prueba cuarto  boton";
    }else{
        p2.textContent ="probando el else";
    }
      
}); 

document.getElementById('boton5').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    document.getElementById('text2').style.display= 'block';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="informacion de prueba quinto  boton";
        
    }else{
        p2.textContent ="probando el else";
    }
      
});

document.getElementById('boton6').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="boton de pueba num 6:";
        document.getElementById('text2').style.display= 'block';
    }else{
        p2.textContent ="probando el else";
    }
      
}); 
document.getElementById('boton7').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="boton de pueba num 7:";
        document.getElementById('text2').style.display= 'block';
    }else{
        p2.textContent ="probando el else";
    }
      
}); 

document.getElementById('boton9').addEventListener('click', function() {
    document.getElementById('text1').textContent = 'parrafo2';
    var p2 = document.getElementById('text1');
   
    if (p2.textContent === "parrafo2") {
        p2.textContent ="boton de pueba num 8:";
        document.getElementById('text2').style.display= 'block';
    }else{
        p2.textContent ="probando el else";
    }
      
});     