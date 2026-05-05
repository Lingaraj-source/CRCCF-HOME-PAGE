import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const GSTRegistrationService = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="GST Registration Service"
      description="Placeholder content for GST Registration service."
    />
  )
}



export default GSTRegistrationService
