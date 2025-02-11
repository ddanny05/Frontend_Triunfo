import { Tabla_ingreso } from '@/components/tabla_ingreso'
import React from 'react'

async function datos () {
  const respuesta = await fetch('http://127.0.0.1:8000/api/egresos/')
  const datos = await respuesta.json()
  return datos
}

export default async function page () {
  const egresos = await datos()
  return (
    <div>
      <Tabla_ingreso data={egresos} />
    </div>
  )
}
