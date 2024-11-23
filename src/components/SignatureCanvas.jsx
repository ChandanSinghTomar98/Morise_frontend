import React from "react";
import ReactSignatureCanvas from "react-signature-canvas";

const SignatureCanvas = () => {
  return (
    <div>
      <ReactSignatureCanvas
        penColor="black"
        // canvasProps={{ width: 500, height: 200 }}
        className="w-full"
      />
    </div>
  );
};

export default SignatureCanvas;
