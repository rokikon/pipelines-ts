import { TextToAudioPipelineOptions } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "text-to-audio" as const;
type TASK = typeof taskKey;

class TextToAudioPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    audioOptions: TextToAudioPipelineOptions,
    modelOptions?: RunModelOptions,
  ) {
    const textToAudio = await this.getInstance<TASK>(modelOptions);
    return textToAudio(texts, audioOptions);
  }
}

export default TextToAudioPipeline;
