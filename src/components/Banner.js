import React from "react";
import "./Banner.scss";
import axios from "axios";
import { TrendingCoins } from "../config";
import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

const Banner = () => {
  const [coinData, setCoinData] = useState([]);

  const getData = async () => {
    await axios.get(TrendingCoins("usd")).then((res) => {
      setCoinData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const items = coinData.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <div className="carouselItem">
        <img
          src={coin?.image}
          alt={coin.name}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span>
          $ {coin.current_price}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    }
  };

  return (
    <div className="container">
      <h1>Crypto Tracker</h1>
      <div className="carouselContainer">
        <div className="carousel">
          <AliceCarousel
            infinite
            autoPlayInterval={800}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
