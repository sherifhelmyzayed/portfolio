import { ContainerP, Button } from './elements'

const ProjectPage = (props) => {

    const { view, setView } = props;

    return (
        <ContainerP>
            <Button
                onClick={() => {
                    setView(1);
                    console.log(view);
                }}
            >
                Projects
            </Button>
            <Button
                onClick={() => setView(0)}
            >
                About
            </Button>
        </ContainerP>
    )
}

export default ProjectPage

