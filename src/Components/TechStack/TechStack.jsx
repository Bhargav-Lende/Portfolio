import React from 'react'
import './TechStack.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const TechStack = () => {
  return (
    <div id='techstack' className='techstack'>
        <div className="techstack-title">
            <h1>TechStack</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="techstack-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="techstack-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default TechStack
