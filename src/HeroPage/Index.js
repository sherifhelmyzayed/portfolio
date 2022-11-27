import { Container, Button } from './elements'

const Index = (props) => {

    const { view, setView } = props;

    return (
        <Container>
            <Button
                onClick={() => setView(1)}
            >
                Projects
            </Button>
            <Button
                onClick={() => setView(2)}
            >
                About
            </Button>

        </Container>
    )
}

export default Index

