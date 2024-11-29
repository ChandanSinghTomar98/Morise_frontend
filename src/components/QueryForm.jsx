import React, { useState } from "react";
import { Send, CircleHelp } from "lucide-react";
import { submitQuery } from "../services/api/QueryApiManager";

const QueryForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userId = localStorage.getItem("userId");

  const submitQueryFunction = async () => {
    try {
      const response = await submitQuery({
        title,
        description,
        userId,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    submitQueryFunction();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl border border-gray-100 transform transition-all duration-300">
        <div className="flex items-center justify-center mb-6">
          <CircleHelp className="w-12 h-12 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Submit Your Query
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Query Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's your query about?"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 ease-in-out"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Detailed Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more context and details..."
              rows={4}
              maxLength={500}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 ease-in-out resize-none"
              required
            />
            <div className="absolute bottom-2 right-2 text-gray-400 text-sm">
              {description.length}/500
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Submit Query
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueryForm;
