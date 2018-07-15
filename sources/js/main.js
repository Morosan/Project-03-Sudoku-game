/**
 * Created by sutad on 07/10/2017.
 */
console.log('sudoku game javasctipt main file');

var tableData = [{
  	1 :[5, 2, 1, 6, 8, 9, 4, 7, 3],
  	2 :[6, 8, 4, 7, 1, 3, 2, 9, 5],
  	3 :[7, 3, 9, 4, 5, 2, 8, 1, 6],
  	4 :[8, 7, 3, 1, 2, 5, 9, 6, 4],
  	5 :[1, 5, 2, 9, 6, 4, 3, 8, 7],
  	6 :[9, 4, 6, 3, 7, 8, 1, 5, 2],
  	7 :[3, 6, 5, 2, 9, 1, 7, 4, 8],
  	8 :[4, 9, 7, 8, 3, 6, 5, 2, 1],
  	9 :[2, 1, 8, 5, 4, 7, 6, 3, 9]
}, {
  	1 :[8, 9, 5, 1, 4, 3, 6, 7, 2],
  	2 :[7, 1, 2, 8, 6, 9, 5, 3, 4],
  	3 :[4, 3, 6, 5, 7, 2, 9, 1, 8],
  	4 :[6, 4, 3, 9, 8, 5, 7, 2, 1],
  	5 :[5, 7, 1, 3, 2, 4, 8, 6, 9],
  	6 :[2, 8, 9, 6, 1, 7, 4, 5, 3],
  	7 :[1, 2, 7, 4, 5, 8, 3, 9, 6],
  	8 :[9, 6, 8, 7, 3, 1, 2, 4, 5],
  	9 :[3, 5, 4, 2, 9, 6, 1, 8, 7]
}, {
    1 :[2, 3, 8, 9, 1, 5, 4, 6, 7],
    2 :[9, 1, 6, 7, 2, 4, 8, 3, 5],
    3 :[7, 4, 5, 6, 3, 8, 1, 9, 2],
    4 :[1, 6, 2, 4, 8, 7, 9, 5, 3],
    5 :[3, 7, 9, 2, 5, 1, 6, 8, 4],
    6 :[8, 5, 4, 3, 9, 6, 7, 2, 1],
    7 :[5, 9, 7, 1, 6, 2, 3, 4, 8],
    8 :[6, 8, 1, 5, 4, 3, 2, 7, 9],
    9 :[4, 2, 3, 8, 7, 9, 5, 1, 6]
}, {
    1 :[8, 6, 3, 9, 1, 7, 4, 2, 5],
    2 :[1, 4, 9, 5, 2, 3, 6, 7, 8],
    3 :[2, 5, 7, 8, 6, 4, 1, 9, 3],
    4 :[9, 3, 8, 2, 4, 1, 7, 5, 6],
    5 :[4, 7, 1, 6, 3, 5, 2, 8, 9],
    6 :[5, 2, 6, 7, 8, 9, 3, 1, 4],
    7 :[3, 9, 4, 1, 7, 8, 5, 6, 2],
    8 :[7, 8, 2, 4, 5, 6, 9, 3, 1],
    9 :[6, 1, 5, 3, 9, 2, 8, 4, 7]
}
];

// Clonare 
var clone = JSON.parse(JSON.stringify(tableData));
clone = clone[Math.floor(Math.random() * clone.length)];
var cloneTwo = JSON.parse(JSON.stringify(clone));
randomHide(clone);


var gameDifficulty = 65;

// Afisare Random
function randomHide(clone){    
    var count;
    var k;

    for (count = 0; count < gameDifficulty; count++){ 
    	l = Math.floor(Math.random() * 9);
    	k = Math.floor((Math.random() * 9) + 1);
    	if (clone[k][l] != '') {
    		clone[k][l] = '';
    	}
    	else {
    		count--;
    	}
    }
};
randomHide(clone);

// Creare Tabel
function tableCreate(randomSudokuData, sudokuContainer){
    var tbl  = document.createElement('table');
    sudokuContainer.innerHTML = '';

    for(var i in randomSudokuData){
        var tr = tbl.insertRow();
        for(var j = 0; j < randomSudokuData[i].length; j++){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(randomSudokuData[i][j]));
        	if (randomSudokuData[i][j] === ''){
        		td.setAttribute("contenteditable", "true");
        		td.setAttribute("class", "td-empty");
        		td.addEventListener('keyup', function(){
        			if (isNaN(this.textContent) || parseInt(this.textContent) > 9 || parseInt(this.textContent) < 1){
        				this.textContent = '';
        			}
        		});
        	}
        }
    }
    sudokuContainer.appendChild(tbl);
};
tableCreate(clone, document.getElementById('sudoku-container'));

