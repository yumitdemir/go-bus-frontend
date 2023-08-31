import React from 'react';
import {useParams} from "react-router-dom";
import RouteAndDateSelector from "../../../components/routeAndDateSeclector/RouteAndDateSelector.jsx";
import {RouteAndDateProvider} from "../home/RouteAndDateContext.jsx";
import Container from "../../../components/ui/Container.jsx";
import RouteSearchDisplay from "./components/RouteSearchDisplay.jsx";

function RouteSearch(props) {
    const {id} = useParams();
    return (
        <div>
            <RouteAndDateProvider>
                <Container className={"mt-6 mb-32"}>
                    <RouteAndDateSelector/>
                    <RouteSearchDisplay/>
                </Container>
            </RouteAndDateProvider>
        </div>
    );
}

export default RouteSearch;