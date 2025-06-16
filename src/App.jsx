import "./App.css";
import MaskText from "./MaskText";
import { ReactLenis } from "lenis/react";
function App() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.04 }}>
        <div className="flex flex-col justify-center min-h-screen">
          <MaskText animateOnScroll={false}>
            <h1 className="text-6xl font-bold text-center">Animate Anything</h1>
          </MaskText>

          <div className="max-w-1xl text-center ">
            <MaskText animateOnScroll={false} delay={0.2}>
              <p className="text-4xl mt-6">
                GSAP allows you to effortlessly animate anything JS can touch.
                Delivering silky-smooth performance and unmatched support so you
                can focus on the fun stuff.
              </p>
            </MaskText>
          </div>
        </div>
        <div className="space-y-20 py-20">
          <MaskText animateOnScroll={true}>
            <h2 className="text-5xl font-bold text-center">GSAP</h2>
          </MaskText>

          <div className="grid md:grid-cols-2 gap-12">
            <MaskText animateOnScroll={true} delay={0.2}>
              <div>
                <h3 className="text-3xl font-semibold mb-4">Web Development</h3>
                <p className="text-lg">
                  Whether you're animating UI, SVG or creating immersive WebGL
                  experiences, GSAP has your back. Whether you're animating UI,
                  SVG or creating immersive WebGL experiences, GSAP has your
                  back.
                </p>
              </div>
            </MaskText>

            <MaskText animateOnScroll={true} delay={0.2}>
              <div>
                <h3 className="text-3xl font-semibold mb-4">Announcement</h3>
                <p className="text-lg ">
                  🤘 GSAP has been acquired by Webflow to take their animation
                  capabilities to the next level!
                </p>
              </div>
            </MaskText>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
