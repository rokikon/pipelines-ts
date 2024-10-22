import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";
import { TextClassificationPipelineOptions } from "@huggingface/transformers";

const taskKey = "text-classification" as const;
type TASK = typeof taskKey;

class TextClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: TextClassificationPipelineOptions
  ) {
    const textClassifier = await this.getInstance<TASK>(modelOptions);
    return textClassifier(texts, pipelineOptions);
  }
}

export default TextClassificationPipeline;
