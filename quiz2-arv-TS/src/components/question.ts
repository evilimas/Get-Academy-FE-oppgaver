export class QuestionComponent extends HTMLElement {
    protected questionText: string = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.questionText = this.getAttribute("question") ?? "Skriv svaret ditt her:";
        this.render();
    }

    protected render() {
        this.shadowRoot!.innerHTML = /*HTML*/`
            <style>
                .question 
                { 
                    font-weight: bold; 
                    margin-bottom: 5px; 
                }
                ${this.customStyles()}
            </style>
            <div class="container">
                <div class="question">${this.questionText}</div>
                ${this.customMarkup()}
            </div>
        `;
        this.addEventListeners();
    }

    protected customStyles() {
        return '';
    }

    protected customMarkup() {
        return '';
    }

    protected addEventListeners() {
    }

    protected dispatchAnswerChangedEvent(answer: string) {
        const answeredEvent = new CustomEvent("answer-changed", {
            detail: {
                question: this.questionText,
                answer: answer
            }
        });
        this.dispatchEvent(answeredEvent);
    }
}