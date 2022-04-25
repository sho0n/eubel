import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvMG4iLCJhIjoiY2twY3lrYTh5MWlpaDJ1bnhyZ3pwajc5dCJ9.sQpjFZmGCGirjmV2tlB9Ng';
 
export default class AppPricing extends React.PureComponent {
constructor(props) {
super(props);
this.state = {
lat: 38.891,
lng: -6.984,
zoom: 11.00
};
this.mapContainer = React.createRef();
}
componentDidMount() {
const { lng, lat, zoom } = this.state;
const map = new mapboxgl.Map({
container: this.mapContainer.current,
style: 'mapbox://styles/sho0n/ckpcyyi957gcr18rxw0gx2f5c',
center: [lng, lat],
zoom: zoom
});
 
map.on('move', () => {
this.setState({
lng: map.getCenter().lng.toFixed(4),
lat: map.getCenter().lat.toFixed(4),
zoom: map.getZoom().toFixed(2)
});
});
}
render() {
const { lng, lat, zoom } = this.state;
return (
<div id='pricing'>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={this.mapContainer} className="map-container" />
</div>
);
}
}