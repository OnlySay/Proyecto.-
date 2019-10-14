



export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
    dineroeg:dineroeg[]; 
  }
  
export interface Post {
    imgs?: string[];
    _id?: string;
    mensaje?: string;
    coords?: string;
    usuario?: Usuario;
    created?: string;
  }

export interface dineroeg {
    nombreD?: string,
    tipoD?:string,
    precioD?:number,
    fechadepagD?:Date,
    estadodepagD?:boolean
  }
  export interface dineroing {
    cantidadI?:number
  }

export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?:string;
  }
  
  



