'use client';
import React from 'react';
import { FaFlask, FaUsers, FaShieldAlt, FaFileAlt, FaBoxes, FaChartBar, FaLock, FaGlobe } from 'react-icons/fa';

export default function ProtocolPage() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-700 mb-3">
            Ginger Science UV Filter Study – Protocol
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span className="font-semibold">MC1R Data Foundation</span>
            <span>•</span>
            <span>Version: 1.1 – July 2025</span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaFlask className="w-6 h-6 mr-3 text-brand-500" />
            1. Overview
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Ginger Science UV Filter Study is an independent research initiative designed to assess real-world experience and ingredient tolerability across globally sourced sunscreen products. It is part of the Ginger Science Project, which aims to collect structured health and consumer data from redhead and fair-skinned populations historically overlooked in dermatology and clinical research.
            </p>
            <p>
              Redheads are known to have increased risk of skin cancer, and the need for sunscreen is particularly important in the population. The lack of data about how redheads interact with SPF compounds is a material gap in clinical knowledge. This project will help include MC1R-variant data be included in future research.
            </p>
            <p>
              This first product cohort evaluates six EU- and Asia-compliant sunscreens labeled SPF 50 or higher, distributed in brand-blinded microdoses for structured user review. Participants are not compensated but receive unique digital artifacts to mark their contribution to community-owned, privacy-respecting research.
            </p>
            <p>
              This cohort is limited to participants in the United States, due to the ready lack access to modern filters in the country. The FDA has not approved a new sunscreen compound since 1999. This study collects real-world evidence about how redheads interact with sunscreen in order to supplement consumer, regulatory and business decisionmaking.
            </p>
            <p>
              This protocol outlines the scope, data practices, and governance of the study.
            </p>
          </div>
        </div>

        {/* Study Goals */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaChartBar className="w-6 h-6 mr-3 text-brand-500" />
            2. Study Goals
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-500 mr-3 mt-1">•</span>
              Assess texture, finish, reactivity, and user preference across six sunscreen formulations
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-3 mt-1">•</span>
              Record real-world context of use (climate, application timing, layering, etc.)
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-3 mt-1">•</span>
              Build a publicly accessible, machine-readable ingredient dataset linked to participant reviews
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-3 mt-1">•</span>
              Increase inclusion of redhead and MC1R-expressive skin types in community-anchored wellness data
            </li>
          </ul>
        </div>

        {/* Product Cohort */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaBoxes className="w-6 h-6 mr-3 text-brand-500" />
            3. Product Cohort
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">Each participant receives:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Six 4ml color-coded, brand-blinded sunscreen samples</li>
                <li>• INCI ingredient lists for all six products (accessible via QR link)</li>
                <li>• A unique survey & review link (unlocked only after informed consent)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">Products represent:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 Korean hybrid sunscreens (chemical-mineral blends)</li>
                <li>• Japanese water-gel sunscreen</li>
                <li>• Canadian broad-spectrum SPF with Mexoryl</li>
                <li>• EU/US SPF 100 formulation with legacy filters</li>
                <li>• Premium ultralight mineral (zinc/titanium) sunscreen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Participation Instructions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaUsers className="w-6 h-6 mr-3 text-brand-500" />
            4. Participation Instructions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">Participants must:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Be age 18+ and based in the U.S.</li>
                <li>• Self-identify as having red hair, MC1R expression, or extreme sun sensitivity</li>
                <li>• Consent to participation through a plain-language consent form</li>
                <li>• Test all six samples over ~7–10 days, preferably in morning-use scenarios</li>
                <li>• Submit a structured review via provided QR form (includes short answer & multiple choice)</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700 mb-3">
                Samples are sent unbranded with ingredient lists. Participants are informed of the brands of each product after submission of review for that product.
              </p>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">Optional:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Utilize UV stickers packaged with the sample kits</li>
                <li>• Submit images showing how the sunscreen appears on skin</li>
                <li>• Claim MC1R reward token</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Types Collected */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6">5. Data Types Collected</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">5.1 Survey Responses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Frequency of use</li>
                <li>• Reported side effects</li>
                <li>• Sensory feedback (feel, scent, finish)</li>
                <li>• Climate context</li>
                <li>• Willingness to repurchase or recommend</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">5.2 Product Metadata</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• UV filter types</li>
                <li>• Region of origin (e.g., Korea, Canada, EU)</li>
                <li>• Product class (hybrid, mineral, gel-based, etc.)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">5.3 Participant Tags</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fitzpatrick skin type</li>
                <li>• Hair/freckle pattern</li>
                <li>• Region/latitude (optional)</li>
                <li>• Dermatological history (optional, de-identified)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Infrastructure */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaLock className="w-6 h-6 mr-3 text-brand-500" />
            6. Data Infrastructure
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">6.1 Storage & Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pseudonymized submission saved off-chain</li>
                <li>• Select reviews parsed by MC1R BioAgent for summary/metadata aggregation</li>
                <li>• IPFS & GitHub used for public documentation (e.g. protocol, INCI sheets, consent form)</li>
                <li>• Process Control NFTs contain only cohort metadata, no identifiers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">6.2 Access & Revocation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Participation requires opt-in via consent form</li>
                <li>• Consent may be revoked via email or wallet signature</li>
                <li>• Data may be downloaded by participant upon request</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">6.3 Interoperability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All data designed to comply with emerging decentralized health data standards</li>
                <li>• Metadata published under open license for academic/community reuse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consent & Governance */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaShieldAlt className="w-6 h-6 mr-3 text-brand-500" />
            7. Consent & Governance
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• No wallet required to participate</li>
            <li>• Consent form is required before accessing the survey/review form (See Exhibit A)</li>
            <li>• No private health information is stored or sold</li>
            <li>• Project governance is overseen by the MC1R Data Foundation core team and published publicly via GitHub</li>
          </ul>
        </div>

        {/* Ethical Framework */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6">8. Ethical Framework</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• GDPR-aligned privacy architecture</li>
            <li>• HIPAA-adjacent safeguards for sensitive questions (fully optional)</li>
            <li>• Informed consent with optional conditional re-identification enables incentives</li>
            <li>• Incentives for this project are early access to other projects, and non-monetary</li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
            <FaGlobe className="w-6 h-6 mr-3 text-brand-500" />
            9. Next Steps (for Participants)
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Scan the QR code to view the INCI ingredient list and review products</li>
            <li>• Use the samples over the course of 1–2 weeks</li>
            <li>• Log your experience in the review form</li>
            <li>• Follow @GingerScienceHQ for future cohort releases and data summaries</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 