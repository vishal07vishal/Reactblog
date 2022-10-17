import {store} from './Data'
import React, { useContext } from 'react'

const Fitness = () => {
  const [details] = useContext(store);
  return (
    <div>
       {details.map((item)=>
       <h1 className='name'>{item.name16}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image16}</h1>)}
       {details.map((item)=>
       <p>{item.info16}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name17}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image17}</h1>)}
       {details.map((item)=>
       <p>{item.info17}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name18}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image18}</h1>)}
       {details.map((item)=>
       <p>{item.info18}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name19}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image19}</h1>)}
       {details.map((item)=>
       <p>{item.info19}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name20}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image20}</h1>)}
       {details.map((item)=>
       <p>{item.info20}</p>)}
    </div>
  )
}

export default Fitness;