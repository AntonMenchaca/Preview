import { connect } from "react-redux";
import GoogleMap from "../Components/GoogleMap";

var mapStoreToProps = (state) => ({
  listings: state.listings,
});

var GoogleMapContainer = connect(mapStoreToProps, null)(GoogleMap);

export default GoogleMapContainer;
