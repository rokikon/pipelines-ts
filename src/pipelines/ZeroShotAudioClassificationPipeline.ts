import { AudioPipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "zero-shot-audio-classification" as const;
type TASK = typeof taskKey;

class ZeroShotAudioClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    audio: AudioPipelineInputs,
    labels: string[],
    modelOptions?: RunModelOptions,
  ) {
    const zeroShotAudioClassifier = await this.getInstance<TASK>(modelOptions);
    return zeroShotAudioClassifier(audio, labels);
  }
}

export default ZeroShotAudioClassificationPipeline;
