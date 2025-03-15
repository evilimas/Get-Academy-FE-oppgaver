import { QuestionComponent } from "./question";

export class ChoiceQuestionComponent extends QuestionComponent {
    private options: string[] = [];

    connectedCallback() {
        this.options = (this.getAttribute("options") || "").split(",");
        super.connectedCallback();
    }

    protected customStyles() {
        return /*CSS*/`
            label 
            { 
                display: block; 
                margin: 3px 0; 
            }
        `;
    }

    protected customMarkup() {
        return this.options.map(option => /*HTML*/`
            <label>
                ${this.createInputMarkup(option)} ${option}
            </label>
        `).join("");
    }

    protected createInputMarkup(option: string): string {
        return '';
    }
}


