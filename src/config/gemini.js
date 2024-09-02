// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return (result.response.text());
  }
  
  export default run;

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from"@google/generative-ai";
// import { GoogleAIFileManager } from "@google/generative-ai/server";

// const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);
// const fileManager = new GoogleAIFileManager(apiKey);

// /**
//  * Uploads the given file to Gemini.
//  *
//  * See https://ai.google.dev/gemini-api/docs/prompting_with_media
//  */
// async function uploadToGemini(path, mimeType) {
//   const uploadResult = await fileManager.uploadFile(path, {
//     mimeType,
//     displayName: path,
//   });
//   const file = uploadResult.file;
//   console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
//   return file;
// }

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   // TODO Make these files available on the local file system
//   // You may need to update the file paths
//   const files = [
//     await uploadToGemini("image_what_shape_comes_next1.jpeg", "image/jpeg"),
//   ];

//   const chatSession = model.startChat({
//     generationConfig,
//  // safetySettings: Adjust safety settings
//  // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             fileData: {
//               mimeType: files[0].mimeType,
//               fileUri: files[0].uri,
//             },
//           },
//           {text: "Look at this sequence of three shapes. What shape should come as the fourth shape? Explain your reasoning with detailed descriptions of the first shapes."},
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {text: "The sequence shows polygons with an increasing number of sides:\n\n* **Shape 1:** A triangle with **3** sides.\n* **Shape 2:** A square with **4** sides.\n* **Shape 3:** A pentagon with **5** sides.\n\nFollowing this pattern, the fourth shape should be a hexagon, which has **6** sides. \n"},
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
//   return(result.response.text());

// }

// export default run;