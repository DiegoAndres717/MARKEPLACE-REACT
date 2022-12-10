import React from 'react';
import ListingItem from '../listing-item/ListingItem';
import './Listing.css'

const Listing = () => {
    return (
        <div className='listing-section'>
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
        </div>
    );
};

export default Listing;