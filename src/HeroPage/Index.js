import { Container, Button } from './elements'

const Index = (props) => {

    const { view, setView } = props;

    return (
        <Container>
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

        </Container>
    )
}

export default Index

