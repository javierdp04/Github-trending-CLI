const durationToDate = (duration) => {
    const dayInMs = 24*60*60*1000;
    const durationOps = {
        "day" : dayInMs,
        "week" : dayInMs*7,
        "month" : dayInMs*30,
        "year" : dayInMs*365,
    }
    
    const ms = durationOps[duration];
    if(!ms) throw new Error("Invalid duration parameter");

    const date = new Date(Date.now()-ms)

    return date.toISOString().split("T")[0]
}

export { durationToDate }