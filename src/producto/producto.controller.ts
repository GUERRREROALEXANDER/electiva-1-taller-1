import { Controller, Get, Param } from '@nestjs/common';
interface Producto {
    id: string;
    name: string;
    price: number;
    stock: number;
    categoria: string;
    fechaVencimiento: string;
}

@Controller('producto')
export class ProductoController {
    private productos: Producto[] = [
        {
            id: '1',
            name: 'chocorramo',
            price: 10.99,
            stock: 20,
            categoria: 'panaderia',
            fechaVencimiento: '2025-01-15',
        },
        {
            id: '2',
            name: 'coca_cola',
            price: 15.99,
            stock: 50,
            categoria: 'bebidas',
            fechaVencimiento: '2027-06-30',
        },
        {
            id: '3',
            name: 'doritos',
            price: 20.99,
            stock: 0,
            categoria: 'snacks',
            fechaVencimiento: '2026-11-20',
        },
        {
            id: '4',
            name: 'yogurt',
            price: 25.99,
            stock: 8,
            categoria: 'lacteos',
            fechaVencimiento: '2025-08-10',
        },
        {
            id: '5',
            name: 'panchitos',
            price: 30.99,
            stock: 35,
            categoria: 'snacks',
            fechaVencimiento: '2026-12-01',
        },
        {
            id: '6',
            name: 'pony',
            price: 35.99,
            stock: 12,
            categoria: 'bebidas',
            fechaVencimiento: '2027-03-25',
        },
        {
            id: '7',
            name: 'maragaritas',
            price: 40.99,
            stock: 5,
            categoria: 'snacks',
            fechaVencimiento: '2024-09-05',
        },

    ];

    // A. Listar todos los productos
    @Get('')
    getallproducto() {
        return this.productos
    }

    // C. Listar productos por stock (stock minimo pedido)
    @Get('stock/:cantidad')
    getProductosByStock(@Param('cantidad') cantidad: string) {
        console.log('.::Stock minimo:', cantidad);
        const minimo = Number(cantidad);
        const data = this.productos.filter(producto => producto.stock >= minimo);
        console.log('.::Productos con stock:', data);
        return data;
    }

    // D. Listar productos vencidos
    @Get('vencidos')
    getProductosVencidos() {
        const hoy = new Date();
        const data = this.productos.filter(
            producto => new Date(producto.fechaVencimiento) < hoy,
        );
        console.log('.::Productos vencidos:', data);
        return data;
    }

    // E. Listar productos por categoria
    @Get('categoria/:categoria')
    getProductosByCategoria(@Param('categoria') categoria: string) {
        console.log('.::Categoria:', categoria);
        const data = this.productos.filter(
            producto => producto.categoria === categoria,
        );
        console.log('.::Productos de la categoria:', data);
        return data;
    }

    // B. Listar un producto por id
    @Get(':id')
    getProductoById(@Param('id') id: string) {
        console.log('.::Producto ID:', id);
        const producto = this.productos.find(producto => producto.id === id);
        console.log('.::Producto:', producto);
        return producto;
    }

}
