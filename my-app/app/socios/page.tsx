import { Tabla_socios } from '@/components/tabla_socios'
import React from 'react'
interface tipo {
    data: string;  // JSON data string
  
}
async function page(){

    const respuesta = await fetch("http://127.0.0.1:8000/api/socios/")
    const personas = await respuesta.json()
  return (
    <div>
        
      <Tabla_socios data={personas} />
    </div>
  )
}

export default page;



