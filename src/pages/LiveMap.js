import { Helmet } from 'react-helmet';
// import LiveMapComp from '../components/livemap/live-map-comp'
// import React from 'react'

// console.log(process.env.REACT_APP_GOOGLE_MAPS_TOKEN)

const LiveMap = () => (
  <>
    <Helmet>
      <title> Live Map | Material Kit</title>
    </Helmet>
    
      {/* <LiveMapComp /> */}
    
  </>
);

export default LiveMap; 



// export default LiveMap;

// export default class LiveMap extends React.Component{
//   constructor(props){
//     super(props); 
//     fetch('/api/express_backend')
//     .then(res => console.log(res))
   
//   }

//   render(){
//     return(
//       <>
//       <Helmet>
//         <title> Live Map | Material Kit</title>
//       </Helmet>
      
//         {/* <LiveMapComp /> */}
      
//     </>
//     )
//   }
// }
