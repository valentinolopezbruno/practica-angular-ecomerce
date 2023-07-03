export interface Carrito{
    productos: Array<CarritoItem>
}

export interface CarritoItem {
    id: number,
    productoimg: string,
    nombre: string,
    precio: number,
    cantidad: number
}