import "reflect-metadata";

import "babel-polyfill";

// import "core-js/stable";
// import "regenerator-runtime/runtime";

import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import dotenv from 'dotenv';
import { Token, Container } from 'typedi';
import { buildSchema } from 'type-graphql';
import { useContainer, createConnection } from 'typeorm';
import * as allResolvers from "./resolvers";
import ormconfig from "../ormconfig.docker"; 

dotenv.config();

(async () => {

    const schema = await buildSchema({
        resolvers: [allResolvers] as any,
        container: Container
    });
    useContainer(Container);

    await createConnection(ormconfig as any);

    const apolloServer = new ApolloServer({ schema: schema, tracing: true })
    const koaApp = new Koa();

    apolloServer.applyMiddleware({ app: koaApp });
    
    koaApp.listen({ port: 4204 }, () => {
        console.log(`🚀 Server ready at http://localhost:4204${apolloServer.graphqlPath}`);
    });
})();
