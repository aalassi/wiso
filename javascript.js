

 //////w3

 
// Toggle grid padding
function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
      x.className = "w3-row-padding";
    } else { 
      x.className = x.className.replace("w3-row-padding", "w3-row");
    }
  }
  
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  
  




(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `Du hast von ${myQuestions.length} Fragen ${numCorrect} richtig beantwortest`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Wo muss der Ausbildungsvertrag zur Eintragung eingereicht werden ?",
        answers: {
          a: "bei der Berufschule",
          b: "bei der Agentur f??r Arbeit",
          c: "beim WBS",
          d: "bei der Handwerkskammer"
        },
        correctAnswer: "d"
      },
      {
        question: "Wann muss man den Ausbildungsvertrag unterschreiben ?",
        answers: {
          a: "Innerhalb des ersten Ausbildungsjahres",
          b: "Vor Beginn der Berufsausbildung",
          c: "Nach der Zwischenpr??fung",
          d: "Nach der Probezeit"
        },
        correctAnswer: "b"
      },
      {
        question: "Wie lang muss und kann maximal die Probezeit einer Berufsausbildung sein?",
        answers: {
          a: "mindestens zwei Monate und h??chstens vier Monate ",
          b: "mindestens einen Monat und h??chstens six Monate ",
          c: "mindestens einen Monat und h??chstens vier Monate ",
          d: "8 Monate"
        },
        correctAnswer: "c"
      },
      {
        question: "Wer fungiert als Schlichtungsstelle bei einem Disput zwischen Azubi und Betrieb?",
        answers: {
          a: "Der Betriebsrat fungiert als Mediator.",
          b: "Die IHK fungiert als Mediator.",
          c: "Das WBS Training fungiert als Mediator.",
          d: "Das Arbeitsgericht fungiert als Mediator."
        },
        correctAnswer: "b"
      },
      {
        question: "Wann endet das Ausbildungsverh??ltnis?",
        answers: {
          a: "Das Ausbildungsverh??ltnis endet mit Bekanntgabe des Pr??fungsergebnisses.",
          b: "Das Ausbildungsverh??ltnis endet nach der Abschlusspr??fung.",
          c: "Das Ausbildungsverh??ltnis endet vor der Abschlusspr??fung."
        },
        correctAnswer: "a"
        },
        
        
        {
            question: "Wie alt muss ein Ausbilder mindestens sein?",
            answers: {
              a: "18 Jahre alt",
              b: "21 Jahre alt",
              c: "24 Jahre alt"
            },
            correctAnswer: "c"
            },

            {
              question: "Vorstellungsgespr??ch: Darf ein Arbeitgeber Fragen zur sexuellen Identit??t des Bewerbers stellen?",
              answers: {
                a: "Ja",
                b: "Nein"
              },
              correctAnswer: "b"
            },

            {
              question: "Wer bezahlt die Beitr??ge zur gesetzlichen Krankenversicherung?",
              answers: {
                a: "Krankenkasse",
                b: "Arbeitnehmer",
                c: "Arbeitgeber",
                d: "Arbeitgeber und Arbeitnehmer"
              },
              correctAnswer: "d"
            },

            {
              question: "Welches ist keine gesetzliche Sozialversicherung?",
              answers: {
                a: "Rentenversicherung",
                b: "Unfallversicherung",
                c: "Krankenversicherung",
                d: "Haftpflichtversicherung"
              },
              correctAnswer: "d"
            },

            {
              question: "Ab wieviel Mitarbeitern braucht ein Betrieb einen Sicherheitsbeauftragten?",
              answers: {
                a: "??ber 5 Mitarbeiter.",
                b: "??ber 7 Mitarbeiter.",
                c: "??ber 10 Mitarbeiter.",
                d: "??ber 20 Mitarbeiter."
              },
              correctAnswer: "d"
            },

            {
              question: "Wieviele Ersthelfer braucht man in einem Unternehmen von 2-20 Mitarbeitern?",
              answers: {
                a: "0",
                b: "1"
           
              },
              correctAnswer: "b"
            },


            {
              question: "Sicherheitsbeauftragte m??ssen sich ausdr??cklich und nachweislich bereit erkl??ren, die Beauftragung und Verpflichtung des Amtes zu ??bernehmen.",
              answers: {
                a: "richtig",
                b: "falsch"
              },
              correctAnswer: "a"
            },

            {
              question: "Sicherheitsbeauftragte werden von den Unfallversicherungen zur Rechenschaft gezogen, wenn das Unternehmen den Unfallverh??tungsvorschriften nicht nachkommt.",
              answers: {
                a: "richtig",
                b: "falsch"
              },
              correctAnswer: "b"
            },

            {
              question: "Sicherheitsbeauftragte sind damit beauftragt, die anderen Mitarbeiter zur Sicherheit am Arbeitsplatz zu schulen, was eine wichtige Voraussetzung zur Vorbeugung von Unf??llen darstellt.",
              answers: {
                a: "richtig",
                b: "falsch"
              },
              correctAnswer: "a"
            },




    ];
  
    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();






 
