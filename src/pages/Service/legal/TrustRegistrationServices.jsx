import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const TrustRegistrationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Trust Registration Services"
      description="Placeholder content for Trust Registration services."
    />
  )
}



export default TrustRegistrationServices
