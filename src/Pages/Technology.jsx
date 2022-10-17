import {store} from './Data'
import React, { useContext } from 'react'

const Technology = () => {
  const [details] = useContext(store);
  return (
    <div>
      {details.map((item)=>
       <h1 className='name'>{item.name6}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image6}</h1>)}
       {details.map((item)=>
       <p>{item.info6}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name7}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image7}</h1>)}
       {details.map((item)=>
       <p>{item.info7}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name8}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image8}</h1>)}
       {details.map((item)=>
       <p>{item.info8}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name9}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image9}</h1>)}
       {details.map((item)=>
       <p>{item.info9}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name10}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image10}</h1>)}
       {details.map((item)=>
       <p>{item.info10}</p>)}


    </div>
  )
}

export default Technology