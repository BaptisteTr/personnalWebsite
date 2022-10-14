import Head from 'next/head'
import Menu from "../components/Menu/Menu";
import HomeSection from "../components/HomeSection/HomeSection";
import {PortfolioSection} from "../components/PortfolioSection/PortfolioSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import {ContactSection} from "../components/ContactSection/ContactSection";
import {InferGetStaticPropsType} from "next";
import React, {useCallback, useContext, useRef, useState} from "react";
import style from "../components/ContactSection/ContactSection.module.css";
import {locales, LocalisationContext} from "../contexts/Locale";

export type Project = {
  id: number
  sort: string
  date_created: string
  title_fr: string
  title_eng: string
  description_fr: string
  description_eng: string
  visit_link: string
  sources_link: string
  illustration:string
  picture: any
  technologies: Array<{
    Technologies_id : {
      label:string
    }
  }>
}

export type Skill = {
  id: number
  label: string
  section: string
}

export type Description = {
  id: number,
  description_fr: string,
  description_eng: string,
  section_key:string
}


export const getStaticProps = async() => {
  const DIRECTUS_URL = process.env.directus_url
  const DIRECTUS_TOKEN = process.env.directus_token
  const res = await fetch(`${DIRECTUS_URL}/items/Projects?fields=*,technologies.Technologies_id.label`,
  {
        method: 'get',
        headers: new Headers({
            'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
      });
  const result: {data : Project[]} = await res.json()
  const projects : Project[] = result.data;
  result.data.forEach(p => p.illustration = `${DIRECTUS_URL}/assets/${p.illustration}`)

  const resSkills = await fetch(`${DIRECTUS_URL}/items/Skills`,
      {
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${DIRECTUS_TOKEN}`
        })
      })
  const resultSkills: {data : Skill[]} = await resSkills.json()
  const skills : Skill[] = resultSkills.data;

  const resDescriptions = await fetch(`${DIRECTUS_URL}/items/Descriptions`,
      {
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${DIRECTUS_TOKEN}`
        })
      })
  const resultDescriptions: {data : Description[]} = await resDescriptions.json()
  const descriptions : Description[] = resultDescriptions.data;

  return {
    props: {
      projects,
      skills,
      descriptions
    }
  };
}

const Home = ({projects, skills, descriptions} : InferGetStaticPropsType<typeof getStaticProps>) => {

    const [isMenuVisible, setMenuVisible] = useState(false);

    const scrollToSkills = useCallback(
        () => {
            // @ts-ignore
            skillsRef.current.scrollIntoView();
            setMenuVisible(false);
        },
        []
    )

    const scrollToProjects = useCallback(
        () => {
            // @ts-ignore
            portfolioRef.current.scrollIntoView();
            setMenuVisible(false);
        },
        []
    )

    const scrollToContact = useCallback(
        () => {
            // @ts-ignore
            footerRef.current.scrollIntoView();
            setMenuVisible(false);
        },
        []
    )

    const homeRef = useRef(null);
    const portfolioRef = useRef(null);
    const skillsRef = useRef(null);
    const footerRef = useRef(null);
    const localisation = useContext(LocalisationContext);

    // @ts-ignore
    return (
    <div>
      <Head>
        <meta name="description" content="Je propose mes services de développeur freelance"/>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Baptiste Trautmann - Développeur Freelance</title>
      </Head>
        <div className="layout" >

            <div className="menu">
                <Menu setMenuVisible={setMenuVisible} isMenuVisible={isMenuVisible} scrollToSkills={scrollToSkills} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}/>
            </div>
            <div className="content" >
                <div ref={homeRef} />
                <HomeSection descriptions={descriptions.filter(d => d.section_key.startsWith("presentation"))} scrollToContact={scrollToContact}/>
                <div ref={skillsRef}/>
                <SkillsSection skills={skills} descriptions={descriptions.filter(d => d.section_key.startsWith("skills") || d.section_key.startsWith("services") )}/>
                <div ref={portfolioRef}/>
                <PortfolioSection projects={projects} description={descriptions.find(d => d.section_key === "projects")}/>
                <div ref={footerRef}/>
                <ContactSection description={descriptions.find(d => d.section_key === "contact")}/>
                <div className={style.blueFooter}>
                    <p className={style.footerText}>{localisation.locale === locales.francais ? "Développé par" : "Developed by"} Baptiste Trautmann 2022 : <a href="https://github.com/BaptisteTr/personnalWebsite">sources</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
