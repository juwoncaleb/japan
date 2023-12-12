import React from "react";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
export default function LandingPage() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Header />
      <div className="flex hero_land mt-6  justify-around ">
        <img
          className="mon"
          src="https://ik.imagekit.io/ioj0dl8lm/monster.svg?updatedAt=1682811656521"
        />
        <div
          className="hero_text"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="hero_subtext">
            You watched it, now you can taste it
          </p>
          <p className="hero_mainText">BRINGING ANIME</p>
          <p className="hero_mainText_2">FOOD TO LIFE</p>
        </div>

        <img
          className="mon"
          src="https://ik.imagekit.io/ioj0dl8lm/boy.svg?updatedAt=1682811631584"
        />
      </div>
      <div className="grid grid-cols-2 second_page justify-between ">
        <div className="flex second_page_book justify-between ">
          <img className="knife" src="./knife.png" />
          <div className="second_page_text">
            <p className="second_page_book_head">GATHER IN</p>
            <p className="second_page_book_head">GOOD COMPANY</p>
            <div className="second_page_book_sub">
              <p>
                Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br />{" "}
                laboris ex proident nulla ad minim mollit. Id dolor officia
                eiusmod consectetur <br /> fugiat enim veniam incididunt minim
                aute irure dolore sint duis.
              </p>
            </div>
            <button className="second_page_book_btn">BOOK YOURSELF IN</button>
          </div>
        </div>
        <img
          className="hero2_img"
          src="https://ik.imagekit.io/ioj0dl8lm/second_frame.webp?updatedAt=1682811877648"
        />
      </div>
      <div className="flex justify-between menu_item">
        <div className="grid grid-cols-2 gap-6">
          <img className="noodles_black" src="./noodle_black.webp" />
          <img className="noodles_black" src="./ramen.webp" />
        </div>
        <div className="nod_head">
          <div className="ml-4">
            <p className="second_page_book_head">GATHER IN</p>
            <p className="second_page_book_head">GOOD COMPANY</p>
            <div className="menu_text">
              <p>
                Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br />{" "}
                laboris ex proident nulla ad minim mollit. Id dolor officia
                eiusmod consectetur <br /> fugiat enim veniam incididunt minim
                aute irure dolore sint duis.
              </p>
            </div>
            <button className="menu_book_btn">BOOK YOURSELF IN</button>
          </div>
          <div className="grid grid-cols-2 gap-2  ml-6">
            <img className="start_desert" src="./desert.webp" />
            <img className="start_desert" src="./start.webp" />
          </div>
        </div>
      </div>
      <center>
        <div className="grid grid-cols-2 dish">
          <img className="fodd" src="./dishes.webp" />
          <img className="fodd" src="./cat.webp" />
          <img className="fodd" src="./toro.webp" />
          <img className="fodd" src="./noodls.webp" />
        </div>
      </center>
      <div className="zuko flex justify-between">
        <div className="second_page_tex">
          <p className="second_page_book_head">GATHER IN</p>
          <p className="second_page_book_head">GOOD COMPANY</p>
          <div className="second_page_book_sub">
            <p>
              Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br />{" "}
              laboris ex proident nulla ad minim mollit. Id dolor officia
              eiusmod consectetur <br /> fugiat enim veniam incididunt minim
              aute irure dolore sint duis.
            </p>
          </div>
          <button className="second_page_book_btn">BOOK YOURSELF IN</button>
        </div>
        <img className="cook" src="./pan.webp" />
        <img className="chicken" src="./chiken.webp" />
      </div>
      <div>
        <p className="books mt-10">
          WHETHER YOU ARE VACTIONING ALONE , OUT WITH
        </p>
        <p className="books">FRIEND , OR PLANNING A HOLIAY PARTY, WE ARE</p>
        <p className="books">SURE WE CAN ACCOMMODATE YOU</p>
        <div className="bot">
          <button className="second_page_book_btn zip ">
            BOOK YOURSELF IN
          </button>
        </div>
        <div className="test">
          <div className="items">
            <div className="flex justify-center ">
              <img className="frame catty" src="./catty.webp" />
              <img className="frame photo mt-10" src="./photo.png" />
              <img className="frame  na mt-14" src="./na.png" />
              <img className="frame peace mt-10" src="./peace.webp" />
              <img className="frame fox" src="./fox.webp" />
            </div>
          </div>
          <div className="flex swords  justify-center">
            <img className="sword mr-40" src="./sword1.png" />
            <img className="sword ml-40" src="./sword.png" />
          </div>
        </div>
      </div>
      <div className="cha">
        <div className="flex justify-around">
          <img className="small" src="./l1.webp" />
          <img className="small" src="./l2.webp" />
        </div>
        <div className="flex justify-around">
          <img className="big md:mr-14 mr-20" src="./l3.webp" />
          <img className="big md:ml-14 ml-20" src="./l4.webp" />
        </div>
      </div>
      <div></div>
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="./fr1.webp" />
          </div>
          <div>
            <img src="./fr2.webp" />
          </div>
          <div>
            <img src="./fr3.webp" />
          </div>
          <div>
            <img src="./fr4.webp" />
          </div>
          <div>
            <img src="./fr5.webp" />
          </div>
          <div>
            <img src="./fr7.webp" />
          </div>
        </Slider>
      </div>
      <div className="flex justify-around newsletter">
        <img className="fr" src="./fr6.webp" />

        <div className="subs">
          <p className="subscribe">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="subscribe">GET LATEST NEWS AND UPDATES</p>
          <div className="flex inpu_barr">
            <input className="input_bar" />
            <input className="input_bar ml-4" />
            <button className="sub_btn md:ml-4 ml-1">SUBSCRIBE</button>
          </div>
        </div>
        <img className="fr" src="./chan.webp" />
      </div>
      <Footer />
    </div>
  );
}
