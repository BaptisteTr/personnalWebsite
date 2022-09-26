import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection/HomeSection";
import {PortfolioSection} from "../components/ContentSection/PortfolioSection/PortfolioSection";
import {ContentSection} from "../components/ContentSection/ContentSection";
import {FooterSection} from "../components/Footer/FooterSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Baptiste Trautmann</title>
      </Head>
        <Header/>
        <HomeSection/>
        <ContentSection/>
        <PortfolioSection/>
        <FooterSection/>
    </div>
  )
}

export default Home
