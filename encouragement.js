var quotes = [
    'You\'re allowed to scream, you\'re allowed to cry, but do not give up.',
    'These times are hard but they will pass.',
    'You will face many defeats in your life, but never let yourself be defeated - Maya Angelou',
    'Learn from your past but don\'t be controlled by it',
    'Give yourself the grace to accept that while some days will be difficult, some days will also be great. Try to look forward to tomorrow\'s fresh start.',
    'You got this. One day at at time. You are resilient, courageous, and capable. Be proud of yourself. It isn\'t easy enduring depression/ anxiety. - The Anxiety Man',
    'Whatever your situation is right now, you\'ll grow from it.',
    'Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu',
    'Things will get better, and you need to trust in that.',
    'There is hope even when your brain tells you there isn\'t. -John Green'
    
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}