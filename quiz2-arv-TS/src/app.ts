import { QuizComponent } from "./components/quiz";
import { SingleChoiceQuestionComponent } from "./components/singleChoiceQuestion";
import { MultipleChoiceQuestionComponent } from "./components/multipleChoiceQuestion";
import { TextQuestionComponent } from "./components/textQuestion";

customElements.define("quiz-container", QuizComponent);
customElements.define("single-choice-question", SingleChoiceQuestionComponent);
customElements.define("multiple-choice-question", MultipleChoiceQuestionComponent);
customElements.define("text-question", TextQuestionComponent);