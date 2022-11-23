import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../image/ecommerce.gif'
function Home() {
  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-lg-5 order-2 order-lg-0 ">
                <h1 className='mt-lg-5'>Start shoping with me <strong className='virus'>Mj virus</strong></h1>
                 <h2 className='mt-3'>Here you can see @wesome product top market in my city jaridih bazar you can @lso order food from this site. if you are near in</h2>
                 <div className='mt-3'>
                 <NavLink to='/service' className='start_shop sm-text-center mb-5' >Start Shoping</NavLink>
              </div>
          </div>

            <div className="col">
            <img src={web} className="image img-fluid" alt='img' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Home;