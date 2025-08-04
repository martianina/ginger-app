import React from 'react';

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Sunscreen Products
        </h1>
        <p className="text-gray-600">
          Comprehensive database of sunscreen products and ingredients
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Product Database</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the sunscreen products database. This page will contain 
            detailed information about various sunscreen products, ingredients, and formulations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Product Categories</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chemical Sunscreens</li>
                  <li>• Physical/Mineral Sunscreens</li>
                  <li>• Hybrid Formulations</li>
                  <li>• Specialty Products</li>
                  <li>• Children's Formulations</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Ingredient Analysis</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Active Ingredients</li>
                  <li>• Inactive Components</li>
                  <li>• Allergen Information</li>
                  <li>• Safety Profiles</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Product Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SPF Ratings</li>
                  <li>• Water Resistance</li>
                  <li>• Application Methods</li>
                  <li>• Skin Type Compatibility</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-navy-700 mb-2">Research Data</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Efficacy Studies</li>
                  <li>• User Reviews</li>
                  <li>• Safety Assessments</li>
                  <li>• Comparative Analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-brand-50 border border-brand-200 rounded-lg p-4">
            <h3 className="font-medium text-brand-700 mb-2">Database Status</h3>
            <p className="text-sm text-brand-600">
              This product database will be populated with comprehensive information about 
              sunscreen products, including research data and user feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 