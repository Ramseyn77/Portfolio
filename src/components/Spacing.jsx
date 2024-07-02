import React from 'react'

const Spacing = ({size = 'md'}) => {
  return (
    <div className={`
    ${size === 'sm' && "h-8 lg-h-16"}
    ${size === 'md' && "h-16 lg-h-24"}
    ${size === 'lg' && "h-24 lg-h-32"}
    `}></div>
  )
}

export default Spacing
