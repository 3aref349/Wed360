import { Entity as TYPEORM_ENTITY, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import Entity from "./Entity";


@TYPEORM_ENTITY("articles")
export default class Articles extends Entity {
    constructor(article: Partial<Articles>) {
        super();
        Object.assign(this, article);
    }
    @Index()
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ unique: true })
    title: string;
    @Index()
    @Column()
    description: string;
    @Index()
    @Column()
    authorName: string;
    @Index()
    @Index()
    @Column({ default: "default_course_thumb.jpg" })
    imageUrn: string;



}
