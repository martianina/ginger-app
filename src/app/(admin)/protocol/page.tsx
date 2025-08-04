import React from 'react';

export default function ProtocolPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Research Protocol
        </h1>
        <p className="text-gray-600">
          Study methodology and research procedures
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Study Protocol Overview</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the research protocol information. This page will contain 
            detailed information about the study methodology, procedures, and research standards.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Study Design</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research Objectives</li>
                  <li>• Participant Criteria</li>
                  <li>• Data Collection Methods</li>
                  <li>• Timeline and Phases</li>
                  <li>• Quality Control Measures</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Safety Protocols</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Participant Protection</li>
                  <li>• Data Privacy Standards</li>
                  <li>• Adverse Event Reporting</li>
                  <li>• Emergency Procedures</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Data Management</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Collection Procedures</li>
                  <li>• Storage and Security</li>
                  <li>• Analysis Methods</li>
                  <li>• Reporting Standards</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Compliance</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regulatory Requirements</li>
                  <li>• Ethical Guidelines</li>
                  <li>• Institutional Review</li>
                  <li>• Documentation Standards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-brand-50 border border-brand-200 rounded-lg p-4">
            <h3 className="font-medium text-brand-700 mb-2">Protocol Status</h3>
            <p className="text-sm text-brand-600">
              This protocol information will be updated with the complete research methodology 
              and approved study procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 