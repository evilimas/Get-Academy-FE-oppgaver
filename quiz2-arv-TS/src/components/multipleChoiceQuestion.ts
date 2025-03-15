import { ChoiceQuestionComponent } from "./choiceQuestion";

export class MultipleChoiceQuestionComponent extends ChoiceQuestionComponent {
    private answer: Set<string> = new Set();

    protected createInputMarkup(option: string): string {
        return '<input type="checkbox">';
    }

    protected addEventListeners() {
        const inputs = this.shadowRoot!.querySelectorAll("input");
        for (let input of inputs) {
            input.addEventListener("change", (event: Event) => {
                const inputElement = event.target as HTMLInputElement;
                const isChecked = inputElement.checked;
                const txt = inputElement.parentElement?.textContent;
                if (isChecked) this.answer.add(txt!);
                else this.answer.delete(txt!);
                const answer = Array.from(this.answer).join(",");
                this.dispatchAnswerChangedEvent(answer);
            });
        }
    }
}
