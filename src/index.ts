import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants"
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async ()=>{
    const orm = await MikroORM.init({ 
        entities: [Post],
        dbName: 'socioflow_db',
        type: 'postgresql',
        debug: !__prod__
    })

    const post = orm.em.create(Post, {title: 'my first post'})
    await orm.em.persistAndFlush(post)

}

main()