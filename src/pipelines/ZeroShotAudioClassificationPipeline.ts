import {
  AudioPipelineInputs,
  ZeroShotAudioClassificationPipelineOptions,
} from "@huggingface/transformers";

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
    pipelineOptions?: ZeroShotAudioClassificationPipelineOptions
  ) {
    const zeroShotAudioClassifier = await this.getInstance<TASK>(modelOptions);
    return zeroShotAudioClassifier(audio, labels, pipelineOptions);
  }
}

export default ZeroShotAudioClassificationPipeline;
