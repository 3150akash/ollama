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
const ollama_1 = require("ollama");
const ollama = new ollama_1.Ollama({ host: "http://localhost:11434" });
const initiateChat = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ollama.chat({
        model: "llama2",
        messages: [{ role: "system", content: "Why is the sky blue?" }],
    });
    console.log(response.message.content);
});
initiateChat();
//# sourceMappingURL=index.js.map