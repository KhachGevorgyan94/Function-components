import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";

export const SliderCustom = ({customSettings}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true
    };
    let settings_1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slider_1 = useRef(null)
    const slider_2 = useRef(null)

    if (customSettings) {
        settings = {...settings, ...customSettings}
    }

    const infoList = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci animi consequuntur delectus dolorem earum magni nesciunt numquam repudiandae.'
        }
    ]
    return <div>
        <Slider {...settings_1} asNavFor={slider_2.current} ref={slider_1}>
            {infoList.map((item, index) => {
                return <div className='current-info-box'>
                    {item.title}

                </div>
            })}
        </Slider>

        <Slider {...settings} asNavFor={slider_1.current} ref={slider_2}>
            {infoList.map((item, index) => {
                return <div className='current-info-box'>
                    {item.title}
                </div>
            })}
        </Slider>
    </div>
}