import React from "react";
import { useNavigate } from "react-router-dom";
import LegalPageLayout from "./LegalPageLayout";
const CompanyAuditSupportServices = () => {
  const navigate = useNavigate();

  return (
    <LegalPageLayout
      title="Company Audit Support Services"
      description="Placeholder content for Company Audit Support services."
    />
  );
};

export default CompanyAuditSupportServices;
