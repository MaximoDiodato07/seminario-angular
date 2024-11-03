export interface Beer {
    name: string;
    rating: {
        average: number // es un subcampo
      },
    price: string;
    image: string;
    //A partir de aca, se agregan datos por fuera de la consulta, que se manejaran desde el front.
    stock: number; 
    quantity: number; 
}