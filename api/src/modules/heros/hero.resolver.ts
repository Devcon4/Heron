import { Query, Mutation } from "type-graphql";
import { Hero } from "./hero.schema";
import { HeroService } from "./hero.service";

export default class HeroResolver {
    constructor(private readonly heroService: HeroService) {}

    @Query(returns => [Hero])
    async heroes() {
        this.heroService.addOne({
            heroName: 'Hero-1',
            shortDescription: 'a desc!',
            fullBio: 'a bio!'
        });

        this.heroService.getAll();
    }
}