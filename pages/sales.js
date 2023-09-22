import Head from "next/head";
import Intro from "../components/SalesPage/Intro";
import Purchase from "../components/SalesPage/Purchase";
import SimilarLandingPages from "../components/SalesPage/SimilarLandingPages";
import Subscribe from "../components/Common/Subscribe";

function Sales() {
  return (
    <>
      <Head>
        <title>TailPages | Sales </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Intro />
      <div className="container">
        <Purchase />
        <SimilarLandingPages />
        <Subscribe />
      </div>
    </>
  );
}

export default Sales;
