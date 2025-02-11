import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface tipos {
  id: number
  estado: string
 socio: string
  reunion: string
 
}
export function Tabla_asistencias({data}: {data:tipos[]}) {
    
  return (
    <>
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
   
          <TableHead>id</TableHead>
          <TableHead>estado</TableHead>
          <TableHead>socio</TableHead>
          <TableHead>reunion</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((asistencia:tipos) => (
          <TableRow key={asistencia.id}>
            <TableCell>{asistencia.id}</TableCell>
            <TableCell>{asistencia.estado}</TableCell>
            <TableCell>{asistencia.socio}</TableCell>
            <TableCell>{asistencia.reunion}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

