

document.getElementById('boton').addEventListener('click', function() {
    var p1 = document.getElementById('p1');
    if (p1.textContent === "COMO HAGO PARA CRECER MIS MUSCULOS") {
         p1.textContent ="TRES TIPOS DE HIPERTROFIA";    
         document.getElementById('boton').style.backgroundColor = 'yellow';
         document.getElementById('li1').textContent = 'Tension mecanica';
         document.getElementById('t1').textContent = 'tensión en las fibras musculares trabajando con cargas pesadas y progresivas en los distintos rangos de repeticiones.';
         document.getElementById('li1').style.backgroundColor = "yellow";
         document.getElementById('li1').style.color = 'black';
   
         document.getElementById('li2').textContent = 'Estrés metabólico';
         document.getElementById('t2').textContent = 'Los tipos de entrenamiento con altas repeticiones y descanso reducido producirá un aumento del sarcoplasma muscular.';
         document.getElementById('li2').style.backgroundColor = "yellow";
         document.getElementById('li2').style.color = 'black';
         
         document.getElementById('im4').style.display= 'none';
         document.getElementById('im5').style.display= 'block';
         document.getElementById('text1').textContent = 'parrafo2';
         document.getElementById('mi_video').style.display= 'none';
         document.getElementById('mi_video2').style.display= 'none';
         document.getElementById('mi_video3').style.display= 'none';
         document.getElementById('table1').style.display= 'none';
         


         document.getElementById('li3').textContent = 'Reparación muscular:';
         document.getElementById('t3').textContent = 'pueden producirse microroturas debido al entrenamiento, con un buen descanso y un plan nutricional adecuado, nuestro organismo responde a ese daño siendo más eficiente que antes de producirse ese factor estresante.';
         document.getElementById('li3').style.backgroundColor = "yellow";
         document.getElementById('li3').style.color = "black";

         document.getElementById('text1').style.display= 'none';
         document.getElementById('text2').style.display= 'none';
         document.getElementById('text3').style.display= 'none';
       
    } else {
          p1.textContent = "SARCOMERICA Y SARCOPLASMATICA";
          let tipos = document.getElementById('t1');
          document.getElementById('boton').style.backgroundColor = 'red';
          tipos.textContent = 'Por definición, hipertrofia significa: crecimiento o aumento en el tamaño de las fibras musculares para así hacer crecer el músculo.';
          // Eliminar otros elementos
          document.getElementById('li1').textContent = '';
          document.getElementById('li2').textContent = '';
          document.getElementById('li3').textContent = '';
          document.getElementById('t1').style.color = 'white';
          document.getElementById('t2').style.color = 'white';
          document.getElementById('t3').style.color = 'white';
          document.getElementById('t4').style.color = 'white';
          document.getElementById('t4').textContent = 'La hipertrofia sarcomérica es aquella que se produce gracias al aumento de las proteínas contráctiles del músculo, aumentando así el tamaño de las fibras musculares. De esta forma se verán muy aumentados los niveles de fuerza, motivo por el que también se conoce como hipertrofia funcional.';
          document.getElementById('im4').style.display= 'none';
          document.getElementById('im5').style.display= 'none';
          document.getElementById('im6').style.display= 'block';
          document.getElementById('mi_video').style.display= 'none';
          document.getElementById('mi_video2').style.display= 'none';
          document.getElementById('mi_video3').style.display= 'none';
          document.getElementById('table1').style.display= 'none';
          document.getElementById('text1').style.display= 'none';
          document.getElementById('text2').style.display= 'none';
          document.getElementById('text3').style.display= 'none';
          document.getElementById('mi_video4').style.display= 'block';
        document.getElementById('mi_video4').style.display= 'none';
        document.getElementById('mi_video5').style.display= 'none';
        document.getElementById('mi_video6').style.display= 'none';
        
        }


});  


