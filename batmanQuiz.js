const readline = require('readline-sync');
const chalk = require('chalk');
var userName = readline.question(chalk.yellow(`What's your name...?\n`));
console.log(chalk.cyan(`Welcome ${chalk.yellow(userName)} let's see how much do you know about Batman...\n`));
score = 0;
var highScorer = [
    {
        playerName: 'Ranjeet Singh',
        score: 6
    },
    {
        playerName: 'Pritam',
        score: 4
    }
]
var Batman = [
    {
        qus: "What's the favorite color of the Batman...?",
        options: ['Green', 'Black', 'Blue', 'White'],
        ans: 'Black'
    },
    {
        qus: `What's the power of the Batman...? (As known by Barry!)`,
        options: ['Intelligent', 'Invisibilty', 'Rich', 'Luck'],
        ans: 'Rich'
    },
    {
        qus: "What's the hometown of the Batman...?",
        options: ['Arkham', 'Glasgow', 'Pittsburgh', 'Gotham'],
        ans: 'Gotham'
    },
    {
        qus: "What's the Batman secret headquarter name...?",
        options: ['Clock Tower', 'Batcave', 'Batgate', 'Wayne Tower'],
        ans: 'Batcave'
    },
    {
        qus: "What is the name of Batman's Butler/Best Friend...?",
        options: ['Harvey Dent', 'Lucius Fox', 'Alfred Pennyworth', 'Jim Gordon'],
        ans: 'Alfred Pennyworth'
    },
    {
        qus: "Batman's Closest Business Partner/Alley...?",
        options: ['Lucius Fox', 'Alfred Pennyworth', 'Dick Grayson', 'Harvey Dent'],
        ans: 'Lucius Fox'
    }
]
function playGame() {
    for (let index = 0; index < Batman.length; index++) {
        var userAns = (readline.keyInSelect((Batman[index].options), chalk.yellow(`${Batman[index].qus}`)));
        var ans = Batman[index].ans;
        console.log('\n');
        if (Batman[index].options[userAns] === ans) {
            score++;
            console.log(chalk.greenBright.bold("Right!"));
            console.log(chalk.greenBright.bold(`Your current score is :${score}\n`));
        }
        else if (userAns === -1) {
            console.log(chalk.red.bold(`Thanks for playing.Exiting now...`));
            break;
        }
        else {
            console.log(chalk.red("Wrong!"));
            console.log(chalk.red(`Your current score is :${score}\n`));
        }
        console.log(chalk.blue('----------------------\n'));
    }
}

function checkScores() {
    console.log(chalk.cyanBright.bold.underline(`\n\nYour Final Scroe is: ${score}\n`));
    if (score > highScorer[1].score) {
        console.log(chalk.green.bold(`Congratulation! You made a new High Score, You can send me screenshot so i can add your name.\n`));
    }
    console.log(chalk.yellow(`Check out the high scorers...`));
    for (let index = 0; index < highScorer.length; index++) {
        console.log(`
    Name:${chalk.cyan.bold(highScorer[index].playerName)}
    Score:${chalk.yellow(highScorer[index].score)}
    `);
    }
}
playGame();
checkScores();