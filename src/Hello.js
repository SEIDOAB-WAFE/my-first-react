import React from 'react'
import smallguy from './img1.png';


export function Hello() {
  return (
    <>
      <div>Hello</div>
      <img src={smallguy} alt="small guy" />
      <p>some small text</p>
    </>
  )
}

