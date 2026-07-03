const list = require("../../src/commands/list")

it('fetch for the most popular repo where duration = day', async () => {
    const options = {
        duration : "day",
        limit : "1"
    }
    const result = await list(options);
    expect(...result).toMatchObject({
        title : expect.any(String),
        description : expect.any(String),
        owner : expect.any(String),
        stars : expect.any(Number),
    })
})