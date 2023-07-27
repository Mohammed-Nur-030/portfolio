import React from 'react'
import {urlFor} from '../../client'

const MapImg = ({map}) => {
  // style={{
  //   backgroundImage: `url(${urlFor(item.imageUrl).url()})`,
  // // }}
  console.log("Printing map  data from MapImg")
  console.log(map);
  console.log("url map",`url(${urlFor(map[0].imageUrl).url()})`)
  // `url(${urlFor(map[0].imageUrl).url()})`
  return (
    <div>
       <a href='https://www.google.com/maps/place/HM+Green+Oak+Apartment,+Anjenappa+Block,+J.C.Nagar,+Bengaluru,+Karnataka+560045/@13.0061276,77.6003522,3a,90y,152.89h,81.13t/data=!3m6!1e1!3m4!1sz3llvacslizgBNZdasGqGg!2e0!7i13312!8i6656!4m16!1m8!3m7!1s0x3bae16515c4376dd:0x6014fa2eb0148d63!2sHM+Green+Oak+Apartment,+Anjenappa+Block,+J.C.Nagar,+Bengaluru,+Karnataka+560045!3b1!8m2!3d13.006509!4d77.6009602!1s0x3bae16515c4376dd:0x6014fa2eb0148d63!8m2!3d13.006509!4d77.6009602!10e5!16s%2Fg%2F12hmj4_qn?entry=ttu' target='_blank'>
       <div
          className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
          style={{ backgroundImage: `url(${urlFor(map[0].imageUrl).url()})` }}
        ></div>
       </a>
    </div>
  )
}

export default MapImg
