import React from "react";
import { Routes, Route } from "react-router-dom";

import OurServices from "../Service/OurService/OurServices";
import SoftwareITServices from "../Service/OurService/SoftwareITServices";
import DigitalMarketingServices from "../Service/OurService/DigitalMarketingServices";
import VictimSupportServices from "../Service/OurService/VictimSupportServices";
import LegalInformationDocumentationSupport from "../Service/OurService/LegalInformationDocumentationSupport";
import CyberSecurityServices from "../Service/OurService/CyberSecurityServices";
import CyberInvestigationServices from "../Service/OurService/CyberInvestigationServices";
import LegalServices from "../Service/OurService/LegalServices";
import EducationServices from "../Service/OurService/EducationServices";
import TrainingInternshipServices from "../Service/OurService/TrainingInternshipServices";
import PlacementServices from "../Service/OurService/PlacementServices";

import CompanyRegistration from "../Service/legal/CompanyRegistration";
import GSTRegistrationService from "../Service/legal/GSTRegistrationService";
import GSTReturnFilingServices from "../Service/legal/GSTReturnFilingServices";
import CompanyAnnualFilingServices from "../Service/legal/CompanyAnnualFilingServices";
import CompanyAuditSupportServices from "../Service/legal/CompanyAuditSupportServices";
import FSSAIRegistrationServices from "../Service/legal/FSSAIRegistrationServices";
import MSMEUdyamRegistrationServices from "../Service/legal/MSMEUdyamRegistrationServices";
import IECRegistrationServices from "../Service/legal/IECRegistrationServices";
import ShopEstablishmentRegistrationServices from "../Service/legal/ShopEstablishmentRegistrationServices";
import ProfessionalTaxRegistrationServices from "../Service/legal/ProfessionalTaxRegistrationServices";
import PFRegistrationServices from "../Service/legal/PFRegistrationServices";
import ESICRegistrationServices from "../Service/legal/ESICRegistrationServices";
import DigitalSignatureCertificate from "../Service/legal/DigitalSignatureCertificate";
import DataITComplianceConsultingServices from "../Service/legal/DataITComplianceConsultingServices";
import TrustRegistrationServices from "../Service/legal/TrustRegistrationServices";
import NGORegistrationServices from "../Service/legal/NGORegistrationServices";
import SocietyRegistrationServices from "../Service/legal/SocietyRegistrationServices";
import DocumentDraftingServices from "../Service/legal/DocumentDraftingServices";
import IdentityDocumentVerificationServices from "../Service/legal/IdentityDocumentVerificationServices";
import LegalResearchComplianceCheckServices from "../Service/legal/LegalResearchComplianceCheckServices";
import CyberCrimeComplaintAssistanceServices from "../Service/legal/CyberCrimeComplaintAssistanceServices";
import ConsumerCourtCaseSupportServices from "../Service/legal/ConsumerCourtCaseSupportServices";
import LegalNoticePreparationServices from "../Service/legal/LegalNoticePreparationServices";
import ContractDraftingAgreementPreparationServices from "../Service/legal/ContractDraftingAgreementPreparationServices";
import CaseDraftingLegalDocumentationServices from "../Service/legal/CaseDraftingLegalDocumentationServices";
import CyberLawConsultantServices from "../Service/legal/CyberLawConsultantServices";
import LegalConsultationServices from "../Service/legal/LegalConsultationServices";

import SoftwareServicesIntroduction from "../Service/softwareIT/SoftwareServicesIntroduction";
import AMCServices from "../Service/softwareIT/AMCServices";
import EndToEndWebDevelopment from "../Service/softwareIT/EndToEndWebDevelopment";
import MobileApplicationDevelopment from "../Service/softwareIT/MobileApplicationDevelopment";
import DesktopLaptopSoftwareSolutions from "../Service/softwareIT/DesktopLaptopSoftwareSolutions";
import ArtificialIntelligenceSolutions from "../Service/softwareIT/ArtificialIntelligenceSolutions";

