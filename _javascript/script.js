var video = document.getElementById("playerCustomizado");



function telaCheia() //Tela Cheia
{      

    video.requestFullscreen();  

}  

function playPause() // Play Pause
{
    
    if (video.paused || video.ended) {
        video.play();
    }
    else{
        video.pause()
    }
    
}  

function ampliar() // Ampliar tamanho do player
{

    video.width = 600;

}  

function reduzir() // Reduzir tamanho do player
{  

    video.width = 300;

}
 
function tamaNormal() // Tamanho normal da tela do player
{

    video.width = 410;

}  

function volMais() // Aumentar volume do player
{
    video.volume += 0.1;
} 

function volMenos() // Diminuir volume do player
{

    video.volume -= 0.1;

} 

function mute() // Mutar e desmutar volume do player
{      

    if(video.muted || video.volume === 0){
        video.volume = 1;
    }else{
        video.volume = 0;
    }

} 