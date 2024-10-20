import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "token-classification" as const;
type TASK = typeof taskKey;

class TokenClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(texts: string | string[], modelOptions?: RunModelOptions) {
    const tokenClassifier = await this.getInstance<TASK>(modelOptions);
    return tokenClassifier(texts);
  }
}

export default TokenClassificationPipeline;
