import { useRef, Suspense, useState, createContext } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, useProgress, Html, useHelper, SpotLightShadow, Shadow, BakeShadows, Stage, Box, Plane, SpotLight } from "@react-three/drei";
import { Model } from "./Models/artist_workroom/Scene.js";
import { Object3D, ShadowMapType, SpotLightHelper, Vector3 } from "three";

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



const Lights = () => {
  const light = useRef();
  const light1 = useRef();
  const light2 = useRef();
  useHelper(light2, SpotLightHelper, 'cyan');

  const target = new Object3D()
  target.position.x = -2.5

  const target1 = new Object3D()
  target1.position.x = 1.5
  target1.position.y = 2
  target1.position.z = -2

  useFrame(() => {
    light.current.target.updateMatrixWorld()
    light1.current.target.updateMatrixWorld()
    light2.current.target.updateMatrixWorld()
  })


  return (
    <>
      <spotLight ref={light} color="#e47025" intensity={2} distance={5} angle={150} penumbra={1} position={[-0.4, 3.5, 0]} castShadow
        shadow-mapSize-height={125}
        shadow-mapSize-width={125}
        target={target}
      />
      <spotLight ref={light1} color="#e47025" intensity={2.5} distance={5} angle={120} penumbra={1} position={[-0.4, 3.5, -1.5]} castShadow
        shadow-mapSize-height={125}
        shadow-mapSize-width={125}
        target={target}
      />

      <spotLight ref={light2} color="#b00c3" intensity={1.7} distance={7} angle={150} penumbra={1} position={[-0.4, 2.5, 2.5]} castShadow
        shadow-mapSize-height={125}
        shadow-mapSize-width={125}
        target={target1}
      />
      <hemisphereLight color="#00000" groundColor="#000000" position={[-7, 15, 5]} intensity={0.1} />
    </>
  )
}





const Models = () => {
  return (
    <>
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </>
  )

}



export default function App() {

  const controls = useRef(null);

  return (
    <>

      <Canvas
        camera={{ fov: 55, zoom: 1, near: 1, far: 10000, position: [4, 4, 4] }} style={{
          height: `100vh`, width: '100vw'
          // height: '720px', width: '1200px'
        }}
        shadows
      >
        <fog attach="fog" args={['#8c8c8c', 5, 20]} />
        <color attach="background" args={['#e8e8e8']} />
        {/* 
        <Shadow
          color="black"
          colorStop={0}
          opacity={0.5}
          fog={false} // Reacts to fog (default=false)
        /> */}

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          enableDamping={false}
          autoRotateSpeed={1}
          zoomSpeed={0.7}
          minDistance={0}
          maxDistance={50}
          ref={controls}
          maxPolarAngle={1.73}
          target={[0, 1, 0]}
        />

        {/* <Stage intensity={2} shadows="accumulative"
        //  environment="city"
        >
        </Stage> */}


        <Suspense fallback={<Loader />}>
          <Model scale={1} />


          <Models />
          <Lights />

        </Suspense>



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



        {/* <ContactShadows frames={1} position={[0, -520, 0]} scale={10000} blur={1} far={9000} /> */}
      </Canvas>
    </>
  );
}