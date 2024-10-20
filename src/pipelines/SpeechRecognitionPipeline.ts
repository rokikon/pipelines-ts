import { AudioPipelineInputs } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "automatic-speech-recognition" as const;
type TASK = typeof taskKey;

class SpeechRecognitionPipeline extends BasePipeline {
  static task = taskKey;

  static async run(audio: AudioPipelineInputs, modelOptions?: RunModelOptions) {
    const speechRecognition = await this.getInstance<TASK>(modelOptions);
    return speechRecognition(audio);
  }
}

export default SpeechRecognitionPipeline;
