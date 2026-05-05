import React from "react";
import { useNavigate } from "react-router-dom";
import LegalPageLayout from "./LegalPageLayout";
//
const CaseDraftingLegalDocumentationServices = () => {
  const navigate = useNavigate();

  return (
    <LegalPageLayout
      title="Case Drafting & Legal Documentation Services"
      description="Placeholder content for Case Drafting & Legal Documentation services."
    />
  );
};

export default CaseDraftingLegalDocumentationServices;
