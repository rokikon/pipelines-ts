import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "image-to-image" as const;
type TASK = typeof taskKey;

class ImageToImagePipeline extends BasePipeline {
  static task = taskKey;

  static async run(image: ImagePipelineInputs, modelOptions?: RunModelOptions) {
    const imageToImage = await this.getInstance<TASK>(modelOptions);
    return imageToImage(image);
  }
}

export default ImageToImagePipeline;