// Creare Meniu
function optionMenuCreate() {
    var optionMenu = document.querySelector('.options-container');
    var navigationContainer  = document.createElement('div');
    var timerContainer = document.createElement('div');
    var newContainer = document.createElement('div');
    var hintContainer = document.createElement('div');
    var clearContainer = document.createElement('div');
    var printContainer = document.createElement('div');
        
    timerContainer.setAttribute("id", "btn-timer");
    timerContainer.setAttribute("className", "btn-option-menu");
    navigationContainer.appendChild(timerContainer);
    newContainer.setAttribute("id", "btn-new");
    newContainer.setAttribute("className", "btn-option-menu");
    navigationContainer.appendChild(newContainer);
    hintContainer.setAttribute("id", "btn-hint");
    hintContainer.setAttribute("className", "btn-option-menu");
    navigationContainer.appendChild(hintContainer);
    clearContainer.setAttribute("id", "btn-clear");
    clearContainer.setAttribute("className", "btn-option-menu");
    navigationContainer.appendChild(clearContainer);
    printContainer.setAttribute("id", "btn-difficulty");
    printContainer.setAttribute("className", "btn-option-menu");
    navigationContainer.appendChild(printContainer);
 
   	navigationContainer.className = 'navigation-container';
   	optionMenu.appendChild(navigationContainer);
};
optionMenuCreate();

// Functionalitate Timer
var intervalTimer = setInterval(setTime, 1000);     
function pad(val) {
    var valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } 
    else {
      	return valString;
    }
};

// Incrementare Timer
var totalSeconds = 0;
function setTime() {
    ++totalSeconds;
    document.querySelector('#minutes').innerHTML = pad(totalSeconds%60);
    document.querySelector('#seconds').innerHTML = pad(parseInt(totalSeconds/60));
};

// Reset Timer
var resetCountUpTimer = function() {
	totalSeconds = 0;
	clearInterval (intervalTimer);
	intervalTimer = setInterval(setTime, 1000);
};

//Start Timer
var startCountUpTimer = function() {
    var timer = document.createElement('div');
    var minutes = document.createElement('span');
    var seconds = document.createElement('span');
    var separator = document.createElement('span');
    separator.appendChild(document.createTextNode(':'));    
    var timerContainer = document.getElementById("btn-timer");
    timer.id = 'timer-container';
    minutes.id = "minutes";
    seconds.id = "seconds";
    
    timer.appendChild(seconds);
    timer.appendChild(separator);
    timer.appendChild(minutes);
    timerContainer.appendChild(timer);
};
startCountUpTimer();

// Creare New Game Buton
var newGame = function() {
	var btnNewGame = document.createElement('button');
	var newGameContainer = document.getElementById('btn-new');
	var buttonText = document.createTextNode('New Game');
  	btnNewGame.id = 'btn-new-game'; 
    btnNewGame.appendChild(buttonText);

	btnNewGame.addEventListener('click', function(){
		clone = JSON.parse(JSON.stringify(tableData));
		clone = clone[Math.floor(Math.random() * clone.length)];
		randomHide(clone);
		tableCreate(clone, document.getElementById('sudoku-container'));
		resetCountUpTimer();
    addClassToNthTD();
    verificareValidari();
	});
	newGameContainer.appendChild(btnNewGame);
};  
newGame();

// Creare Hint Buton
var hint = function() {
  	var btnHint = document.createElement('button');
  	var hintContainer = document.getElementById('btn-hint');
  	var buttonText = document.createTextNode('Hint');
    
    btnHint.id = 'btn-hint-game';
    btnHint.appendChild(buttonText);

  	btnHint.addEventListener('click', function() {
 		var emptyTd = document.getElementsByClassName("td-empty").length;
	  	if (emptyTd > 0)  {
	  		var index = 1;
	  		while (index == 1) {
	  			var i = Math.floor(Math.random() * 81);
		  		if (document.getElementsByTagName('td')[i].className === 'td-empty') {
		  			document.getElementsByTagName('td')[i].innerHTML = cloneTwo[Math.floor(i / 9) + 1][i % 9];
		  			if (document.getElementsByTagName('td')[i].childNodes[0]) {
		  				document.getElementsByTagName('td')[i].className = '';
		  			}
		  		index = 0;
		  		}
		  	} 
		  	return emptyTd;
		  }
  	});
  	hintContainer.appendChild(btnHint);
};
hint();

