import Layout from "@/components/layout/Layout";
import Instragram from "@/components/sections/innerpages/Instragram";
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing4";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";
import Video3 from "@/components/sections/Video3";
import Funfact from "@/components/sections/Funfact3";
import Pricing3 from "@/components/sections/Pricing3";
import Pricing4 from "@/components/sections/Pricing4";
import Video8 from "@/components/sections/Video8";

export default function PagePricing() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Our Pricing Plans" />
        <Pricing4 />
        {/* <Video8 /> */}
        <Funfact />
        <WhyChooseUs4 />
      </Layout>
    </>
  );
}
