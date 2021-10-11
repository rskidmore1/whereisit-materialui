import { Helmet } from 'react-helmet';
import LiveMapComp from '../components/livemap/live-map-comp'


const LiveMap = () => (
  <>
    <Helmet>
      <title>LiveMap | Material Kit</title>
    </Helmet>
    
      <LiveMapComp />
    
  </>
);

export default LiveMap;
