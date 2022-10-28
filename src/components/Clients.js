import React from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
export default function Clients(props) {
    let image1 = props.client1;
    let image2 = props.client2;
    let image3 = props.client3;
    const ItemArray = [{quotes:'1 The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela.', img1:image1, img2:image2, img3:image3},
        {quotes:'2 Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking. -Steve Jobs.', img1:image1, img2:image2, img3:image3},
        {quotes:' 3 If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough. -Oprah Winfrey.', img1:image1, img2:image2, img3:image3}];

    const consoleItem = ItemArray.map((items, index)=>{
      return  <div className="item" key={index}>
            <h6 className='text-secondary mb-4 px-3'>"{items.quotes}"</h6>
            <div className="d-flex justify-content-around align-items-center">
                <img className='brightfilterp5' src={items.img1} style={{width:'70px'}} alt=""/>
                <img src={items.img2} style={{width:'100px'}} alt=""/>
                <img className='brightfilterp5' src={items.img3} style={{width:'70px'}} alt=""/>
            </div>
        </div>
    });
return (
    <>
        <div className="container rubicFont mt-4 mt-md-2">
            <div className="row justify-content-center align-items-center themeGrayBg">
                <div className="col-md-8">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 pt-4">
                            <OwlCarousel items='1' autoPlay={true} className='owl-theme my-5'  dots={false} loop={true} >
                                {consoleItem}
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
)
}