var questions = [{
    ques: "Who has an imaginary friend named Tony?",
    ans: ["Jack", "Wendy", "Jimmy", "Danny"],
    name: "tony",
    correct: "Danny",
    divClass: ".tony"
},
{
    ques: "What is the name of the possessed hotel?",
    ans: ["The Winterside Hotel", "The Overlook Hotel", "The Possessed Hotel", "The Overside Hotel"],
    name: "hotel",
    correct: "The Overlook Hotel",
    divClass: ".hotel"
},
{
    ques: "Apart from Danny, who has 'the shining'?",
    ans: ["Jack", "Ullman", "Hallorann", "Danny"],
    name: "shining",
    correct: "Hallorann",
    divClass: ".shining"
},
{
    ques: "Who is the manager of the Overlook Hotel?",
    ans: ["Hallorann", "Ullman", "Jack", "Bob"],
    name: "manager",
    correct: "Ullman",
    divClass: ".manager"
},
{
    ques: "who said, 'For some people... solitude, isolation, can in itself become a problem.'?",
    ans: ["Hallorann", "Ullman", "Jack", "Wendy"],
    name: "isolation",
    correct: "Ullman",
    divClass: ".isolation"
},
{
    ques: "What was the phrase Jack typed over and over again on the typewriter?",
    ans: ["Many hands make light work", "All work and no play makes Jack a dull boy", "a stitch in time saves nine", "strike the iron while it's hot"],
    name: "typewriter",
    correct: "All work and no play makes Jack a dull boy",
    divClass: ".typewriter"
},
{
    ques: "How did Jack die in the end of the film?",
    ans: ["Kills Himself", "Freezes to death", "Wendy kills him", "Danny kills him"],
    name: "die",
    correct: "Freezes to death",
    divClass: ".die"
}
]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();

    for (var j = 0; j < 7; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio" name"' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label');
        }
        $('.questions').prepend('<hr />');
    }
}

var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').hide();
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i = 0; i < 7; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                } else {
                    wrongAnswers++;
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').show();

            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function () {
        clearInterval(timer);
    })
};

var gradeQuiz = $('#sub-but').on('click', function () {
    correctAnswers = 0;
    wrongAnswers = 0;

    for (var i = 0; i < 7; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
            console.log(correctAnswers);
        } else {
            wrongAnswers++;
        };
    };

    countdown();
    $('.container').hide();
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);
});

