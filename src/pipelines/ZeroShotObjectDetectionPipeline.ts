import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "zero-shot-object-detection" as const;
type TASK = typeof taskKey;

class ZeroShotObjectDetectionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    image: ImagePipelineInputs,
    labels: string[],
    modelOptions?: RunModelOptions,
  ) {
    const objectDetection = await this.getInstance<TASK>(modelOptions);
    return objectDetection(image, labels);
  }
}

export default ZeroShotObjectDetectionPipeline;
