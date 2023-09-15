 let ListaContactos= [ "MisaelBetancourth","JoseLopez","DanielaBetancourth"];

function AgregarContacto (Nuevocontacto){
ListaContactos.push(Nuevocontacto)
}
function BorrarContacto (EliminarContacto){
  let nuevalista= ListaContactos.filter((contacto)=> contacto !==EliminarContacto)
  ListaContactos=nuevalista
}
function imprimircontacto(ListaContactos){
    console.log(ListaContactos)
}
AgregarContacto("Jose Garcia")  
BorrarContacto("MisaelBetancourth")
imprimircontacto(ListaContactos)
