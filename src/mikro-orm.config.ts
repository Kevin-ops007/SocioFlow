import { __prod__ } from "./constants"
import {MikroORM } from "@mikro-orm/core"
import { Post } from "./entities/Post"
import path from "path"

export default{
    migrations:{
        path: path.join(__dirname, "./migration"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'socioflow_db',
    type: 'postgresql',
    debug: !__prod__
}as Parameters<typeof MikroORM.init>[0]
