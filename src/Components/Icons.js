import { OrbitControls, useProgress, Html, Plane, BakeShadows, AccumulativeShadows, RandomizedLight, Preload, AdaptiveEvents } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaWindowClose } from 'react-icons/fa';


const Icons = () => {
    return (
        <Html className="content" rotation={[0, 0, 0]} position={[1.58, 2.6, -1.77]} transform occlude scale={.8}>
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <div  >
                    <FaGithub color="white" cursor={"pointer"} onClick={() => window.open("https://github.com/sherifhelmyzayed", '_blank')} />
                </div>
                <div  >
                    <FaLinkedin color="white" cursor={"pointer"} onClick={() => window.open("https://www.linkedin.com/in/sherif-zayed/", '_blank')} />
                </div>
            </div>
        </Html>
    )
}


export default Icons