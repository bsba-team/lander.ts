import { token } from "../config.ts";
import { Bot } from "../deps.ts"

export const bot = new Bot(token as string)

if (Deno.env.get('ENV')?.toLowerCase() === "heroku") {
    // bot.launch({
    //     webhook: {
    //         domain: Deno.env.get('URL'),
    //         hookPath: '/bot',
    //         port: Deno.env.get('PORT')
    //     }
    // }).then()
} else if (Deno.env.get('ENV')?.toLowerCase() === "local") {
    bot.launch().then()
} else {
    console.log("Bot can't be started due to wrong environment!")
}
