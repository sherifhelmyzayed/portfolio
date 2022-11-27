import { Grid } from '@mui/material';
import { ContainerP, Button } from './elements'

import ProjectCard from './ProjectCards'


import RiverImg from '../images/river.jpg'
import SoInteractImg from '../images/soInteract.jpg'
import MapImg from '../images/map.png'
import SavoStyleImg from '../images/savostyle.jpg'
import ReifgoImg from '../images/reifgo.jpg'
import NaggarImg from '../images/naggar.jpg'
import productImg from '../images/WebApps/productMediaViewer.png'
import volumeImg from '../images/WebApps/volumeOfInterest.png'

const ProjectPage = (props) => {

    const { view, setView } = props;

    return (

        <ContainerP>
            <Grid container height={"100%"} width={"100%"} style={{
                border: "2px solid black",
                overflow: "hidden",
                overflowY: "scroll" // added scroll
            }}>
                <ProjectCard title="Discover Map" description="An Interactive 2D Map for real estate projects" img={MapImg} path="https://demo.bricksvisuals.com/discover-map" tags={["React", "MUI", "Mapbox", "Airbnb", "Prototype"]}/>
                <ProjectCard title="River" description="Gated-community compound visualized using in web. Prototype shows availabilty of apartments" img={RiverImg} path="https://demo.bricksvisuals.com/river" tags={["React", "Three-JS", "Prototype"]}/>
                <ProjectCard title="Interactive Apt" description="An Interactive building hologram which demonstrates 3D plan & availabilty." img={SoInteractImg} path="https://demo.bricksvisuals.com/so-interact" tags={["React", "Three-JS", "Prototype"]}/>
                <ProjectCard title="Naggar Trades" description="A portfolio website for an international foreign trades company" img={NaggarImg} path="https://www.naggarforeigntrade-eg.com" tags={["HTML", "CSS", "BootStrap", "Javascript", "Portfolio"]}/>
                <ProjectCard title="Reifgo" description="A Blog website for a research real estate organization that specializes in business improvements " img={ReifgoImg} path="https://www.reifgo.com" tags={["HTML", "CSS", "BootStrap", "Javascript", "Blog", "PHP", "MySQL"]}/>
                <ProjectCard title="SavoStyle" description="A Blog website for conservative fashion brand" img={SavoStyleImg} path="https://www.savostyle.com" tags={["HTML", "CSS", "BootStrap", "Javascript", "Blog", "PHP", "MySQL"]}/>
                <ProjectCard title="Product media viewer" description="" img={productImg} path="https://demo.bricksvisuals.com/product-media-viewer" tags={["HTML", "CSS", "Three.JS", "TypeScript"]}/>
                <ProjectCard title="Volume of Interest" description="" img={volumeImg} path="https://demo.bricksvisuals.com/volume-of-interest" tags={["HTML", "CSS", "Three.JS", "TypeScript"]}/>
            </Grid>


        </ContainerP>
    )
}

export default ProjectPage

