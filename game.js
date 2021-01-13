$(document).ready(function() {
    $(".p_choice").click(function(){
    var p_choice= $(this).attr("id");
    
        
    //get choices    
    var rps = ['rock', 'paper', 'scissors'];
    var bot_choice = rps[Math.floor(Math.random() * 3)];
    console.log("Escolha player: " +p_choice);
    console.log("Escolha bot: "+ bot_choice);
    var bot_img = document.createElement("IMG");
    bot_img.src = "img/"+ bot_choice +".png";
    document.getElementById('bot_choice').appendChild(bot_img);
    
    // check winner    
        
    if (p_choice === bot_choice){
        result="tie"
    }else if(p_choice === "rock"){
        if(bot_choice=="scissors"){
            result = "win"
        }else if(bot_choice==="paper"){
            result = "loss"
        }
    }else if(p_choice === "scissors"){
        if(bot_choice === "paper"){
            result ="win"
        }else if(bot_choice ==="rock"){
            result ="loss"
        }
    }else if(p_choice ==="paper"){
        if(bot_choice==="rock"){
            result="win"
        }else if(bot_choice==="scissors"){
            result="loss"
        }
    }
        
    // results update
    var result_output = 500;

    setTimeout(function() {
        document.getElementById('result').innerHTML = result + "!";
        document.getElementById('result').innerHTML += " ... wait please..."
        if (result==="win"){
        var score = document.getElementById('player_score').innerText;
        var score_int = parseInt(score);
        var new_score = score_int+1;
        if( new_score===3){
            alert('Ganhaste o jogo')
            location.reload()
        }else{    
            
        document.getElementById('player_score').innerHTML= new_score.toString();
        }
    }else if(result==="loss"){
        var score_bot = document.getElementById('bot_score').innerText;
        var score_bot_int = parseInt(score_bot)
        var new_score_bot = score_bot_int+1
        if (new_score_bot===3){
            alert('Perdeste o jogo')
            location.reload()
        }else{
        document.getElementById('bot_score').innerHTML= new_score_bot.toString()
        }
    }
    
    }, result_output);
        
    //clean bot div    
    $(".p_choice").hide();      
    var new_game = 2000;    
    setTimeout(function() {
        
        $( "#bot_choice" ).empty();
        $( "#result" ).empty();
        $(".p_choice").show();
        }, new_game);
          
        
    });
});
