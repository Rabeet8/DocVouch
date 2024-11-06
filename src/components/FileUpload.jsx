import React, { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0]; // Use the first selected file
      const { name, size } = file;
      setFileData({ name, size });
      onFileUpload(files); // Call the upload function passed as prop
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-black p-8 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Upload Document
        </h2>
        <p className="text-center mb-4 text-gray-600">
          Upload your document to view its details.
        </p>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 p-2 w-full"
          style={{ display: "none" }} // Hide default input
          id="file-upload" // For label to reference
          multiple // Allow multiple files selection
        />
        <label
          htmlFor="file-upload"
          className="mb-4 block text-center cursor-pointer border-2 border-blue-900 bg-blue-900 text-white font-semibold rounded py-3 transition duration-300 ease-in-out hover:bg-blue-800"
        >
          Choose File
        </label>
        {fileData && (
          <div className="text-center">
            <p className="font-semibold">
              File Name: <span className="text-blue-900">{fileData.name}</span>
            </p>
            <p className="font-semibold">
              File Size:{" "}
              <span className="text-blue-900">{fileData.size} bytes</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
