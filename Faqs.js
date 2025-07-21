  document.addEventListener("DOMContentLoaded", function () {
      const questions = document.querySelectorAll("#faqsarea h2#question");
      const answers = document.querySelectorAll("#faqsarea p#answer");
      answers.forEach(answer => {
        answer.style.display = "none";
      });
      questions.forEach((question, idx) => {
        question.style.cursor = "pointer";
        question.addEventListener("click", function () {
          const answer = answers[idx];
          if (answer.style.display === "none") {
            answer.style.display = "block";
          } else {
            answer.style.display = "none";
          }
        });
      });
    });