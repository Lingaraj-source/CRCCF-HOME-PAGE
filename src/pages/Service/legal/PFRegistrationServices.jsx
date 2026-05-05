import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const PFRegistrationServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="PF Registration Services"
      description="Placeholder content for PF Registration services."
    />
  )
}


export default PFRegistrationServices
