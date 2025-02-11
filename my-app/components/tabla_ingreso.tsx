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
        {data.map((ingresos:tipos) => (
          <TableRow key={ingresos.id}>
            <TableCell>{ingresos.id}</TableCell>
            <TableCell>{ingresos.tipo}</TableCell>
            <TableCell>{ingresos.descripcion}</TableCell>
            <TableCell>{ingresos.socio}</TableCell>
            <TableCell>{ingresos.monto}</TableCell>
            <TableCell>{ingresos.fecha}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

