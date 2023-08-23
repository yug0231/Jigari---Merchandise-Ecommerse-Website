import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import fb30 from "../../Images/socialMediaIcons/fb30.png";
// import insta30 from "../../Images/socialMediaIcons/insta.png";
// import twi30 from "../../Images/socialMediaIcons/twitter.png";
// import pin30 from "../../Images/socialMediaIcons/pinterest.png";
// import snap30 from "../../Images/socialMediaIcons/snapchat.png";
// import app30 from "../../Images/socialMediaIcons/apple.png";
// import paymentcards from "../../Images/secure-payments-image.webp";
// import androidBtn from "../../Images/appDownloadBtn/android.webp";
// import appleBtn from "../../Images/appDownloadBtn/apple.webp";
const Footer = () => {
  return (
    <div id="footer">
      <div>
        <div id="footerTop">
          <div class="footerTopColumn">
            <h2>CUSTOMER SERVICE</h2>
            <Link to="/contact-us"><p>Contact Us</p></Link>
            <Link to="/trackorder"><p>Track Order</p></Link>
            <Link to=""><p>Return Order</p></Link>
            <Link to=""><p>Cancel Order</p></Link>
          </div>
          <div class="footerTopColumn">
            <h2>COMPANY</h2>
            <p>About Us</p>
            <p>We're Hiring</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>
          <div class="footerTopColumn">
            <h2>CONNECT WITH US</h2>
            <span className="socialmediaHide">
              {/* <img className="socialIcon" src={fb30} /> */}
              <p>4.7M People Like this</p>
            </span>
            <span className="socialmediaHide">
              {/* <img className="socialIcon" src={insta30} /> */}
              <p>1M Followers</p>
            </span>
            <span className="socialMediaRow">
              {/* <img className="socialIcon" src={twi30} />
              <img className="socialIcon" src={pin30} />
              <img className="socialIcon" src={snap30} />
              <img className="socialIcon" src={app30} /> */}
            </span>
          </div>
          <div class="footerTopColumn">
            <h2>KEEP UP TO DATE</h2>
            <span className="subscribeBox">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="subscribeEmailBox"
              />
              <button className="subscribeBtn">Subscribe</button>
            </span>
          </div>
          <div class="footerTopColumn">
            <h2>APP GOING LIVE SOON</h2>
            <p>7 Days return policy*</p>
            <p>Cash on delivery*</p>
          </div>
          <div class="footerTopColumn">
            <h2>100% SECURE PAYMENT</h2>
            {/* <img src={paymentcards} /> */}
          </div>
          <div class="footerTopColumn">
            <h2> </h2>
            {/* <span style={{ display: "flex" }}>
              <img src={androidBtn} className="appDownBtn" />
              <img src={appleBtn} className="appDownBtn" />
            </span> */}
          </div>
          <div></div>
          <div class="footerTopColumn">
            <h2>MENS CLOTHING</h2>
            <Link to=" ">
              <p>Top Wear</p>
            </Link>
            <Link to=" ">
              <p>Men's New Arrivals</p>
            </Link>
            <Link to=" ">
              <p>Men's Half Sleeve T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Hoodies & Sweatshirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Long Sleeve T-shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Printed T-shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Plain T-shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Vests</p>
            </Link>
            <Link to=" ">
              <p>Men's Polo T-Shirts </p>
            </Link>
            <Link to=" ">
              <p>Men's Kurtas</p>
            </Link>
            <Link to=" ">
              <p>Men's Combo T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Shirts</p>
            </Link>
            <Link to=" ">
              <p>Men's Nightwear</p>
            </Link>
            <Link to=" ">
              <p>Men's Plus Size Store</p>
            </Link>
            <br></br>
            <Link to=" ">
              <p>Bottom Wear</p>
            </Link>
            <Link to=" ">
              <p>Men's Pajamas</p>
            </Link>
            <Link to=" ">
              <p>Men's Boxer Shorts</p>
            </Link>
            <Link to=" ">
              <p>Men's Shorts</p>
            </Link>
            <Link to=" ">
              <p>Men's Track Pants</p>
            </Link>
            <Link to=" ">
              <p>Men's Pants</p>
            </Link>
            <br></br>
            <Link to=" ">
              <p>Featured</p>
            </Link>
            <Link to=" ">
              <p>Men's Flip Flops</p>
            </Link>
            <Link to=" ">
              <p>Men's Sliders</p>
            </Link>
            <Link to=" ">
              <p>Marvel T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Disney T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Avengers T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Star Wars T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Batman T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Superman T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Joker T-Shirts</p>
            </Link>
          </div>
          <div class="footerTopColumn">
            <h2>WOMENS CLOTHING</h2>
            <Link to=" ">
              <p>Women's Top Wear</p>
            </Link>
            <Link to=" ">
              <p>Women's New Arrivals</p>
            </Link>
            <Link to=" ">
              <p>Women's T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>WoMen's Hoodies & Sweatshirts</p>
            </Link>
            <Link to=" ">
              <p>Women's Dresses</p>
            </Link>
            <Link to=" ">
              <p>Women's 3/4 Sleeve T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Women's Kurtis</p>
            </Link>
            <Link to=" ">
              <p>Women's Combo T-Shirts</p>
            </Link>
            <Link to=" ">
              <p>Women's Nightwear</p>
            </Link>
            <Link to=" ">
              <p>Women's Plus Size Store</p>
            </Link>
            <br></br>
            <Link to=" ">
              <p>Women's Bottom Wear</p>
            </Link>
            <Link to=" ">
              <p>Women's Pajamas</p>
            </Link>
            <Link to=" ">
              <p>Wonen's Boxer Shorts</p>
            </Link>
            <Link to=" ">
              <p>Women's Jeans</p>
            </Link>
            <Link to=" ">
              <p>Women's Shorts</p>
            </Link>
            <Link to=" ">
              <p>Wommen's Joggers</p>
            </Link>
            <br></br>
            <Link to=" ">
              <p>BAGS</p>
            </Link>
            <Link to=" ">
              <p>Laptop Bags</p>
            </Link>
            <Link to=" ">
              <p>Small Backpacks</p>
            </Link>
            <br></br>
            <Link to=" ">
              <p>Featured</p>
            </Link>
            <Link to=" ">
              <p>Women's Slides</p>
            </Link>
            <Link to=" ">
              <p>Women's Flip Flops</p>
            </Link>
          </div>
          <div class="footerTopColumn">
            <h2>MOBILE COVERS</h2>
            <p>Brands</p>
            <Link to=" ">
              <p>Apple</p>
            </Link>
            <Link to=" ">
              <p>Realme</p>
            </Link>
            <Link to=" ">
              <p>Samsung</p>
            </Link>
            <Link to=" ">
              <p>One Plus</p>
            </Link>
            <Link to=" ">
              <p>Vivo</p>
            </Link>
            <Link to=" ">
              <p>Oppo</p>
            </Link>
          </div>
          <div class="footerTopColumn">
            <Link to=""><h2>FANBOOK</h2></Link>
            <Link to=""><h2>OFFERS</h2></Link>
            <h2>SITEMAP</h2>
          </div>
        </div>
        <div id="footerBottom">
          <h2>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h2>
          <p>
            Founded in 2012, Bewakoof is a lifestyle fashion brand that makes
            creative, distinctive fashion for the trendy, contemporary Indian.
            Bewakoof was created on the principle of creating impact through
            innovation, honesty and thoughtfulness. With a team of 400 members,
            and 2mn products sold till date. We like to experiment freely, which
            allows us to balance creativity and relatability, and our innovative
            designs. Our range of products is always fresh and up-to-date, and
            we clock sales of over 1 lakh products a month. Our innovation focus
            extends to our operations as well. We are vertically integrated,
            manufacture our own products, and cut out the middleman wherever
            possible. This direct-to-consumer model allows us to create
            high-quality fashion at affordable prices. A thoughtful brand, we
            actively attempt to minimize our environmental footprint and
            maximize our social impact. These efforts are integrated right into
            our day-to-day operations, from rainwater harvesting to paper
            packaging to employee benefits. To create an accessible, affordable
            and thoughtful experience of online shopping in India.
          </p>
          <br></br>
          <h2>
            ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND
            SUPER-EXCITING
          </h2>
          <p>
            Online Shopping has always been a fun and exciting task for most and
            more so when the shopping mall is none other than your own house. We
            have all had days when we have planned trips to the clothing store
            in advance, dreaming about what we would buy once we get there. Now
            we wouldnt think twice before indulging in some online shopping.
            Well, cut to todays time and age, you can do all this from the
            comfort of your home while enjoying many online shopping offers,
            right from amazing deals and discounts to one of the most robust
            user interface amongst most online shopping sites in India, with
            many shopping filters to make your shopping experience truly hassle
            free. This in our own words is what we call Bewakoof.com.
          </p>
          <p>
            Bewakoof, THE place to be when it comes to the coolest in online
            fashion, offers you fine, high-quality merchandise go ahead and
            indulge in a bit of online shopping for men and womens fashion. So
            browse through the exciting categories we have on offer from mens
            fashion to basic mens clothing as well as wide variety in womenswear
            and womens clothes to the amazing range of accessories, fill up your
            carts and get fast home delivery for all orders. All of this topped
            with our exclusive online shopping offers makes for an exciting,
            irresistible and uber cool combo! You can even gift some to your
            near and dear ones while being absolutely certain that it will put a
            smile on their faces.
          </p>
          <br></br>
          <h2>BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!</h2>
          <p>
            Online fashion is definitely more accessible with Bewakoof.com.
            Explore the latest collections in Marvel t-shirts including avengers
            t-shirts and captain America t-shirts in official merchandise. Apart
            from these, quirkiest of T-shirts that you wont find on any online
            shopping sites in India are showcased at Bewakoof.com. If your
            wardrobe has been longing for a cool overhaul then bewakoof.com will
            certainly be your best bet amongst all online shopping sites. Also,
            take a tour of our bewakoof blog to stay abreast with the latest
            runway trends and be a trendsetter among your immediate circles.
            What we wear speaks volumes of us they say. But what if what you
            wore actually spoke what your mood was! Havent we all wondered where
            we could get those quirky t-shirts and sport them with confidence?
            Sure otherwise getting them made or even buying them from otherwise
            expensive online shopping sites for clothes may cost you
            substantially but with Bewakoof.com, you will understand that you do
            not have to spend a fortune on online fashion to look great.
            Sliders, joggers, sweatshirts, bag and bag packs and so much more
            are just some of the other items you can grab hold of here.
          </p>
          <br></br>
          <h2>
            AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP
            NOWHERE ELSE!
          </h2>
          <p>
            Choose your product, get it ordered online, and we ensure that its
            delivery happens right at your doorstep anywhere in India. You just
            need to take care of the payment for the product from the comfort of
            your home, while we ensure free shipping all the time on almost
            everything with no strings attached. For any second thoughts after
            purchase, we have in place a return policy as well. One of the best
            you will find on any online shopping sites in India. For your online
            shopping experience to be safe and risk-free, we offer Cash On
            Delivery (COD) facility too. So you dont have to worry anymore about
            your hard earned money being stuck when you buy clothes online at
            bewakoof.com. Avail exciting online shopping offers like designs of
            the day and colour of the month when you shop with us. Make sure to
            use our easy 7-day returns policy, card or cash on delivery option
            and other customer-friendly features. A comprehensive sizing guide
            and detailed product descriptions coupled with high-resolution
            product shots will give you all the information to make the right
            buying decision. Give your wardrobe the much-needed upgrade with
            uber cool clothing head to Bewakoof.com for a great online shopping
            india experience now! Could you have asked for more?
          </p>
          <br></br>
          <h2>OUR PHILOSOPHY</h2>
          <p>
            We believe in creating the kind of fashion, that makes you stand out
            as they are in line with the latest local and global trends of the
            industry, but also at the same time offer value for money
            functionality, with quality materials and comfortable and flattering
            prints. We try to look into the psyche of our customers, and try to
            get inspired by the conversations and experiences around us while
            creating our graphics, to ensure that they are relatable. We believe
            in constant and consistent innovation to ensure that our fans get
            nothing short of the bets at affordable rates! While most people do
            not know, we do not outsource the manufacturing of our products,
            everything from the conception of the designs to the manufacture and
            the styling that you see on the photographs of the banners and
            product pages of our website all happen in house! We go from yarn to
            product and since we 're vertically integrated and bring fashion
            from us directly to your doorstep without any middlemen that also
            further ensures reliability because for us it is not just about the
            money but about building the trust and credibility in our fans about
            our brand. We also make sure to decrease the impact on environment
            and are building initiatives that will help us with the same, for
            now by optimizing our processes to use only as much as we need from
            nature, rain water harvesting and recycling the water from our RO
            water facility, because we believe that the spirit of Bewakoof is
            about creating an impact by breaking conventions and having a
            different perspective!
          </p>
        </div>
        <div id="copyright-line">
          <p>Copyright 2023 JIGARI - By Kraftme Digital & Offset Printing Services Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;