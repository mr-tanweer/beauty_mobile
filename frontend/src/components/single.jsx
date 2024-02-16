import React, { useState } from "react";

function Singlepage() {

	const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const addToCart = () => {
        // Add your addToCart logic here
    };
    return (
        <>
            <div className="row singl">
                <div className="col-lg-7">
                    <div className="single_product_pics">
                        <div className="row">
                            <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                <div className="single_product_thumbnails">
                                    <ul>
                                        <li><img src="images/single_1_thumb.jpg" alt="" data-image="images/single_1.jpg" /></li>
                                        <li className="active"><img src="images/single_2_thumb.jpg" alt="" data-image="images/single_2.jpg" /></li>
                                        <li><img src="images/single_3_thumb.jpg" alt="" data-image="images/single_3.jpg" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 image_col order-lg-2 order-1">
                                <div className="single_product_image">
                                    <div className="single_product_image_background" style={{backgroundImage: "url(images/single_2.jpg)"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="product_details">
                        <div className="product_details_title">
                            <h2>Pocket cotton sweatshirt</h2>
                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                        </div>
                        <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                            <span className="ti-truck"></span><span>free delivery</span>
                        </div>
                        <div className="original_price">$629.99</div>
                        <div className="product_price">$495.00</div>
                        <ul className="star_rating">
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                        <div className="product_color">
                            <span>Select Color:</span>
                            <ul>
                                <li style={{background: "#e54e5d"}}></li>
                                <li style={{background: "#252525"}}></li>
                                <li style={{background: "#60b3f3"}}></li>
                            </ul>
                        </div>
						<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
            <span>Quantity:</span>
            <div className="quantity_selector">
                <span className="minus" onClick={decrementQuantity}><i className="fa fa-minus" aria-hidden="true"></i></span>
                <span id="quantity_value">{quantity}</span>
                <span className="plus" onClick={incrementQuantity}><i className="fa fa-plus" aria-hidden="true"></i></span>
            </div>
            <div className="red_button add_to_cart_button" onClick={addToCart}><a href="#">add to cart</a></div>
            <div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Tabs --> */}

            <div className="tabs_section_container">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabs_container">
                                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                                    <li className="tab active" data-active-tab="tab_1"><span>Description</span></li>
                                    <li className="tab" data-active-tab="tab_2"><span>Additional Information</span></li>
                                    <li className="tab" data-active-tab="tab_3"><span>Reviews (2)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            {/* <!-- Tab Description --> */}

                            <div id="tab_1" className="tab_container active">
                                <div className="row">
                                    <div className="col-lg-5 desc_col">
                                        <div className="tab_title">
                                            <h4>Description</h4>
                                        </div>
                                        <div className="tab_text_block">
                                            <h2>Pocket cotton sweatshirt</h2>
                                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                        </div>
                                        <div className="tab_image">
                                            <img src="images/desc_1.jpg" alt="" />
                                        </div>
                                        <div className="tab_text_block">
                                            <h2>Pocket cotton sweatshirt</h2>
                                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-2 desc_col">
                                        <div className="tab_image">
                                            <img src="images/desc_2.jpg" alt="" />
                                        </div>
                                        <div className="tab_text_block">
                                            <h2>Pocket cotton sweatshirt</h2>
                                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                        </div>
                                        <div className="tab_image desc_last">
                                            <img src="images/desc_3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Tab Additional Info --> */}

                            <div id="tab_2" className="tab_container">
                                <div className="row">
                                    <div className="col additional_info_col">
                                        <div className="tab_title additional_info_title">
                                            <h4>Additional Information</h4>
                                        </div>
                                        <p>COLOR:<span>Gold, Red</span></p>
                                        <p>SIZE:<span>L,M,XL</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Tab Reviews --> */}

                            <div id="tab_3" className="tab_container">
                                <div className="row">

                                    {/* <!-- User Reviews --> */}

                                    <div className="col-lg-6 reviews_col">
                                        <div className="tab_title reviews_title">
                                            <h4>Reviews (2)</h4>
                                        </div>

                                        {/* <!-- User Review --> */}

                                        <div className="user_review_container d-flex flex-column flex-sm-row">
                                            <div className="user">
                                                <div className="user_pic"></div>
                                                <div className="user_rating">
                                                    <ul className="star_rating">
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div className="review_date">27 Aug 2016</div>
                                                <div className="user_name">Brandon William</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>

                                        {/* <!-- User Review --> */}

                                        <div className="user_review_container d-flex flex-column flex-sm-row">
                                            <div className="user">
                                                <div className="user_pic"></div>
                                                <div className="user_rating">
                                                    <ul className="star_rating">
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div className="review_date">27 Aug 2016</div>
                                                <div className="user_name">Brandon William</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Add Review --> */}

                                    <div className="col-lg-6 add_review_col">

                                        <div className="add_review">
                                            <form id="review_form" action="post">
                                                <div>
                                                    <h1>Add Review</h1>
                                                    <input id="review_name" className="form_input input_name" type="text" name="name" placeholder="Name*" required="required" data-error="Name is required." />
                                                    <input id="review_email" className="form_input input_email" type="email" name="email" placeholder="Email*" required="required" data-error="Valid email is required." />
                                                </div>
                                                <div>
                                                    <h1>Your Rating:</h1>
                                                    <ul className="user_star_rating">
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                    </ul>
                                                    <textarea id="review_message" className="input_review" name="message" placeholder="Your Review" rows="4" required data-error="Please, leave us a review."></textarea>
                                                </div>
                                                <div className="text-left text-sm-right">
                                                    <button id="review_submit" type="submit" className="red_button review_submit_btn trans_300" value="Submit">submit</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Benefit --> */}

            <div className="benefit">
                <div className="container">
                    <div className="row benefit_row">
                        <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
                                <div className="benefit_content">
                                    <h6>free shipping</h6>
                                    <p>Suffered Alteration in Some Form</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
                                <div className="benefit_content">
                                    <h6>cach on delivery</h6>
                                    <p>The Internet Tend To Repeat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
                                <div className="benefit_content">
                                    <h6>45 days return</h6>
                                    <p>Making it Look Like Readable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                                <div className="benefit_content">
                                    <h6>opening all week</h6>
                                    <p>8AM - 09PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Newsletter --> */}

            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                                <h4>Newsletter</h4>
                                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="post">
                                <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                                    <input id="newsletter_email" type="email" placeholder="Your email" required="required" data-error="Valid email is required." />
                                    <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Singlepage;
