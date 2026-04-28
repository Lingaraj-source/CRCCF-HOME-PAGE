import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// src/App.jsx
// Navbar and Footer removed from App layout per request
import AboutPage from '../AboutUs/About/AboutPage'
import OurIdentity from '../AboutUs/About/OurIdentity'
import OurIntroduction from '../AboutUs/About/OurIntroduction'
import WhatWeDo from '../AboutUs/About/WhatWeDo'
import MissionVision from '../AboutUs/About/MissionVision'
import OurActivity from '../AboutUs/About/OurActivity'
import Purpose from '../AboutUs/About/Purpose'
import Objective from '../AboutUs/About/Objective'
import Achievement from '../AboutUs/About/Achievement'
import LegalCompliance from '../AboutUs/About/LegalCompliance'
import PrivacyPolicy from '../AboutUs/About/PrivacyPolicy'
import DataProtection from '../AboutUs/About/DataProtection'
import TermsConditions from '../AboutUs/About/TermsConditions'
import RulesRegulation from '../AboutUs/About/RulesRegulation'
import Instruction from '../AboutUs/About/Instruction'
import LegalDisclaimer from '../AboutUs/About/LegalDisclaimer'
import CopyrightRegistration from '../AboutUs/About/copyrightRegistration'
import PartnershipCollaboration from '../AboutUs/About/PartnershipCollaboration'
import History from '../AboutUs/About/History'


