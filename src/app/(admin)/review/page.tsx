import React from 'react';

export default function ReviewPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Product Review
        </h1>
        <p className="text-gray-600">
          Review and rate sunscreen products based on your experience
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Product Review Form</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the product review form. The form will collect detailed feedback 
            about sunscreen products including effectiveness, texture, and user experience.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-navy-700 mb-2">Review Fields (Placeholder)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product Name and Brand</li>
                <li>• SPF Rating and Protection Level</li>
                <li>• Texture and Application Experience</li>
                <li>• Effectiveness Rating</li>
                <li>• Skin Reaction and Compatibility</li>
                <li>• Overall Satisfaction Score</li>
                <li>• Additional Comments</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-medium text-brand-700 mb-2">Data Collection</h3>
              <p className="text-sm text-brand-600">
                This form will collect detailed product reviews to build a comprehensive database 
                of sunscreen effectiveness and user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 