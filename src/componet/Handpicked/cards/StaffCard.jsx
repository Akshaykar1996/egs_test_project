import React from 'react'
import "./StaffCard.css"
import { StaffText } from './StaffText'

export const StaffCard = ({src,layout}) => {
  return (
    <div className='StaffCard'>
        {!layout && <span className='staff_span'>

        <img  className="stafImg" src={src} alt="" />
        </span>}

        {
          layout && <>
            <div className='newImage'>
            <img src={src} alt="" />
          </div>
          <div className='secound_Text'>
          <StaffText 
          opencard = {"openCard"}
          greenstar={true}
          threeDforOpen={"threeDforOpen"}
          callX={"callX"}
          callXrequest={"callXrequest"}
          orangeCall={true}
          />

          </div>
          </>
        
        }

       {!layout && <StaffText/>}
    </div>
  )
}
  