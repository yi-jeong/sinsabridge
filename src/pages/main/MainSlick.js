import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/slide.css';

const SimpleSlider = ()=>{
    const [slideList,setSlideList]=useState([]);

        useEffect(()=>{
            fetch('http://localhost:3000/data/slide.json',{
                method: 'GET'
            })
             .then(res => res.json())
             .then(userData => {
                 setSlideList(userData);
             });
        },[])

    const StyledSlider = styled(Slider)`
        .slick-dots {
            text-align:left;
            left:10%;
            bottom: 10%;
            display:inline;
            width:auto;
        }
        .slick-dots li.slick-active button:before{
            color:#fff;
        }
        .slick-dots li button:before{
            color:#fff;
        }
        .slick-next{
            right:0;
        }
  
        /*화살표 크기*/
        .slick-prev:before,
        .slick-next:before {
          display:none;
        }

      `;
  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
    	<StyledSlider {...settings}>
            {slideList.map( n=> {
                return (
                    <div className="slickBannerImgWrap" key={n.id}>
                        <div className="slickBannerImg" style={{ background: 'url(' + n.url + ')' }} ></div>
                        <div className="slickBannerContent">
                            <div className="container">
                                <p className="tit">{ n.tit }</p>
                                <p className="txt">{ n.txt }</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </StyledSlider>  
    );
}


export default SimpleSlider;