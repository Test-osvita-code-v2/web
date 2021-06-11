(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{504:function(n,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("Test"),n._v(" "),t("h1",[n._v("Тест на перевірку знань, як працює веб")]),n._v(" "),t("div",{staticClass:"quiz-container"},[t("div",{attrs:{id:"quiz"}})]),n._v(" "),t("button",{staticClass:"btn",attrs:{id:"previous"}},[n._v("Попереднє питання")]),n._v(" "),t("button",{staticClass:"btn",attrs:{id:"next"}},[n._v("Наступне питання")]),n._v(" "),t("button",{staticClass:"btn",attrs:{id:"submit"}},[n._v("Відправити")]),n._v(" "),t("div",{attrs:{id:"results"}}),n._v(" "),t("script",[n._v('\n    (function () {\n        const myQuestions = [\n            {\n                question: "Найкращий браузер для веб-розробки, це...",\n                answers: {\n                    a: "Internet Explorer / Edge",\n                    b: "Firefox / Edge",\n                    c: "Chrome / Firefox"\n                },\n                correctAnswer: "c"\n            },\n            {\n                question: "Які технології запускаються у браузері?",\n                answers: {\n                    a: "Javascript, HTML, CSS",\n                    b: "Java, HTML, Sass",\n                    c: "XML, GitHub, CSS"\n                },\n                correctAnswer: "a"\n            },\n            {\n                question: "Що контролює CSS у браузері?",\n                answers: {\n                    a: "Колір, шрифт, розмітка",\n                    b: "Швидкість завантаження веб-сторінки",\n                    c: "Роботу баз даних"\n                },\n                correctAnswer: "a"\n            },\n            {\n                question: "Чи може браузер виконати код мови програмування Python?",\n                answers: {\n                    a: "Так",\n                    b: "НІ",\n                },\n                correctAnswer: "b"\n            },\n            {\n                question: "Яка різниця між HTTP та HTTPS?",\n                answers: {\n                    a: "HTTP швидше ніж HTTPS",\n                    b: "HTTPS має додатковий шар шифрування",\n                    c: "HTTP працює на нових браузерах, а HTTPS ні",\n                },\n                correctAnswer: "b"\n            },\n        ];\n        function buildQuiz() {\n            // we\'ll need a place to store the HTML output\n            const output = [];\n            // for each question...\n            myQuestions.forEach((currentQuestion, questionNumber) => {\n                // we\'ll want to store the list of answer choices\n                const answers = [];\n                // and for each available answer...\n                for (letter in currentQuestion.answers) {\n                    // ...add an HTML radio button\n                    answers.push(\n                        `<label>\n         <input type="radio" name="question${questionNumber}" value="${letter}">\n          ${letter} :\n          ${currentQuestion.answers[letter]}\n       </label>`\n                    );\n                }\n                // add this question and its answers to the output\n                output.push(\n                    `<div class="slide">\n       <div class="question"> ${currentQuestion.question} </div>\n       <div class="answers"> ${answers.join("")} </div>\n     </div>`\n                );\n            });\n            // finally combine our output list into one string of HTML and put it on the page\n            quizContainer.innerHTML = output.join("");\n        }\n        function showResults() {\n            // gather answer containers from our quiz\n            const answerContainers = quizContainer.querySelectorAll(".answers");\n            // keep track of user\'s answers\n            let numCorrect = 0;\n            // for each question...\n            myQuestions.forEach((currentQuestion, questionNumber) => {\n                // find selected answer\n                const answerContainer = answerContainers[questionNumber];\n                const selector = `input[name=question${questionNumber}]:checked`;\n                const userAnswer = (answerContainer.querySelector(selector) || {}).value;\n                // if answer is correct\n                if (userAnswer === currentQuestion.correctAnswer) {\n                    // add to the number of correct answers\n                    numCorrect++;\n                    // color the answers green\n                    answerContainers[questionNumber].style.color = "lightgreen";\n                } else {\n                    // if answer is wrong or blank\n                    // color the answers red\n                    answerContainers[questionNumber].style.color = "red";\n                }\n            });\n            // show number of correct answers out of total\n            resultsContainer.innerHTML = `${numCorrect} з ${myQuestions.length}`;\n        }\n        function showSlide(n) {\n            slides[currentSlide].classList.remove("active-slide");\n            slides[n].classList.add("active-slide");\n            currentSlide = n;\n            if (currentSlide === 0) {\n                previousButton.style.display = "none";\n            } else {\n                previousButton.style.display = "inline-block";\n            }\n            if (currentSlide === slides.length - 1) {\n                nextButton.style.display = "none";\n                submitButton.style.display = "inline-block";\n            } else {\n                nextButton.style.display = "inline-block";\n                submitButton.style.display = "none";\n            }\n        }\n        function showNextSlide() {\n            showSlide(currentSlide + 1);\n        }\n        function showPreviousSlide() {\n            showSlide(currentSlide - 1);\n        }\n        const quizContainer = document.getElementById("quiz");\n        const resultsContainer = document.getElementById("results");\n        const submitButton = document.getElementById("submit");\n        // display quiz right away\n        buildQuiz();\n        const previousButton = document.getElementById("previous");\n        const nextButton = document.getElementById("next");\n        const slides = document.querySelectorAll(".slide");\n        let currentSlide = 0;\n        showSlide(0);\n        // on submit, show results\n        submitButton.addEventListener("click", showResults);\n        previousButton.addEventListener("click", showPreviousSlide);\n        nextButton.addEventListener("click", showNextSlide);\n    })();\n')])],1)}),[],!1,null,null,null);e.default=r.exports}}]);