
var panel = $('#quiz-area');
var countStartNumber = 20;


//CLICK EVENTS

$(document).on('click', '#start-over', function(e) {
  game.reset();
  var audio = new Audio('assets/audio/Jurassic.mp3');

  audio.play();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">20</span> Seconds</h2>');
  game.loadQuestion();

  var audio = new Audio('assets/audio/Jurassic.mp3');

  audio.play();
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



var game = {
    questions:questions,
    currentQuestion:0,
    counter:countStartNumber,
    correct:0,
    incorrect:0,
    countdown: function(){
      game.counter--;
      $('#counter-number').html(game.counter);
  
      if (game.counter === 0){
        console.log('TIME UP');
        game.timeUp();
      }
    },
    
    loadQuestion: function(){
      timer = setInterval(game.countdown, 1000);
      panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
      $('h2').css('color','white');
      for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
        panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
        $('.answer-button').css('color','white');
      }
    },
    //load next question
    nextQuestion: function(){
      game.counter = countStartNumber;
      $('#counter-number').html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },
    timeUp: function (){
      clearInterval(timer);
      $('#counter-number').html(game.counter);
  //Display when you are out of time
      panel.html('<h2>Out of Time!</h2>');
      panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
      $('h2').css('color','white');
      panel.append('<img src="' + questions[this.currentQuestion].image3 + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },
    results: function() {
      clearInterval(timer);
  //display your results
      panel.html("<h2>All done, here's how you did!</h2>");
      $('h2').css('color','white');
      $('#counter-number').html(game.counter);
      $('#counter-number').css('color','white');
      panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
      $('h3').css('color','white');
      panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
      $('h3').css('color','white');
      panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
      $('h3').css('color','white');
      panel.append('<br><button id="start-over">Start Over?</button>');
      $('#start-over').css('color','white');
    },
    clicked: function(e) {
      clearInterval(timer);
  
      if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
        this.answeredCorrectly();
      } else {
        this.answeredIncorrectly();
      }
    },
    answeredIncorrectly: function() {
      game.incorrect++;
      clearInterval(timer);
      panel.html('<h2>Ah ah ah, that is incorrect!</h2>');
      $('h2').css('color','white');
      panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
      $('h3').css('color','white');
      panel.append('<img src="' + questions[game.currentQuestion].image2 + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },
    //pull gif if answered correctly
    answeredCorrectly: function(){
      clearInterval(timer);
      game.correct++;
      panel.html('<h2>Correct!</h2>');
      $('h2').css('color','white');
      panel.append('<img src="' + questions[game.currentQuestion].image + '" />');
  //length of time to show gif
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 5 * 1000);
      } else {
        setTimeout(game.nextQuestion, 5 * 1000);
      }
    },
    reset: function(){
      this.currentQuestion = 0;
      this.counter = countStartNumber;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }
  };
  
