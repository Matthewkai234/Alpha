import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Header";
import "./style.css";
export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="div-2">
        <Navbar
          akarIconsHeart="/img/akar-icons-heart-1.svg"
          akarIconsSearch="/img/akar-icons-search-1.svg"
          antDesignShopping="/img/ant-design-shopping-cart-outlined-1.svg"
          mdiAccountAlert="/img/mdi-account-alert-outline-1.svg"
          skinClinic="/img/skinclinic-1.svg"
        />
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-14">Checkout</div>
              </div>
            </div>
            <div className="group-14">
              <div className="text-wrapper-15">Home</div>
              <div className="text-wrapper-16">Checkout</div>
              <img
                className="dashicons-arrow-down"
                alt="Dashicons arrow down"
                src="/img/dashicons-arrow-down-alt2.svg"
              />
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="overlap-3">
                <div className="group-15">
                  <div className="overlap-4">
                    <div className="rectangle" />
                    <div className="text-wrapper-17">Billing details</div>
                    <div class="group-16">
                    <div class="first-name">First Name</div>
<input type="text" class="rectangle-2"  />
</div>
<div class="text-wrapper-19">Last Name</div>
<input type="text" class="rectangle-3" />
<div class="text-wrapper-20">Company Name (Optional)</div>
<input type="text" class="rectangle-4" placeholder="Luminova Tech" />
                    <div className="group-17">
                    <div className="text-wrapper-18">Street address</div>
<input type="text" className="div-3" />
                    </div>
                    <div className="group-18">
                    <div className="text-wrapper-18">ZIP code</div>
<input type="text" className="div-3" />
                    </div>
                    <div className="group-19">
                    <div className="text-wrapper-18">Town / City</div>
<select className="div-3" style={{ fontSize: 'larger' }}>
            <option value="جنين">جنين</option>
            <option value="طوباس">طوباس</option>
            <option value="نابلس">نابلس</option>
            <option value="قلقيلية">قلقيلية</option>
            <option value="طولكرم">طولكرم</option>
            <option value="طولكرم">غزة</option>
            <option value="طولكرم">دير البلح</option>
            <option value="طولكرم">خانيونس</option>
            <option value="طولكرم">رفح</option>
            <option value="طولكرم">شمال غزة</option>
            <option value="رام الله والبيرة">رام الله والبيرة</option>
            <option value="الخليل">الخليل</option>
            <option value="بيت لحم">بيت لحم</option>
            <option value="أريحا">أريحا والأغوار</option>
            <option value="القدس">سلفيت</option>
            <option value="القدس">القدس</option>

            <option value="عمان">عمان</option>
            <option value="البلقاء">البلقاء</option>
            <option value="الزرقاء">الزرقاء</option>
            <option value="مادبا">مادبا</option>
            <option value="اربد">اربد</option>
            <option value="العقبة">العقبة</option>
            <option value="الطفيلة">الطفيلة</option>
            <option value="الكرك">الكرك</option>
            <option value="المفرق">المفرق</option>
            <option value="معان">معان</option>
            <option value="جرش">جرش</option>
            <option value="عجلون">عجلون</option>
        </select>
                    </div>
                    <div className="group-20">
                    <div className="text-wrapper-18">Phone</div>
<input type="text" className="div-3" />
                    </div>
                    <div className="group-21">
                    <div>
    <div className="text-wrapper-18">Email Address</div>
    <input type="text" className="div-3" placeholder="example@gmail.com" />
</div>
                    </div>
                    <div className="group-22">
                    <input type="text" className="overlap-group-3" placeholder="Additional information" />
</div>
                    <div className="group-23">
                      <div className="overlap-5">
                      <div className="group-24">
    <div className="text-wrapper-18" >Country / Region</div>
    <select className="rectangle-5" style={{ fontSize: 'larger' }}>
        <option value="Country1">فلسطين</option>
        <option value="Country2">الأردن</option>
    </select>
</div>
</div>
                    </div>
                    <div className="group-25">
                      <div className="overlap-6">
                        <div className="group-26">
                        <div>
                        <div className="text-wrapper-18">Province</div>
                        <input className="div-3"/>
                      </div>
                      </div>
                      </div>
                      </div>
                    <p className="your-personal-data">
                      <span className="span">
                        Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our
                      </span>
                      <span className="text-wrapper-24"> privacy policy.</span>
                    </p>
                  </div>
                </div>
                <div className="group-27">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="overlap-group-4">
                      <button class="custom-button">Place order</button>
                      </div>
                    </div>
                    <img className="line-3" alt="Line" src="/img/line-10.svg" />
                    <div className="group-30">
                      <div className="text-wrapper-26">Direct Bank Transfer</div>
                      <p className="text-wrapper-27">
                        Make your payment directly into our bank account. Please use your Order ID as the payment
                        reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                      <div className="ellipse" />
                    </div>
                    <div className="group-31">
                      <div className="text-wrapper-28">Direct Bank Transfer</div>
                      <div className="ellipse-2" />
                    </div>
                    <div className="group-32">
                      <div className="text-wrapper-29">Cash On Delivery</div>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-33" />
          <div className="group-34">
            <div className="overlap-7">
              <div className="rectangle-6" />
              <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
            </div>
          </div>
          <div className="text-wrapper-30">Cart Totals</div>
          <div className="group-35">
            <div className="text-wrapper-31">Subtotal</div>
            <div className="text-wrapper-32">Total</div>
            <div className="text-wrapper-33">$. 250,000.00</div>
            <div className="text-wrapper-34">$. 250,000.00</div>
            <div className="text-wrapper-35">$. 250,000.00</div>
            <div className="group-36">
              <div className="overlap-group-5">
                <div className="rectangle-7" />
                <button class="custom-button1">Check Out</button>
              </div>
            </div>
          </div>
          <div className="text-wrapper-37">Product</div>
          <div className="text-wrapper-38">Price</div>
          <div className="text-wrapper-39">Quantity</div>
          <div className="rectangle-8" />
          <div className="text-wrapper-40">1</div>
        </div>
        <div className="feature-wrapper">
          <div className="feature">
            <div className="frame-3">
              <img className="img-2" alt="Trophy" src="/img/trophy-1.svg" />
              <div className="text">
                <div className="text-wrapper-41">High Quality</div>
                <div className="text-wrapper-42">crafted from top materials</div>
              </div>
            </div>
            <div className="frame-4">
              <img className="img-2" alt="Guarantee" src="/img/guarantee.svg" />
              <div className="text">
                <div className="text-wrapper-41">Warranty Protection</div>
                <div className="text-wrapper-42">Over 2 years</div>
              </div>
            </div>
            <div className="frame-4">
              <img className="img-2" alt="Shipping" src="/img/shipping.svg" />
              <div className="text">
                <div className="text-wrapper-41">Free Shipping</div>
                <div className="text-wrapper-42">Order over 150 $</div>
              </div>
            </div>
            <div className="frame-3">
              <img className="img-2" alt="Customer support" src="/img/customer-support.svg" />
              <div className="text">
                <div className="text-wrapper-41">24 / 7 Support</div>
                <div className="text-wrapper-42">Dedicated support</div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="footer-instance" />
      </div>
    </div>
  );
};
