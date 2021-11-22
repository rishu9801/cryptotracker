import React, { useState, useEffect } from "react";
import "./List.scss";
import axios from "axios";
import { CoinList } from "../config";

const List = ({search}) => {
  const [coinsList, setCoinsList] = useState([]);

  const getData = async () => {
    await axios.get(CoinList("usd")).then((res) => {
      setCoinsList(res.data);
      console.log(coinsList);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    return coinsList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.id.toLowerCase().includes(search)
    );
  };

  return (
    <div className="listContainer">
      <table>
        <tr style={{ backgroundColor: "gold", borderRadius: "8px" }}>
          <th>Name</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
        {handleSearch().map((coin) => {
          return (
            <tr key={coin.symbol} style={{ borderBottom: "2px solid grey" }}>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "2rem",
                }}
              >
                <span style={{ margin: "10px" }}>
                  <img src={coin.image} alt={coin.name}/>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span>{coin.symbol.toUpperCase()}</span>
                  <span>{coin.name}</span>
                </span>
              </td>
              <td>
                $
                {coin.current_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td
                className={
                  coin.price_change_percentage_24h > 0 ? "profit" : "loss"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>
                $
                {coin.market_cap
                  .toString()
                  .slice(0, -6)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                M
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;
