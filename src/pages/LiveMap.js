import { Helmet } from 'react-helmet';
import LiveMapComp from '../components/livemap/live-map-comp'
import React from 'react'






export default class LiveMap extends React.Component{
  constructor(props){
    super(props); 
    fetch('/api/express_backend')
    .then(res => res.json())
    .then(result => {
      console.log('from api call')
      console.log(result)
    })
    .catch(err => {
        console.error(err);
      });

   

 }

  render(){
    return(
      <>
      <Helmet>
        <title> Live Map | Material Kit </title>
      </Helmet>
      
        <LiveMapComp />
      


        
      
    </>
    )
  }
}
