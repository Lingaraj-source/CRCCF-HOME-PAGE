import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const DigitalSignatureCertificate = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="Digital Signature Certificate"
      description="Placeholder content for Digital Signature Certificate services."
    />
  )
}

export default DigitalSignatureCertificate
