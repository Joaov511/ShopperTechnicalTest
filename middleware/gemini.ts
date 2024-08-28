import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey : string | undefined = process.env.API_KEY;
if (!apiKey) {
  throw new Error('Api key variable is not set');
}
const fileManager = new GoogleAIFileManager(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

// Upload the file and specify a display name.
export async function fileUpload(filename : string) {
  const uploadResponse = await fileManager.uploadFile(filename, {
    mimeType: "image/jpeg",
    displayName: "",
  });
  console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);

  const getResponse = await fileManager.getFile(uploadResponse.file.name);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri
        }
      },
      { text: "Describe how this product might be manufactured." },
  ]);
}



// Output the generated text to the console
/* console.log(result.response.text()); */


