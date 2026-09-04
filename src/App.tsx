/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import MarketPositioning from "./components/MarketPositioning";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import { PerformanceMarketing, Development } from "./components/MarketingDev";
import ExperienceEducation from "./components/ExperienceEducation";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import portfolioDataRaw from "./data.json";
import { PortfolioData } from "./types";

const portfolioData = portfolioDataRaw as PortfolioData;

export default function App() {
  return (
    <main className="min-h-screen bg-primary-base font-sans overflow-x-hidden">
      <Hero meta={portfolioData.meta} />
      <MarketPositioning data={portfolioData.market_positioning_notes} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Freelance work={portfolioData.freelance_and_client_work} />
      <PerformanceMarketing data={portfolioData.performance_marketing} />
      <Development data={portfolioData.development} />
      <ExperienceEducation 
        exp={portfolioData.experience} 
        edu={portfolioData.education} 
        certs={portfolioData.certifications} 
      />
      <Footer meta={portfolioData.meta} />
      <Chatbot />
    </main>
  );
}
