import React from "react";

const NavMenuInside = () => {
  return (
    <>
      <a href="/home">
        <img src="/images/home-icon.svg" alt="HOME" />
        <span>HOME</span>
      </a>
      <a href="/search">
        <img src="/images/search-icon.svg" alt="SEARCH" />
        <span>SEARCH</span>
      </a>
      <a href="/watchlist">
        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
        <span>WATCHLIST</span>
      </a>
      <a href="/original">
        <img src="/images/original-icon.svg" alt="ORIGINAL" />
        <span>ORIGINAL</span>
      </a>
      <a href="/movie">
        <img src="/images/movie-icon.svg" alt="MOVIE" />
        <span>MOVIE</span>
      </a>
      <a href="/series">
        <img src="/images/series-icon.svg" alt="SERIES" />
        <span>SERIES</span>
      </a>
    </>
  );
};

export default NavMenuInside;
