import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CoinList } from "../config";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList("usd"));
    setCoins(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = () => {
    return coins.filter((coin) => {
      coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search);
    });
  };

  return (
    <div>
      <TextField
        label="Search Fo a Crypto Currency..."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>

      <TableContainer>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => {
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                    }}
                    key={head}
                  >
                    {head}
                  </TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch().map((row) => {
                const profit = row.price;

                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" styles={{
                        display:'flex',
                        gap:15
                    }}
                    >
                        <img src={row.image}></img>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default CoinsTable;
