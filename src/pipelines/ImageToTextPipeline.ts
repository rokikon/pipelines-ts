import { ImagePipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "image-to-text" as const;
type TASK = typeof taskKey;

class ImageToTextPipeline extends BasePipeline {
  static task = taskKey;

  static async run(image: ImagePipelineInputs, modelOptions?: RunModelOptions) {
    const imageToText = await this.getInstance<TASK>(modelOptions);
    return imageToText(image);
  }
}

export default ImageToTextPipeline;
