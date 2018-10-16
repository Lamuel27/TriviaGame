
var panel = $('#quiz-area');
var countStartNumber = 20;


//CLICK EVENTS

$(document).on('click', '#start-over', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">20</span> Seconds</h2>');
  game.loadQuestion();
});


//Question set

var questions = [{
  question: "At the visitors center, John Hammond and his guests witness the birth of what?",
  answers: ["A Brontosaurus", "A Stegosaurus", "A T-Rex", "A Velociraptor"],
  correctAnswer: "A Velociraptor",
  image:"assets/images/Hatching.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "Dennis Nedry tries to play what with the Dilophosaurus?",
  answers: ["Hide-And-Seek", "Fetch", "Catch", "Tag"],
  correctAnswer: "Fetch",
  image:"assets/images/Dilo.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "Ellie Sattler thinks the sick triceratops was poisoned after eating what?",
  answers: ["American Cranberry", "Red-Twig Dogwood", "Staghorn Sumac", "West Indian Lilac"],
  correctAnswer: "West Indian Lilac",
  image:"assets/images/Tri.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "What animal is lowered down into the velociraptor enclosure during feeding time?",
  answers: ["A Cow", "A Chicken", "A Goat", "A Pig"],
  correctAnswer: "A Cow",
  image:"assets/images/Feeding.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: 'Finish the quote: "Life..."',
  answers: ["Is limitless.", "Uh...Finds a way.", "Always survives.", "Knows no bounds."],
  correctAnswer: "Uh...Finds a way.",
  image:"assets/images/Life.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "Ray Arnold asks everyone to hold on to what before rebooting the park's system?",
  answers: ["Your belongings.", "Your sanity.", "Your butts.", "Your seats."],
  correctAnswer: "Your butts.",
  image:"assets/images/Butts.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "The DNA of what animal is used to fill in the gaps of the extracted dinosaur DNA?",
  answers: ["Frogs", "Turtles", "Birds", "Lizards"],
  correctAnswer: "Frogs",
  image:"assets/images/Frog.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}, {
  question: "Who wrote Jurassic Park?",
  answers: ["Steven Spielberg", "Steven King", "Michael Chrichton", "Michael Connelly"],
  correctAnswer: "Michael Chrichton",
  image:"assets/images/Clever-girl.gif",
  image2:"assets/images/Nedry.gif",
  image3:"assets/images/John-Hammond-Damn.gif"
}];

