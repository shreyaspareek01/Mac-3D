import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "Store",
          "Mac",
          "iPad",
          "Vision",
          "AirPods",
          "TV & Home",
          "Entertainment",
          "Accessories",
          "Support",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-md capitalize ">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center helvetica text-white top-40 left-1/2 -translate-x-1/2 font-[React/helvetica-now-display/HelveticaNowDisplay-Black.ttf]">
        <h3 className=" masked text-8xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro !</h5>
        <p className="text-center w-3/4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis
          dolor earum eveniet.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
