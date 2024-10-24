'use client'


type AdminIdParams = {
    params:{
      adminId:string
    }
  }
const page = ({params}:AdminIdParams) => {
    const {adminId}=params
    console.log('params......................',adminId)
  return (
    <div>
       loading......
    </div>
  )
}

export default page
