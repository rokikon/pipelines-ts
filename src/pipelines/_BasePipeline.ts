import {
  pipeline,
  type AllTasks,
  type PipelineType,
} from "@huggingface/transformers";

import { RunModelOptions } from "./utils/hub.types";

const DEFAULT_RUN_OPTIONS = {
  model: undefined,
  options: {},
};

export abstract class BasePipeline {
  static task: PipelineType;
  static pipe: Promise<AllTasks[typeof this.task]>;

  static async getInstance<TASK_TYPE extends PipelineType = PipelineType>({
    model,
    options,
  }: RunModelOptions = DEFAULT_RUN_OPTIONS) {
    if (!this.pipe) {
      if (Object.keys(options ?? {}).length) {
        this.pipe = pipeline(this.task, model, options);
      } else {
        this.pipe = pipeline(this.task, model);
      }
    }

    return this.pipe as Promise<AllTasks[TASK_TYPE]>;
  }

  static async run(...args: any): Promise<any> {
    throw new Error("Not implemented");
  }
}
