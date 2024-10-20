## @rokikon/pipelines

Static, type-safe wrappers for machine learning pipelines with lazy loading.

This TypeScript library provides a convenient and efficient way to interact with machine learning models, inspired by `@xenova/transformers` pipelines. It offers:

  * Static Typing:  Benefit from strong typing for enhanced code maintainability and error detection.
  * Lazy Loading:  Optimize performance by loading models only when needed.
  * Simplified Interface:  Enjoy an easy-to-use API for common machine learning tasks.

### Installation

```bash
npm install @rokikon/pipelines
```

### Usage

This library provides static classes for each pipeline task. Here's an example of how to use the `TextClassificationPipeline`:

```typescript
import { TextClassificationPipeline } from '@rokikon/pipelines';

async function main() {
  const results = await TextClassificationPipeline.run("This is a test sentence.");
  console.log(results);
}

main();
```

### Available Pipelines

* Audio:
    *  `AudioClassificationPipeline` - Classify audio into predefined categories.
    *  `AutomaticSpeechRecognitionPipeline` -  Transcribe spoken language into text (alternative to `SpeechRecognitionPipeline`).
    *  `ZeroShotAudioClassificationPipeline` - Classify audio into arbitrary categories without prior training.

* Computer Vision:
    * `DepthEstimationPipeline` - Predict the depth of an image.
    * `ImageCaptioningPipeline` - Generate descriptive captions for images.
    * `ImageFeatureExtractionPipeline` - Extract meaningful features from images.
    * `ImageSegmentationPipeline` -  Partition an image into multiple segments.
    * `ImageToImagePipeline` - Transform images from one style to another.
    * `ImageToTextPipeline` -  Generate textual descriptions from images (similar to Image Captioning but may have different underlying implementations).
    * `ObjectDetectionPipeline` -  Locate and identify objects within an image.
    * `ZeroShotImageClassificationPipeline` -  Classify images into arbitrary categories without prior training.
    * `ZeroShotObjectDetectionPipeline` - Detect objects in an image without specific training for those objects.


* Natural Language Processing:
    * `DocumentQuestionAnsweringPipeline` - Extract answers to questions from a given document.
    * `FeatureExtractionPipeline` - Extract meaningful features from text.
    * `FillMaskPipeline` -  Predict missing words in a text.
    * `QuestionAnsweringPipeline` - Answer questions based on a given context.
    * `SummarizationPipeline` - Condense lengthy text into concise summaries.
    * `TextClassificationPipeline` - Classify text into predefined categories.
    * `TextGenerationPipeline` - Generate new text, such as creative writing or code.
    * `TextToAudioPipeline` - Convert text into spoken audio.
    * `TextToTextGenerationPipeline` -  Transform or generate new text from given text, including tasks like translation and paraphrasing.
    * `TokenClassificationPipeline` -  Classify individual tokens (words or sub-words) in a text, useful for tasks like Named Entity Recognition (NER).
    * `TranslationPipeline` - Translate text from one language to another.
    * `ZeroShotClassifierPipeline` - Classify text into arbitrary categories without any prior training.


### Contributing

Contributions are welcome! Feel free to open issues and pull requests.

### License

This project is licensed under the [MIT License](https://www.google.com/url?sa=E&source=gmail&q=LICENSE).
