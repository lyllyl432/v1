import Header from "./components/Header";
import Technologies from "./components/Technologies";
import MouseAura from "./components/MouseAura";
import Introduction from "./components/Introduction";
import SideContent from "./components/SideContent";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <MouseAura />
        <Header />
        <SideContent>
          <Introduction />
          <Technologies />
        </SideContent>
      </Layout>
    </>
  );
}
