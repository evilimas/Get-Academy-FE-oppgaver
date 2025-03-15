import { QuestionComponent } from "./question";

export class TextQuestionComponent extends QuestionComponent {
    protected customStyles() {
        return /*CSS*/`
            .container
            {
                padding-bottom: 10px;
                padding-right: 10px;
            }                
            input 
            { 
                width: 100%; 
                padding: 5px;
                margin-top: 5px; 
            }                       
        `;
    }

    protected customMarkup() {
        return /*HTML*/`<input type="text" />`;
    }

    protected addEventListeners() {
        const input = this.shadowRoot!.querySelector("input")!;
        input.addEventListener("input", () => {
            this.dispatchAnswerChangedEvent(input.value);
        });        
    }
}


