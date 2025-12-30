import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <div className='Faq'>
        <h3>Faq's</h3>
        <div className='faq-text'>
            <h5>Frequently Asked Questions</h5>
            <div className='question-text'>
                <h6>MY ACCOUNT</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">DO I NEED TO HAVE AN ACCOUNT TO SHOP WITH YOU?</Link>
                    </li>
                    <li>
                        <Link to="">HOW DO I SIGN UP/CREATE AN ACCOUNT AT Jazmin.pk?</Link>
                    </li>
                    <li>
                        <Link to="">I FORGOT MY PASSWORD, HOW CAN I RETRIEVE IT?</Link>
                    </li>
                    <li>
                        <Link to="">HOW CAN I EDIT/UPDATE MY ACCOUNT DETAILS?</Link>
                    </li>
                    <li>
                        <Link to="">HOW CAN I EDIT/UPDATE MY SHIPPING AND BILLING ADDRESS DETAILS?</Link>
                    </li>
                    <li>
                        <Link to="">WHAT ARE THE BENEFITS OF SIGNING UP AN ACCOUNT WITH YOU?</Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Order</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">HOW CAN I PLACE AN ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">HOW WILL I KNOW IF Jazmin HAS RECEIVED MY ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">I DID NOT RECEIVE ANY SALES ORDER SUMMARY, WHAT DOES THAT MEAN?</Link>
                    </li>
                    <li>
                        <Link to="">THERE’S A MISSING ITEM IN MY ORDER, WHAT SHOULD I DO?</Link>
                    </li>
                    <li>
                        <Link to="">
                            HOW WILL I VIEW MY ORDER DETAILS AND HISTORY? HOW DO I TRACK MY ORDER STATUS?
                        </Link>
                    </li>
                    <li>
                        <Link to="">AM I ABLE TO TRACK MY ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">CAN I CANCEL MY ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">CAN I AMEND MY ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">CAN I ADD ITEMS TO AN EXISTING ORDER?</Link>
                    </li>
                    <li>
                        <Link to="">
                            MY ORDER WAS CANCELLED DUE TO ONLINE SECURITY, HOW CAN I GET MY MONEY BACK?
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            I TRIED TO CHECK OUT AND THE ITEM IN MY SHOPPING BAG DISAPPEARED?
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            WHEN I PLACE AN ITEM TO MY SHOPPING BAG, IS THE ITEM PLACED UNDER 
                            MY RESERVATION?
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Online Security</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">WHAT IS ONLINE SECURITY FRAUD SCREENING?</Link>
                    </li>
                    <li>
                        <Link to="">WHY SHOULD I SEND YOU MY PERSONAL INFORMATION?</Link>
                    </li>
                    <li><Link to="">IS MY PERSONAL INFORMATION KEPT SECURED?</Link></li>
                    <li>
                        <Link to="">
                            WILL I RECEIVE ONLINE SECURITY EMAIL EVERY TIME I PLACE MY ORDER 
                            AT Jazmin.pk?
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            I RECEIVE AN ONLINE SECURITY EMAIL FROM YOU; WILL I STILL RECEIVE MY 
                            ORDER WITHIN THE STANDARD DELIVERY TIMELINE?
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            WHAT IF I FAIL TO RESPOND TO YOUR EMAIL WITHIN THE PERIOD GIVEN, WILL MY 
                            ORDER STILL BE PROCESSED?
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Shipping Restriction</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">ARE THERE ANY RESTRICTED AREAS?</Link>
                    </li>
                    <li>
                        <Link to="">UNDELIVERABLE PACKAGES</Link>
                    </li>
                    <li>
                        <Link to="">
                            WHAT HAPPENS IF AN INCORRECT ADDRESS IS PROVIDED FOR THE DELIVERY?
                        </Link>
                    </li>
                    <li>
                        <Link to="">HOW IS THE DELIVERY PROCESSED?</Link>
                    </li>
                    <li>
                        <Link to="">
                            WHAT SHOULD I TAKE NOTE OF WHEN THE ORDER IS INTENDED AS A GIFT?
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Delivery Date</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">
                            IS THERE A GUARANTEED DATE WHICH I CAN RECEIVE MY ORDER ON TIME?
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Returns and Exchange</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">I RECEIVED A DEFECTIVE ITEM, WHAT SHOULD I DO?</Link>
                    </li>
                    <li>
                        <Link to="">I RECEIVED AN INCORRECT ITEM, WHAT SHOULD I DO?</Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Technical Dificulties</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">I RECEIVE AN ERROR WHEN PLACING MY ORDER, WHAT WENT WRONG?</Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Pricing on jazmin.pk</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">IS THE PRICING POLICY THE SAME AS RETAIL STORES?</Link>
                    </li>
                    <li>
                        <Link to="">PRICE ADJUSTMENTS</Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Promotions</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">WHAT KIND OF PROMOTIONS WILL JAZMIN HAVE?</Link>
                    </li>
                    <li>
                        <Link to="">WHAT ARE THE TERMS AND CONDITIONS FOR PROMOTIONS?</Link>
                    </li>
                    <li>
                        <Link to="">
                            WHAT HAPPENS IF THE PROMOTION THAT I WOULD LIKE TO HAVE HAS EXPIRED?
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            WHAT IS THE DIFFERENCE BETWEEN PROMOTIONS AT Jazmin AND IN RETAIL STORES?
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='question-text'>
                <h6>Online safty and security tips</h6>
                <ul className='underline'>
                    <li>
                        <Link to="">WHAT SHOULD I TAKE NOTE AS AN INTERNET USER AND ONLINE SHOPPER?</Link>
                    </li>
                    <li>
                        <Link to="">PROTECT YOUR PASSWORDS</Link>
                    </li>
                    <li>
                        <Link to="">BE WARY OF UNSOLICITED E-MAIL AND TELEPHONE CONTACTS</Link>
                    </li>
                    <li>
                        <Link to="">DISCLOSURE OF INFORMATION FORCE MAJEURE</Link>
                    </li>
                    <li>
                        <Link to="">LIABILITY FOR VERIFICATION, IDENTITY</Link>
                    </li>
                    <li>
                        <Link to="">LIMITATION OF LIABILITY</Link>
                    </li>
                    <li>
                        <Link to="">INDEMNITY</Link>
                    </li>
                    <li>
                        <Link to="">ADDRESS</Link>
                    </li>
                </ul>
            </div>
            <div className='answer-text'>
                <h2>MY ACCOUNT</h2>
                <h5>DO I NEED TO HAVE AN ACCOUNT TO SHOP WITH YOU?</h5>
                <p>No, you don’t need an account to shop with us but setting up an account will allow 
                you to order without having to enter your details every time you shop with us. You can 
                sign up right now, or you can first start shopping and create your account at checkout 
                page</p>
                <h5>HOW DO I SIGN UP/CREATE AN ACCOUNT AT JAZMIN.PK?</h5>
                <p>Please click on ‘Sign in’ followed by ‘Create an account’ and fill in your personal 
                particulars. If you experience any difficulty, kindly call our customer service and we 
                will be pleased to assist you.</p>
                <h5>I FORGOT MY PASSWORD, HOW CAN I RETRIEVE IT?</h5>
                <p>Please click on ‘Forget password’ which is available at the ‘Sign In’ page. Enter 
                your email address and click on “Submit”. A set of instructions to reset your password 
                will be sent to your registered email. After your credentials have been verified, you 
                will be able to create a new password.</p>
                <h5>HOW CAN I EDIT/UPDATE MY ACCOUNT DETAILS?</h5>
                <p>Please sign in and click on ‘My Account’. You will be able to edit/update 
                your particulars.</p>
                <h5>HOW CAN I EDIT/UPDATE MY SHIPPING AND BILLING ADDRESS DETAILS?</h5>
                <p>Please sign in and click on ‘My Account’. You will be able to edit/update your 
                particulars in your account and save it for future orders. If you wish to change the 
                delivery address for a placed order, please contact our customer service immediately. 
                We will make the requested changes if the order has not been processed.</p>
                <h5>WHAT ARE THE BENEFITS OF SIGNING UP AN ACCOUNT WITH YOU?</h5>
                <p>By signing up an account at www.jazmin.pk, you will be able to access and manage 
                your account information easily. This includes:</p>
                <div className='list'>
                    <ul>
                        <li>Changing your password</li>
                        <li>Updating your billing or shipping address</li>
                        <li>Checking your order status</li>
                        <li>Viewing your complete order history</li>
                        <li>
                            Managing your e-mail preference settings (e.g. choose whether to receive 
                            mails from Jazmin.pk)
                        </li>
                        <li>Update Address book</li>
                    </ul>
                </div>
                <h2>ORDER</h2>
                <h5>HOW CAN I PLACE AN ORDER?</h5>
                <p>In order to place an order with <b>JAZMÍN,</b> you will be required to:</p>
                <div className='list'>
                    <ul>
                        <li>Sign in to your online account</li>
                        <li>Shop for the items you want</li>
                        <li>Add the items to your Shopping Bag</li>
                        <li>Proceed to checkout</li>
                        <li>Enter billing and shipping information</li>
                        <li>Provide payment information</li>
                        <li>Review and submit your order</li>
                        <li>Check your order status</li>
                    </ul>
                </div>
                <h5>HOW WILL I KNOW IF <b>JAZMÍN</b> HAS RECEIVED MY ORDER?</h5>
                <p>After you place your order, you will receive an acknowledgement e-mail from 
                <b> JAZMÍN</b> (customerservices@jazmin.pk) to confirm that your orders have been 
                well-received. Next working day local customers (within Pakistan) will receive a phone 
                call from our department to confirm your order. In case we have not heard back from you 
                within 3-4 days of your order we will cancel the order and refund the amount where 
                applicable. However, do note that orders will only be shipped when your credit card 
                payment has been approved, and in case of COD orders, your billing and delivery address 
                verified. Alternatively, you may check the status of your order through “My Account”.</p>
                <h5>I DID NOT RECEIVE ANY SALES ORDER SUMMARY, WHAT DOES THAT MEAN?</h5>
                <p>A sales order summary is an auto-generated e-mail where <b>JAZMÍN</b> acknowledges 
                the order you placed. You should receive this order summary within 15 minutes upon 
                placing your order (please make sure that the e-mail is not sent to your junk folder). 
                If you did not receive an order summary within 15 minutes after placing your order, this 
                means that we have not received your order and no payment has been received by 
                <b>JAZMÍN</b>. You are then required to make a new order. Alternatively, you may sign in 
                to your account to access My Orders page to view whether your order is received by us.</p>
                <h5>THERE’S A MISSING ITEM IN MY ORDER, WHAT SHOULD I DO?</h5>
                <p>If there is any missing item(s), please contact at <u><b>customerservices@jazmin.pk.
                </b></u>
                </p>
                <h5>HOW WILL I VIEW MY ORDER DETAILS AND HISTORY?</h5>
                <p>Please sign in to “My Account’ to view your order history. Click on the order you 
                wish to view to see the details.</p>
                <h5>HOW DO I TRACK MY ORDER STATUS?</h5>
                <p>The order tracking status will be emailed to you. If you wish to know more about 
                the order status, you may please follow the tracking link.</p>
                <h5>AM I ABLE TO TRACK MY ORDER?</h5>
                <p>Yes, when we dispatch your order for delivery you will receive a tracking link via 
                email. Once you receive this tracking link, you can check the delivery status of your 
                shipment.</p>
                <h5>CAN I CANCEL MY ORDER?</h5>
                <p>Unfortunately, we are unable to cancel an order once it has been processed. 
                We do our best to ensure fast delivery and it would be advisable to check your order 
                before placing it.</p>
                <h5>CAN I AMEND MY ORDER?</h5>
                <p>Unfortunately, we are unable to amend an order once it has been processed. 
                This includes changing the size/color of an item, removing an item, changing the 
                payment methods or delivery mode.</p>
                <h5>CAN I ADD ITEMS TO AN EXISTING ORDER?</h5>
                <p>Unfortunately, it is not possible to combine orders or add items to an existing 
                order after your order has been processed.</p>
                <h5>MY ORDER WAS CANCELLED DUE TO ONLINE SECURITY, HOW CAN I GET MY MONEY BACK?</h5>
                <p>We regret to know that your order was cancelled due to Online Security Measures. 
                This is a security measure to prevent fraudulent transactions from going through and 
                to protect our customers from being victims of fraudulent activities. However, please 
                note that we have not captured any payment from you when we cancel your order, hence, 
                the amount will not be charged to you. If charged, amount will be reversed back to card 
                that was used. In case your bank statement says there is a charge on your account, then 
                please share the transaction reference through email at <u>customerservices@jazmin.pk</u> so 
                we can double check it. If we’re still unable to find the transaction then you will 
                have to contact your bank for it.</p>
                <h5>I TRIED TO CHECK OUT AND THE ITEM IN MY SHOPPING BAG DISAPPEARED?</h5>
                <p>Placing an item in your shopping cart does not guarantee your purchase of the item. 
                Until you have completed the checkout process, another customer may have purchased the 
                item. If that happens, you will receive a message on the shopping cart page informing 
                you that the item is no longer available and that you should remove it from your cart.</p>
                <h5>WHEN I PLACE AN ITEM TO MY SHOPPING BAG, IS THE ITEM PLACED UNDER MY RESERVATION?</h5>
                <p>Placing an item in your shopping cart does not guarantee your purchase of the item 
                and does not mean that the item is reserved for you. Until you have completed the 
                checkout process, another customer may have purchased the item.</p>
                <h2>ONLINE SECURITY</h2>
                <h5>WHAT IS ONLINE SECURITY FRAUD SCREENING?</h5>
                <p>Online Security Fraud screening is <b>JAZMÍN’s</b> initiative as preventive measure 
                against credit card fraud transactions. It aims to protect our customers from 
                unauthorized and fraudulent dealings.</p>
                <h5>WHY SHOULD I SEND YOU MY PERSONAL INFORMATION?</h5>
                <p>Due to high risk or credit card fraud, <b>JAZMÍN</b> may request additional 
                information for payment verification. We will not be able to process your orders 
                if we do not receive the required documents. In order to avoid delays with your 
                order, we suggest that you scan the documents and send them via email so that they 
                are clearly legible. Alternatively, you may take a clear photo of the documents 
                requested if scanning is not available.</p>
                <h5>IS MY PERSONAL INFORMATION KEPT SECURED?</h5>
                <p>All relevant pieces of information submitted by our customers will be kept secured 
                and confidential. Only limited and authorized personnel have the rights to access 
                this information. At no point will we share, rent or sell your personal information 
                without your consent.</p>
                <h5>WILL I RECEIVE ONLINE SECURITY EMAIL EVERY TIME I PLACE MY ORDER AT Jazmin.pk?</h5>
                <p>Online Security is meant for every order; however, verification process is ideally 
                for one-time verification purpose. In your next or future purchase(s), if you are using 
                another credit card or using other account information such as billing address or 
                shipping address, your order will be subject to Online Security verification again.</p>
                <h5>I RECEIVE AN ONLINE SECURITY EMAIL FROM YOU; WILL I STILL RECEIVE MY ORDER 
                WITHIN THE STANDARD DELIVERY TIMELINE?</h5>
                <p>Depending on how fast you have responded to the Online Security email and the validity 
                of the submitted documents are, your order may or may not be experiencing delivery delays. 
                However please note that once we received your documents, we will try to process the order 
                at the soonest.</p>
                <h5>WHAT IF I FAIL TO RESPOND TO YOUR EMAIL WITHIN THE PERIOD GIVEN, WILL MY ORDER STILL 
                BE PROCESSED?</h5>
                <p>Failure to respond to the Online Security verification process within the timeline 
                given will result to automatic order cancellation. We regret to inform you that if we 
                do not receive any response to the online security verification within the given 
                timeline, your order will be cancelled automatically.</p>
                <h2>SHIPPING RESTRICTIONS</h2>
                <h5>ARE THERE ANY RESTRICTED AREAS?</h5>
                <p>Currently, we are unable to ship to any PO Box, military, protected area/location. 
                Shipping charges for failure of attempted delivery to the restricted areas will be borne 
                by the buyer. Please note that we are unable to publish all the restrictive measures 
                imposed by your country of delivery as this is dependent on your country’s customs and 
                restrictions. Before making any purchase, we encourage you to check with your local 
                customs on their regulations. You might want to ask about the restriction on:</p>
                <div className='list'>
                    <ul>
                        <li>Any limit on the quantity to import the items</li>
                        <li>Any limit on the value to import the items</li>
                        <li>Restrictions to the material that you are interested to purchase</li>
                        <li>Tax and duties you need to incur for importing the items</li>
                    </ul>
                </div>
                <p>If for some reason, there are any items that cannot be exported and/or imported into 
                your choice of delivery destination, you might still be able to checkout and pay for the 
                items to be delivered. In such cases, the shipper bears the responsibilities to ship the 
                items due to non-delivery e.g. shipping charges incurred on sending to the intended 
                delivery destination, and for the intended delivery destination to return the goods 
                to <b>JAZMÍN</b> will be beared by the buyer.</p>
                <h5>UNDELIVERABLE PACKAGES</h5>
                <p><b>JAZMÍN</b> believes all our online shoppers are responsible shoppers and have a 
                strong support and interest in our fashion products. However, due to negligence and 
                irresponsible acts from a minority of shoppers, our delivery agents may deem a package 
                undeliverable for one or more reasons. Under such circumstances, customer is responsible 
                to pay for ALL incurred taxes and the shipping charges for attempted delivery and the 
                returned shipping charges. Refunds after deduction for the chargeable shipping charges 
                and taxes shall then be returned to the credit card used for the purchase. This check 
                is to stress the importance of accurate delivery information.</p>
                <h5>WHAT HAPPENS IF AN INCORRECT ADDRESS IS PROVIDED FOR THE DELIVERY?</h5>
                <p>If the address is incorrect or outdated, the package will be returned to us by the 
                delivery agent or the unintended recipient. Please check your address carefully when 
                placing a new order. Please also take note of the country in the provided shipping 
                address field. To remove an outdated or incorrect address from your account, please log 
                on to your online account. If no one is available at the delivery address to receive 
                the products, the delivery agent will leave an “unable to deliver” note at the address 
                and the recipient should follow the instructions on that note to arrange redelivery of 
                the products.</p>
                <h5>HOW IS THE DELIVERY PROCESSED?</h5>
                <p>Most of our delivery agents make two attempts to deliver a parcel and they might 
                require a signature upon delivery of parcel. It is generally up to the delivery agent’s 
                discretion to determine whether a signature is required. The delivery agents will 
                attempt to contact the recipient at the given contact number to rearrange a delivery. 
                However, this may be unsuccessful if the contact number is unreachable. Please indicate 
                country code and area code clearly when placing an order. If the recipient failed to 
                receive the package after the delivery agent’s delivery attempts, the package will be 
                returned to us.</p>
                <h5>WHAT SHOULD I TAKE NOTE OF WHEN THE ORDER IS INTENDED AS A GIFT?</h5>
                <p>If a recipient is not expecting a gift, they may refuse the package if they 
                believe it was sent to them in error. You may wish to let the recipient know that a 
                surprise is on the way. Undeliverable package charges will be borne by the buyer.</p>
                <h2>DELIVERY DATES</h2>
                <h5>IS THERE A GUARANTEED DATE WHICH I CAN RECEIVE MY ORDER ON TIME?</h5>
                <p>Currently, we are unable to guarantee a delivery date. The delivery period is 
                subjected to payment authorization, fraud screening and availability of stocks. On 
                some occasions, we may request for some forms of payment verification or source for 
                the best available piece within our storage locations in order to fulfil your shipment. 
                If you need to receive the items urgently, we suggest you to contact <u><b>customerservices@jazmin.pk</b></u>. We will try our utmost to place your order 
                on priority.</p>
                <h2>RETURNS AND EXCHANGE</h2>
                <h5>I RECEIVED A DEFECTIVE ITEM, WHAT SHOULD I DO?</h5>
                <p>Defective items can only be returned to <b>JAZMÍN</b> Office, subject to item being 
                returned must be in its original condition with the original tags and tickets within 
                <b>7 days of delivery.</b> It is important that customers check their outfits upon 
                delivery to avoid any damage.</p>
                <p>There are strictly no refunds via cash/credit card, discount code will be offered 
                instead. <b>Sale items cannot be exchanged in retail stores or via online.</b></p>
                <h5>I RECEIVED AN INCORRECT ITEM, WHAT SHOULD I DO?</h5>
                <p>Incorrect item received can only be returned to <b>JAZMÍN’s</b> Office, subjected 
                to item being returned in its original condition.</p>
                <span>International orders cannot be returned or exchanged.</span>
                <h2>TECHNICAL DIFFICULTIES</h2>
                <h5>I RECEIVE AN ERROR WHEN PLACING MY ORDER, WHAT WENT WRONG?</h5>
                <p>Kindly do send a screenshot of the page where you experience the error, or copy of 
                the error message and send it <u><b>customerservices@jazmin.pk</b></u> for further 
                assistance.</p>
                <h2>PRICING ON JAZMIN.PK</h2>
                <h5>IS THE PRICING POLICY THE SAME AS RETAIL STORES?</h5>
                <p>Please note that pricing policy differs for each delivery destination and country. 
                In very rare cases, there might be price errors and <b>JAZMÍN</b> shall not be liable 
                for any errors in the pricing of items purchased online from us. If there are any 
                changes, customer care team will contact buyer before proceeding with the order.</p>
                <p>All prices displayed are not inclusive of any shipping charges, duties. Shipping 
                charges will be computed and shown at the checkout page after shipping mode is selected. 
                However, we are offering Free Shipping within Pakistan.</p>
                <p>Certain countries attract custom duties & taxes which depend from country to country. 
                The final price in the invoice is exclusive of govt taxes and duties that may be applied 
                and as such are payable by the buyer.</p>
                <h4>PRICE ADJUSTMENTS</h4>
                <p>Any form of price adjustment to orders is not applicable.</p>
                <h2>PROMOTIONS</h2>
                <h5>WHAT KIND OF PROMOTIONS WILL JAZMÍN HAVE?</h5>
                <p>On some occasions, <b>JAZMÍN</b> may introduce special promotions and discounted items on 
                the website, at a limited time offer or while stock last basis. We might also issue 
                special coupons and vouchers which you can use for your future orders. However, 
                we would like to inform you that no price adjustment in any form will be provided 
                for previous orders.</p>
                <h5>WHAT ARE THE TERMS AND CONDITIONS FOR PROMOTIONS?</h5>
                <p>All promotions on the website are subjected to terms and conditions. Every promotion 
                may comprise of different terms and conditions and we suggest you read, understand and 
                agree to all the terms before utilizing the promotion tools. Promotions include but are 
                not limited to discount coupons, discount voucher, bundle buys, complimentary gift with 
                your purchase or free shipping. Promotions are always set with a time frame and with an 
                expiry date.</p>
                <h5>WHAT HAPPENS IF THE PROMOTION THAT I WOULD LIKE TO HAVE HAS EXPIRED?</h5>
                <p>All promotions on the website are subjected to terms and conditions. We are unable 
                to allow you to use any promotion that has expired.</p>
                <h5>WHAT IS THE DIFFERENCE BETWEEN PROMOTIONS</h5>
                <h5>AT <b>JAZMÍN</b> AND IN RETAIL STORES?</h5>
                <p><b>JAZMÍN</b> may run exclusive online promotions that are not available in the retail 
                stores.</p>
                <h4>ONLINE SAFETY AND SECURITY TIPS</h4>
                <h5>WHAT SHOULD I TAKE NOTE AS AN INTERNET USER AND ONLINE SHOPPER?</h5>
                <p>Here at <b>JAZMÍN</b> we concerned about the safety and security of our customers. 
                We have placed a number of technological protections in place to ensure that our 
                transaction process is extremely safe and that our customers information is secure. 
                Additionally, we take a number of steps to help ensure that our third-party seller 
                platforms are safe and that our sellers are of the highest quality.</p>
                <p><b>JAZMÍN</b> has developed the following guidelines to help ensure that your online 
                shopping experience is safe and secure.</p>
                <h4>PROTECT YOUR PASSWORDS</h4>
                <div className='lists'>
                    <ul>
                        <li>
                            If using a public computer or terminal, always log out when you complete an 
                            online session.
                        </li>
                        <li>
                            Keep your passwords private. Remember, anybody who knows your password may 
                            access your account.
                        </li>
                        <li>
                            When creating a password, use at least 6 characters, preferably alphanumerical. 
                            If possible, please include characters of both upper and lower case.
                        </li>
                        <li>
                            Do not use dictionary words, your name, e-mail address, or other personal 
                            information that can be easily obtained. It is also recommended that you 
                            frequently change your password.
                        </li>
                        <li>
                            Avoid using the same password for multiple online accounts.
                        </li>
                    </ul>
                </div>
                <h5>BE WARY OF UNSOLICITED E-MAIL AND TELEPHONE CONTACTS</h5>
                <p><b>JAZMÍN</b> will never e-mail or call a customer and ask that they disclose or 
                verify their account password, full credit card number/image, or banking account number 
                completing an order. Such information should only be submitted when completing an order 
                online, contacting JAZMÍN directly, or when making updates to My Account. If you receive 
                a suspicious e-mail with a link to update your account information, do not click on the 
                link, instead, go directly to www.jazmin.pk and then to your account.</p>
                <p>If you are contacted by, or receive an unsolicited e-mail from an unknown entity, 
                and are asked to confirm or provide your password or personal or banking information, 
                disregard the request and contact us at <u><b>customerservices@jazmin.pk.</b></u></p>
                <p><b>Please note, we may need some of your card information and national ID card 
                picture to confirm your identity where our system asks us to check for fraudulent 
                cases. We will never ask for complete card information.</b></p>
                <h4>DISCLOSURE OF INFORMATION</h4>
                <p><b>JAZMÍN</b> does not sell, rent or trade to third parties any personal information 
                you provide to us online, nor do we give such information to third parties except to the 
                other <b>JAZMÍN Group of companies,</b> or to third parties with whom we contract to 
                assist us in maintaining and organizing our customer information in order that we may 
                fulfil promotional offers and communicate with you. We do not authorize those third 
                parties to make any other use of your information. From time to time, when we offer 
                sweepstakes, contests or promotions, or when another company joins in a promotion or 
                contest with us, participants may be asked to provide certain personal information in 
                order to participate. Information provided by customers who choose to participate may 
                be used by us and by any company offering the contest or promotion to notify winners or 
                to fulfil the promotional offers. When you choose to participate in any sweepstakes, 
                contests or promotions, or request to receive e-mail, promotional offers or product 
                updates, you give us permission to use your personal information for marketing and 
                promotional purposes. We may also use and share with other companies aggregated 
                information about your demographics and your use of our website in a manner that does 
                not reveal your personal identity. At times, your personal demographic and user 
                information may be combined with data from third parties and disclosed in an aggregated 
                form.</p>
                <h5>FORCE MAJEURE</h5>
                <p>No delay or failure in performance by <b>JAZMÍN</b> shall constitute default here 
                under or give rise to any claim for damages if, and to the extent, such delay or 
                failure is caused by Force Majeure. Force Majeure is an occurrence</p>
                <div className='list'>
                    <ul>
                        <li>
                            beyond the control and without the fault or negligence
                        </li>
                        <li>
                            which <b>JAZMÍN</b> are unable to prevent or protect against by the exercise of 
                            reasonable diligence, including acts of God or public enemy, expropriation or 
                            confiscation of facilities, changes in applicable law, war, acts of terrorism, 
                            rebellion, civil disturbances, sabotage, riots, floods, or unusually severe 
                            weather; fire explosions or other catastrophes; strikes or any other 
                            concentrated acts of workers or other similar occurrences
                        </li>
                        <li>
                            And of such an intensity or gravity as to prevent the performance of its 
                            obligation for the time being. The user agrees that if <b>JAZMÍN</b> is 
                            delayed in performance of the work by Force Majeure, the user will promptly 
                            notify <b>JAZMÍN.</b> The user shall use all reasonable efforts to mitigate 
                            the effects of a Force Majeure event forth with and without any delay.
                        </li>
                    </ul>
                </div>
                <h5>LIABILITY FOR VERIFICATION, IDENTITY</h5>
                <p><b>JAZMÍN</b> shall not be responsible for investigating, identifying, screening, 
                verifying the credentials and/or the identity of, or any information whatsoever 
                provided by, a person purchasing any product(s) or making payment(s).</p>
                <h5>LIMITATION OF LIABILITY</h5>
                <div className='lists'>
                    <ul>
                        <li>
                            You agree and acknowledge that <b>JAZMÍN</b> shall not be liable and shall in 
                            no way be held responsible for any loss or damage due to negligence, willful 
                            misconduct, act or omission that may arise / carried out.
                        </li>
                        <li>
                            Under no circumstances shall <b>JAZMÍN</b> be liable to the user or any third 
                            part for indirect, incidental, consequential, special or exemplary damaged, 
                            arising from the products or any other provision of this terms and conditions, 
                            such as, but not limited to, loss of revenue or anticipated profits or lost 
                            business, costs of delay, services delay or liabilities to third parties 
                            arising from any source.
                        </li>
                        <li>
                            <b>JAZMÍN</b> has no obligation to attempt to monitor or regulate the quality, 
                            suitability or content of the products and you agree to hold <b>JAZMÍN</b> 
                            harmless in the event of any claims with respect to problems with the Products.
                        </li>
                    </ul>
                </div>
                <h5>INDEMNITY</h5>
                <p>The user agrees, at his/her own expense, to indemnify, defend and hold harmless <b>JAZMÍN,</b> its 
                subsidiaries and affiliates, and any of their directors and 
                employees, representatives and / or agents against any claim, suit, action or other 
                proceeding brought against them by you or a third party, to the extent that such claim, 
                suit, action or other proceeding brought against such person is based on or arises in 
                connection with any action of <b>JAZMÍN</b> including but not limited to:</p>
                <div className='list'>
                    <ul>
                        <li>A violation of the terms and conditions hereof by <b>JAZMÍN</b></li>
                        <li>Any use of the services provided by <b>JAZMÍN</b> </li>
                        <li>
                            Any misrepresentation or breach of representation or warranty 
                            made by <b>JAZMÍN.</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
