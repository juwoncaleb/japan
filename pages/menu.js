import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { breakfast, noodles, ramen, dessert, starter, dish } from "../data";
import { motion } from "framer-motion";

export default function Menu() {
  const [image1Left, setImage1Left] = useState(0);
  const [image2Right, setImage2Right] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredInde, setHoveredInde] = useState(null);
  const [hoveredInd, setHoveredInd] = useState(null);
  const [hoveredIn, setHoveredIn] = useState(null);
  const [hoveredI, setHovered] = useState(null);
  const [hovered, setHovere] = useState(null);






  return (
    <div>
      <Header />
      <div className="mt-14 flex justify-center  ">
        <img className="quotes" src="./j2.png" />
        <img className="eyes ml-6 mr-6" src="./j1.png" />
        <img className="quotes" src="./j3.png" />
      </div>
      <p className="text-center breakdas ">BREAKFAST</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {breakfast.map((product, index) => (
          <motion.div
            key={product.id}
            className="food_tray"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(index)}
            onTouchEnd={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img
                className="food_img"
                src={
                  hoveredIndex === index ? product.image[0] : product.image[1]
                }
                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-4 mr-4 mt-6">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>
      <p className="text-center breakdas mb-10">STARTER</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {starter.map((product, index) => (
          <motion.div key={product.id} className="food_tray"
            onMouseEnter={() => setHoveredInde(index)}
          onMouseLeave={() => setHoveredInde(null)}
          onTouchStart={() => setHoveredInde(index)}
          onTouchEnd={() => setHoveredInde(null)}>
            <div className="image-container">
              <img
                className="food_img"
                src={
                    hoveredInde === index ? product.image[0] : product.image[1]
                  }                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-2 mr-2">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>
      <p className="text-center breakdas mb-10">HOT DISH</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {dish.map((product, index) => (
          <motion.div key={product.id} className="food_tray"
          onMouseEnter={() => setHoveredInd(index)}
          onMouseLeave={() => setHoveredInd(null)}
          onTouchStart={() => setHoveredInd(index)}
          onTouchEnd={() => setHoveredInd(null)}
          >
            <div className="image-container">
              <img
                className="food_img"
                src={
                    hoveredInd === index ? product.image[0] : product.image[1]
                  }                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-2 mr-2">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>
      <p className="text-center breakdas mb-10">RAMEN</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {ramen.map((product, index) => (
          <motion.div key={product.id} className="food_tray"
          onMouseEnter={() => setHoveredIn(index)}
          onMouseLeave={() => setHoveredIn(null)}
          onTouchStart={() => setHoveredIn(index)}
          onTouchEnd={() => setHoveredIn(null)}
          >
            <div className="image-container">
              <img
                className="food_img"
                src={
                    hoveredIn === index ? product.image[0] : product.image[1]
                  }                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-2 mr-2">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>

      <p className="text-center breakdas mb-10">DESERT</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {dessert.map((product, index) => (
          <motion.div key={product.id} className="food_tray"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered(index)}
          onTouchEnd={() => setHovered(null)}
          >
            <div className="image-container">
              <img
                className="food_img"
                src={
                    hoveredI === index ? product.image[0] : product.image[1]
                  }                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-2 mr-2">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>
      <p className="text-center breakdas mb-10">NOODLES</p>
      <div className="grid grid-cols-3 gap-12 food mt-10">
        {noodles.map((product, index) => (
          <motion.div key={product.id} className="food_tray"    
          onMouseEnter={() => setHovere(index)}
          onMouseLeave={() => setHovere(null)}
          onTouchStart={() => setHovere(index)}
          onTouchEnd={() => setHovere(null)}>
            <div className="image-container">
              <img
                className="food_img"
                src={
                    hovered === index ? product.image[0] : product.image[1]
                  }                alt={product.name}
              />
            </div>
            <div className="info_Card">
              <p className="product_name ml-2 mr-2">{product.name}</p>

              <p className="product_des"> {product.description}</p>
            </div>
            <center className=" mb-6 mt-12">
              <button className="add_to_cart_button px-6 py-1 flex justify-center  ">
                <p className="mr-6">${product.price}</p>
                <p> Add to cart</p>
              </button>
            </center>
          </motion.div>
        ))}
      </div>

      <div className="container">
        <div className="image-container">
          <motion.img
            className="knuckle mr-10"
            src="./Frame_132.webp"
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
              transition={{ duration: 1 }} // Set the duration to 3 seconds

          />
          <motion.img
            className="knuckle ml-10"
            src="./Frame_133.webp"
            initial={{ x: -200 }}
            transition={{ duration: 1 }} // Set the duration to 3 seconds

            whileInView={{ x: 0 }
        }
          />
        </div>
        <div className="descri">
          <p className="text-container">
            WE DELIVER YOUR ORDER DISCRETLY AND SWIFTLY, LIKE A NINJA OF A
            SECRET VILLAGE. YOU CAN CALL TO COME PICK IT UP AT OUR RESTURANT
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
