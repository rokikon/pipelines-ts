import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "image-to-text" as const;
type TASK = typeof taskKey;

class ImageCaptioningPipeline extends BasePipeline {
  static task = taskKey;

  static async run(image: ImagePipelineInputs, modelOptions?: RunModelOptions) {
    const imageCaptioning = await this.getInstance<TASK>(modelOptions);
    return imageCaptioning(image);
  }
}

export default ImageCaptioningPipeline;
