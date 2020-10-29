



export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
    dineroeg:dineroeg[]; 
    dineroing:dineroing[];
    calendario:calendario;
    calendario2:calendario2[];
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

  }


  export interface fotoincluida{

    imgs?: string[];
    _id?: string;
    usuario?: Usuario;
    nombreD?: string;
    tipoD?:string;
    precioD?:number[];
    fechadepagD?:Date;
    estadodepagD?:boolean;

  }
  

export interface dineroeg {
    imgs?: string[];
    _id?: string;
    usuario?: Usuario;
    nombreD?: string;
    tipoD?:string;
    precioD?:number[];
    fechadepagD?:Date;
    estadodepagD?:boolean;
  }
  export interface dineroing {
    imgs?: string[];
    usuario?: Usuario;
    _id?: string;
    cantidadI?:number[];
    textoI?:string;
    fechadeingreso?:Date;
  }

export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?:string;
  }

export interface calendario{
  Usuario?  : Usuario;
  Dineroeg? : dineroeg;
  Dineroing?: dineroing;
}

export interface calendario2{
  usuario?: Usuario;
  _id?: string;
  nombreD?: string;
  tipoD?:string;
  precioD?:number[];
  fechadepagD?:Date;
  estadodepagD?:boolean;
  cantidadI?:number[];
  textoI?:string;
  fechadeingreso?:Date;

}




export interface graficolinea{
  usuario?:   Usuario;
  dineroeg?:dineroeg;
  dineroing? :dineroing;
}

export interface graficodona {
  usuario?: Usuario;
  nombreD?: string;
  _id?: string;
  tipoD?:string;
  precioD?:number[];
  fechadepagD?:Date;
  estadodepagD?:boolean;
  cantidadI?:number[];
  textoI?:string;
  fechadeingreso?:Date;
}




// pruebas

export interface cantidaddinerototal{
  total?: number[];

}

export interface mas {
  mas?: number[];
}

export interface menos{
  menos?: number[];
}

export interface total{
  total?: total[];
}



  



