import React from 'react'
import Button from '../../../Utility/Button'

const Week = () => {
  return (
    <div className='bg-dark text-light py-5 Week'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12'>
                    <div className='container'>
                        <div className="week-text">
                            <h6>Keep Me Updated</h6>
                            <h2 className=' fw-light mb-4'><b>Newsletter</b></h2>
                            <p>A short sentence describing what someone will receive by subscribing.</p>
                            <input type="text" placeholder="E-mail" className='me-3'/>
                            <Button text="Subscribe" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Week
