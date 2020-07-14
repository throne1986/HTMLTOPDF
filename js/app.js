// var quiz = [{
//     question: "What is the capital of Turkey?",
//     answers: ["Istanbul", "Ankara", "Izmir", "Trabzon"],
//     correctAnswer: 1
// }, {
//     question: "When was Turkey established?",
//     answers: [1923, 1928, 1933, 1934],
//     correctAnswer: 0
// }, {
//     question: "What is the population of Turkey?",
//     answers: ["90 million", "75 million", "100 million", "80 million"],
//     correctAnswer: 1
// }, {
//     question: "What is the population of Turkey's biggest city, Istanbul?",
//     answers: ["18 million", "16 million", "14 million", "7 million"],
//     correctAnswer: 2
// }]

// var i = 0;
// var score = 0;
// var data=[];
// $(document).ready(function () {
//     $('#start').on('click', function () {
//         $('#questions').text(quiz[i].question);
//         $('#zero').text(quiz[i].answers[0]);
//         $('#one').text(quiz[i].answers[1]);
//         $('#two').text(quiz[i].answers[2]);
//         $('#three').text(quiz[i].answers[3]);
//         $('#start').remove();
//         $('.choices').show('slow');
//         $('#next').show('slow');
//     });
// });

// $(document).ready(function () {
//     $(document).on('click', '#next', function () {
//         // debugger
//         var answer = $('input[name="answers"]:checked').val(); //get answer value
//         var answerString = quiz[i].answers[answer];
//         $('p[class="userAnswer"][value=' + i + ']').text(answerString);
//         var correctAnswer = quiz[i].correctAnswer;
//         console.log('correct answer', correctAnswer);
//         var chekout = $('p[class="correctAnswer"][value=' + i + ']');
//         console.log('checkout', chekout)
//         $('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
//         // console.log('gegegegge', quiz[i].answers[correctAnswer])
//         data.push (quiz[i].answers[correctAnswer]);
      
//         if (answer == quiz[i].correctAnswer) {
//             score++;
//         } else {
//             $('tr[class="row"][name=' + i + ']').css('background', '#FE2E64');
//         }
//         if (!$('input[name="answers"]').is(':checked')) {
//             alert("please make a choice");
//             return undefined; //stops executing the rest of the code
//         }
//         i++;
//         console.log('I ma I', i++);

//         if (i < 4) {
// // debugger
//             console.log('gere',$('#questions').text(quiz[i].question));

//             $('.choices').css('display', 'none');
//             $('#questions').text(quiz[i].question);
//             $('#zero').text(quiz[i].answers[0]);
//             $('#one').text(quiz[i].answers[1]);
//             $('#two').text(quiz[i].answers[2]);
//             $('#three').text(quiz[i].answers[3]);
//             $('.choices').show('slow');
//             $('input[name="answers"]').prop('checked', false);
      

//         }
//         if (i > 3) {
//             console.log('score motherfucker', score);
//             $('#quiz').remove();
//             $('#score').text("You have completed the quiz, your score is " + score);//score*(100/i)
//             $('.getResult').addClass('show');
//             $('#results').fadeIn('fast');
//             console.log('naaaame', name)
//         //     $.ajax({
//         //         url: 'http://localhost/health/getpdf.php', //This is the current doc
//         //         type: "POST",
//         //         dataType:'json', // add json datatype to get json
//         //         data: name,
//         //         success: function(data){
//         //             console.log('fucking data idiota', data);
//         //         }
//         //    });  


//         console.log('data', data)

//            $.ajax({
//             type: 'POST',
//             data: {
//                 name: name
    
//             },
//             url: 'http://localhost/health/getpdf.php',
//             success: function (results) {
//                     // console.log('results', results);
//             },
//             error: function () {}
//         });
//         }

 


//     });
// });


// function demoFromHTML() {
//     var pdf = new jsPDF('p', 'pt', 'letter');
//     // source can be HTML-formatted string, or a reference
//     // to an actual DOM element from which the text will be scraped.
//     source = $('#results')[0];

