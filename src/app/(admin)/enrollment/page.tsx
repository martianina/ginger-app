import React from 'react';

export default function EnrollmentPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Sunscreen Study Enrollment
        </h1>
        <p className="text-gray-600">
          Join our comprehensive sunscreen research study
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Study Information</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the enrollment form. The form will collect participant information 
            and consent for the sunscreen research study.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-navy-700 mb-2">Form Fields (Placeholder)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Name and Contact Information</li>
                <li>• Age and Demographics</li>
                <li>• Skin Type and History</li>
                <li>• Current Sunscreen Usage</li>
                <li>• Medical History</li>
                <li>• Consent Agreement</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-medium text-brand-700 mb-2">Integration Notes</h3>
              <p className="text-sm text-brand-600">
                This form will integrate with Google Sheets via Apps Script to store enrollment data 
                and trigger the MailerLite email funnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 