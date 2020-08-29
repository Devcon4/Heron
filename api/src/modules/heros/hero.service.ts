import { Service } from "typedi";
import { getConnection } from "typeorm";
import { HeronContext } from "src/utils/context";
import { Hero } from "./hero.schema";

@Service()
export class HeroService {
    db = getConnection();

    constructor(private context: HeronContext) {}

    async getAll() {
        return this.db.getRepository(Hero).find();
    }

    async addOne(p: Partial<Hero>) {
        return this.db.getRepository(Hero).save(p);
    }
}