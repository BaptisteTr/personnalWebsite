import Head from 'next/head'
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import {PortfolioSection} from "../components/ContentSection/PortfolioSection/PortfolioSection";
import {ContentSection} from "../components/ContentSection/ContentSection";
import {FooterSection} from "../components/Footer/FooterSection";
import {InferGetStaticPropsType} from "next";

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
    technologies_id : {
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
  const res = await fetch('http://localhost:8055/items/Projects?fields=*,technologies.technologies_id.label')
  const result: {data : Project[]} = await res.json()
  const projects : Project[] = result.data;

  const resSkills = await fetch('http://localhost:8055/items/Skills')
  const resultSkills: {data : Skill[]} = await resSkills.json()
  const skills : Skill[] = resultSkills.data;

  const resDescriptions = await fetch('http://localhost:8055/items/Descriptions')
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
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Baptiste Trautmann</title>
      </Head>
        <Header/>
        <HomeSection descriptions={descriptions.filter(d => d.section_key.startsWith("presentation"))}/>
        <ContentSection skills={skills} descriptions={descriptions.filter(d => d.section_key.startsWith("skills") || d.section_key.startsWith("services") )}/>
        <PortfolioSection projects={projects}/>
        <FooterSection/>
    </div>
  )
}

export default Home
