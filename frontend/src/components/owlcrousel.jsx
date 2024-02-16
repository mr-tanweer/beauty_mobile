import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        
        <Slider {...settings}>
            <div className="cro">
                <div className="product-item">
                    <div className="product discount">
                        <div className="product_image">
                            <img src="images/product_1.png" alt="" />
                        </div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                        <div className="product_info">
                            <h6 className="product_name"><Link to="/singlepage">Fujifilm X100T 16 MP Digital Camera (Silver)</Link></h6>
                            <div className="product_price">$520.00<span>$590.00</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cro">
                <div className="product-item women">
                    <div className="product">
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
                </div>
            </div>
            <div className="cro">
            <div className="product-item women">
                    <div className="product">
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
                </div>
            </div>
            <div className="cro">
            <div className="product-item women">
                    <div className="product">
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
                </div>
            </div>
            <div className="cro">
            <div className="product-item women">
                    <div className="product">
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
                </div>
            </div>
            <div className="cro">
            <div className="product-item women">
                    <div className="product">
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
                </div>
            </div>
        </Slider>
    );
}