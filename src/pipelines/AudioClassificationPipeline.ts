import {
  AudioClassificationPipelineOptions,
  AudioPipelineInputs,
} from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "audio-classification" as const;
type TASK = typeof taskKey;

class AudioClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    audio: AudioPipelineInputs,
    modelOptions?: RunModelOptions,
    pipelineOptions?: AudioClassificationPipelineOptions
  ) {
    const audioClassifier = await this.getInstance<TASK>(modelOptions);
    return audioClassifier(audio, pipelineOptions);
  }
}

export default AudioClassificationPipeline;
