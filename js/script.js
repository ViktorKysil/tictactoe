var turns = 0;


// Function called whenever user tab on any box
function myfunc() {


    document.getElementById('trn').innerHTML = 'Number of turns: ' + turns;

    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(71, 163, 255)";
        b1 = document.getElementById("b1").style.color = "white";
        b2 = document.getElementById("b2").style.backgroundColor = "rgb(71, 163, 255)";
        b2 = document.getElementById("b2").style.color = "white";
        b3 = document.getElementById("b3").style.backgroundColor = "rgb(71, 163, 255)";
        b3 = document.getElementById("b3").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(71, 163, 255)";
        b1 = document.getElementById("b1").style.color = "white";
        b4 = document.getElementById("b4").style.backgroundColor = "rgb(71, 163, 255)";
        b4 = document.getElementById("b4").style.color = "white";
        b7 = document.getElementById("b7").style.backgroundColor = "rgb(71, 163, 255)";
        b7 = document.getElementById("b7").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;


    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b7 = document.getElementById("b7").style.backgroundColor = "rgb(71, 163, 255)";
        b7 = document.getElementById("b7").style.color = "white";
        b8 = document.getElementById("b8").style.backgroundColor = "rgb(71, 163, 255)";
        b8 = document.getElementById("b8").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(71, 163, 255)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;

    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b3 = document.getElementById("b3").style.backgroundColor = "rgb(71, 163, 255)";
        b3 = document.getElementById("b3").style.color = "white";
        b6 = document.getElementById("b6").style.backgroundColor = "rgb(71, 163, 255)";
        b6 = document.getElementById("b6").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(71, 163, 255)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;

    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(71, 163, 255)";
        b1 = document.getElementById("b1").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(71, 163, 255)";
        b5 = document.getElementById("b5").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(71, 163, 255)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;

    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b3 = document.getElementById("b3").style.backgroundColor = "rgb(71, 163, 255)";
        b3 = document.getElementById("b3").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(71, 163, 255)";
        b5 = document.getElementById("b5").style.color = "white";
        b7 = document.getElementById("b7").style.backgroundColor = "rgb(71, 163, 255)";
        b7 = document.getElementById("b7").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b2 = document.getElementById("b2").style.backgroundColor = "rgb(71, 163, 255)";
        b2 = document.getElementById("b2").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(71, 163, 255)";
        b5 = document.getElementById("b5").style.color = "white";
        b8 = document.getElementById("b8").style.backgroundColor = "rgb(71, 163, 255)";
        b8 = document.getElementById("b8").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 1 won!";

        b4 = document.getElementById("b4").style.backgroundColor = "rgb(71, 163, 255)";
        b4 = document.getElementById("b4").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(71, 163, 255)";
        b5 = document.getElementById("b5").style.color = "white";
        b6 = document.getElementById("b6").style.backgroundColor = "rgb(71, 163, 255)";
        b6 = document.getElementById("b6").style.color = "white";
        document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(255, 71, 71)";
        b1 = document.getElementById("b1").style.color = "white";
        b2 = document.getElementById("b2").style.backgroundColor = "rgb(255, 71, 71)";
        b2 = document.getElementById("b2").style.color = "white";
        b3 = document.getElementById("b3").style.backgroundColor = "rgb(255, 71, 71)";
        b3 = document.getElementById("b3").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(255, 71, 71)";
        b1 = document.getElementById("b1").style.color = "white";
        b4 = document.getElementById("b4").style.backgroundColor = "rgb(255, 71, 71)";
        b4 = document.getElementById("b4").style.color = "white";
        b7 = document.getElementById("b7").style.backgroundColor = "rgb(255, 71, 71)";
        b7 = document.getElementById("b7").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b7 = document.getElementById("b7").style.backgroundColor = "rgb(255, 71, 71)";
        b7 = document.getElementById("b7").style.color = "white";
        b8 = document.getElementById("b8").style.backgroundColor = "rgb(255, 71, 71)";
        b8 = document.getElementById("b8").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(255, 71, 71)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;

    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b3 = document.getElementById("b3").style.backgroundColor = "rgb(255, 71, 71)";
        b3 = document.getElementById("b3").style.color = "white";
        b6 = document.getElementById("b6").style.backgroundColor = "rgb(255, 71, 71)";
        b6 = document.getElementById("b6").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(255, 71, 71)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;

    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b1 = document.getElementById("b1").style.backgroundColor = "rgb(255, 71, 71)";
        b1 = document.getElementById("b1").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(255, 71, 71)";
        b5 = document.getElementById("b5").style.color = "white";
        b9 = document.getElementById("b9").style.backgroundColor = "rgb(255, 71, 71)";
        b9 = document.getElementById("b9").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;


    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b3 = document.getElementById("b3").style.backgroundColor = "rgb(255, 71, 71)";
        b3 = document.getElementById("b3").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(255, 71, 71)";
        b5 = document.getElementById("b5").style.color = "white";
        b7 = document.getElementById("b7").style.backgroundColor = "rgb(255, 71, 71)";
        b7 = document.getElementById("b7").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b2 = document.getElementById("b2").style.backgroundColor = "rgb(255, 71, 71)";
        b2 = document.getElementById("b2").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(255, 71, 71)";
        b5 = document.getElementById("b5").style.color = "white";
        b8 = document.getElementById("b8").style.backgroundColor = "rgb(255, 71, 71)";
        b8 = document.getElementById("b8").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Player 2 won!";

        b4 = document.getElementById("b4").style.backgroundColor = "rgb(255, 71, 71)";
        b4 = document.getElementById("b4").style.color = "white";
        b5 = document.getElementById("b5").style.backgroundColor = "rgb(255, 71, 71)";
        b5 = document.getElementById("b5").style.color = "white";
        b6 = document.getElementById("b6").style.backgroundColor = "rgb(255, 71, 71)";
        b6 = document.getElementById("b6").style.color = "white";
        document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    }

    // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('maintxt')
            .innerHTML = "Match Tie!";

    }
    else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('plr1')
                .style.backgroundColor = "rgb(71, 163, 255)";

            document.getElementById('plr2').style.backgroundColor = "rgb(76, 76, 76)"
        }
        else {
            document.getElementById('plr2')
                .style.backgroundColor = "rgb(255, 71, 71)";

            document.getElementById('plr1').style.backgroundColor = "rgb(76, 76, 76)"
        }
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {

    turns++
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    turns++
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    turns++
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    turns++
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    turns++
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    turns++
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    turns++
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    turns++
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    turns++
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }

}

