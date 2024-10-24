import Image from "next/image"

const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
   
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    // More items...
  ]
    
  export default function Example() {
    const correct = true
    return (
            
           
              <ul role="list" className="  m-5  md:m-20 bg-gray-50  sm:p-8 rounded-xl">
        {items.map((item) => (
          <li key={item.id} className="py-6 space-y-5 border border-green-400 m-1 sm:m-3  p-3 rounded-2xl ">
             <h1 className=" sm:text-2xl">Question Number {item.id}</h1>
             <div className="flex gap-3 items-center">
             <h1 className=" text-sm sm:text-xl capitalize font-semibold  text-green-500">correct answer :</h1>
             <h1 className="text-lg">correct answer  hti s tis the correct answer </h1>
             </div>
            
            <div  className={ correct ? `flex gap-2  items-center border bg-green-100  border-green-300 p-3   rounded-2xl `:'flex gap-2  items-center border bg-red-50  border-red-300 p-3   rounded-2xl'}>

            <h1 className=" text-sm md:text-xl capitalize font-semibold  text-blue-500 ">participant answer:</h1>
            <h1 className="  md:text-lg ">thisb is the answer gibhvdjhafb nnuf d yjfn nafn</h1>
            </div>
            
            
         
            
          </li>
          
        ))}
      </ul>
            
      
    
    )
  }
  