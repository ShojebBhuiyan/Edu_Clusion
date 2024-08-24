"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

function Transcribe() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [transcribedText, setTranscribedText] = useState<string>("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/transcribe", formData, {
        responseType: "text",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setTranscribedText(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  }

  function parseTranscribedText(text: string) {
    // Split the text into segments based on timestamps
    const segments = text.split(/\[\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}\.\d{3}\]/).filter(Boolean);

    return segments.map((segment, index) => {
      // Extract timestamp and text content
      const timestampMatch = text.match(/\[\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}\.\d{3}\]/);
      const timestamp = timestampMatch ? timestampMatch[index] : '';
      const cleanedText = segment.trim().toUpperCase();

      // Render each segment with its timestamp
      return (
        <div key={index} className="mb-4">
          <div className="text-lg font-semibold mb-2">{timestamp.replace(/[\[\]]/g, '')}</div>
          <div className="flex flex-wrap">
            {cleanedText.split("").map((char, idx) => (
              /[A-Z]/.test(char) ? (
                <img
                  key={idx}
                  src={`/asl-images/${char}.png`}
                  alt={`ASL ${char}`}
                  className="w-12 h-12 m-1"
                />
              ) : (
                <span key={idx} className="w-12 h-12 m-1">
                  {char}
                </span>
              )
            ))}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-6xl font-semibold mb-6">Transcribe Video into Sign Language</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className={`mt-4 w-full py-2 px-4 rounded-lg text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-500 hover:bg-blue-700"
          }`}
        >
          {loading ? "Transcribing..." : "Upload and Transcribe"}
        </button>
      </form>
      <div className="mt-6 w-full max-w-4xl bg-gray-100 p-4 rounded-lg">
        {transcribedText ? parseTranscribedText(transcribedText) : "Transcribed text will appear here."}
      </div>
    </div>
  );
}

export default Transcribe;
