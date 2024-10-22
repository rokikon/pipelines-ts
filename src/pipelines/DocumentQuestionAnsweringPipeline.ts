import { ImageInput } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { PartialGenerationConfig, RunModelOptions } from "./utils/hub.types";

const taskKey = "document-question-answering" as const;
type TASK = typeof taskKey;

class DocumentQuestionAnsweringPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    image: ImageInput,
    question: string,
    modelOptions?: RunModelOptions,
    pipelineOptions?: PartialGenerationConfig
  ) {
    const documentQuestion = await this.getInstance<TASK>(modelOptions);
    return documentQuestion(image, question, pipelineOptions);
  }
}

export default DocumentQuestionAnsweringPipeline;
