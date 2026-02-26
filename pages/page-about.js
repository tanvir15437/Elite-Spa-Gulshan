import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import About3 from "@/components/sections/About3";
import About1 from "@/components/sections/About5T1";
import Clients8 from "@/components/sections/Clients8";
import Contact1 from "@/components/sections/Contact1";
import Contact5 from "@/components/sections/Contact5";
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing1";
import Pricing3 from "@/components/sections/Pricing3";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";
import Video1 from "@/components/sections/Video1";
import Video3 from "@/components/sections/Video3";
import Video8 from "@/components/sections/Video8";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="About Us" />
        <About3 />
        {/* <WhyChooseUs4 /> */}
        {/* <Clients8 /> */}
        {/* <Video1 /> */}
        {/* <Pricing3 /> */}
        <Testimonial2 />
        {/* <Contact5 /> */}
      </Layout>
    </>
  );
}
