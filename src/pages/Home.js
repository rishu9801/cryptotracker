import React, { useState } from "react";
import Banner from "../components/Banner";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search,setSearch] = useState('');
  return (
    <>
      <Navbar setSearch={setSearch}></Navbar>
      <Banner></Banner>
      <List search={search}></List>
    </>
  );
};

export default Home;
