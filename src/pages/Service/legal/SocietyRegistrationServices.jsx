import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const SocietyRegistrationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Society Registration Services"
      description="Placeholder content for Society Registration services."
    />
  )
}


export default SocietyRegistrationServices
