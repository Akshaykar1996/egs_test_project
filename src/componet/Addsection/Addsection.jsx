import React from 'react'
import './Addsection.css';

const Addsection = () => {
  return (
    <div className='container'>
      <div className='box1'>
        <div>
            <h2 className='about'>About Seychelles</h2>
            <p className='There'>There are plenty of <span className='places'>tourist places in Seychelles</span> as it is an archipelago of islands containing around 115 granite and coral islands, located... <span className='more'> Read More</span> </p>
        </div>
      </div>
      
      <div className='box3'>
        <div className='offer'>
            <h2 className='Bigger'>Bigger Group? Get special offers up to</h2>
            <h2 className='Off'>50% Off!</h2>
            <p>We create unforgettable adventures, customised for your group.</p>
        </div>
        <div className='box4'>
          <p className='Get'>Get A Callback</p>
        </div>
      </div>
    </div>
  )
}

export default Addsection