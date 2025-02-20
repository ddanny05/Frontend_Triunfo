import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"


export function NuevoSocioForm() {
  const [formData, setFormData] = useState ({cedula:"", nombres: "",apellidos:"",direccion: "",
    celular: "",correo_electronico: "",fecha_nacimiento: ""})
  const handleSubmit = async (e:React.FormEvent) => {  // funcion para enviar el formulario
    e.preventDefault() //no es necesario actualizar toda la pagina solo el formulario
    const response = await fetch("http://127.0.0.1:8000/api/socios/",{  //hago la conexion con la api
   
      method : "POST",   //metodo que voy a usar
      headers: {"Content-Type": "application/json"}, //establece el tipo de contenido q se envia en json
      body: JSON.stringify(formData), //convierto en una cadena clave - valor
       }
    )
    if (response.ok) setFormData({cedula:"", nombres: "",apellidos:"",direccion: "",
      celular: "",correo_electronico: "",fecha_nacimiento: ""})
      else console.error("Error al crear el socio")  //imprimo el error si hay alguno

  } 
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="cedula">Cédula</Label>
        <Input 
        id="cedula" 
        placeholder="Ingrese la cédula" 
        name= "cedula" 
        type="text" 
        value={formData.cedula} //vacia el campo cuando el formulario se ah enviado
        onChange={(e)=> setFormData ({...formData, cedula:e.target.value})}  //maneja los eventos cuando se llena el imput se actualiza el estado
              />
      </div>
      <div>
        <Label htmlFor="nombres">Nombres</Label>
        <Input 
        id="nombres" 
        placeholder="Ingrese los nombres"
        name= "nombres" 
        type="text" 
        value={formData.nombres}
        onChange={(e)=> setFormData ({...formData, nombres:e.target.value})}/>
      </div>
      <div>
        <Label htmlFor="apellidos">Apellidos</Label>
        <Input 
        id="apellidos" 
        placeholder="Ingrese los apellidos" 
        name= "apellidos" 
        type="text"
        value={formData.apellidos} 
        onChange={(e)=> setFormData ({...formData, apellidos:e.target.value})}/>
      </div>
      <div>
        <Label htmlFor="direccion">Dirección</Label>
        <Input 
        id="direccion"
         placeholder="Ingrese la dirección"
         name="direccion" 
         type="text"
         value={formData.direccion}
         onChange={(e)=> setFormData ({...formData, direccion:e.target.value})}/>
      </div>
      <div>
        <Label htmlFor="celular">Celular</Label>
        <Input 
        id="celular"
        placeholder="Ingrese el número de celular"
        name="celular"
        type="number"
        value={formData.celular}
        onChange={(e)=> setFormData ({...formData, celular:e.target.value})}/>
      </div>
      <div>
        <Label htmlFor="correo">Correo Electrónico</Label>
        <Input 
        id="correo" 
        type="email"
        placeholder="Ingrese el correo electrónico" 
        name= "correo_electronico"
        value={formData.correo_electronico}
        onChange={(e)=> setFormData ({...formData, correo_electronico:e.target.value})}/>
      </div>
      <div>
        <Label htmlFor="fecha_nacimiento">Fecha de Nacimiento</Label>
        <Input 
        id="fecha_nacimiento" 
        type="date" 
        name = "fecha_nacimiento"
        value={formData.fecha_nacimiento}
        onChange={(e)=> setFormData ({...formData, fecha_nacimiento:e.target.value})}/>
      </div>
      <Button type="submit">Guardar</Button>
    </form>
  )
}

