import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

 interface tipos {
  codigo: number
  fecha: string
  lugar: string
  Descripcion: string
  tipo: string
 }
export function Tabla_reuniones({data}: {data:tipos[]}) {
    
  return (
    <>
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
       
           <TableHead>codigo</TableHead>
          <TableHead>fecha</TableHead>
          <TableHead>lugar</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>tipo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((reuniones:tipos) => (
          <TableRow key={reuniones.codigo}>
            <TableCell>{reuniones.codigo}</TableCell>
            <TableCell>{reuniones.fecha}</TableCell>
            <TableCell>{reuniones.lugar}</TableCell>
            <TableCell>{reuniones.Descripcion}</TableCell>
            <TableCell>{reuniones.tipo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

