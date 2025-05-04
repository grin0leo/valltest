import css from "./page.module.css";
import { HeaderLanding } from "@/components/landing/HeaderLanding";
import { StartLanding } from "@/components/landing/StartLanding";
import { OpportunitiesLanding } from "@/components/landing/OpportunitiesLanding";
import { AboutUsLanding } from '@/components/landing/AboutUsLanding';
import { RoadmapLanding } from '@/components/landing/RoadmapLanding';
import { ContactsLanding } from '@/components/landing/ContactsLanding';
import { FooterLanding } from '@/components/landing/FooterLanding';

export default function LandingContainers() {
  return (
    <div className={css.container}>
      <HeaderLanding />
      
      <div className={css.content}>
        <StartLanding />
        <OpportunitiesLanding />
        <AboutUsLanding />
        <RoadmapLanding />
        <ContactsLanding />
        <FooterLanding />
      </div>

      <div className={css.backgroundImage}></div>
    </div>
  );
}