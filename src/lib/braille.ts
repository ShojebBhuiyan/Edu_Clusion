// @ts-ignore
import * as braille from "braille";
import { saveAs } from "file-saver";

export function convertToBraille(inputText: string) {
  try {
    const brailleOutput: string = braille.toBraille(inputText);
    return brailleOutput;
  } catch (error) {
    console.error("Error converting text to braille:", error);
  }
}

export function downloadBraille(brailleText: string, name?: string) {
  const blob = new Blob([brailleText], { type: "text/plain;charset=utf-8" });
  saveAs(blob, name ? name : "braille.brf");
}
