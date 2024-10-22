import { TextToAudioPipelineOptions } from "@huggingface/transformers";

import { BasePipeline } from "./_BasePipeline";
import { RunModelOptions } from "./utils/hub.types";

const taskKey = "text-to-audio" as const;
type TASK = typeof taskKey;

class TextToAudioPipeline extends BasePipeline {
  static task = taskKey;

  static async run(
    texts: string | string[],
    modelOptions?: RunModelOptions,
    pipelineOptions?: TextToAudioPipelineOptions
  ) {
    const textToAudio = await this.getInstance<TASK>(modelOptions);
    return textToAudio(texts, pipelineOptions);
  }
}

export default TextToAudioPipeline;
