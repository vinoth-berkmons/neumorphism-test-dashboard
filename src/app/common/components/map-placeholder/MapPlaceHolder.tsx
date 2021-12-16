import { FC } from "react";
import styled from "styled-components";


const MapStyle = styled.div`
    background-image: url(./images/map_placeholder.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`

const MapPlaceHolder: FC = () => {
    return (
        <MapStyle />
    )
}

export { MapPlaceHolder }