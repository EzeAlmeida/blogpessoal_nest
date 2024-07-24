import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"})
export class Postagem {

@PrimaryGeneratedColumn() // Chave primaria autoincrimental criada automaticamente
id: number


@Transform(({ value }: TransformFnParams) => value?.trim()) //Não permite apenas espaços em branco no titulo
@IsNotEmpty()// Não permitir titulo vazio
@Column ({length: 100, nullable: false})//Definir tamanho e não aceitar valor nulo
titulo:string

@Transform(({ value }: TransformFnParams) => value?.trim())
@IsNotEmpty()
@Column ({length: 1000, nullable: false})
texto:string

@UpdateDateColumn() //DATA e hora definida automaticamente
data: Date





}