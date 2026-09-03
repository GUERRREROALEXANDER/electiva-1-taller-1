import { Controller, Get, Param } from '@nestjs/common';
interface User {
    id: string;
    name: string;
    email: string;
}


@Controller('users')
export class UsersController {

    private users: User[] = [
        {
            id: '1',
            name: 'Juna',
            email: 'juannita@correo.com',
        },
        {
            id: '2',
            name: 'david',
            email: 'david@correo.com',
        },
        {
            id: '3',
            name: 'jose',
            email: 'jose@correo.com',
        },
        {
            id: '4',
            name: 'maria',
            email: 'maria@correo.com',
        },
        {
            id: '5',
            name: 'valentina',
            email: 'valentina@correo.com',
        },
        {
            id: '6',
            name: 'alejandro',
            email: 'alejandro@correo.com',
        },
        {
            id: '7',
            name: 'nicolas',
            email: 'nicolas@correo.com',
        },
        {
            id: '8',
            name: 'camilo',
            email: 'camilo@correo.com',
        },
        {
            id: '9',
            name: 'sara',
            email: 'sara@correo.com',
        },
        {
            id: '10',
            name: 'lucia',
            email: 'lucia@correo.com',
        },
        {
            id: '11',
            name: 'martha',
            email: 'martha@correo.com',
        },
        {
            id: '12',
            name: 'pamela',
            email: 'pamela@correo.com',
        },
        {
            id: '13',
            name: 'alejandra',
            email: 'alejandra@correo.com',
        },
        {
            id: '14',
            name: 'jesus',
            email: 'jesus@correo.com',
        },
        {
            id: '15',
            name: 'alexander',
            email: 'alexander@correo.com',
        },

    ];
   
    @Get('')
    getalluser() {
        return this.users
    }
    
    @Get(':id')
    getUsuarioById(@Param('id') id: string) {
        console.log('.::User ID:', id);
        const user = this.users.find(user => user.id === id);
        console.log('.:: Usuario buscado', user);
        return user;
    }



 @Get('serch/:name')
   getUserByName(@Param('name') name: String) {
    const data = this.users.find(user => user.name === name);
    return{result: data?.email};
    
}


}
