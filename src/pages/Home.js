import React, { useState } from "react";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search,setSearch] = useState('');
  return (
    <>
      <Navbar setSearch={setSearch}></Navbar>
      <Banner></Banner>
      <List search={search}></List>
      {/* <CoinsTable></CoinsTable> */}
    </>
  );
};

export default Home;
