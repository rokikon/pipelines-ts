import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "depth-estimation" as const;
type TASK = typeof taskKey;

class DepthEstimationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    images: ImagePipelineInputs,
    modelOptions?: RunModelOptions
  ) {
    const depthEstimation = await this.getInstance<TASK>(modelOptions);
    return depthEstimation(images);
  }
}

export default DepthEstimationPipeline;
