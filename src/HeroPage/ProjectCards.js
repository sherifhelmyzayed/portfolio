import { Grid, Typography, Card, CardContent, CardMedia, Chip, Stack } from '@mui/material';


const ProjectCard = (props) => {
    const { title, description, img, path, tags } = props;

    const redirect = () => {
        window.open(path, '_blank');
    }

    return (
        <Grid md={12} paddingX={1} marginY={3} sx={{ cursor: 'pointer', height: "50%" }}>
            <Card sx={{ maxWidth: '100%', backgroundColor: 'rgba(0,0,0,0)', height: '100%' }} onClick={() => redirect()}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="sibtitle1" component="div" >
                        {title}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        {tags.map((item) => {
                            return (
                                <Chip margin={10} label={item} variant="outlined" size="small" />
                            )
                        })}
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProjectCard