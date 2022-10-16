let tabs = document.querySelectorAll(".tabs__toggle"),
  contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    contents[index].classList.add("is-active");
    tabs[index].classList.add("is-active");
  });
});

let questions = document.querySelectorAll(".question__item"),
  answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers.forEach((anwser) => {
      anwser.classList.remove("is-show");
    });
    questions.forEach((question) => {
      question.classList.remove("is-show");
    });

    answers[index].classList.add("is-show");
  });
});

function myVideo() {
  var x = document.querySelector(".popup-video");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";

  }
}

document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
};
