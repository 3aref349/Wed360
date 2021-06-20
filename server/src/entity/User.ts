import {
  Entity as TYPEORM_ENTITY,
  PrimaryGeneratedColumn,
  Column,
  Index,
} from "typeorm";
import { Exclude } from "class-transformer";

import Entity from "./Entity";

enum Role {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
}

@TYPEORM_ENTITY("users")
export default class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Index()
  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Index()
  @Column({ unique: true })
  email: string;

  @Column({
    type: "enum",
    default: "user",
    enum: Role,
  })
  role: Role;
}
