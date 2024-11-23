import React, { useRef, useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
const SignatureCanvas = ({ onSave }) => {
  const sigCanvas = useRef(null);
  const [isSigned, setIsSigned] = useState(false);
  const clear = () => {
    sigCanvas.current.clear();
    setIsSigned(false);
    onSave(null);
  };

  const save = () => {
    if (!sigCanvas.current.isEmpty()) {
      const signatureData = sigCanvas.current.toDataURL();
      onSave(signatureData);
      setIsSigned(true);
    }
  };

  const handleBegin = () => {
    setIsSigned(true);
  };

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-[#000000]">Signature *</label>
      <div className="border-2 border-gray-300 rounded-lg p-2">
        <div className="border border-gray-200 rounded">
          <ReactSignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              className: "w-full h-40",
              style: {
                background: "white",
                touchAction: "none",
              },
            }}
            onBegin={handleBegin}
          />
        </div>
        <div className="flex justify-end space-x-2 mt-2">
          <button
            type="button"
            onClick={clear}
            className="px-4 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={save}
            disabled={!isSigned}
            className={`px-4 py-1 text-sm rounded ${
              isSigned
                ? "bg-[#DBB000] text-white hover:bg-[#000000] hover:text-[#DBB000]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } transition-colors`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureCanvas;
