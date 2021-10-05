import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants"
import { Post } from "./entities/Post";
//import mikroConfig from "./mikro-orm.config";
import { Comment } from "./entities/Comment";
import path from "path";
import mikroOrmConfig from "./mikro-orm.config";

const main = async ()=>{
    const orm = await MikroORM.init( mikroOrmConfig)

    const post = orm.em.create(Post, {title: 'my first post'})
    await orm.em.persistAndFlush(post)
    
    const comment = orm.em.create(Comment, {title: 'my first commentt'})
    await orm.em.persistAndFlush(comment)
}

main()
