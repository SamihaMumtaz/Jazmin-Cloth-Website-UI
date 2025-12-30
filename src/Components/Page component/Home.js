import React from 'react'
import Banner from '../Sub components/Home/Banner'
import Ready from '../Sub components/Home/Ready'
import Week from '../Sub components/Home/Week'
import Video from '../Sub components/Home/Video'
import Cloth from '../Sub components/Home/Cloth'
import Customer from '../Sub components/Home/Customer'
import ClothShop from '../Sub components/Home/ClothShop'

function Home() {
  return (
    <div>
      <Banner/> 
      <Ready />
      <Week />
      <Video />
      <Cloth />
      <Customer />
      <ClothShop />
    </div>
  )
}
export default Home