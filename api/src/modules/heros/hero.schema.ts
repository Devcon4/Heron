
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Hero {
    
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column()
    @Field()
    heroName: string;

    @Column()
    @Field({nullable: true})
    shortDescription: string;
    
    @Column()
    @Field({nullable: true})
    fullBio: string;
}
