import {Injectable, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
@Injectable({
    providedIn:'root'
})

export class Servicio implements OnInit{
    token:any=null;
    constructor(private storage: Storage){
        console.log("Servicio Listo!!!!");
        this.cargarToken();

    }
  ngOnInit() {
    this.cargarToken();
  }
  
    datosIniciales(){
        
    }
    iniciarSession(data){
        return new Promise(resolve=>{
        fetch('http://apiToken.com/session', {
            method: 'POST', 
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res=>res.json())
          .then(async res => {
              console.log(res);
            if(res.statusCode==201){
               await this.guardarToken(res.data);
                resolve({"respuesta":"ok","id_usuario":res.data.id_usuario});
            }else{
                this.token=null;
                this.storage.clear();
                resolve(false);
            }
        });
        });
        
    
    }
    async ObtenerUsuarios(){
       await this.cargarToken();
       console.log(this.token);
        const api=await fetch('http://apiToken.com/usuario/all', {
            method: 'GET', 
            headers:{
              'Authorization':this.token.token,
              'Content-Type': 'application/json'
            }
          });
        const respuesta=await api.json();  
        return respuesta;
    
    }
     async cerrarSesion(){
      await this.cargarToken();
      return new Promise(resolve=>{
     fetch(`http://apiToken.com/session/${this.token.id_token}`, {
            method: 'DELETE', 
            headers:{
              'Authorization':this.token.token,
              'Content-Type': 'application/json'
            }
      }).then(data=>data.json()).then(async data=>{
        if(data.statusCode==200){
          this.token=null;
          this.storage.clear();
           resolve(true);
       }else{
           resolve(false);
       }
      });
    });
       
    }

    async ObtenerUsuario(id){
        await this.cargarToken();
        const api=await fetch(`http://apiToken.com/usuario/${id}`, {
            method: 'GET', 
            headers:{
              'Authorization':this.token.token,
              'Content-Type': 'application/json'
            }
          });
        const respuesta=await api.json();  
        return respuesta;
    
    }

    async ObtenerDietas(){
      await this.cargarToken();
      const api=await fetch('http://apiToken.com/tarea/all', {
          method: 'GET', 
          headers:{
            'Authorization':this.token.token,
            'Content-Type': 'application/json'
          }
        });
      const respuesta=await api.json();  
      return respuesta;
  
  }




  async ObtenerDieta(id){
    await this.cargarToken();
    const api=await fetch(`http://apiToken.com/tarea/${id}`, {
        method: 'GET', 
        headers:{
          'Authorization':this.token.token,
          'Content-Type': 'application/json'
        }
      });
    const respuesta=await api.json();  
    return respuesta;

}


    async RegistoUsuario(data){
      const api=await fetch('http://apiToken.com/usuario', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        });
      const respuesta=await api.json();  
      return respuesta;
  
  }

     async guardarToken(token){
        this.token=token;
        await this.storage.set('acceso',token);    
    }
    
    async cargarToken(){
      this.token= await this.storage.get('acceso') || null;
    }
    

    


}
