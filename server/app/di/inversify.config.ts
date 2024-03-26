import "reflect-metadata";
import { Container } from "inversify";
import { UrlRepository } from "../../src/Url/domain/UrlRepository";
import UrlMongoRepository from "../../src/Url/infrastructure/repositories/UrlMongoRepository";
import { TYPES } from "./types";
import MongoDatabaseConnection from "../database/MongoDatabaseConnection";
import dotenv from "dotenv";

dotenv.config();

const myContainer = new Container();

myContainer.bind<UrlRepository>(TYPES.UrlRepository).toConstantValue(new UrlMongoRepository(MongoDatabaseConnection.getInstance()));

export { myContainer };