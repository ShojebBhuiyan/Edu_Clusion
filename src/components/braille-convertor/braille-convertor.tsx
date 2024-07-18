"use client";

// components/BrailleConverter.tsx
import { useState, useEffect, ChangeEvent } from 'react';
import * as braille from 'braille';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import { saveAs } from 'file-saver';

const BrailleConverter = () => {
  const [text, setText] = useState<string>('');
  const [brailleText, setBrailleText] = useState<string>('');

  useEffect(() => {
    // Set the workerSrc for pdfjsLib
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setText(inputText);
    convertToBraille(inputText);
  };

  const convertToBraille = (inputText: string) => {
    try {
      const brailleOutput = braille.toBraille(inputText);
      setBrailleText(brailleOutput);
    } catch (error) {
      console.error('Error converting text to braille:', error);
      setBrailleText('Error converting text to braille.');
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const textContent = await extractTextFromPDF(pdfDoc);
        setText(textContent);
        convertToBraille(textContent);
      } catch (error) {
        console.error('Error reading PDF:', error);
        setBrailleText('Error reading PDF.');
      }
    }
  };

  const extractTextFromPDF = async (pdfDoc: PDFDocumentProxy) => {
    const maxPages = pdfDoc.numPages;
    const textContent: string[] = [];

    for (let i = 1; i <= maxPages; i++) {
      const page: PDFPageProxy = await pdfDoc.getPage(i);
      const text = await page.getTextContent();
      const pageText = text.items.map((item: any) => item.str).join(' ');
      textContent.push(pageText);
    }

    return textContent.join('\n');
  };

  const downloadBraille = () => {
    const blob = new Blob([brailleText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'braille.brf');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-6xl font-bold mb-4 text-center text-black">Text to Braille Converter</h1>
      <textarea
        className="w-full h-32 p-4 border rounded-lg mb-4 text-black"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-black">Braille Output</h2>
        <p className="whitespace-pre-wrap break-words text-black">{brailleText}</p>
        <button
          onClick={downloadBraille}
          className="mt-20 px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-700"
        >
          Download Braille Output
        </button>
      </div>
    </div>
  );
};

export default BrailleConverter;
