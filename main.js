function add_user(){
    player_1_name = document.getElementById("player_1_name").value;
    player_2_name = document.getElementById("player_2_name").value;
    
    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);
    
    window.location("game_page.html");
    }

    function send(){
        number1 = document.getElementById("number1").value;

        number2 = document.getElementById("number2").value;
        
        actual_answer = parseInt(number1) * parseInt(number2);
        
        question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
        
        input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
        
        check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>check</button>";
        
        row = question_number + input_box + check_button;
     
        document.getElementById("output").innerHTML = row;

        document.getElementById("number1").value = "";

        document.getElementById("number2").value = "";
        
    }