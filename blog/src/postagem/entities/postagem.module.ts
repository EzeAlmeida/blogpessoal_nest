import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "../../tema/services/tema.service";
import { TemaModule } from "../../tema/tema.module";
import { PostagemController } from "../controller/postagem.controller";
import { PostagemService } from "../service/postagem.service";
import { Postagem } from "./postagem.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }