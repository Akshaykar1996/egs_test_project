import React from 'react'
import './Herosection.css'
import star from "../image/logos/star.svg"
import { StaffCard } from './cards/StaffCard'

const Herosection = () => {
  let imagelink = [
    "https://media1.thrillophilia.com/filestore/xpsv1ye7vyjwi8pvb9hzpe5nj99s_584580635-popular-seychelles-honeymoon-tour-package-copy.png?w=360&dpr=1.3",
    "https://media1.thrillophilia.com/filestore/vjwn8l6l3jfqx73nnju4lh6uk0ys_584597153-classic-tour-of-seychelles-with-la-digue-island-copy.png?w=360&dpr=1.3",
    "https://media1.thrillophilia.com/filestore/xpsv1ye7vyjwi8pvb9hzpe5nj99s_584580635-popular-seychelles-honeymoon-tour-package-copy.png?w=360&dpr=1.3",
    
  ]
  return (
    <div className='container'>
      <div>
      <div className='staff'>Staff <span className='Handpicked'>Handpicked</span>
        <img src={star} alt=''/>
        </div>
        <div className='expertise'>curated with expertise</div>
      </div>
      <div className='FullImageCard'>
      {
        imagelink.map((item)=><StaffCard src={item}/> )
      }
      </div>
     
        
    </div>
  )
}

export default Herosection