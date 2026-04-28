// src/pages/AboutPage.jsx
import React from 'react'
import VirtualKeyboard from '../../../components/AboutUs/dashboard/VirtualKeyboard'
// import PartnersSection from '../components/partners/PartnersSection'
import PageHeader from '../../../components/AboutUs/common/PageHeader'
import CompanyMarquee from '../../../components/AboutUs/common/CompanyMarquee'



const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 w-full">
      <PageHeader 
        title="About Us — Fighting Cyber Threats with Innovation" 
        description="We empower individuals and organizations by combating cybercrime through awareness, research, and advanced technological solutions, ensuring a secure and trustworthy digital environment"
        icon="🏢"
      />
 
    <CompanyMarquee direction="right"/>
      <div className="py-4">
        <VirtualKeyboard />
      </div>
    <CompanyMarquee direction='left' />

      {/* <PartnersSection /> */}
    </div>
  )
}

export default AboutPage