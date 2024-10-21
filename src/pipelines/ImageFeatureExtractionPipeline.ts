import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "image-feature-extraction" as const;
type TASK = typeof taskKey;

class ImageFeatureExtractionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(image: ImagePipelineInputs, modelOptions?: RunModelOptions) {
    const imageFeatureExctraction = await this.getInstance<TASK>(modelOptions);
    return imageFeatureExctraction(image);
  }
}

export default ImageFeatureExtractionPipeline;