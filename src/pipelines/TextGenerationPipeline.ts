import { Chat, TextGenerationConfig } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "text-generation" as const;
type TASK = typeof taskKey;

class TextGenerationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[] | Chat | Chat[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: TextGenerationConfig
  ) {
    const textGeneration = await this.getInstance<TASK>(modelOptions);
    return textGeneration(texts, pipelineOptions);
  }
}

export default TextGenerationPipeline;
