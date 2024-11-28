import Image from "next/image";
import LandingPage from '../components/landing-page';
import ToolGrid from '../components/tool-grid';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
         
     
     <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/"
          key="canonical"
        />
      </Head>

     <LandingPage />



    </div>
  );
}
