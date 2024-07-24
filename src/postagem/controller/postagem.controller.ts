
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";
import { ok } from "assert";

@Controller("/postagens")
export class PostagemController{
    
    constructor(private readonly postagemService: PostagemService) { } //readonly só chama
    
    @Get()
        @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id:number): Promise<Postagem>{
    return this.postagemService.findById(id);
}

@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
findByTitulo(@Param('titulo') titulo:string): Promise<Postagem[]> {
    return this.postagemService.findByTitulo(titulo);
}

@Put()
    @HttpCode(HttpStatus.OK) // Http Status 200
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // Http Status 204
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }

}
