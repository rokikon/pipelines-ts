import {
  ImagePipelineInputs,
  ObjectDetectionPipelineOptions,
} from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "object-detection" as const;
type TASK = typeof taskKey;

class ObjectDetectionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: ImagePipelineInputs,
    modelOptions?: RunModelOptions,
    pipelineOptions?: ObjectDetectionPipelineOptions
  ) {
    const objectDetection = await this.getInstance<TASK>(modelOptions);
    return objectDetection(texts, pipelineOptions);
  }
}

export default ObjectDetectionPipeline;
