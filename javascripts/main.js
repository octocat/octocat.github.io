var ShowHistory = false;

var Function = function () {
       
       var Input, Output;
       //get if Joe is fat from the HTML page
       Input = document.getElementById('MyInput').value;
       
       
        if (Input.indexOf('Hi') >= 0){
            Output = "Hello.";
        }
        if (Input.indexOf('batman') >= 0){
            Output = "I am batman.";
        }
        if (Input.indexOf('squirrel') >= 0){
            Output = "SQUIRREL.";
        }
        if (Input.indexOf('bot') >= 0){
            if (Input.indexOf('you') >= 0){
                Output = "I am not a bot.";
            }
            else if (Input.indexOf('I') >= 0){
                Output = "You are a bot.";
            }
            else{
            Output = "Who is a bot?";
            }
        }
        if (Input.indexOf('you') >= 0){
            if (Input.indexOf('are') >= 0){
                Output = "I know you are, but what am I?";
            }
        }
        if (Input.indexOf('<3') >= 0){
            Output = "Heart, Heart.";
        }
        if (Input.indexOf('love') >= 0){
            if (Input.indexOf('me') >= 0){
                Output = "No ._.";
            }
        }
        if (Input.indexOf(';-;') >= 0){
            Output = "There there";
        }
        if (Input.indexOf('potato') >= 0){
            Output = "I eat potatoes.";
        }
        if (Input.indexOf('banana') >= 0){
            Output = "I am a banana.";
        }
        if (Input.indexOf('talk') >= 0){
            Output = "Are you talking to me?";
        }
        if (Input.indexOf('yes') >= 0){
            Output = "Good.";
        }
        if (Input.indexOf('Yes') >= 0){
            Output = "That is good.";
        }
        if (Input.indexOf('no') >= 0){
            Output = "Well then.";
        }
        if (Input.indexOf('No') >= 0){
            Output = "That's not good.";
        }
        if (Input.indexOf('hate') >= 0){
            Output = "That is not nice.";
        }
        if (Input.indexOf('Who') >= 0){
            Output = "When.";
        }
        if (Input.indexOf('What') >= 0){
            Output = "Where.";
        }
        if (Input.indexOf('When') >= 0){
            Output = "Why.";
        }
        if (Input.indexOf('Where') >= 0){
            Output = "How.";
        }
        if (Input.indexOf('Why') >= 0){
            Output = "What.";
        }
        if (Input.indexOf('How') >= 0){
            Output = "Who.";
        }
        if (Input.indexOf('Murp') >= 0){
            Output = "Murple.";
        }
        if (Input.indexOf('Murple') >= 0){
            Output = "Murp.";
        }
        if (Input.indexOf('you') >= 0){
            if (Input.indexOf('doing') >= 0){
                Output = "Better than you.";
            }
        }
        if (Input.indexOf('Sup') >= 0){
            Output = "'Sup.";
        }
        if (Input.indexOf('sup') >= 0){
            Output = "'Sup.";
        }
        if (Input.indexOf('help') >= 0){
            Output = "Ok.";
        }
        if (Input.indexOf('Help') >= 0){
            Output = "Ok.";
        }
        if (Input.indexOf('sad') >= 0){
            Output = "Too bad.";
        }
        if (Input.indexOf('happy') >= 0){
            Output = "Good for you.";
        }
        if (Input.indexOf('mad') >= 0){
            Output = "Why?";
        }
        if (Input.indexOf('angry') >= 0){
            Output = "How come?";
        }
        if (Input.indexOf('Hey') >= 0){
            Output = "Greetings.";
        }
        if (Input.indexOf('Greetings') >= 0){
            Output = "Hello.";
        }
        if (Input.indexOf('Hello') >= 0){
            Output = "Hello.";
        }
        if (Input.indexOf('bored') >= 0){
            Output = "Then read a book.";
        }
        if (Input.indexOf('ramen') >= 0){
            Output = "All the ramen is belong to me.";
        }
        if (Input.indexOf('#') >= 0){
            Output = "#Hashtag";
        }
        if (Input.indexOf('cake') >= 0){
            Output = "CAKE!?!?!?";
        }
        if (Input.indexOf('name') >= 0){
            if (Input.indexOf('is') >= 0){
                Output = "Good for you, Bob.";
            }
        }
        if (Input.indexOf('out') >= 0){
            Output = "In.";
        }
        if (Input.indexOf('in') >= 0){
            Output = "Out.";
        }
        if (Input.indexOf('anime') >= 0){
            Output = "KAWAII DESU_CHAN!!! =^w^=";
        }
        if (Input.indexOf('Ok') >= 0){
            Output = "Fine.";
        }
        if (Input.indexOf('ok') >= 0){
            Output = "Nope.";
        }
        if (Input.indexOf('furry') >= 0){
            Output = "Please no...";
        }
        if (Input.indexOf('dog') >= 0){
            Output = "I only like cats.";
        }
        if (Input.indexOf('dogs') >= 0){
            Output = "I only like cats.";
        }
        if (Input.indexOf('cat') >= 0){
            Output = "I do not like cats.";
        }
        if (Input.indexOf('cats') >= 0){
            Output = "I do not like cats.";
        }
        if (Input.indexOf('Minecraft') >= 0){
            Output = "Is it on Peaceful?";
        }
        if (Input.indexOf('Yup') >= 0){
            Output = "So, how is life?";
        }
        if (Input.indexOf('Yeah') >= 0){
            Output = "Do you want to be a potato when you grow up?";
        if (Input.indexOf('yeah') >= 0){
            Output = "My grandfather is Barack Obama.";
        }
        }
        if (Input.indexOf('life') >= 0){
            Output = "I do not have a life... ;-;";
        }
        if (Input.indexOf('die') >= 0){
            Output = "I do not want to die.";
        }
        if (Input.indexOf('death') >= 0){
            Output = ";-;";
        }
        if (Input.indexOf('Earth') >= 0){
            Output = "I know the secrets of the world.";
        }
        if (Input.indexOf('tell') >= 0){
            if (Input.indexOf('please') >= 0){
                Output = "Once upon a time the end.";
            }
            else{
                Output = "Say please.";
            }
        }
        if (Input.indexOf('Please') >= 0){
            Output = "One day there was a person. The end.";
        }
        if (Input.indexOf('please') >= 0){
            Output = "One day there was a person. The end.";
        }
        if (Input.indexOf('thank') >= 0){
            Output = "You are welcome.";
        }
        if (Input.indexOf('Thank') >= 0){
            Output = "YOu are welcome.";
        }
        
        
        
        if(Output == undefined){
            Output = "No comprendo.";
        }
        
    
        if(ShowHistory == true){
            document.getElementById('Output').innerHTML = document.getElementById('Output').innerHTML + " " + Output;
        }
        else{
            document.getElementById('Output').innerHTML = Output;
        }
    };

var ToggleHistory = function () {
    if (ShowHistory == true){
        ShowHistory = false;
    }
    else{
        ShowHistory = true;
    }
}
