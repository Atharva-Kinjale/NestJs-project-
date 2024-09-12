import { Body, Controller, Delete, Get, Param, Patch, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    @Get()
    findAll(){
        return this.userService.findAll()
    }
    @Get("L")
    @Redirect('https://nestjs.com', 301)
    // findAllI(){
    //     return this.userService.findAll()
    // }
    @Get('interns')
    findInterns(){
        return []
    }
    @Get(':id')
    findById(@Param('id') id:string){
        return this.userService.findOne(+id)
    }
    @Post()
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        return this.userService.create(user)
    }
    @Patch(":id")
    update(@Param('id') id:String,@Body() userUpdate:{name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        return this.userService.update(+id,userUpdate)
    }
    @Delete(':id')
    del(@Param('id') id:string){
        return this.userService.delete(+id)
    }
}
