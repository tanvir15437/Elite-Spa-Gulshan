import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import About6 from "@/components/sections/About6";
import Banner2 from "@/components/sections/Banner2";
import Banner1 from "@/components/sections/Banner6";
import Blog2 from "@/components/sections/Blog2";
import Blog1 from "@/components/sections/Blog2";
import Clients1 from "@/components/sections/Clients1";
import Contact1 from "@/components/sections/Contact1";
import Contact5 from "@/components/sections/Contact5";
import Gallery1 from "@/components/sections/Gallery1";
import Instagram1 from "@/components/sections/Instagram1";
import Marquee1 from "@/components/sections/Marquee1";
import Marquee3 from "@/components/sections/Marquee3";
import Pricing3 from "@/components/sections/Pricing3";
import Pricing1 from "@/components/sections/Pricing4";
import Services1 from "@/components/sections/Services1";
import Services2 from "@/components/sections/Services2";
import Team1 from "@/components/sections/Team1";
import Team2 from "@/components/sections/Team2";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";
import Video1 from "@/components/sections/Video1";
import Video3 from "@/components/sections/Video3";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";
import WhyChooseUs7 from "@/components/sections/WhyChooseUs7";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Banner2 />
        <Clients1 />
        <About2 />
        {/* <WhyChooseUs7 /> */}
        <Services2 />
        <Marquee3 />
        <Video3 />
        <Gallery1 />
        <Testimonial2 />
        <Pricing3 />
        <Team1 />
        <Instagram1 />
        <Blog2 />
        <Contact5 />
      </Layout>
    </>
  );
}
