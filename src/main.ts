import { promises as fsPromises } from "fs";

import { processBasket } from "./process-basket";

const FILE_PATH = "./inputs";
const OUTPUT_PATH = "./outputs";

const readFiles = async (filePath: string): Promise<string[]> => {
  try {
    const files = await fsPromises.readdir(filePath);
    return files;
  } catch (err) {
    console.error(`🔴 Error reading files in ${filePath}`, err);
  }
  return [];
};

const main = async (): Promise<void> => {
  console.log("Start reading files...");

  const files = await readFiles(FILE_PATH);

  if (files.length === 0) {
    console.log("🔴 No files found");
    return;
  }

  console.log(`🟢 Found ${files.length} files in ${FILE_PATH}`);

  for (const file of files) {
    console.log(`🟢 Reading file ${file}`);
    const data = await fsPromises.readFile(`${FILE_PATH}/${file}`, "utf-8");

    console.log(`🟢 Processing file ${file}`);
    const newFileName = `${OUTPUT_PATH}/output_${file}`;
    await fsPromises.writeFile(`${newFileName}`, processBasket(data));
    console.log(`🟢 File ${file} processed and saved in ${newFileName}`);
  }
};

main();
