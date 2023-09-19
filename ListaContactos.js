 let ListaContactos =[
  {
    id:1,
    nombre:"Misael", 
    Apellido: "Betancourth", 
    telefono: "97206172",
    ubicacion:{Ciudad: "Tegucigalpa", Direccion: "Res. Aleman"}
  },
  {
    id:2,
    nombre:"Jose", 
    Apellido: "Bonilla", 
    telefono: "98276832",
    ubicacion:{Ciudad: "Matagalpa", Direccion: "Res. plaza"}
  },
  
  ];
  let contNuevo = {
    id:3,
    nombre:"Asael", 
    Apellido: "Berrios", 
    telefono: "9334523",
    ubicacion:{Ciudad: "Jutiapa", Direccion: "Barrio Mora"}
  }
   function AgregarContactos (NuevoContacto){
     ListaContactos.push(NuevoContacto);
     return ListaContactos;
   }
   function BorrarContacto (EliminarContacto){
   let nuevalista= ListaContactos.filter((contacto)=> contacto.id !==EliminarContacto)
   ListaContactos=nuevalista
   }
  function imprimircontacto(ListaContactos){
      consola.log(ListaContactos)
  }

//  AgregarContactos(contNuevo) 
BorrarContacto(2)
console.log(ListaContactos)