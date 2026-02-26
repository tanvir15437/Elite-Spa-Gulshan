import Layout from "@/components/layout/Layout";
import Contact1 from "@/components/sections/Contact1";
import Contact5 from "@/components/sections/Contact5";
import Contact7 from "@/components/sections/Contact7";
import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/innerpages/Contact";

export default function PageContact() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Contact Us" />

        <Contact7 />
      </Layout>
    </>
  );
}
