import { BasePipeline } from "./_BasePipeline";
import { PartialGenerationConfig, RunModelOptions } from "./utils/hub.types";

const taskKey = "text2text-generation" as const;
type TASK = typeof taskKey;

class TextToTextGenerationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: PartialGenerationConfig
  ) {
    const textToText = await this.getInstance<TASK>(modelOptions);
    return textToText(texts, pipelineOptions);
  }
}

export default TextToTextGenerationPipeline;
