import { React, useState } from 'react'
import "./ContactUs.css"
import { Link, NavLink, Outlet } from 'react-router-dom';

// Accoridan
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HomeGrownBrandBanner = () => {
  return (
    <div id='homeGrownBanner'>
      <h1>- HOME GROWING INDIAN BRAND -</h1>
    </div>
  )
}
const OrdersPayemnts = () => {

  return (
    <div id='Accordion-Div'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>What should I do if my payment fails?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              In case there is a failure in payment, please retry and keep the following things in mind:
              <ul>
                <li>Please confirm if the information you’ve provided is correct i.e. account details, billing address, and password (for Net Banking); and that your internet connection wasn’t disrupted during the process.</li>
                <li>If your account has been debited even after a payment failure, it is normally rolled back to your bank account within 10 business days. For any further clarification, you can email us at support@jigari.com</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I cancel the order I have placed?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Tap on “My Orders” section under the main menu of your App/Website and then select the order you want to cancel. The 'Cancel' option will only be available before your order is shipped. If you are facing an issue, please email us at support@jigari.com and we will sort it for you.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>I want to place an order but I don’t want any price tag or invoice attached as it is a gift for someone. Is it possible?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>We have to leave the tags intact in case the person you’re gifting faces any issues and would like to return the product. We will blacken the prices on the invoice. Please reach out to us as soon as your order is placed. If you want to add a note to the gift, please email the note to us at support@jigari.com and immediately call us on our number so that we can add it before the order is shipped. Please note that the character limit for the note is 250 characters.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How can I get my order delivered faster?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Sorry, currently we do not have any service available to expedite the order delivery. In future, if we start offering such a service and your area pincode is serviceable, you will receive a communication from our end.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Why can’t I see the Cash On Delivery (COD) option?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>If the Cash On Delivery (COD) option is not showing, it’s because this facility is unavailable for your postal code. You can either pay by Debit Card, Credit Card, or Net Banking, or you can get the products delivered to an alternate address (where COD is available).</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I know if my order was placed successfully?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Once you successfully place your order, you will receive a confirmation email & SMS/Whatsapp with details of your order and your order ID.</li>
                <li>You’ll receive another email & SMS/ Whatsapp once your order is shipped out. All you have to do then is, sit back, relax, and wait for your awesome product(s) to arrive!</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I check the status of my order?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>To find out when your order is arriving, you need to first log in to your account.</li>
                <li>To find out when your order is arriving, you need to first log in to your account. Click on the Menu bar on your left hand side of the screen.</li>
                <li>After your order has been successfully placed, you will immediately receive a confirmation and order details via email and SMS. Once your products have been shipped, you will be notified again via email, SMS and Whatsapp.</li>
                <li>In case there is any unusual event or complication that leads to a delay in shipping your order, you will immediately receive an update from our end- with reasons and the revised shipping and delivery timelines.</li>
                <li>If there are any other issues/ delays that come up, or you need the order to be delivered urgently, write to us at support@jigari.com, we will see what we can do to help.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
const ShippingTrackings = () => {
  return (
    <div id='Accordion-Div'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Can I modify the shipping address of my order before it has been shipped?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              Sorry, that is not possible at the moment as the system would have already passed the mobile number and address to our warehouse to pack and ship your product. That said, we never say never! You can always cancel the order before it has been packed and can place a new order. Don't worry, there are no cancellation charges.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How long will it take for my order to be delivered?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Orders in India, once shipped, are typically delivered in 1-4 business days in metros, and 4-7 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.).</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>When will my products on pre-order be shipped?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>We ship pre-order products on the date given in the product description, as far as possible. However, there may be a slight delay in shipping in case of an unforeseen surge in demand or any similar issue. Rest assured, our customer experience team will keep you updated on the status of your order.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Are there any additional shipping charges?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                The Souled Store provides FREE shipping for all orders above ₹297 in India. A shipping charge of ₹50 is payable only on orders below ₹297. Minimum order value should be ₹199 (excluding GST).
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I track my order?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              You can track your order once it has been dispatched from our warehouse. An email, SMS, and Whatsapp notification will be sent with a link. You can also track it from your account on the website by Selecting ‘Orders’ from the top right corner and then clicking on 'Track Order' for the respective Order ID.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>What if my order is undelivered?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              For prepaid orders, if our courier partners are unable to deliver the product and they send it back to us, we will initiate a refund as TSS Money to your The Souled Store account which will reflect within 24-48 hours of initiation.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
const Miscellaneous = () => {
  return (
    <div id='Accordion-Div'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Sale price</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              The product I want to return was bought on discount. Will I get refunded the full amount? <br></br>
              No. You will only receive the exact amount paid for the product.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Are gift certificates refundable?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              Gift certificates are non refundable.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Contest</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              What are the standard terms and conditions applicable to contests run by Jigari's Website/App?

              You can find the standard terms and conditions for our contests here."Here" Link- .
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Try the product</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              We currentlu only sell online so there is no try-and-buy option available. However, in order to make sure you in pick the right size, we have a size chart with measurements on our product pages.And we are soon planning to launch offline stores in a city near by you. For any queries, please write to us at connect@thesouledstore.com.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Will I automatically receive marketing emails from you after registration?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              You will automatically get subscribed to our marketing emails and SMS's after registering with us. In case you do not want to receive these, you can click on the unsubscribe link in the email.          </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
const ReturnExchangeRefund = () => {
  return (
    <div id='Accordion-Div'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>The product I want to return was bought on discount. Will I get refunded the full amount?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              No. You will only receive the exact amount paid for the product.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>In case I return the products, will the COD/Shipping/Gifting charges be credited back?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>No. These are charges applicable each time an order is placed and are non-refundable.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>My product has been picked up but I have not got my refund yet.</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              If it has been 24-48 hours since the order has been picked by our courier partner and if the refund isn't reflecting in your bank account, please email us at connect@jigari.com and we will sort it out for you.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>What are the terms of the exchange policy?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>You can apply for an exchange for your order within 7 days after an order has been delivered. We have a reverse pick up facility for most pin codes.</li>
                <li>Exchanges can only be done for the same products in a different size. It cannot be exchanged for another design in the same product category or against any other product across our website/app.</li>
                <li>If you wish to exchange products from a combo pack, the whole pack will have to be sent back to us. Partial returns aren’t accepted. If there is a manufacturing issue, or if you have any other query regarding this, you can contact us on the number (+91 - 774040608) or email us on support@jigari.com.</li>
                <li>Gift wrapping charges are non-refundable and we will not be able to gift wrap any exchanges requested.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I create a exchange request?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              To exchange your order, you will need to log in to your account and follow the steps:
              <ul>
                <li>Go to 'Orders'</li>
                <li>Click on the exchange button next to the product you want to send us back. Select the reason for exchange from the dropdown and select the replacement size you wish to receive in exchange. Stock will be subject to availability.</li>
                <li>Select the mode of return as Reverse Pickup and drop or Self Ship.</li>
                <li>In case your pin-code is unserviceable for a reverse pick up, you will be prompted to change the address and pin-code or to select Self Ship option.</li>
                <li>Click on the acknowledgment box and submit your exchange request.</li>
                <li>Your replacement order will be shipped once the original order is successfully collected, and the tracking details will be shared with you accordingly.</li>
                <li>In case your pin-code is non serviceable for the reverse pick up facility, we request you to self-ship the product to us. We will credit 100 TSS Money in your account in lieu of the shipping costs and once the original order is received, the replacement will be shipped out for you.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>I have created a exchange request. When will the product be picked up?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Once we receive this request, someone from the courier partner's team will arrive at the address for a pickup within 2 business days. Please ensure the product(s) and the tags are intact on the product(s) for it to be accepted by the courier company.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>When will I get my exchanged product delivered?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Your exchange product will be shipped from our warehouse after the returned product has been picked from your end. Orders in India, once shipped, are typically delivered in 1-4 business days in metros, and 4-7 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.).</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>What are the terms of the Return Policy?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Customers can return their order within 7 days after an order has been delivered. We have a reverse pick up facility for most pin codes. For pin codes that are non- serviceable by our courier partners against the reverse pick up policy, you will have to self ship the product(s).</li>
                <li>In the interest of hygiene, we may refuse returns where it's obvious that the item has been worn, washed or soiled. Defective products need not be sent back to us, unless confirmed by the Customer Experience Team. If you have received a defective product, send us images at support@jigari.com and we will get back to you. Once confirmed by the Customer Experience Team the refund will be provided either into your bank account as per your convenience.</li>
                <li>If you have to return anything from a combo pack, the whole pack will have to be returned. There will not be any partial returns accepted. If there is a manufacturing issue, or if you have any other query regarding this, you can contact us on the number or email us on support@jigari.com.</li>
                <li>Gift cards/vouchers are non-refundable.</li>
                <li>Gift wrapping charges will not be refunded if goods are returned. Also, we will not be able to gift wrap any replacements you have asked for.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>How do I create a return request?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
            To return your order, you will need to log in to your account and follow the steps:
              <ul>
                <li>Go to 'Orders'</li>
                <li>Click on the return button next to the product you want to return.</li>
                <li>Select the reason for return from the dropdown.</li>
                <li>Select the mode of return as reverse pick up or self shipping.</li>
                <li>In case your pin-code is serviceable for a reverse pick up, kindly confirm the address and contact number.</li>
                <li>Click on the acknowledgment box and submit your return request.</li>
                <li>In case your pin-code is non serviceable for the reverse pick up facility, we request you to self-ship the product to us.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>I have created a return request. When will the product be picked up?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>Once we receive this request, someone from the courier partner's team will arrive at the address for a pickup within 2 business days. After the product is picked up, the complete amount will be refunded to your bank account as within 48-72 hours. Please ensure the product(s) and the tags are intact on the product(s) for it to be accepted by the courier company.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><span className='Accordian-Header-Our'>Where should I self-ship the returns?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='Accordian-Header-Our'>
              <ul>
                <li>In case your pincode is non-serviceable for a reverse pick up, you’ll have courier the product(s) to the following address:<br></br>
Jigari - Kraftme Digital and Offset Printing Services Pvt. Ltd.<br></br>
Flat No-5 - 202, Dnyanraj Apartment, Bharti Nagar-1, Kothrud Depot, Pune,<br></br> Maharashtra - 411038.</li>
<li>Please ensure the items are packed securely to prevent any loss or damage during transit. All items must be in unused condition with all original tags attached and packaging intact. Within 48 hours of receiving the product(s), the complete amount + ₹100 (in lieu of courier charges) will be refunded to your bank account.</li>
              </ul>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


const ContactUs = () => {

  return (
    <div id='ContactUsPage'>
      <h1>Contact Us</h1><br></br>
      <h3>Track, Return/ Exchange, or Cancel your orders hassle-free.</h3>
      <Link to="/profile/my-orders">
        <div className='ContactUsPage-MyOrdersButton'>
          <h3>MY ORDERS</h3>
        </div>
      </Link>
      <div className='ContactUsPage-help-banner'>
        {/* <h2>What can we help you with today?</h2> */}
        <h2>Need Help? Get in touch.</h2>
      </div>
      <div className='ContactUsPage-GetInTouchSection'>
      
        <div className='GetInTouch-LeftSection'>
          <h2>Call Us</h2>
          <a href='tel:7774040608'><img src='../Images/Icons/callIcon.png' style={{ "width": "80px" }} /></a>
          <h3>+91-7774040608</h3>
          <h3>Mon-Sun : 9.00AM to 7.00 PM</h3>
        </div>
        <div className='GetInTouch-RightSection'>
          <h2>Chat With Us</h2>
          <a href='https://api.whatsapp.com/send/?phone=7774040608&text=Hey,+Can+we+get+in+touch?&type=phone_number&app_absent=0' target='_blank'><img src='../Images/Icons/whatsappIcon.png' style={{ "width": "70px", "paddingTop": "8px" }} /></a>
        </div>
      </div>
      <h2>FAQs</h2>
      <div className='ContactUsPage-FAQs'>
        <div className='ContactUsPage-FAQs-leftSection'>
          <div className='FAQs-Elements'><NavLink to="" end>ORDERS & PAYMENTS</NavLink></div>
          <div className='FAQs-Elements'><NavLink to="shipping&tracking">SHIPPING & TRACKING</NavLink></div>
          <div className='FAQs-Elements'><NavLink to="miscellaneous">MISCELLANEOUS</NavLink></div>
          <div className='FAQs-Elements'><NavLink to="returns-refund-exchange"><span style={{ "textAlign": "center" }}>RETURNS, EXCHANGE & REFUND</span></NavLink></div>
        </div>
        <div className='ContactUsPage-FAQs-rightSectiom'>
          <Outlet />
        </div>
      </div>
      <div className='StayInTouch-socialMedia'>
        <h2>Stay in touch</h2>
        <div className='socialDiv'>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/facebook-outline-icon.png' style={{ "width": "40px" }} />
              <p>Facebook</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/insta-outline-icon.png' style={{ "width": "40px" }} />
              <p>Instagram</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/youtube-outline-icon.png' style={{ "width": "40px" }} />
              <p>Youtube</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/twitter-outline-icon.png' style={{ "width": "40px" }} />
              <p>Twitter</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/linkedin-outline-icon.png' style={{ "width": "40px" }} />
              <p>LinkedIn</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/telegram-outline-icon.png' style={{ "width": "40px" }} />
              <p>Telegram</p>
            </div>
          </a>
          <a href='' target='_blank'>
            <div className='socialDiv-Elements'>
              <img src='../Images/Icons/snapchat-outline-icon.png' style={{ "width": "40px" }} />
              <p>Snapchat</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className='CorporateAddressDiv'>
          <p><span style={{"color":"#323333", "fontSize":"larger"}}>-Corporate Address-</span><br></br><span style={{"fontSize":"x-large", "color":"#E74037"}}>Kraftme Digital and Offset Printing Services Pvt. Ltd.</span><br></br>
          <span style={{"fontSize":"large"}}>Flat No-5, Dnyanraj Apartment, Bharti Nagar-1,<br></br> Kothrud Depot, Pune, Maharashtra - 411038</span><br></br>You can reach us at support@jigari.com with all queries or +91 - 7774040608.</p>
      </div>
      
    </div>
  )
}

export { ContactUs, OrdersPayemnts, ShippingTrackings, Miscellaneous, ReturnExchangeRefund, HomeGrownBrandBanner };