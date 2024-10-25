import { GenerationConfig } from "@huggingface/transformers/types/generation/configuration_utils";
import { PretrainedModelOptions } from "@huggingface/transformers/types/utils/hub";

export type RunModelOptions = {
  model: string;
  options: PretrainedModelOptions;
};

export type GenerationConfigType = GenerationConfig;
export type PartialGenerationConfig = Partial<GenerationConfigType>;