<Routes>
  <Route path="/" element={<AboutPage />} />
  <Route path="/identity" element={<OurIdentity />} />
  <Route path="/introduction" element={<OurIntroduction />} />
  <Route path="/what-we-do" element={<WhatWeDo />} />
  <Route path="/mission-vision" element={<MissionVision />} />
  <Route path="/activity" element={<OurActivity />} />
  <Route path="/purpose" element={<Purpose />} />
  <Route path="/objective" element={<Objective />} />
  <Route path="/achievement" element={<Achievement />} />
  <Route path="/legal-compliance" element={<LegalCompliance />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/data-protection" element={<DataProtection />} />
  <Route path="/terms-conditions" element={<TermsConditions />} />
  <Route path="/rules-regulation" element={<RulesRegulation />} />
  <Route path="/instruction" element={<Instruction />} />
  <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
  <Route path="/copyright" element={<CopyrightRegistration />} />
  <Route path="/partnership" element={<PartnershipCollaboration />} />
  <Route path="/history" element={<History />} />
</Routes>


import OurLegalEntity from './legalCompliance/OurLegalEntity';
import OurLegalIdentity from './legalCompliance/OurLegalIdentity';
import LegalAuthorizationsCyberLicenses from './legalCompliance/LegalAuthorizationCyberLicenses';
import LegalRightOperationalLimits from './legalCompliance/LegalRightOperationalLimits';
import CRCCFLegalRights from './legalCompliance/CRCCFLegalRights';
import LegalEthicalCompliance from './legalCompliance/LegalEthicalCompliance';
import CyberCrimeInvestigationApproval from './legalCompliance/CybercrimeInvestigationApproval';
import OurCyberInvestigationCapacity from './legalCompliance/OurCyberInvestigationCapacity';
import DigitalInvestigationInfrastructure from './legalCompliance/DigitalInvestigationInfrastructure';
import OurRoleInCybercrimeInvestigation from './legalCompliance/OurRoleInCybercrimeInvestigation';
import InvestigationScopeSocialResponsibility from './legalCompliance/InvestigationScopeSocialResponsibility';
import CyberInvestigationComplianceFramework from './legalCompliance/CyberInvestigationComplianceFramework';
import InvestigationEthicsLegalStandards from './legalCompliance/InvestigationEthicsLegalStandards';
import CyberSecurityInvestigationProtocols from './legalCompliance/CyberSecurityInvestigationProtocols';
import DigitalSecurityCertification from './legalCompliance/DigitalSecurityCertification';
import OperationalResourcesTeam from './legalCompliance/OperationalResourcesTeam';
import CybercrimeResponseCapabilities from './legalCompliance/CybercrimeResponseCapabilities';
import TeamToolTechCapacity from './legalCompliance/TeamToolTechCapacity';
import ComplianceWithIndianCyberLaws from './legalCompliance/ComplianceWithIndianCyberLaws';
import CyberLawComplianceStandards from './legalCompliance/CyberLawComplianceStandards';
import ComplianceWithCybercrimeRegulation from './legalCompliance/ComplianceWithCybercrimeRegulation';
import CybercrimeComplianceFramework from './legalCompliance/CybercrimeComplianceFramework';
import ResourceReport from './legalCompliance/ResourceReport';
import RecognizedPowerResponsibility from './legalCompliance/RecognizedPowerResposibility';

const AboutRoutes = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} /> */}
      <Route path="/about/legal-compliance" element={<LegalCompliance />} />
      <Route path="/about/legal-compliance/our-legal-identity" element={<OurLegalIdentity />} />
      <Route path="/about/legal-compliance/our-legal-entity" element={<OurLegalEntity />} />
      <Route path="/about/legal-compliance/legal-authorizations-cyber-licenses" element={<LegalAuthorizationsCyberLicenses />} />
      <Route path="/about/legal-compliance/legal-right-operational-limits" element={<LegalRightOperationalLimits />} />
      <Route path="/about/legal-compliance/crccf-legal-rights" element={<CRCCFLegalRights />} />
      <Route path="/about/legal-compliance/legal-ethical-compliance" element={<LegalEthicalCompliance />} />
      <Route path="/about/legal-compliance/cyber-crime-investigation-approval" element={<CyberCrimeInvestigationApproval />} />
      <Route path="/about/legal-compliance/our-cyber-investigation-capacity" element={<OurCyberInvestigationCapacity />} />
      <Route path="/about/legal-compliance/digital-investigation-infrastructure" element={<DigitalInvestigationInfrastructure />} />
      <Route path="/about/legal-compliance/our-role-in-cybercrime-investigation" element={<OurRoleInCybercrimeInvestigation />} />
      <Route path="/about/legal-compliance/investigation-scope-social-responsibility" element={<InvestigationScopeSocialResponsibility />} />
      <Route path="/about/legal-compliance/cyber-investigation-compliance-framework" element={<CyberInvestigationComplianceFramework />} />
      <Route path="/about/legal-compliance/investigation-ethics-legal-standards" element={<InvestigationEthicsLegalStandards />} />
      <Route path="/about/legal-compliance/cyber-security-investigation-protocols" element={<CyberSecurityInvestigationProtocols />} />
      <Route path="/about/legal-compliance/digital-security-certification" element={<DigitalSecurityCertification />} />
      <Route path="/about/legal-compliance/operational-resources-team" element={<OperationalResourcesTeam />} />
      <Route path="/about/legal-compliance/cybercrime-response-capabilities" element={<CybercrimeResponseCapabilities />} />
      <Route path="/about/legal-compliance/team-tool-tech-capacity" element={<TeamToolTechCapacity />} />
      <Route path="/about/legal-compliance/compliance-with-indian-cyber-laws" element={<ComplianceWithIndianCyberLaws />} />
      <Route path="/about/legal-compliance/cyber-law-compliance-standards" element={<CyberLawComplianceStandards />} />
      <Route path="/about/legal-compliance/compliance-with-cybercrime-regulation" element={<ComplianceWithCybercrimeRegulation />} />
      <Route path="/about/legal-compliance/cybercrime-compliance-framework" element={<CybercrimeComplianceFramework />} />
      <Route path="/about/legal-compliance/resource-report" element={<ResourceReport />} />
      <Route path="/about/legal-compliance/recognized-power-responsibility" element={<RecognizedPowerResponsibility />} />

      {/* About Page Routes */}


      <Route path="/" element={<AboutPage />} />
      <Route path="/identity" element={<OurIdentity />} />
      <Route path="/introduction" element={<OurIntroduction />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route path="/activity" element={<OurActivity />} />
      <Route path="/purpose" element={<Purpose />} />
      <Route path="/objective" element={<Objective />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/legal-compliance" element={<LegalCompliance />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/data-protection" element={<DataProtection />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/rules-regulation" element={<RulesRegulation />} />
      <Route path="/instruction" element={<Instruction />} />
      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/copyright" element={<CopyrightRegistration />} />
      <Route path="/partnership" element={<PartnershipCollaboration />} />
      <Route path="/history" element={<History />} />

    </Routes>
    // </BrowserRouter>
  )
}

export default AboutRoutes;