import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const DocumentDraftingServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Document Drafting Services"
      description="Placeholder content for Document Drafting services."
    />
  )
}

export default DocumentDraftingServices
