import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const IECRegistrationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="IEC Registration Services"
      description="Placeholder content for IEC Registration services."
    />
  )
}


export default IECRegistrationServices
