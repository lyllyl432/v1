import Header from "./components/Header";
import Technologies from "./components/Technologies";
import MouseAura from "./components/MouseAura";

export default function Home() {
  return (
    <>
      <MouseAura></MouseAura>
      <main className="lg:min-h-screen lg:pt-24 max-w-6xl mx-auto">
        <Header></Header>
        <div className="lg:w-1/2 lg:ml-auto">
          <p className="text-neutral-color font-light">
            Lorem ipsum dolor sit amet consectetur. Fermentum dignissim ut
            ornare varius. In proin commodo interdum vitae dui lacus. Enim velit
            quisque at enim consectetur eleifend quisque arcu vitae. Dictum
            turpis non quam ut ut. Hac sed velit cursus consequat.
          </p>
          <Technologies></Technologies>
        </div>
      </main>
    </>
  );
}
