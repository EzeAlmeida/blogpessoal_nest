import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { describe } from 'node:test';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';


describe('Testes dos Modulos Usuario e Auth (e2e)', () => {

  let token: any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        type: "sqlite",
        database: ":memory:",
        entities: [__dirname + "./../src/**/entities/*.entity.ts"],
        synchronize: true,
        dropSchema: true
      }),
      AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });
 
  it("01 - Deve Cadastrar um novo Usuário", async () => {
    const resposta = await request(app.getHttpServer())
    .post('/usuarios/cadastrar')
    .send({
      nome: 'Root',
      usuario: 'root@root.com',
      senha: 'rootroot',
      foto: '-'
    }) 
    .expect(201);
    usuarioId = resposta.body.id;
    
  })

});
