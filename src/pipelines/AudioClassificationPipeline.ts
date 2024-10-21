import { AudioPipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "audio-classification" as const;
type TASK = typeof taskKey;

class AudioClassificationPipeline extends BasePipeline {
  static task = taskKey;

  static async run(audio: AudioPipelineInputs, modelOptions?: RunModelOptions) {
    const audioClassifier = await this.getInstance<TASK>(modelOptions);
    return audioClassifier(audio);
  }
}

export default AudioClassificationPipeline;
