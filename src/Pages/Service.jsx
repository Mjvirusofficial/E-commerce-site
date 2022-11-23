import React from 'react'
import MobilesDats from '../AllData/MobilesDats';
import Card from '../Component/Card';
function Service() {
  return (
    <>
      <h1 className='text-center'>Our Services</h1>
      <h2 className='m-3' >Mobiles</h2>
      <div className="container-fluid">
        <div className="row gy-2">
           {
            MobilesDats.map((i,index) =>{
              return <Card
               img={i.Image}
               title={i.Name}
               desc={i.Desc}
               price={i.Price}
               key={index}
              />
            })
           }
        </div>
      </div>
    </>
  )
}

export default Service;