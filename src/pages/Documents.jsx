import React, { useState } from "react";
import { submitDocuments } from "../services/api/DocumentsApiManager";
import DocumentUploadModal from "../components/DocumentUploadModel";
import DocumentUploadSuccess from "../components/DocumentUploadSuccess";
import SignatureCanvas from "../components/SignatureCanvas";
import { Toast } from "../components/Toast";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const navigate = useNavigate();
  const qualificationLevels = [
    { value: "10th", label: "10th Standard" },
    { value: "12th", label: "12th Standard" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "postgraduate", label: "Postgraduate" },
    { value: "doctorate", label: "Doctorate (PhD)" },
  ];

  const [qualification, setQualification] = useState("");
  const [documents, setDocuments] = useState({
    aadharFront: null,
    aadharBack: null,
    panFile: null,
    image: null,
    sign: null,
    matriculation: null,
    intermediate: null,
    graduation: null,
    postGraduation: null,
    doctoratesCertificate: null,
    other: null,
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const handleSignatureSave = (signatureData) => {
    // Ensure that signatureData is not empty or undefined
    if (signatureData) {
      setDocuments((prev) => ({
        ...prev,
        sign: signatureData,
      }));

      setErrors((prev) => ({
        ...prev,
        sign: "", // Clear any error when signature is provided
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        sign: "Signature is required.",
      }));
    }
  };
  const handleQualificationChange = (e) => {
    const newQualification = e.target.value;
    setQualification(newQualification);

    // Reset documents and errors when qualification changes
    setDocuments((prev) => ({
      ...prev,
      graduation: null,
      postGraduation: null,
      doctoratesCertificate: null,
    }));
    setErrors({});
  };
  const getRequiredDocuments = () => {
    // Base documents required for all qualification levels
    const baseDocuments = [
      { label: "Aadhar Front", field: "aadharFront" },
      { label: "Aadhar Back", field: "aadharBack" },
      { label: "Pan Card", field: "panFile" },
      { label: "Passport Size Photo", field: "image" },
      { label: "CV", field: "cv" },
      { label: "10th Marksheet", field: "matriculation" },
    ];

    // Add additional documents based on qualification
    const additionalDocuments = {
      "12th": [{ label: "12th Marksheet", field: "intermediate" }],
      undergraduate: [
        { label: "12th Marksheet", field: "intermediate" },
        { label: "Graduation Certificate", field: "graduation" },
      ],
      postgraduate: [
        { label: "12th Marksheet", field: "intermediate" },
        { label: "Graduation Certificate", field: "graduation" },
        {
          label: "Post Graduation Certificate",
          field: "postGraduation",
        },
      ],
    };

    return [
      ...baseDocuments,
      ...(additionalDocuments[qualification] || []),
      { label: "Other Documents (Optional)", field: "other", optional: true },
    ];
  };

  const handleFileChange = (e, field) => {
    setDocuments((prev) => ({ ...prev, [field]: e.target.files[0] }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateFields = () => {
    const newErrors = {};
    const requiredDocuments = getRequiredDocuments()
      .filter((doc) => !doc.optional)
      .map((doc) => doc.field);

    requiredDocuments.forEach((field) => {
      if (!documents[field]) {
        newErrors[field] = "This document is required.";
      }
    });

    if (!documents.sign) {
      newErrors.sign = "Signature is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    if (validateFields()) {
      try {
        const formData = new FormData();
        formData.append("qualification", qualification);
        Object.entries(documents).forEach(([key, file]) => {
          if (file && key !== "additionalOptions") {
            if (key === "sign" && file) {
              formData.append("sign", file);
            } else {
              formData.append(key, file);
            }
          }
        });

        formData.append("userId", userId);

        // API call to submit the form data

        const response = await submitDocuments(formData);
        if (response.data.status === 200) {
          setIsSuccessDialogOpen(true);
          setTimeout(() => {
            setIsSuccessDialogOpen(false);
            navigate("/payment");
          }, 2000);
        } else {
          Toast.fire({
            icon: "error",
            title: "Error uploading documents",
          });
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen  pt-8 pb-8">
      {isSuccessDialogOpen && (
        <DocumentUploadSuccess
          onClose={() => {
            setIsSuccessDialogOpen(false);
          }}
          orderId="123456"
        />
      )}
      {isOpen && (
        <DocumentUploadModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-[#DBB000] text-center">
          Upload Documents
        </h1>

        {/* Qualification Dropdown */}
        <div className="space-y-2">
          <label className="block font-semibold text-[#000000]">
            Highest Qualification *
          </label>
          <select
            value={qualification}
            onChange={handleQualificationChange}
            className="block w-full px-4 py-2 border rounded-lg focus:outline-none border-gray-300 focus:border-[#DBB000]"
            required
          >
            <option value="">Select your qualification</option>
            {qualificationLevels.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {!qualification && (
            <p className="text-sm text-amber-600 mt-1">
              Please select your qualification to see required documents
            </p>
          )}
        </div>

        {qualification && (
          <>
            {/* Document Fields */}
            {getRequiredDocuments().map(({ label, field, optional }) => (
              <div key={field} className="space-y-2">
                <label className="block font-semibold text-[#000000]">
                  {label} {!optional && "*"}
                </label>

                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, field)}
                  className={`block w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    errors[field]
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#DBB000]"
                  }`}
                  accept={field === "sign" ? "" : "image/*,.pdf"}
                />
                {errors[field] && (
                  <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <SignatureCanvas onSave={(data) => handleSignatureSave(data)} />
            {errors.sign && (
              <p className="text-sm text-red-500 mt-1">{errors.sign}</p>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-[#DBB000] text-white rounded-lg hover:bg-[#000000] hover:text-[#DBB000] transition duration-200 font-bold"
            >
              Submit Documents
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Documents;
