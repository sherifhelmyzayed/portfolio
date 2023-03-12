import { OrbitControls, useProgress, Html, Plane, BakeShadows, AccumulativeShadows, RandomizedLight, Preload, AdaptiveEvents } from "@react-three/drei";
import HeroPage from '../HeroPage/Index'


const Badges = (props) => {
    return (
      <Html rotation={[-.74, 1.1, .69]} position={[-.44, 1.7, -.45]} transform occlude scale={.5} >
        <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
          <HeroPage
            view={props.view}
            setView={props.setView}
            setShowAbout={props.setShowAbout}
          />
        </div>
      </Html>
    )
  }

  export default Badges