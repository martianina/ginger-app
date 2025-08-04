'use client';
import React from 'react';
import { FaTimes, FaShieldAlt, FaFileAlt, FaUserCheck } from 'react-icons/fa';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function ConsentModal({ isOpen, onClose, onAccept }: ConsentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-navy-700">Research Study Consent</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Study Introduction */}
          <div>
            <h3 className="text-xl font-semibold text-navy-700 mb-3">
              MC1R Ginger Science Study
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This research study focuses on understanding sunscreen effectiveness and safety, 
              particularly for individuals with specific genetic profiles. By participating, 
              you'll contribute to scientific knowledge that could improve sun protection 
              for millions of people worldwide.
            </p>
          </div>

          {/* Study Benefits */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-brand-50 rounded-lg">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaShieldAlt className="w-6 h-6 text-brand-500" />
              </div>
              <h4 className="font-semibold text-navy-700 mb-2">Safety First</h4>
              <p className="text-sm text-gray-600">All products are FDA-approved and dermatologist-tested</p>
            </div>
            
            <div className="text-center p-4 bg-brand-50 rounded-lg">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaUserCheck className="w-6 h-6 text-brand-500" />
              </div>
              <h4 className="font-semibold text-navy-700 mb-2">Personalized</h4>
              <p className="text-sm text-gray-600">Receive recommendations tailored to your skin type</p>
            </div>
            
            <div className="text-center p-4 bg-brand-50 rounded-lg">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaFileAlt className="w-6 h-6 text-brand-500" />
              </div>
              <h4 className="font-semibold text-navy-700 mb-2">Research Impact</h4>
              <p className="text-sm text-gray-600">Help advance scientific understanding of sunscreen safety</p>
            </div>
          </div>

          {/* Protocol Summary */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-navy-700 mb-3">Study Protocol Summary</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Duration:</strong> 12-week participation period with regular check-ins
              </div>
              <div>
                <strong>What You'll Receive:</strong> Personalized sunscreen samples, skin analysis, progress reports
              </div>
              <div>
                <strong>Your Commitment:</strong> Initial survey, product usage, weekly feedback, one virtual consultation
              </div>
              <div>
                <strong>Privacy:</strong> All data is encrypted and stored securely. You may withdraw at any time.
              </div>
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent-protocol"
                className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
              />
              <div>
                <label htmlFor="consent-protocol" className="block font-medium text-navy-700 mb-1">
                  I consent to participate in the MC1R Ginger Science Study
                </label>
                <p className="text-sm text-gray-600">
                  I have read and understood the research protocol summary above. I agree to participate 
                  in this study and understand that I may withdraw at any time without penalty.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent-shipping"
                className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
              />
              <div>
                <label htmlFor="consent-shipping" className="block font-medium text-navy-700 mb-1">
                  I agree to provide my shipping address for product samples
                </label>
                <p className="text-sm text-gray-600">
                  I understand that I will receive sunscreen product samples at my provided address 
                  and agree to use them as directed for the duration of the study.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors"
          >
            I Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
} 