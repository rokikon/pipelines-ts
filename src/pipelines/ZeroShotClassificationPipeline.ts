import { ZeroShotClassificationPipelineOptions } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "zero-shot-classification" as const;
type TASK = typeof taskKey;

class ZeroShotClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    labels: string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: ZeroShotClassificationPipelineOptions
  ) {
    const zeroShotClassifier = await this.getInstance<TASK>(modelOptions);
    return zeroShotClassifier(texts, labels, pipelineOptions);
  }
}

export default ZeroShotClassificationPipeline;
