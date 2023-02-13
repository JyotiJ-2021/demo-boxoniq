import React, { useState } from "react";
import Head from "next/head";

function Header(props) {
  const [searchList, setSearchList] = useState();
  return (
    <div>
      <Head>
        <title>{props.name}</title>
        <meta name="description" content={props.name} />
        <meta name="keywords" content={props.name} />
      </Head>
      <div className="main">
        <img src="https://boxoniq.com/images/logoboxs.png" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="search for products"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />

        <a href={`/search`}>
          <img src="https://i.ibb.co/7KjcbBR/icons8-search-24-1.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
