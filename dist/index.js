"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const Comment_1 = require("./entities/Comment");
const path_1 = __importDefault(require("path"));
const main = async () => {
    const orm = await core_1.MikroORM.init({
        migrations: {
            path: path_1.default.join(__dirname, "./migration"),
            pattern: /^[\w-]+\d+\.[tj]s$/,
        },
        entities: [Post_1.Post],
        dbName: 'socioflow_db',
        type: 'postgresql',
        debug: !constants_1.__prod__
    });
    const post = orm.em.create(Post_1.Post, { title: 'my first post' });
    await orm.em.persistAndFlush(post);
    const comment = orm.em.create(Comment_1.Comment, { title: 'my first commentt' });
    await orm.em.persistAndFlush(comment);
};
main();
//# sourceMappingURL=index.js.map