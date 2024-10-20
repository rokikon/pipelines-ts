import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "zero-shot-classification" as const;
type TASK = typeof taskKey;

class ZeroShotClassifierPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    labels: string[],
    modelOptions?: RunModelOptions,
  ) {
    const zeroShotClassifier = await this.getInstance<TASK>(modelOptions);
    return zeroShotClassifier(texts, labels);
  }
}

export default ZeroShotClassifierPipeline;
