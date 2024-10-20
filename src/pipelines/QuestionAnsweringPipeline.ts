import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "question-answering" as const;
type TASK = typeof taskKey;

class QuestionAnsweringPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    question: string | string[],
    context: string | string[],
    modelOptions?: RunModelOptions,
  ) {
    const questionAnswering = await this.getInstance<TASK>(modelOptions);
    return questionAnswering(question, context);
  }
}

export default QuestionAnsweringPipeline;
