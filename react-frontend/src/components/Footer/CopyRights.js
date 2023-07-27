import React from 'react'
import { NavLink } from 'react-router-dom'

const CopyRights = ({info,obj}) => {
  return (
    <div>
        <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2023. All right reserved, 𝕄𝕐_ℙ𝕆ℝ𝕋𝔽𝕆𝕃𝕀𝕆.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          
            <NavLink to={obj.github} target='_blank' className="pl-4">
              <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
            </NavLink>
            <NavLink to={obj.linkedin} target='_blank' className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </NavLink>
            <NavLink to={obj.instagram} target='_blank' className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRights
