import React from 'react'
import Footer from './Footer';
import { WishLists} from './Items';

function WishList({products}) {
  return (
    <div className='border container-fluid'>
      <WishLists />
      <br/>
      <Footer />
    </div>
  );
}

export default WishList








 