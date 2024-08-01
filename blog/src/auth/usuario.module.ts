import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";



import { Bcrypt } from "../auth/bcrypt/bcrypt";
import { UsuarioController } from "../usuario/controllers/usuario.controller";
import { UsuarioService } from "../usuario/services/usuario.service";
import { Usuario } from "../usuario/entities/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService, Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService],
})
export class UsuarioModule { }