const ServiceRouter = () => {
  return (
    <Routes>
      {/* ✅ DEFAULT PAGE (/services) */}
      <Route index element={<OurServices />} />

      {/* ✅ MAIN SERVICES */}
      <Route path="software-it-services" element={<SoftwareITServices />} />
      <Route
        path="digital-marketing-services"
        element={<DigitalMarketingServices />}
      />
      <Route
        path="victim-support-services"
        element={<VictimSupportServices />}
      />
      <Route
        path="legal-information-documentation-support"
        element={<LegalInformationDocumentationSupport />}
      />
      <Route
        path="cyber-security-services"
        element={<CyberSecurityServices />}
      />
      <Route
        path="cyber-investigation-services"
        element={<CyberInvestigationServices />}
      />
      <Route path="legal-services" element={<LegalServices />} />
      <Route path="education-services" element={<EducationServices />} />
      <Route
        path="training-internship-services"
        element={<TrainingInternshipServices />}
      />
      <Route path="placement-services" element={<PlacementServices />} />

      {/* ✅ LEGAL SERVICES */}
      <Route
        path="legal/company-registration"
        element={<CompanyRegistration />}
      />
      <Route
        path="legal/gst-registration-service"
        element={<GSTRegistrationService />}
      />
      <Route
        path="legal/gst-return-filing-services"
        element={<GSTReturnFilingServices />}
      />
      <Route
        path="legal/company-annual-filing-services"
        element={<CompanyAnnualFilingServices />}
      />
      <Route
        path="legal/company-audit-support-services"
        element={<CompanyAuditSupportServices />}
      />
      <Route
        path="legal/fssai-registration-services"
        element={<FSSAIRegistrationServices />}
      />
      <Route
        path="legal/msme-udyam-registration-services"
        element={<MSMEUdyamRegistrationServices />}
      />
      <Route
        path="legal/iec-registration-services"
        element={<IECRegistrationServices />}
      />
      <Route
        path="legal/shop-establishment-registration-services"
        element={<ShopEstablishmentRegistrationServices />}
      />
      <Route
        path="legal/professional-tax-registration-services"
        element={<ProfessionalTaxRegistrationServices />}
      />
      <Route
        path="legal/pf-registration-services"
        element={<PFRegistrationServices />}
      />
      <Route
        path="legal/esic-registration-services"
        element={<ESICRegistrationServices />}
      />
      <Route
        path="legal/digital-signature-certificate"
        element={<DigitalSignatureCertificate />}
      />
      <Route
        path="legal/data-it-compliance-consulting-services"
        element={<DataITComplianceConsultingServices />}
      />
      <Route
        path="legal/trust-registration-services"
        element={<TrustRegistrationServices />}
      />
      <Route
        path="legal/ngo-registration-services"
        element={<NGORegistrationServices />}
      />
      <Route
        path="legal/society-registration-services"
        element={<SocietyRegistrationServices />}
      />
      <Route
        path="legal/document-drafting-services"
        element={<DocumentDraftingServices />}
      />
      <Route
        path="legal/identity-document-verification-services"
        element={<IdentityDocumentVerificationServices />}
      />
      <Route
        path="legal/legal-research-compliance-check-services"
        element={<LegalResearchComplianceCheckServices />}
      />
      <Route
        path="legal/cyber-crime-complaint-assistance-services"
        element={<CyberCrimeComplaintAssistanceServices />}
      />
      <Route
        path="legal/consumer-court-case-support-services"
        element={<ConsumerCourtCaseSupportServices />}
      />
      <Route
        path="legal/legal-notice-preparation-services"
        element={<LegalNoticePreparationServices />}
      />
      <Route
        path="legal/contract-drafting-agreement-preparation-services"
        element={<ContractDraftingAgreementPreparationServices />}
      />
      <Route
        path="legal/case-drafting-legal-documentation-services"
        element={<CaseDraftingLegalDocumentationServices />}
      />
      <Route
        path="legal/cyber-law-consultant-services"
        element={<CyberLawConsultantServices />}
      />
      <Route
        path="legal/legal-consultation-services"
        element={<LegalConsultationServices />}
      />

      {/* ✅ SOFTWARE SERVICES */}
      <Route
        path="software-it-services/software-services-introduction"
        element={<SoftwareServicesIntroduction />}
      />
      <Route
        path="software-it-services/amc-services"
        element={<AMCServices />}
      />
      <Route
        path="software-it-services/end-to-end-web-development"
        element={<EndToEndWebDevelopment />}
      />
      <Route
        path="software-it-services/mobile-application-development"
        element={<MobileApplicationDevelopment />}
      />
      <Route
        path="software-it-services/desktop-laptop-software-solutions"
        element={<DesktopLaptopSoftwareSolutions />}
      />
      <Route
        path="software-it-services/artificial-intelligence-solutions"
        element={<ArtificialIntelligenceSolutions />}
      />
    </Routes>
  );
};

export default ServiceRouter;
