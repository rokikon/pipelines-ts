import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "summarization" as const;
type TASK = typeof taskKey;

class SummarizationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(texts: string | string[], modelOptions?: RunModelOptions) {
    const summary = await this.getInstance<TASK>(modelOptions);
    return summary(texts);
  }
}

export default SummarizationPipeline;
