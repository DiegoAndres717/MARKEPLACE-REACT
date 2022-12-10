import React from "react";
import { Link } from "react-router-dom";
import "./ListingItem.css";

const ListingItem = () => {
  return (
    <div className="listing-item">
      <img
        className="listing-img"
        src="https://images.pexels.com/photos/7031596/pexels-photo-7031596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="listing"
      />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <Link to={'/detail/1'}><span className="listing-title">Awesome property</span></Link> 
        <hr />
        <span className="listing-time">2 days ago</span>
      </div>
        <p className="listing-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos
          suscipit exercitationem doloribus temporibus ratione illum architecto
          iusto sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate odio, mollitia doloremque nesciunt iure aliquid quibusdam
          tenetur obcaecati corrupti nam fugiat culpa magni iste consequuntur
          officia nisi explicabo quae veritatis.
        </p>
    </div>
  );
};

export default ListingItem;
