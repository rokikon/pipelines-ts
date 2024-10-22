import { QuestionAnsweringPipelineOptions } from "@huggingface/transformers";

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
    pipelineOptions?: QuestionAnsweringPipelineOptions
  ) {
    const questionAnswering = await this.getInstance<TASK>(modelOptions);
    return questionAnswering(question, context, pipelineOptions);
  }
}

export default QuestionAnsweringPipeline;
