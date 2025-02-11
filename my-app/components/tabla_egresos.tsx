import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface tipos {
  id: number
  tipo: string
  descripcion: string
  monto: number
  fecha: string
  socio: string
 
}
export function Tabla_ingreso({data}: {data:tipos[]}) {
    
  return (
    <>
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
   
          <TableHead>id</TableHead>
          <TableHead>tipo</TableHead>
          <TableHead>descripcion</TableHead>
          <TableHead>monto</TableHead>
          <TableHead>fecha</TableHead>
          <TableHead>socio</TableHead>
        
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((egresos:tipos) => (
          <TableRow key={egresos.id}>
            <TableCell>{egresos.id}</TableCell>
            <TableCell>{egresos.tipo}</TableCell>
            <TableCell>{egresos.descripcion}</TableCell>
            <TableCell>{egresos.socio}</TableCell>
            <TableCell>{egresos.monto}</TableCell>
            <TableCell>{egresos.fecha}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

