import { store } from './Data'
import React, { useContext } from 'react'

const Bollywood = () => {
       const [details] = useContext(store);
       return (
              <div>
                     {details.map((item) =>
                            <h1 className='name'>{item.name1}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image1}</h1>)}
                     {details.map((item) =>
                            <p>{item.info1}</p>)}
                     <hr />
                     {details.map((item) =>
                            <h1 className='name'>{item.name2}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image2}</h1>)}
                     {details.map((item) =>
                            <p>{item.info2}</p>)}
                     <hr />
                     {details.map((item) =>
                            <h1 className='name'>{item.name3}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image3}</h1>)}
                     {details.map((item) =>
                            <p>{item.info3}</p>)}
                     <hr />
                     {details.map((item) =>
                            <h1 className='name'>{item.name4}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image4}</h1>)}
                     {details.map((item) =>
                            <p>{item.info4}</p>)}
                     <hr />
                     {details.map((item) =>
                            <h1 className='name'>{item.name5}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image5}</h1>)}
                     {details.map((item) =>
                            <p>{item.info5}</p>)}


              </div>
       )
}

export default Bollywood