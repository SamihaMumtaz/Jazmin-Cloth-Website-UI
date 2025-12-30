import React from 'react'
import img5 from '../../../assets/images/Footer/img-5.webp'
const ShippingPolicy = () => {
  return (
    <div className='shipping-policy'>
        <h3>Shipping Policy</h3>
        <div className='shipping-policy-text'>
            <p>EXPECTED DELIVERY TIME:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Within Pakistan:
                        <ul>
                            <li>
                                Unstitched: 2-4 Working Days
                            </li>
                            <li>
                                Stitched: 15-18 Working Days
                            </li>
                        </ul>
                    </li>
                    <li>
                        Outside Pakistan: 18-20 Working Days
                    </li>
                    <li>
                        Please note: Custom stitch (with Linings) orders will require an additional 7 working days.
                    </li>
                </ul>
            </div>
            <p>SHIPPING CHARGES:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Within Pakistan: Free
                    </li>
                    <li>
                        Outside Pakistan: Calculated at checkout based on package size and destination.
                    </li>
                </ul>
            </div>
            <p>COURIERS:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Within Pakistan: Including but not limited to Leopards Couriers, FastEx, PostEx, TCS.
                    </li>
                    <li>
                        Outside Pakistan: Including but not limited to DHL, SkyNet.
                    </li>
                </ul>
            </div>
            <p>ORDER PROCESSING:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        All stitched orders, except for PRET, are made to order. Production begins 
                        the next business day after order confirmation.
                    </li>
                </ul>
            </div>
            <p>PAYMENT:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        For Cash on Delivery (COD) orders, payment will be collected by the courier 
                        company upon delivery.
                    </li>
                    <li>
                        For custom stitched orders, payment must be cleared in advance at the time of order 
                        placement.
                    </li>
                </ul>
            </div>
            <p>DELIVERY RESTRICTIONS:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Deliveries cannot be made to India & Bangladesh due to certain restrictions.
                    </li>
                </ul>
            </div>
            <p>ORDER TRACKING:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Once your order is dispatched, you will receive a shipping confirmation 
                        email with carrier information and tracking number. Check your Junk/Spam 
                        folder as well.
                    </li>
                </ul>
            </div>
            <p>CUSTOMS AND DUTIES:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Customs and import duties may apply upon arrival in your country. JAZMÍN is not 
                        responsible for any taxes or duties charged by customs. Payment is necessary 
                        to release your order.
                    </li>
                </ul>
            </div>
            <p>WITH LINING ONLY CUSTOMIZED STITCHING:</p>
            <div className='ul-list'>
                <ul>
                    <li>
                        Customized stitching orders may require an additional 7 working days for 
                        completion.
                    </li>
                </ul>
            </div>
            <p>IMPORTANT NOTICE ⚠️</p>
            <span>Please note that our parcels will only be delivered in our official Jazmin flyers. 
            For security and authenticity purposes, please do not accept deliveries in any other 
            packaging.</span>
        </div>
        <img src={img5} alt='' />
    </div>
  )
}

export default ShippingPolicy
