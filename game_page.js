var player1_name = localStorage.getItem("player_1_name");
var player2_name = localStorage.getItem("player_2_name");
var player1_score = 0;
var player2_score = 0;
var question_turn = "p1";
var answer_turn = "p2";
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
function submit_word(){
    var getWord = document.getElementById("input_word").value;
    word = getWord.toLowerCase();
    console.log("Word - " + word);
    var character1 = word.charAt(1);
    console.log("Character 1 - " + character1);
    var length_divide_half = Math.floor(word.length/2);
    var character2 = word.charAt(length_divide_half);
    console.log("Character half - " + character2);
    var length_last_letter = word.length - 1;
    var character3 = word.charAt(length_last_letter);
    console.log("Character last - " + character3);
    var replace_character1 = word.replace(character1, "_");
    var replace_character2 = replace_character1.replace(character2, "_");
    var replace_character3 = replace_character2.replace(character3, "_");
    console.log("Full edited word - " + replace_character3);
    var questionWord = "<h4 id='word_display'>Q." + replace_character3 + "</h4>";
    var inputbox = "<br> Answer: <input id='inputbox' type='text'>";
    var checkbuttton = "<br><br><button class='btn btn-primary' onclick='Check()'>Check</button>";
    var row = questionWord + inputbox + checkbuttton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_word").value = "";
}
function Check(){
    var inputword = document.getElementById("inputbox").value;
    var actualinputword = inputword.toLowerCase();
    console.log("actualinputword: " + actualinputword);
    if(actualinputword == word){
        if(answer_turn == "p2"){
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        if(answer_turn == "p1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        
    }
        if(answer_turn == "p2"){
            answer_turn = "p1";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
        }
        else{
            answer_turn = "p2";
            document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
        }
        if(question_turn == "p2"){
            question_turn = "p1";
            document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
        }
        else{
            question_turn = "p2";
            document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
        }
        document.getElementById("output").innerHTML = "";
    }
