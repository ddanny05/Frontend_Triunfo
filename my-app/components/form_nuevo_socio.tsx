import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function NuevoSocioForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="cedula">Cédula</Label>
        <Input id="cedula" placeholder="Ingrese la cédula" />
      </div>
      <div>
        <Label htmlFor="nombres">Nombres</Label>
        <Input id="nombres" placeholder="Ingrese los nombres" />
      </div>
      <div>
        <Label htmlFor="apellidos">Apellidos</Label>
        <Input id="apellidos" placeholder="Ingrese los apellidos" />
      </div>
      <div>
        <Label htmlFor="direccion">Dirección</Label>
        <Input id="direccion" placeholder="Ingrese la dirección" />
      </div>
      <div>
        <Label htmlFor="celular">Celular</Label>
        <Input id="celular" placeholder="Ingrese el número de celular" />
      </div>
      <div>
        <Label htmlFor="correo">Correo Electrónico</Label>
        <Input id="correo" type="email" placeholder="Ingrese el correo electrónico" />
      </div>
      <div>
        <Label htmlFor="fecha_nacimiento">Fecha de Nacimiento</Label>
        <Input id="fecha_nacimiento" type="date" />
      </div>
      <Button type="submit">Guardar</Button>
    </form>
  )
}

