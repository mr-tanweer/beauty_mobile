
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SimpleSlider from "./owlcrousel";
import AutoPlay from "./homemainslid";
import { Link } from "react-router-dom";




function Home() {
	return (
		<>
			<div className="super_container">


				<AutoPlay/>

				{/* <!-- Banner --> */}


				<div className="banner">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_1.jpg)" }}>
									<div className="banner_category">
										<a href="categories.html">women's</a>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_2.jpg)" }}>
									<div className="banner_category">
										<a href="categories.html">accessories's</a>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_3.jpg)" }}>
									<div className="banner_category">
										<a href="categories.html">men's</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- New Arrivals --> */}

				<div className="new_arrivals">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<div className="section_title new_arrivals_title">
									<h2>New Arrivals</h2>
								</div>
							</div>
						</div>
						<Tabs>
							<div className="row align-items-center">
								<div className="col text-center">
									<div className="new_arrivals_sorting">
										<TabList className="arrivals_grid_sorting clearfix button-group filters-button-group">
											<Tab className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center " data-filter="*">All Products</Tab>
											<Tab className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">Women's</Tab>
											<Tab className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">Accessories</Tab>
											<Tab className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">Men's</Tab>
										</TabList>
									</div>
								</div>
							</div>



							<TabPanel>
								{/* All Products */}
								<div className="row">
									<div className="col">
										<div className="product-grid" >

											{/* <!-- Product 1 --> */}

											<div className="product-item men">
												<div className="product discount product_filter">
													<div className="product_image">
														<img src="/images/product_1.png" alt="product-1" />
													</div>
													<div className="favorite favorite_left"></div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
														<div className="product_price">$520.00<span>$590.00</span></div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 2 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_2.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
														<div className="product_price">$610.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 3 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_3.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Blue Yeti USB Microphone Blackout Edition</Link></h6>
														<div className="product_price">$120.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 4 --> */}

											<div className="product-item accessories">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_4.png" alt="" />
													</div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
													<div className="favorite favorite_left"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
														<div className="product_price">$410.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 5 --> */}

											<div className="product-item women men">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_5.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Pryma Headphones, Rose Gold & Grey</Link></h6>
														<div className="product_price">$180.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 6 --> */}

											<div className="product-item accessories">
												<div className="product discount product_filter">
													<div className="product_image">
														<img src="images/product_6.png" alt="" />
													</div>
													<div className="favorite favorite_left"></div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
													<div className="product_info">
														<h6 className="product_name"><a href="#single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
														<div className="product_price">$520.00<span>$590.00</span></div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 7 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_7.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
														<div className="product_price">$610.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 8 --> */}

											<div className="product-item accessories">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_8.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Blue Yeti USB Microphone Blackout Edition</Link></h6>
														<div className="product_price">$120.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 9 --> */}

											<div className="product-item men">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_9.png" alt="" />
													</div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
													<div className="favorite favorite_left"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
														<div className="product_price">$410.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 10 --> */}

											<div className="product-item men">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_10.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Pryma Headphones, Rose Gold & Grey</Link></h6>
														<div className="product_price">$180.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								{/* Women's Products */}
								<div className="row">
									<div className="col">
										<div className="product-grid" >


											{/* <!-- Product 2 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_2.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
														<div className="product_price">$610.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 3 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_3.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Blue Yeti USB Microphone Blackout Edition</Link></h6>
														<div className="product_price">$120.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>



											{/* <!-- Product 7 --> */}

											<div className="product-item women">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_7.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Samsung CF591 Series Curved 27-Inch FHD Monitor</Link></h6>
														<div className="product_price">$610.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>




										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								{/* Men's Products */}
								<div className="row">
									<div className="col">
										<div className="product-grid" >

											{/* <!-- Product 1 --> */}

											<div className="product-item men">
												<div className="product discount product_filter">
													<div className="product_image">
														<img src="/images/product_1.png" alt="product-1" />
													</div>
													<div className="favorite favorite_left"></div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
														<div className="product_price">$520.00<span>$590.00</span></div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>


											{/* <!-- Product 9 --> */}

											<div className="product-item men">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_9.png" alt="" />
													</div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
													<div className="favorite favorite_left"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
														<div className="product_price">$410.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>

											{/* <!-- Product 10 --> */}

											<div className="product-item men">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_10.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Pryma Headphones, Rose Gold & Grey</Link></h6>
														<div className="product_price">$180.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								{/* Accessories Products */}
								<div className="row">
									<div className="col">
										<div className="product-grid" >




											{/* <!-- Product 4 --> */}

											<div className="product-item accessories">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_4.png" alt="" />
													</div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
													<div className="favorite favorite_left"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">DYMO LabelWriter 450 Turbo Thermal Label Printer</Link></h6>
														<div className="product_price">$410.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>


											{/* <!-- Product 6 --> */}

											<div className="product-item accessories">
												<div className="product discount product_filter">
													<div className="product_image">
														<img src="images/product_6.png" alt="" />
													</div>
													<div className="favorite favorite_left"></div>
													<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
													<div className="product_info">
														<h6 className="product_name"><a href="#single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
														<div className="product_price">$520.00<span>$590.00</span></div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>


											{/* <!-- Product 8 --> */}

											<div className="product-item accessories">
												<div className="product product_filter">
													<div className="product_image">
														<img src="images/product_8.png" alt="" />
													</div>
													<div className="favorite"></div>
													<div className="product_info">
														<h6 className="product_name"><Link to="/singlepage">Blue Yeti USB Microphone Blackout Edition</Link></h6>
														<div className="product_price">$120.00</div>
													</div>
												</div>
												<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
											</div>



										</div>
									</div>
								</div>
							</TabPanel>
						</Tabs>

					</div>
				</div>

				{/* <!-- Deal of the week --> */}

				<div className="deal_ofthe_week">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="deal_ofthe_week_img">
									<img src="images/deal_ofthe_week.png" alt="" />
								</div>
							</div>
							<div className="col-lg-6 text-right deal_ofthe_week_col">
								<div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
									<div className="section_title">
										<h2>Deal Of The Week</h2>
									</div>
									<ul className="timer">
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="day" className="timer_num">03</div>
											<div className="timer_unit">Day</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="hour" className="timer_num">15</div>
											<div className="timer_unit">Hours</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="minute" className="timer_num">45</div>
											<div className="timer_unit">Mins</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="second" className="timer_num">23</div>
											<div className="timer_unit">Sec</div>
										</li>
									</ul>
									<div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Best Sellers --> */}

				<div className="best_sellers">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<div className="section_title new_arrivals_title">
									<h2>Best Sellers</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="product_slider_container">
								
									<SimpleSlider />
									
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





			</div>

		</>
	);
}

export default Home;