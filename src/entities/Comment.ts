import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Comment {

  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

}