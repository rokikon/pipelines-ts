import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";
import { TokenClassificationPipelineOptions } from "@huggingface/transformers";

const taskKey = "token-classification" as const;
type TASK = typeof taskKey;

class TokenClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: TokenClassificationPipelineOptions
  ) {
    const tokenClassifier = await this.getInstance<TASK>(modelOptions);
    return tokenClassifier(texts, pipelineOptions);
  }
}

export default TokenClassificationPipeline;
