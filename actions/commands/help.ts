import { Context } from "../../deps.ts"
import { bot } from "../../core/bot.ts"

bot.help(async (ctx: Context) => {
        await ctx.reply(
            `This is the help message`
        )
    }
)
