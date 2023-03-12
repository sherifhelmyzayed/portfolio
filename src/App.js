import { useRef, Suspense, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, BakeShadows, AccumulativeShadows, RandomizedLight, Preload, AdaptiveEvents } from "@react-three/drei";
import { Model } from "./Models/artist_workroom/Scene.js";
import { Object3D, Vector3 } from "three";
import { useSpring, easings } from '@react-spring/three';

import ProjectPage from './HeroPage/ProjectPage'

import SwipeHelp from "./Components/SwipeHelp.js";

import Loader from "./Components/Loader.js";
import Models from "./Components/Models";
import Icons from "./Components/Icons.js";
import Badges from "./Components/Badges.js";

// cert url:
// www.testdome.com/certificates/29b62c0fbccd4aa69f0e5bfb14623caa
// https://coursera.org/verify/QWFN4BPELU6Q
// https://coursera.org/verify/U9QFSWFUR8T4



extend({ OrbitControls });


const Lights = () => {
  const light = useRef();
  const light1 = useRef();
  const light2 = useRef();

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
  }, [-1])

  return (
    <>
      <AccumulativeShadows temporal frames={100} scale={10}>
        <RandomizedLight amount={5} position={[0, 2.5, 0]} />
      </AccumulativeShadows>

      <spotLight ref={light} color="#e47025" intensity={2} distance={5} angle={150} penumbra={1} position={[-0.4, 3.5, 0]} castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        target={target}
      />
      <spotLight ref={light1} color="#e47025" intensity={2.5} distance={5} angle={120} penumbra={1} position={[-0.4, 3.5, -1.5]} castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        target={target}
      />

      <spotLight ref={light2} color="#b00c3" intensity={1.7} distance={7} angle={150} penumbra={1} position={[-0.4, 2.5, 2.5]} castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        target={target1}
      />
      <hemisphereLight color="#00000" groundColor="#000000" position={[0, 0, 0]} intensity={0.1} />

    </>
  )
}







const Projects = (props) => {
  return (
    (props.view) ? (
      <>
        <Html rotation={[0, Math.PI / 2, 0]} position={[-1.5, 1.7, 1]} transform occlude scale={.10}
        >
          <div className="wrapper"
            onPointerDown={(e) => e.stopPropagation()
            }
          >
            <ProjectPage
              view={props.view}
              setView={props.setView}
            />
          </div>
        </Html>
      </>
    ) : null

  )
}

const ChangeViews = (props) => {
  const three = useThree();
  three.controls = props.controls.current;

  const targetDirection = props.viewId === 1 ? new Vector3(-1.75, 1.998, 0.925) : new Vector3(0, 1.5, 0);
  const targetPosition = props.viewId === 1 ? new Vector3(0.68, 2.494, 0.940) : new Vector3(4, 4, 4);


  const controlToTargetAnimation = useSpring({
    config: { duration: 5000, easing: easings.easeInOutExpo, delay: 500 },
    from: {
      lookAtX: (three.controls) ? three.controls.target.x : 0,
      lookAtY: (three.controls) ? three.controls.target.y : 0,
      lookAtZ: (three.controls) ? three.controls.target.z : 0,
      positionX: (three.camera) ? three.camera.position.x : 0,
      positionY: (three.camera) ? three.camera.position.y : 0,
      positionZ: (three.camera) ? three.camera.position.z : 0,
    },
    to: {
      lookAtX: targetDirection.x,
      lookAtY: targetDirection.y,
      lookAtZ: targetDirection.z,
      positionX: targetPosition.x,
      positionY: targetPosition.y,
      positionZ: targetPosition.z
    },
    onRest: () => {
      three.controls.enableRotate = true
    },
    reset: true
  });


  console.log(controlToTargetAnimation);
  useFrame(() => {

    if (controlToTargetAnimation.lookAtX.animation.changed && (props.viewId === 1 || props.viewId === 0)) {
      three.controls.target.x = controlToTargetAnimation.lookAtX.animation.values[0]._value;
      three.controls.target.y = controlToTargetAnimation.lookAtY.animation.values[0]._value;
      three.controls.target.z = controlToTargetAnimation.lookAtZ.animation.values[0]._value;

      three.camera.position.x = controlToTargetAnimation.positionX.animation.values[0]._value;
      three.camera.position.y = controlToTargetAnimation.positionY.animation.values[0]._value;
      three.camera.position.z = controlToTargetAnimation.positionZ.animation.values[0]._value;
    }
  })



}



export default function App() {
  const [view, setView] = useState(2);
  const controls = useRef(null);

  return (
    <>
      <SwipeHelp />
      <Canvas
        camera={{ fov: 55, zoom: 1, near: 1, far: 10000, position: [4, 4, 4] }} style={{
          height: `100vh`, width: '100vw'
        }}
        shadows
        dpr={1}
      >
        <fog attach="fog" args={['#8c8c8c', 5, 20]} />
        <color attach="background" args={['#e8e8e8']} />
        <OrbitControls
          enablePan={true}
          enableZoom={view === 0 ? true : false}
          enableRotate={true}
          autoRotate={false}
          enableDamping={false}
          autoRotateSpeed={1}
          zoomSpeed={0.7}
          minDistance={0}
          maxDistance={50}
          ref={controls}
          maxPolarAngle={1.73}
          target={[0, 1.5, 0]}
        />
        <Suspense fallback={<Loader />}>

          <Model scale={1} />
          <Models />
          <Lights />

          <Icons />

          <Badges
            view={view}
            setView={setView}
          />

          <ChangeViews controls={controls} viewId={view} />
          <Projects
            view={view}
            setView={setView}
          />

          <BakeShadows />
          <Preload all />
          <AdaptiveEvents />

        </Suspense>
      </Canvas>

    </>
  );
}