import { ChoiceQuestionComponent } from "./choiceQuestion";

export class SingleChoiceQuestionComponent extends ChoiceQuestionComponent {
    private selectedAnswer: string = "";

    protected createInputMarkup(option: string): string {
        return /*HTML*/`<input type="radio" name="choice" value="${option}">`;
    }

    protected addEventListeners() {
        const inputs = this.shadowRoot!.querySelectorAll("input");
        for (let input of inputs) {
            input.addEventListener("change", (event: Event) => {
                this.selectedAnswer = (event.target as HTMLInputElement).value;
                this.dispatchAnswerChangedEvent(this.selectedAnswer);
            });
        }
    }
}


