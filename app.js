


//Boton
const value = document.querySelector('.ball__ctn--value')
const sonidos = document.getElementById('sonido')

//Función al dar click
document.getElementById('click').addEventListener('click',()=>{
document.getElementById('title').style.display = 'none';
sonidos.innerHTML = '<audio src="audio/maquina (online-audio-converter.com).mp3" autoplay></audio>'

//Obtenemos el modal y el valor del mismo
const ballModal = document.querySelector('.ball__modal');
const ballModalAns = document.querySelector('.ball__modal--ans');


//Definimos el tiempo y las veces que se mostrará el numero aleatorio 
let randomNumber = 0;
let iterador = 0;


    //Definimos el temprizador
    let temporizador = setInterval(() => {

        //Obtenemos el número aleatorio
        randomNumber = Math.floor(Math.random()*8);
        //colocamos dicho valor en el navegador
        value.textContent = randomNumber;

        //hacemos que el tiempo y el iterador vayan incrementando
        iterador++;
        value.style.animation = `maquina 0.09s infinite ease`;
        
        //cuando el iterador llegue a 10 se plasmará la respuesta aleatoria en el modal
        if(iterador == 45){
            clearInterval(temporizador);
            value.style.animation = 'regresar .5s ease-in';
            value.style.color = "#0d86d6";
            const answers ={
                8: 'Sin lugar a dudas',
                7: 'Si, definitivamente',
                6: 'Las señales apuntan a que sí',
                5: 'Lo más probable',
                4: 'Como yo lo veo... si',
                3: 'Mejor no decirte ahora',
                2: 'Vuelve a preguntar mas tarde',
                1:  'No cuentes con ello'
            }
            
            const defaultAnswer = 'Mmmm... no'
            
            let eightBall = answers[randomNumber] || defaultAnswer;
                setTimeout(() => {
                    ballModal.style.display = "flex";
                    ballModalAns.innerHTML = eightBall + "<br> <em>Reinicia para volver a preguntar</em>";
                }, 1500);
        }
    }, 150);





})
