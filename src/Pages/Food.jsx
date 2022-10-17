import {store} from './Data'
import React, { useContext } from 'react'

const Food = () => {
  const [details] = useContext(store);
  return (
    <div>
      {details.map((item)=>
       <h1 className='name'>{item.name21}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image21}</h1>)}
       {details.map((item)=>
       <p>{item.info21}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name22}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image22}</h1>)}
       {details.map((item)=>
       <p>{item.info22}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name23}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image23}</h1>)}
       {details.map((item)=>
       <p>{item.info23}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name24}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image24}</h1>)}
       {details.map((item)=>
       <p>{item.info24}</p>)}
<hr />
{details.map((item)=>
       <h1 className='name'>{item.name25}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image25}</h1>)}
       {details.map((item)=>
       <p>{item.info25}</p>)}

    </div>
  )
}

export default Food