import { Helmet } from 'react-helmet';
import LiveMapComp from '../components/livemap/live-map-comp'


console.log(process.env.REACT_APP_GOOGLE_MAPS_TOKEN)

const LiveMap = () => (
  <>
    <Helmet>
      <title> Live Map | Material Kit</title>
    </Helmet>
    
      <LiveMapComp />
    
  </>
);

export default LiveMap;
