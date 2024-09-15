import React from 'react'
import Navbar from '../../components/navbar/NAVBAR.JSX'
import Hero from '../../components/hero/Hero'
import InstallationComponent from '../../components/installation/Installation'
import AvailableCommandsComponent from '../../components/availableCommands/AvailableCommands'
import StatsComponent from '../../components/stats/Stats'
import PricingComponent from '../../components/pricing/Pricing'
import Footer from '../../components/footer/Footer'

function Landing() {
    return (
        
        <>
            <Navbar />
            <Hero />
            <InstallationComponent />
            <AvailableCommandsComponent />
            <StatsComponent />
            <PricingComponent />
            <Footer />
        </>
    )
}

export default Landing