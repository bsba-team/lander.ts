import { bot } from "../../core/bot.ts"
import { Context } from "../../deps.ts"

bot.start(
    async (ctx: Context) => {
        await ctx.reply(
            `This is the start message`
        )
    }
)


