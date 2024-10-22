import {
  AudioPipelineInputs,
  AutomaticSpeechRecognitionConfig,
} from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "automatic-speech-recognition" as const;
type TASK = typeof taskKey;

class AutomaticSpeechRecognitionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    audio: AudioPipelineInputs,
    modelOptions?: RunModelOptions,
    pipelineOptions?: Partial<AutomaticSpeechRecognitionConfig>
  ) {
    const speechRecogintion = await this.getInstance<TASK>(modelOptions);
    return speechRecogintion(audio, pipelineOptions);
  }
}

export default AutomaticSpeechRecognitionPipeline;
