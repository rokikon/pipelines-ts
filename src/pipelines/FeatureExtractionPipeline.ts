import {
  FeatureExtractionPipelineOptions,
  ImagePipelineInputs,
} from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "feature-extraction" as const;
type TASK = typeof taskKey;

class FeatureExtractionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: FeatureExtractionPipelineOptions
  ) {
    const featureExtraction = await this.getInstance<TASK>(modelOptions);
    return featureExtraction(texts, pipelineOptions);
  }
}

export default FeatureExtractionPipeline;
