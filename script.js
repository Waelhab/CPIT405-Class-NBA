const nbaTeams = {
    won: {
        "Boston Celtics": [1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008, 2024],
        "Los Angeles Lakers": [1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020],
        "Golden State Warriors": [1947, 1956, 1975, 2015, 2017, 2018, 2022],
        "Chicago Bulls": [1991, 1992, 1993, 1996, 1997, 1998],
        "San Antonio Spurs": [1999, 2003, 2005, 2007, 2014],
        "Philadelphia 76ers": [1955, 1967, 1983],
        "Detroit Pistons": [1989, 1990, 2004],
        "Miami Heat": [2006, 2012, 2013],
        "Milwaukee Bucks": [1971, 2021],
        "Houston Rockets": [1994, 1995],
        "New York Knicks": [1970, 1973],
        "Toronto Raptors": [2019],
        "Cleveland Cavaliers": [2016],
        "Dallas Mavericks": [2011],
        "Portland Trail Blazers": [1977],
        "Washington Wizards": [1978],
        "Seattle SuperSonics": [1979],
        "Atlanta Hawks": [1958],
        "Sacramento Kings": [1951],
        "Denver Nuggets": [2023]
    },
    neverWon: [
        "Phoenix Suns",
        "Utah Jazz",
        "Brooklyn Nets",
        "Orlando Magic",
        "Indiana Pacers",
        "Charlotte Hornets",
        "Minnesota Timberwolves",
        "Memphis Grizzlies",
        "New Orleans Pelicans",
        "Los Angeles Clippers",
        "Oklahoma City Thunder"
    ]
};

const teamScores = {
    "Boston Celtics": 18,
    "Los Angeles Lakers": 17,
    "Golden State Warriors": 7,
    "Chicago Bulls": 6,
    "San Antonio Spurs": 5,
    "Philadelphia 76ers": 3,
    "Detroit Pistons": 3,
    "Miami Heat": 3,
    "Milwaukee Bucks": 2,
    "Houston Rockets": 2,
    "New York Knicks": 2,
    "Toronto Raptors": 1,
    "Cleveland Cavaliers": 1,
    "Dallas Mavericks": 1,
    "Portland Trail Blazers": 1,
    "Washington Wizards": 1,
    "Seattle SuperSonics": 1,
    "Atlanta Hawks": 1,
    "Sacramento Kings": 1,
    "Denver Nuggets": 1,
    "Phoenix Suns": 0,
    "Utah Jazz": 0,
    "Brooklyn Nets": 0,
    "Orlando Magic": 0,
    "Indiana Pacers": 0,
    "Charlotte Hornets": 0,
    "Minnesota Timberwolves": 0,
    "Memphis Grizzlies": 0,
    "New Orleans Pelicans": 0,
    "Los Angeles Clippers": 0,
    "Oklahoma City Thunder": 0
};


let score = 0
let scoreboard =document.getElementById('score');



document.getElementById('teamInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const teamName = event.target.value;
        checkTeam(teamName);
        event.target.value = ''; 
    }
});


function checkTeam(teamName) {
    const wonTeams = nbaTeams.won;
    const neverWonTeams = nbaTeams.neverWon;
    
    if (wonTeams[teamName]) {
        score += teamScores[teamName];
        scoreboard.textContent = score
        addTeamToWonTable(teamName, wonTeams[teamName]);
    } 
    else if (neverWonTeams.includes(teamName)) {
        score --    ;
        scoreboard.textContent = score
        addTeamToNeverWonTable(teamName);
    } else {
        alert("Team not found in the NBA Table.");
    }
}


function addTeamToWonTable(teamName, years) {
    const wonTableBody = document.getElementById('wonTableBody');
    const newRow = document.createElement('tr');
    const teamCell = document.createElement('td');
    teamCell.textContent = teamName;
    const yearsCell = document.createElement('td');
    yearsCell.textContent = years.join(', ');
    newRow.appendChild(teamCell);
    newRow.appendChild(yearsCell);
    wonTableBody.appendChild(newRow);
}

function addTeamToNeverWonTable(teamName) {
    const neverWonTableBody = document.getElementById('neverWonTableBody');
    const newRow = document.createElement('tr');
    const teamCell = document.createElement('td');
    teamCell.textContent = teamName;
    newRow.appendChild(teamCell);
    neverWonTableBody.appendChild(newRow);
}

// Timer variables
let timer;  
let timeLeft = 30; 


document.getElementById('teamInput').addEventListener('input', function() {
    if (!timer) {
        startTimer();
    }
});


function startTimer() {
    const timerDisplay = document.getElementById('timer');
    
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            const inputField = document.getElementById('teamInput');
            inputField.disabled = true; 
            inputField.placeholder  = "time's up! the input is now disabled."
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft; 
            
        }
    }, 900); 
}

