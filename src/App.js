import { useRef, Suspense, useState, createContext } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, ContactShadows, useProgress, Html } from "@react-three/drei";
import { Model } from "./Models/artist_workroom/Scene.js";

export const HandlerContext = createContext()



extend({ OrbitControls });



const Loader = () => {
  const { total } = useProgress()

  let cal = total / 30 * 100;
  console.log(cal);
  return (
    <Html center>loading.. {Math.round(cal)} %</Html>
  )
};



export default function App() {

  const [selectedApt, setSelectedApt] = useState(null);


  const controls = useRef(null);



  return (
    <>

      <Canvas
        camera={{ fov: 55, zoom: 1, near: 1, far: 10000, position: [220, 10, 10] }} style={{
          // height: `100vh`, width: '100vw' 
          height: '720px', width: '1200px'
        }} >
        {/* <fog attach="fog" args={['#17171b', 0, 100000]} /> */}
        <color attach="background" args={['#e8e8e8']} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          enableDamping={false}
          autoRotateSpeed={1}
          zoomSpeed={0.7}
          minDistance={0}
          maxDistance={10000}
          ref={controls}
          maxPolarAngle={1.73}
          onChange={() => console.log(controls.current.getDistance((0, 0, 0)))}
        />

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>

        {/* <hemisphereLight color="#00000" groundColor="#000000" position={[-7, 15, 5]} intensity={1} /> */}
        {/* <pointLight position={[1000, 1000, 1000]} intensity={.5} /> */}


        {/* const spotLight = new THREE.SpotLight(0xe47025, 2, 800, 120, 1);
        spotLight.position.set(30, 300, 0);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 256;
        spotLight.shadow.mapSize.height = 256;
        spotLight.shadow.camera.near = 1;
        spotLight.shadow.camera.far = 600;
        scene.add(spotLight);
        scene.add(new THREE.SpotLightHelper(spotLight, 10)); */}

        <Suspense fallback={<Loader />}>
          <Model scale={10} />
          {/* <Model controls={controls} selectedApt={selectedApt} setSelectedApt={setSelectedApt}
          /> */}
        </Suspense>

        {/* <ContactShadows frames={1} position={[0, -520, 0]} scale={10000} blur={1} far={9000} /> */}
      </Canvas>
    </>
  );
}