import React from 'react'

export default function Card() {
  return (
    <div>
        
        <div className="card m-3 " style={{"width": "18rem"}}>
  <img src="/images/usa.webp" className="card-img-top" alt="USA flag"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is important</p>
     <div className='conatainer w-100'>
        <select className='m-2 h-100  bg-success text-white'>
          {Array.from(Array(6),(e,i)=>{
            return(
              <option Key={i+1} value={i+1}> {i+1} </option>
            )
          })}
        </select>
        <div className='d-inline fs-5'>
          Total Price
        </div>
     </div>
    
    
  </div>
  </div>

    </div>
  )
}
