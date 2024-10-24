import { FillMaskPipelineOptions } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "fill-mask" as const;
type TASK = typeof taskKey;

class FillMaskPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: FillMaskPipelineOptions
  ) {
    const fillMask = await this.getInstance<TASK>(modelOptions);
    return fillMask(texts, pipelineOptions);
  }
}

export default FillMaskPipeline;
