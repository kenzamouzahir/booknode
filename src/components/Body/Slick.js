import React, { useState } from 'react';
import { renderMatches } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Slick() {
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className='mb-8 shadow-boxshadow shadow-md rounded-md '>
            <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
              <h3>Opération "Lire avant tout le monde"</h3>

            </div>

            <div className='p-4 '>{/*Body carousel */}
              <div>{/*affichage des livres*/}
                <div className='flex overflow-x-auto'>{/*regroupement des livres*/}
                <Slider {... settings}>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md ' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md ' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                  </div>
                  <div className='p-2'>
                    <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                  </div>
                  </Slider>
                </div>

               
              </div>
            </div>
          </div>
  )
}

export default Slick