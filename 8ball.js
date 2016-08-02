
var randomAnswers = [
    'Yes.',
    'No.',
    'Maybe, but is it worth it?',
    'Not now, maybe later.',
    'You have known the answer the whole time.',
    'No, but not no.',
    'The answer lies within.',
    'Definitely yes, but be careful.', 
    'No, but I am not sure.',
    'Maybe, but I would not.',
    'I would rather not say.'
];//0-10 indexes


function figureIt() {
    //randomly pick a phrase
    //and display it
    var answer = document.getElementById('answer');

    var randomNumbers = Math.floor(Math.random() * randomAnswers.length);
    answer.innerHTML = randomAnswers[randomNumbers];
}