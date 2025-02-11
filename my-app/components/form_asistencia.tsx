import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function NuevoSocioForm() {
  return (
    <form className="space-y-4">
      
      <div>
        <Label htmlFor="estado">estado</Label>
        <Input id="estado" type='text' placeholder="Ingrese el estado" />
      </div>
      <div>
        <Label htmlFor="socio">socio</Label>
        <Input id="socio" type='text'   placeholder="Ingrese los socio" />
      </div>
      <div>
        <Label htmlFor="reunion">Dirección</Label>
        <Input id="reunion" type='text' placeholder="Ingrese codigo de la reunion " />
      </div>
      
      <Button type="submit">Guardar</Button>
    </form>
  )
}

