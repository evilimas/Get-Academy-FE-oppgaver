export class QuizComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setupAnswerListeners();
    }

    private render() {
        this.shadowRoot!.innerHTML = /*HTML*/`
            <style>
                .quiz-container 
                { 
                    border: 1px solid #ccc;
                    padding: 20px;
                    width: 300px; 
                }
                button 
                { 
                    margin-top: 10px; padding: 5px 10px; 
                }
            </style>
            <div class="quiz-container">
                <slot></slot>
                <button id="submit">Send svar</button>
            </div>
        `;
    }

    private setupAnswerListeners() {
        const answers: any[] = [];
        const questions = this.querySelectorAll("text-question, multiple-choice-question");
        for(let i = 0; i < questions.length; i++) {
            const question = questions[i];
            question.addEventListener("answer-changed", (event: any) => {
                answers[i] = event.detail;
                console.log(answers);
            });
        }
        const submitBtn = this.shadowRoot!.querySelector("#submit")!;
        submitBtn.addEventListener("click", () => {            
            console.log("Innsendte svar:", answers);
        });
    }
}


