



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

  export interface Respuestadinero{
    ok: boolean;
    pagina: number;
    dineroeg:dineroeg[];
    dineroing:dineroing[];
    dinerototal:dinerototal[];

  }

  export interface dinerototal{
    total1?:dineroeg[],
    total2?:dineroing[]

  }

export interface dineroeg {
    nombreD?: string,
    tipoD?:string,
    precioD?:number[],
    fechadepagD?:Date,
    estadodepagD?:boolean
  }
  export interface dineroing {
    cantidadI?:number[]
    // data?: Array<number | null | undefined> ;
  }

export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?:string;
  }
  
  



