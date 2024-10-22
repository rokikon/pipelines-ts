import {
  ImagePipelineInputs,
  ZeroShotImageClassificationPipelineOptions,
} from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "zero-shot-image-classification" as const;
type TASK = typeof taskKey;

class ZeroShotImageClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    image: ImagePipelineInputs,
    labels: string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: ZeroShotImageClassificationPipelineOptions
  ) {
    const zeroShotImageClassifier = await this.getInstance<TASK>(modelOptions);
    return zeroShotImageClassifier(image, labels, pipelineOptions);
  }
}

export default ZeroShotImageClassificationPipeline;
