import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const IdentityDocumentVerificationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Identity Document Verification Services"
      description="Placeholder content for Identity Document Verification services."
    />
  )
}


export default IdentityDocumentVerificationServices
