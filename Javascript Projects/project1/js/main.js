
// Note i can use object or array for storing quotes
var qoute=document.getElementById("quote");

// var quotes = {
//   1: '<p class="text-black text-center">“Be yourself; everyone else is already taken.”</p> <div class="text-black text-center fw-medium">― Oscar Wilde</div>',
//   2: '<p class="text-black text-center">“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”</p> <div class="text-black text-center fw-medium">― Marilyn Monroe</div>',
//   3: '<p class="text-black text-center">“So many books, so little time.”</p> <div class="text-black text-center fw-medium">― Frank Zappa</div>',
//   4: '<p class="text-black text-center">“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”</p> <div class="text-black text-center fw-medium">― Albert Einstein</div>',
//   5: '<p class="text-black text-center">“A room without books is like a body without a soul.”</p> <div class="text-black text-center fw-medium">― Marcus Tullius Cicero</div>',
//   6: '<p class="text-black text-center">“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”</p> <div class="text-black text-center fw-medium">― Bernard M. Baruch</div>',
//   7: '<p class="text-black text-center">“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.”</p> <div class="text-black text-center fw-medium">― William W. Purkey</div>',
//   8: '<p class="text-black text-center">“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”</p> <div class="text-black text-center fw-medium">― Dr. Seuss</div>',
//   9: '<p class="text-black text-center">“You only live once, but if you do it right, once is enough.”</p> <div class="text-black text-center fw-medium">― Mae West</div>',
//   10: '<p class="text-black text-center">“Be the change that you wish to see in the world.”</p> <div class="text-black text-center fw-medium">― Mahatma Gandhi</div>',
//   11: '<p class="text-black text-center">“In three words I can sum up everything I\'ve learned about life: it goes on.”</p> <div class="text-black text-center fw-medium">― Robert Frost</div>',
//   12: '<p class="text-black text-center">“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”</p> <div class="text-black text-center fw-medium">― J.K. Rowling, <i>Harry Potter and the Goblet of Fire</i></div>',
//   13: '<p class="text-black text-center">“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”</p> <div class="text-black text-center fw-medium">― Albert Camus</div>',
//   14: '<p class="text-black text-center">“If you tell the truth, you don\'t have to remember anything.”</p> <div class="text-black text-center fw-medium">― Mark Twain</div>',
//   15: '<p class="text-black text-center">“Friendship ... is born at the moment when one man says to another \\"What! You too? I thought that no one but myself . . .”</p> <div class="text-black text-center fw-medium">― C.S. Lewis, <i>The Four Loves</i></div>',
// };
var quotes = [
  '<p class="text-black text-center">“Be yourself; everyone else is already taken.”</p> <div class="text-black text-center fw-medium">― Oscar Wilde</div>',
  '<p class="text-black text-center">“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”</p> <div class="text-black text-center fw-medium">― Marilyn Monroe</div>',
  '<p class="text-black text-center">“So many books, so little time.”</p> <div class="text-black text-center fw-medium">― Frank Zappa</div>',
  '<p class="text-black text-center">“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”</p> <div class="text-black text-center fw-medium">― Albert Einstein</div>',
  '<p class="text-black text-center">“A room without books is like a body without a soul.”</p> <div class="text-black text-center fw-medium">― Marcus Tullius Cicero</div>',
  '<p class="text-black text-center">“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”</p> <div class="text-black text-center fw-medium">― Bernard M. Baruch</div>',
  '<p class="text-black text-center">“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.”</p> <div class="text-black text-center fw-medium">― William W. Purkey</div>',
  '<p class="text-black text-center">“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”</p> <div class="text-black text-center fw-medium">― Dr. Seuss</div>',
  '<p class="text-black text-center">“You only live once, but if you do it right, once is enough.”</p> <div class="text-black text-center fw-medium">― Mae West</div>',
  '<p class="text-black text-center">“Be the change that you wish to see in the world.”</p> <div class="text-black text-center fw-medium">― Mahatma Gandhi</div>',
  '<p class="text-black text-center">“In three words I can sum up everything I\'ve learned about life: it goes on.”</p> <div class="text-black text-center fw-medium">― Robert Frost</div>',
  '<p class="text-black text-center">“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”</p> <div class="text-black text-center fw-medium">― J.K. Rowling, <i>Harry Potter and the Goblet of Fire</i></div>',
  '<p class="text-black text-center">“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”</p> <div class="text-black text-center fw-medium">― Albert Camus</div>',
  '<p class="text-black text-center">“If you tell the truth, you don\'t have to remember anything.”</p> <div class="text-black text-center fw-medium">― Mark Twain</div>',
  '<p class="text-black text-center">“Friendship ... is born at the moment when one man says to another \\"What! You too? I thought that no one but myself . . .”</p> <div class="text-black text-center fw-medium">― C.S. Lewis, <i>The Four Loves</i></div>'
];

// console.log(quotes['1']);

// console.log(Math.floor(Math.random() * 15)+1);
var newQoute=0;
function getQuote(){
 console.log(newQoute);
    // var randomQuote = Math.floor(Math.random() * 15) + 1;
    
    
    do{
    var randomQuote = Math.floor(Math.random() * 15) + 1;
        console.log(randomQuote);
    }while(randomQuote == newQoute)

    newQoute = randomQuote;
//    qoute.innerHTML = quotes[`${randomQuote}`];
   qoute.innerHTML = quotes[randomQuote];
    

}
