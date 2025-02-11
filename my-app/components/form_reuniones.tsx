import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function ReunionesForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="codigo">Codigo</Label>
        <Input id="codigo" type='number' placeholder="Ingrese el codigo" />
      </div>
      <div>
        <Label htmlFor="fecha">fecha</Label>
        <Input id="fecha" type='date' placeholder="Ingrese la fecha" />
      </div>
      <div>
        <Label htmlFor="lugar">lugar</Label>
        <Input id="lugar" type='text' placeholder="Ingrese el lugar" />
      </div>
      <div>
        <Label htmlFor="Descripcion">Descripcion</Label>
        <Input id="Descripcion" type='text' placeholder="Ingrese la Descripcion" />
      </div>
      <div>
        <Label htmlFor="tipo">tipo</Label>
        <Input id="tipo" type= ' text' placeholder="Ingrese el tipo" />
      </div>
      
      <Button type="submit">Guardar</Button>
    </form>
  )
}

