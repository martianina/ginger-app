import React from 'react';

export default function RegulatoryPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Regulatory Information
        </h1>
        <p className="text-gray-600">
          Compliance, safety standards, and regulatory requirements
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Regulatory Framework</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for regulatory information. This page will contain 
            comprehensive details about sunscreen regulations, safety standards, and compliance requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">FDA Regulations</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sunscreen Drug Products</li>
                  <li>• SPF Testing Requirements</li>
                  <li>• Labeling Standards</li>
                  <li>• Safety and Efficacy</li>
                  <li>• GRASE Status</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">International Standards</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• EU Cosmetics Regulation</li>
                  <li>• ISO Testing Standards</li>
                  <li>• Global Harmonization</li>
                  <li>• Cross-Border Compliance</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Safety Standards</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ingredient Safety</li>
                  <li>• Allergen Testing</li>
                  <li>• Stability Requirements</li>
                  <li>• Microbial Limits</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Compliance Requirements</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Registration Procedures</li>
                  <li>• Documentation Standards</li>
                  <li>• Inspection Protocols</li>
                  <li>• Enforcement Actions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-brand-50 border border-brand-200 rounded-lg p-4">
            <h3 className="font-medium text-brand-700 mb-2">Regulatory Updates</h3>
            <p className="text-sm text-brand-600">
              This section will be updated with the latest regulatory changes, 
              safety alerts, and compliance requirements for sunscreen products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 