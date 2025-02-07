import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface tipos {
  cedula: string
  props.personas: string
  nombres: string
  apellidos: string
  direccion: string
  celular: string
  correo_electronico: string
  fecha_nacimiento: string
}

export function Tabla_socios(props:string) {
    
  return (
    <>
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cédula</TableHead>
          <TableHead>Nombres</TableHead>
          <TableHead>Apellidos</TableHead>
          <TableHead>Dirección</TableHead>
          <TableHead>Celular</TableHead>
          <TableHead>Correo Electrónico</TableHead>
          <TableHead>Fecha de Nacimiento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.personas.map((persona:tipos) => (
          <TableRow key={persona.cedula}>
            <TableCell>{persona.cedula}</TableCell>
            <TableCell>{persona.nombres}</TableCell>
            <TableCell>{persona.apellidos}</TableCell>
            <TableCell>{persona.direccion}</TableCell>
            <TableCell>{persona.celular}</TableCell>
            <TableCell>{persona.correo_electronico}</TableCell>
            <TableCell>{persona.fecha_nacimiento}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

