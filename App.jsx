import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
const [Userdata, setUserdata] = useState([])
const [newindex, setnewindex] = useState(1)

  const run= async()=>{
  let response= await fetch(`https://picsum.photos/v2/list?page=${newindex}&limit=15`)
  let data= await response.json()
  setUserdata(data)
  console.log(data)

}

useEffect(function(){
  run()

},[newindex])
  return (
    <div className=''>
      <div className='flex flex-wrap gap-7 px-13 py-5'> 
     
    

        {Userdata.map((elem ,idx)=>{
      return  <div> 
        <img className='h-40 w-52 object-cover  rounded' src={elem.download_url} alt="" />
        <h3 className='font-semibold text-xl'> {elem.author}</h3>
        
        </div>
    
    })}
   
    
    </div>
    <div className='flex justify-center items-center gap-2'>
      
      <button className='bg-yellow-500 text-white py-2 px-3 rounded text-2xl'
     onClick={()=>{
     if(newindex>1){
       setnewindex(newindex-1)
     }
     }} > prev</button>
     <h1>{newindex}</h1>
      <button className='bg-yellow-500 text-white py-2 px-3 rounded text-2xl' onClick={()=>{
        setnewindex(newindex+1)
}}> next</button>
    </div>

      
    </div>

  )
}
export default App
