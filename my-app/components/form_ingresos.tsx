import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function ingresosForm() {
  return (
    <form className="space-y-4">
      
      <div>
        <Label htmlFor="tipo">tipo</Label>
        <Input id="tipo" type = 'text' placeholder="Ingrese los tipo" />
      </div>
      <div>
        <Label htmlFor="descripcion">descripcion</Label>
        <Input id="descripcion"type = 'text' placeholder="Ingrese los descripcion" />
      </div>
      <div>
        <Label htmlFor="monto">monto</Label>
        <Input id="monto" type = 'number' placeholder="Ingrese el monto" />
      </div>
      <div>
        <Label htmlFor="fecha">fecha</Label>
        <Input id="fecha" type = 'date' placeholder="Ingrese el número de fecha" />
      </div>
      <div>
        <Label htmlFor="socio">socio Electrónico</Label>
        <Input id="socio" type = 'text' placeholder="Ingrese el socio " />
      </div>
      
      <Button type="submit">Guardar</Button>
    </form>
  )
}

