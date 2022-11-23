import React from 'react'

function Contact() {
  return (
    <>
    
      <div className="mx-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
       
        <div className="container ">
          <div className="row">
            <div className="col col-md-6 col-10 mx-auto">
              <div class="mt-4 mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full name</label>
                <input type="email" className="div form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone no</label>
                <input type="email" className="div form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="div form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea class="div form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="button_div">
                <button className="button" type="submit">Submit form</button>
              </div>
            </div>
          </div>

          
        </div>
        
      </>
      )
}

      export default Contact