import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const NGORegistrationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="NGO Registration Services"
      description="Placeholder content for NGO Registration services."
    />
  )
}



export default NGORegistrationServices
