const tennis = (game) => {
    let player1 = 0;
    let player2 = 0;
    let rules = {0: "Love", 1: "15", 2: "30", 3: "40", 4: "Deuce", 5: "Ventaja", 6: "Ha ganado el"};

    for(player in game) {
        if (game[player] === "P1") {
            player1++;
        }
        if (game[player] === "P2") {
            player2++;
        }

        if (player1 === player2 && player1 > 3) {
            player1--;
            player2--;
        }

        if (player1 === 5 || player2 === 5) {
            console.log(rules[6] + " " + (player1 === 5 ? "P1" : "P2"));
        } else if (player1 === 4 || player2 === 4) {
            console.log(rules[5] + " " + (player1 === 4 ? "P1" : "P2"));
        } else if (player1 === 3 && player2 === 3) {
            console.log(rules[4]);
        } else {
            console.log(rules[player1] + " - " + rules[player2]);
        }
    }
};

const game = ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1'];
tennis(game);

//const game2 = ['P1', 'P1', 'P2', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1', 'P2', 'P2', 'P2'];
//tennis(game2);