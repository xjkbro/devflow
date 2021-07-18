import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

export default function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <Container>
            <ClipLoader color={color} loading={loading} size={150} />
        </Container>
    );
}
const Container = styled.div`
    height: 100%;
    width: 100vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
