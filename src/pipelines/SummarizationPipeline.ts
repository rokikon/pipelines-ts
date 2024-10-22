import { BasePipeline } from "./_BasePipeline";
import { GenerationConfigType, RunModelOptions } from "./utils/hub.types";

const taskKey = "summarization" as const;
type TASK = typeof taskKey;

class SummarizationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: GenerationConfigType
  ) {
    const summary = await this.getInstance<TASK>(modelOptions);
    return summary(texts, pipelineOptions);
  }
}

export default SummarizationPipeline;
