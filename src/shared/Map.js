import React from 'react';
import mapBoxGl from 'mapbox-gl';
import './styles/StylesMap.css';

mapBoxGl.accessToken = "pk.eyJ1Ijoia2lyYXBhdjE5IiwiYSI6ImNrMzhjc3BmNTA3a2wzbnFmeWg2bnNkZTQifQ.sBOJ_WkZkBvdg-gaIvIBxA";

export const Map = () => {

    let mapContainerRef = React.createRef();

    React.useEffect(() => {
        if (mapContainerRef && mapContainerRef.current) {
                const map = new mapBoxGl.Map({
                    container: mapContainerRef.current,
                    style: 'mapbox://styles/mapbox/streets-v9'
                });
            }
    }, [])

    return <div className={"Style-container-map"} ref={mapContainerRef}/>;
}

