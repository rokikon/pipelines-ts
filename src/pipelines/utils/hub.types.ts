import { GenerationConfig } from "@huggingface/transformers/types/generation/configuration_utils";

export type ModelOptions = {
  subfolder?: string | undefined;
  model_file_name?: string | undefined;
  device?:
    | "auto"
    | "gpu"
    | "cpu"
    | "wasm"
    | "webgpu"
    | "cuda"
    | "dml"
    | "webnn"
    | "webnn-npu"
    | "webnn-gpu"
    | "webnn-cpu";
  dtype?: "fp32" | "fp16" | "q8" | "int8" | "uint8" | "q4" | "bnb4" | "q4f16";
  use_external_data_format?: boolean | undefined;
};

export type RunModelOptions = {
  model: string;
  options: ModelOptions;
};

export type GenerationConfigType = GenerationConfig;
export type PartialGenerationConfig = Partial<GenerationConfigType>;
