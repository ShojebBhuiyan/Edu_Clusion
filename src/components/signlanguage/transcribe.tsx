"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

function Transcribe() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

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
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/transcribe', formData, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${file.name.split('.')[0]}_transcription.txt`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center  min-h-screen p-4">
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
          className={`mt-4 w-full py-2 px-4 rounded-lg text-white font-semibold 
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 hover:bg-blue-700'}
          `}
        >
          {loading ? 'Transcribing...' : 'Upload and Transcribe'}
        </button>
      </form>
    </div>
  );
}

export default Transcribe;
