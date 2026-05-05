import React from 'react'
import { useNavigate } from 'react-router-dom'
import LegalPageLayout from './LegalPageLayout'

const GSTReturnFilingServices = () => {
  const navigate = useNavigate()

  return (
    <LegalPageLayout
      title="GST Return Filing Services"
      description="Placeholder content for GST Return Filing services."
    />
  )
}


export default GSTReturnFilingServices