// Creare Clear Buton
var clear = function() {
  	var btnClear = document.createElement('button');
  	var clearContainer = document.getElementById('btn-clear');
  	var buttonText = document.createTextNode('Clear');
    	btnClear.id = 'btn-clear-game'; 
    	btnClear.appendChild(buttonText); 	

  	btnClear.addEventListener('click', function() {
  	if(!!clone) {
   		tableCreate(clone, document.getElementById('sudoku-container'));
   		resetCountUpTimer();
      addClassToNthTD();
      verificareValidari();
    	}
  	});
  	clearContainer.appendChild(btnClear);
};
clear();

// Creare Difficulty Buton
var buttonFunc = function(gameDifficulty) {
	window.gameDifficulty = gameDifficulty ? gameDifficulty : 65 ;
  	
  	clone = JSON.parse(JSON.stringify(tableData));
	clone = clone[Math.floor(Math.random() * clone.length)];
	
	randomHide(clone);
	tableCreate(clone, document.getElementById('sudoku-container'));
	resetCountUpTimer();
  	addClassToNthTD();
  	verificareValidari();

};

var difficulty = function () {
  	var difficultyContainer = document.getElementById('btn-difficulty');
  	var dropdownDifficulty = document.createElement('div');
  	var btnDifficulty = document.createElement('button');
  	var buttonText = document.createTextNode('Difficulty');
  	var dropdownContent = document.createElement('div');
  	var aEasy = document.createElement('a');
  	var textEasy = document.createTextNode('Easy');
  	var aMedium = document.createElement('a');
  	var textMedium = document.createTextNode('Medium');
  	var aHard = document.createElement('a');
  	var textHard = document.createTextNode('Hard');
    
    dropdownDifficulty.className = 'dropdown';
    btnDifficulty.className = 'dropbtn';
    dropdownContent.className = 'dropdown-content';
    dropdownContent.id = 'myDropdown';
    aEasy.href = '#';
    aMedium.href = '#';
    aHard.href = '#';
	aEasy.id = 'easy';
    aMedium.id = 'medium';
    aHard.id = 'hard';

    dropdownDifficulty.appendChild(btnDifficulty);
    dropdownDifficulty.appendChild(dropdownContent);
    btnDifficulty.appendChild(buttonText);
    dropdownContent.appendChild(aEasy);
    dropdownContent.appendChild(aMedium);
    dropdownContent.appendChild(aHard);
    aEasy.appendChild(textEasy);
    aMedium.appendChild(textMedium);
    aHard.appendChild(textHard);

    btnDifficulty.addEventListener('click', function() {
      	var myFunction = function () {
          	document.getElementById("myDropdown").classList.toggle("show");
      	};
      	window.onclick = function(e) {
        	if (!e.target.matches('.dropbtn')) {
          		var myDropdown = document.getElementById("myDropdown");
            	if (myDropdown.classList.contains('show')) {
              		myDropdown.classList.remove('show');
            	}
        	}
      	};
      	myFunction();
    });
    aEasy.addEventListener('click', function() {
    	buttonFunc(65);
    });
    aMedium.addEventListener('click', function() {
    	buttonFunc(70);
    });
    aHard.addEventListener('click', function() {
    	buttonFunc(75);
    });

    difficultyContainer.appendChild(dropdownDifficulty);
};
difficulty();

var inputs = document.getElementsByClassName('td-empty');
var verificareValidari = function () {
    for (var i = 0; i < inputs.length; i++) {
      	inputs[i].addEventListener('keyup', function(e){
      		validateLine(this);
      		validateColumn(this);
      		validateSquare(this);
      	});
    }
}
verificareValidari();



var validateLine = function (element) {
	var tr = element.parentElement;
	var allTds = tr.childNodes;
	var validationArr = [];

	for (var i = 0; i < allTds.length; i++) {
		if (allTds[i].innerText) {
			validationArr.push(allTds[i].innerText);
		}
	}
	if (hasDuplicates(validationArr)) {
		tr.className = 'red-border';
	} else {
		tr.className = '';
	}
};

