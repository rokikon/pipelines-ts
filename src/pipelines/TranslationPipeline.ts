import { BasePipeline } from "./_BasePipeline";
import { GenerationConfigType, RunModelOptions } from "./utils/hub.types";

const taskKey = "translation" as const;
type TASK = typeof taskKey;

class TranslationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: GenerationConfigType
  ) {
    const translation = await this.getInstance<TASK>(modelOptions);
    return translation(texts, pipelineOptions);
  }
}

export default TranslationPipeline;
