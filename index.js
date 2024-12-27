


    //---

    function startGame() {
        const overlay = document.querySelector("#overlay");
        const counter = document.querySelector("#counter");
        const bodygame=document.querySelector("#bodygame")
        const loading=document.querySelector("#loading")
        
        let count = 1;
    
            setInterval(() => {
               
            
            if (count <100) {
                count++
                counter.innerText = `${count}%`
                counter.style.width=`${count}%`
               
               
            }
            else{
                overlay.style.display = 'none';
                bodygame.style.display = 'block';

            }
        }, 60);
    }
    
    
    window.onload = startGame;

    //---

    let user1point=0;
    let user2point=0;


function playGame(yourchoose){

    const arr=["rock","paper","scissors"];
    const randomel=Math.floor(Math.random()*arr.length)
    const compchose=arr[randomel]
    console.log(compchose);

    const yourpoint=document.querySelector("#yourpoint")
    const comppoint=document.querySelector("#comppoint")
    const resultgame=document.querySelector("#resultgame")
   


    
    if(user1point>=10 || user2point >=10){
        resultgame.innerText = `Game over! Reset to play again.`
        return
    }

    let resultmes="";

    if(yourchoose===compchose){
        resultmes="Draw Draw! Your and computer choice same."
    }else if(
        (yourchoose==="rock" && compchose==="scissors")||
    (yourchoose==="scissors" && compchose==="paper")||
    (yourchoose==="paper" && compchose==="rock")){
        resultmes=`You win this round. ${yourchoose} beats ${compchose}`;
        user1point+=1
    }else{
         resultmes=`You lose this round.${compchose} beats ${yourchoose} `;
         user2point+=1
    }

    resultgame.innerText=resultmes
    yourpoint.innerText=user1point
    comppoint.innerText=user2point
}

function resetGame(){

    user1point=0;
    user2point=0;
    yourpoint.innerText=user1point
    comppoint.innerText=user2point
    resultgame.innerText="Make your choice to start the game!"

}

function exitGame(){
    window.close()
}

function backHome(){
    window.location.reload()
}

