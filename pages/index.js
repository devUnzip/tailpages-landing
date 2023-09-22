import Head from "next/head";
import Companies from "../components/HomePage/Companies";
import Intro from "../components/HomePage/Intro";
import LandingPages from "../components/HomePage/LandingPages";
import Subscribe from "../components/Common/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>TailPages | Home </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Intro />
      <div className="container">
        <Companies />
        <LandingPages />
        <Subscribe />
      </div>
    </>
  );
}
