"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("./config/mongo");
const User_1 = require("./models/User");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    mongo_1.connect();
    const { _id: id } = yield User_1.UserModel.create({
        name: "JohnDoe",
        jobs: ["Cleaner"],
    });
});
main();
//# sourceMappingURL=index.js.map