function overlay() {
    document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function lightTheme() {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"css/light.css\" />");
}

function paperTheme() {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"css/paper.css\" />");
}

function defaultTheme() {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"css/style.css\" />");
}

function consoleTheme() {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"css/console.css\" />");
}


// function theme() {
//     document.querySelector("link[href='css/style.css']").href = selectedTheme;
// }



// function lightTheme() {
//     // localStorage.clear
//     selectedTheme = "css/light.css";
//     Default_css = localStorage = (document.querySelector("link[href='css/style.css']").href = selectedTheme);
    
// }

// function defaultTheme() {
//     // localStorage.clear
//     Default_css = localStorage = (document.querySelector("link[href='css/light.css']").href = selectedTheme);
//     selectedTheme = "css/style.css";
// }

// var selectedTheme = localStorage
// var Default_css 
// var Light_css 
// var Console_css; 
// var Paper_css;


// function theme() {
//     if (localStorage.getItem('theme', '2')) {

//         document.getElementById("pagestyle").href="css/light.css";
//     }


//     if (localStorage.getItem('theme', '1')) {

//         document.getElementById("pagestyle").href="css/style.css";
//     }

    
// }

// function defaultTheme() {
//    selected_theme = localStorage.setItem('theme', '1');
// }

// function lightTheme() {
//    selected_theme = localStorage.setItem('theme', '2');
// }

// var selected_theme

// theme()


// window.onload=function(){
//     var theme = localStorage.getItem('data-theme');
    
//     if(theme == 'light'){
//       document.documentElement.setAttribute('data-theme', 'light');
//     }else if(theme == ''){
//       document.documentElement.setAttribute('data-theme', 'light');
//     }else if(theme == 'default'){
//       document.documentElement.setAttribute('data-theme' , 'default');
//       document.getElementById("checkbox").checked = true;
//     }
//   }

// theme()