function addClassToNthTD() {
    var table = document.getElementsByTagName('table');
    var rows = table[0].childNodes[0].childNodes;

    for (var i = 0; i < rows.length; i++) {
        var tdChildNode = rows[i].childNodes;
        for (var j = 0; j < tdChildNode.length; j++) {
            if (i < 3){
                if (j < 3) {
                    tdChildNode[j].className+=' first-box';
                }
                if (j >= 3 && j < 6) {
                    tdChildNode[j].className+=' second-box';
                }
                if (j >= 6 && j < 9) {
                    tdChildNode[j].className+=' third-box';
                }
            } else if (i >= 3 && i < 6) {
                if (j < 3) {
                    tdChildNode[j].className+=' forth-box';
                }
                if (j >= 3 && j < 6) {
                    tdChildNode[j].className+=' fifth-box';
                }
                if (j >= 6 && j < 9) {
                    tdChildNode[j].className+=' sixth-box';
                }
            } else if (i >= 6 && i < 9) {
                if (j < 3) {
                    tdChildNode[j].className+=' seventh-box';
                }
                if (j >= 3 && j < 6) {
                    tdChildNode[j].className+=' eight-box';
                }
                if (j >= 6 && j < 9) {
                    tdChildNode[j].className+=' ninth-box';
                }
            }
        }
    }
}
addClassToNthTD();

var validateColumn = function (element) {
	var tr = element.parentElement;
	var allTds = tr.childNodes;
	
	var tbody = element.parentElement.parentElement;
	var allTrs = tbody.childNodes;

	var validationArr = [];
	var x = 0;
  while ( (element = element.previousSibling) != null )
      x++;

	for (var k = 0; k < allTrs.length; k++) {
  		if (allTrs[k].children[x].innerText) {
  			validationArr.push(allTrs[k].children[x].innerText);
  		}
	}

	if (hasDuplicates(validationArr)) {
  		for (var k = 0; k < allTrs.length; k++) {
    			if (allTrs[k].children[x].className.indexOf('red-border-column') === -1) {
                  allTrs[k].children[x].className +=' red-border-column';
          }
  		}
	} else {
  		for (var k = 0; k < allTrs.length; k++) {
  			 $(allTrs[k].children[x]).removeClass('red-border-column');
  		}
	}
};


var validateSquare = function (element) {
    var classAvailable = '';
    if (element.className.indexOf('first-box') !== -1) {
        classAvailable = 'first-box';
    } else if (element.className.indexOf('second-box') !== -1) {
        classAvailable = 'second-box';
    } else if (element.className.indexOf('third-box') !== -1) {
        classAvailable = 'third-box';
    } else if (element.className.indexOf('forth-box') !== -1) {
        classAvailable = 'forth-box';
    } else if (element.className.indexOf('fifth-box') !== -1) {
        classAvailable = 'fifth-box';
    } else if (element.className.indexOf('sixth-box') !== -1) {
        classAvailable = 'sixth-box';
    } else if (element.className.indexOf('seventh-box') !== -1) {
        classAvailable = 'seventh-box';
    } else if (element.className.indexOf('eight-box') !== -1) {
        classAvailable = 'eight-box';
    } else if (element.className.indexOf('ninth-box') !== -1) {
        classAvailable = 'ninth-box';
    }

    var allTds = document.querySelectorAll('.' + classAvailable);
  	var validationArr = [];

    for (var i = 0; i < allTds.length; i++) {
        if (allTds[i].innerText) {
          validationArr.push(allTds[i].innerText);
        }
    }
  	
    if (hasDuplicates(validationArr)) {
        for (var j = 0; j < allTds.length; j++) {
            if (allTds[j].className.indexOf('red-border-square') === -1) {
              allTds[j].className +=' red-border-square';
            }
        }
    } else {
        for (var j = 0; j < allTds.length; j++) {
              $(allTds[j]).removeClass('red-border-square');
        }   
    }
}; 

function hasDuplicates(array) {
	var valueSoFar = Object.create(null);
	for (var i = 0; i < array.length; ++i) {
		var value = array[i];
		if (value in valueSoFar) {
			return true;
		}
		valueSoFar[value] = true;
	}
	return false;
}


//  dupa apasarea butonului New Game sau dupa schimbarea dificultatii nu mai merg validarile;
//  la apasarea butonului de hint browserul intra intr-un loop infinit;
//
//
//
//
//  am creat o functie verificareValidari care am apelat-o in New game si Difficulties;
//  am apelat si functia care adauga clase la patrate si am rezolvat problema cu validarile dar ramane cea cu hintul;