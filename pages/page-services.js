import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import Services1 from "@/components/sections/Services1";
import Services2 from "@/components/sections/Services2";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";
import WhyChooseUs7 from "@/components/sections/WhyChooseUs7";

export default function PageTestimonial() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Services" />
        <Services />
        <WhyChooseUs7 />
      </Layout>
    </>
  );
}
