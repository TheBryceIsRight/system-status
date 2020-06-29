import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class UnitedStatesMap extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '50vh',
      latitude: 38.994,
      longitude: -97.985,
      zoom: 2.5
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/btwats1/ckc0kbb0k52yr1ik8wrwqck3n"
        mapboxApiAccessToken="pk.eyJ1IjoiYnR3YXRzMSIsImEiOiJja2JqZ2FmMTIwb3B5MnltOG9jdTc1azluIn0.fmKr60Z3gIA69vZN4a0omA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default UnitedStatesMap;