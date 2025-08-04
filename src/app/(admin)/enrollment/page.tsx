'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import ConsentModal from 'components/consent/ConsentModal';

export default function EnrollmentPage() {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consentProtocol: false,
    consentReidentification: false,
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleConsentAccept = () => {
    setHasConsented(true);
    setShowConsentModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add Google Sheets integration here
    // For now, simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isFormValid = formData.firstName && 
                     formData.lastName && 
                     formData.email && 
                     formData.consentProtocol &&
                     formData.streetAddress && 
                     formData.city && 
                     formData.state && 
                     formData.country && 
                     formData.postalCode &&
                     hasConsented;

  if (isSubmitted) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-navy-700 mb-4">
              Enrollment Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for joining the MC1R Ginger Science Study. We've received your enrollment 
              information and will be in touch soon with next steps.
            </p>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-semibold text-brand-700 mb-2">What's Next?</h3>
              <ul className="text-sm text-brand-600 space-y-1 text-left">
                <li>• You'll receive a welcome email within 24 hours</li>
                <li>• Product samples will be shipped within 1-2 weeks</li>
                <li>• First check-in survey will be sent in 2 weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-700 mb-3">
          Join the MC1R Ginger Science Study
        </h1>
        <p className="text-gray-600 text-lg">
          Help advance sunscreen safety research and receive personalized product recommendations
        </p>
      </div>

      {/* Consent Section */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-navy-700">
              Research Study Consent
            </h2>
            {hasConsented && (
              <div className="flex items-center text-green-600">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Consent Provided</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">
            Before proceeding with enrollment, please review and consent to the research study protocol. 
            This includes information about the study purpose, your rights as a participant, and what to expect.
          </p>
          
          <button
            onClick={() => setShowConsentModal(true)}
            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              hasConsented
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <FaFileAlt className="w-5 h-5 mr-2" />
            {hasConsented ? 'Review Consent Again' : 'Review & Provide Consent'}
          </button>
          
          {!hasConsented && (
            <p className="text-sm text-gray-500 mt-3">
              You must review and consent to the research protocol before proceeding
            </p>
          )}
        </div>
      </div>

      {/* Enrollment Form */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-navy-700 mb-6">
            Enrollment Information
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaUser className="w-5 h-5 mr-2 text-brand-500" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-brand-500" />
                Shipping Address
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Google Places Autocomplete will be integrated here
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Consent */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaShieldAlt className="w-5 h-5 mr-2 text-brand-500" />
                Additional Agreements
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consentProtocol"
                    name="consentProtocol"
                    checked={formData.consentProtocol}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <div>
                    <label htmlFor="consentProtocol" className="block font-medium text-navy-700 mb-1">
                      I confirm my consent to the research protocol *
                    </label>
                    <p className="text-sm text-gray-600">
                      I confirm that I have read and understood the research protocol and agree to participate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consentReidentification"
                    name="consentReidentification"
                    checked={formData.consentReidentification}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <div>
                    <label htmlFor="consentReidentification" className="block font-medium text-navy-700 mb-1">
                      I consent to re-identification (optional)
                    </label>
                    <p className="text-sm text-gray-600">
                      I agree that my data may be re-identified for follow-up research studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 ${
                  isFormValid && !isSubmitting
                    ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Complete Enrollment'}
              </button>
              
              {!isFormValid && (
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Please fill in all required fields and provide consent
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Consent Modal */}
      <ConsentModal
        isOpen={showConsentModal}
        onClose={() => setShowConsentModal(false)}
        onAccept={handleConsentAccept}
      />
    </div>
  );
} 