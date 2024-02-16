import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div>
        <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
					<div className="container fill_height">
						<div className="row align-items-center fill_height">
							<div className="col">
								<div className="main_slider_content">
									<h6>Spring / Summer Collection 2017</h6>
									<h1>Get up to 30% Off New Arrivals</h1>
									<div className="red_button shop_now_button"><a href="#">shop now</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
