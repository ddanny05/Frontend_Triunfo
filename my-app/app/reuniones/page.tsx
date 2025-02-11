import { Tabla_asistencias } from '@/components/tabla_asistencia'
import { Tabla_reuniones } from '@/components/tabla_reuniones'
import { Tabla_socios } from '@/components/tabla_socios'
import React from 'react'

async function datos () {
  const respuesta = await fetch('http://127.0.0.1:8000/api/reuniones/')
  const datos = await respuesta.json()
  return datos
}

export default async function page () {
  const reuniones = await datos()
  return (
    <div>
      <Tabla_reuniones data={reuniones} />
    </div>
  )
}

