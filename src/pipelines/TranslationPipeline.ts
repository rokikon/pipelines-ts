import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "translation" as const;
type TASK = typeof taskKey;

class TranslationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(texts: string | string[], modelOptions?: RunModelOptions) {
    const translation = await this.getInstance<TASK>(modelOptions);
    return translation(texts);
  }
}

export default TranslationPipeline;
