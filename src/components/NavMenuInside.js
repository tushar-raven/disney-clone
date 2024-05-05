import React from "react";

const NavMenuInside = () => {
  return (
    <>
      <a href="/home">
        <img src="/images/home-icon.svg" alt="HOME" />
        <span>HOME</span>
      </a>
      <a href="#recommended">
        <img src="/images/series-icon.svg" alt="SERIES" />
        <span>FOR YOU</span>
      </a>
      <a href="#new">
        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
        <span>NEW</span>
      </a>
      <a href="#original">
        <img src="/images/original-icon.svg" alt="ORIGINAL" />
        <span>ORIGINAL</span>
      </a>
      <a href="#trending">
        <img src="/images/movie-icon.svg" alt="MOVIE" />
        <span>TRENDING</span>
      </a>
    </>
  );
};

export default NavMenuInside;
