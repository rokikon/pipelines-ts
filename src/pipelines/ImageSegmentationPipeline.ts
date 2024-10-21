import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "image-segmentation" as const;
type TASK = typeof taskKey;

class ImageSegmentationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(image: ImagePipelineInputs, modelOptions?: RunModelOptions) {
    const imageSegmentation = await this.getInstance<TASK>(modelOptions);
    return imageSegmentation(image);
  }
}

export default ImageSegmentationPipeline;
