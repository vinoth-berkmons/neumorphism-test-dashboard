import { FC } from "react";
import styled from "styled-components";


const GraphStyle = styled.div`
    background-image: url(./images/graph_placeholder.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 150px;
`

const AnalyticsGraph: FC = () => {
    return (
        <GraphStyle />
    )
}

export { AnalyticsGraph }