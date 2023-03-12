import React from "react";
import { useProgress, Html } from "@react-three/drei";

import { CircularProgress } from "@mui/material";


const Loader = (props) => {
    const { progress } = useProgress();

    return (
        <>
            <Html center>
                <CircularProgress variant="determinate" value={progress} />
            </Html>
        </>
    )
};

export default Loader;