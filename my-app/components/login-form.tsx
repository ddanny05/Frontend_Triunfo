"use client"; //se utiliza para indicar que es un componente de cliente 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export function Login({
  className,
  ...props
   }: React.ComponentPropsWithoutRef<"div">){
    const [username, setUsername] = useState("");    
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
      
     const handleSubmit = async (e: React.FormEvent) => { 
       e.preventDefault();

       try {
         const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ username, password }),
         });

         if (!response.ok) {
          const data= await response.json();
          localStorage.setItem("access_token", data.access); 

         }
         else {
           setError("ingresaste mal la contraseña o usuario");
         }
         
       } catch (error) {
         setError("ocurrio un problemas al inciiar session");
       }
     };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            ingresa tu usuario y contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">usuario</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="escribe tu usuario"
                  required
                  value={username}        //identifica el dato que va a la api
                  onChange={(e) => setUsername(e.target.value)}  //actualiza el estado de la variable username
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">contraseña

                  </Label>
                  
                  
                </div>
                <Input
                value={password}
                onChange={(e) =>setPassword(e.target.value)}

                id="password"
                type="password"
                required />
              </div>

              {error && <p className="text-red-500">{error}</p>}
              

              <Button type="submit" className="w-full">
                Login
              </Button>
              
                </div>
            <div className="mt-4 text-center text-sm">
              
              
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
