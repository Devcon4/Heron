import { HeroService } from "./hero.service";
export default class HeroResolver {
    private readonly heroService;
    constructor(heroService: HeroService);
    heroes(): Promise<void>;
}