//     // we support special element handlers. Register them with jQuery-style 
//     // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
//     // There is no support for any other type of selectors 
//     // (class, of compound) at this time.
//     specialElementHandlers = {
//         // element with id of "bypass" - jQuery style selector
//         '#bypassme': function (element, renderer) {
//             // true = "handled elsewhere, bypass text extraction"
//             return true
//         }
//     };
//     margins = {
//         top: 80,
//         bottom: 60,
//         left: 40,
//         width: 522
//     };
//     // all coords and widths are in jsPDF instance's declared units
//     // 'inches' in this case
//     pdf.fromHTML(
//     source, // HTML string or DOM elem ref.
//     margins.left, // x coord
//     margins.top, { // y coord
//         'width': margins.width, // max width of content on PDF
//         'elementHandlers': specialElementHandlers
//     },

//     function (dispose) {
//         // dispose: object with X, Y of the last line add to the PDF 
//         //          this allow the insertion of new lines after html
//         pdf.save('Test.pdf');
//     }, margins);
// }



var quiz = [{
    question: "What is the capital of Turkey?",
    answers: ["Istanbul", "Ankara", "Izmir", "Trabzon"],
    correctAnswer: 1
}, {
    question: "When was Turkey established?",
    answers: [1923, 1928, 1933, 1934],
    correctAnswer: 0
}, {
    question: "What is the population of Turkey?",
    answers: ["90 million", "75 million", "100 million", "80 million"],
    correctAnswer: 1
}, {
    question: "What is the population of Turkey's biggest city, Istanbul?",
    answers: ["18 million", "16 million", "14 million", "7 million"],
    correctAnswer: 2
}]

var i = 0;
var score = 0;
var dataAnswer =[];
var goodAnswer =[]
$(document).ready(function () {
    $('#start').on('click', function () {
        $('#questions').text(quiz[i].question);
        $('#zero').text(quiz[i].answers[0]);
        $('#one').text(quiz[i].answers[1]);
        $('#two').text(quiz[i].answers[2]);
        $('#three').text(quiz[i].answers[3]);
        $('#start').remove();
        $('.choices').show('slow');
        $('#next').show('slow');
    });
});

$(document).ready(function () {
    $(document).on('click', '#next', function () {
        var answer = $('input[name="answers"]:checked').val();
        var answerString = quiz[i].answers[answer];

        goodAnswer.push(quiz[i].answers[answer])
        console.log('answer', goodAnswer);

        $('p[class="userAnswer"][value=' + i + ']').text(answerString);
        var correctAnswer = quiz[i].correctAnswer;
        $('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
        dataAnswer.push (quiz[i].answers[correctAnswer]);
        if (answer == quiz[i].correctAnswer) {
            score++;
        } else {
            $('tr[class="row"][name=' + i + ']').css('background', '#FE2E64');
        }
        if (!$('input[name="answers"]').is(':checked')) {
            alert("please make a choice");
            return undefined; //stops executing the rest of the code
        }
        i++;

        if (i < 4) {
            $('.choices').css('display', 'none');
            $('#questions').text(quiz[i].question);
            $('#zero').text(quiz[i].answers[0]);
            $('#one').text(quiz[i].answers[1]);
            $('#two').text(quiz[i].answers[2]);
            $('#three').text(quiz[i].answers[3]);
            $('.choices').show('slow');
            $('input[name="answers"]').prop('checked', false);

        }
        if (i > 3) {

            $('#quiz').remove();
            $('#score').text("You have completed the quiz, your score is " + score);//score*(100/i)
            $('#results').fadeIn('fast');
                $.ajax({
                    type: 'POST',
                    data: {
                        answered: goodAnswer,
                        correctAnswer:dataAnswer

            
                    },
                    url: 'http://localhost/health/getpdf.php',
                    success: function (results) {
                            // console.log('results', results);
                    },
                    error: function () {}
                });
        // console.log('my data', data)
    }

    });
    $('.getResult').on('click' ,function () {  
        console.log('clicked')
       window.open('http://localhost/health/getPdf.php', '_blank');
    })
});