import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const LegalConsultationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Legal Consultation Services"
      description="Placeholder content for Legal Consultation services."
    />
  )
}


export default LegalConsultationServices
