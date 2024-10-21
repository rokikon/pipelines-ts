import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "text-classification" as const;
type TASK = typeof taskKey;

class TextClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(texts: string | string[], modelOptions?: RunModelOptions) {
    const textClassifier = await this.getInstance<TASK>(modelOptions);
    return textClassifier(texts);
  }
}

export default TextClassificationPipeline;
