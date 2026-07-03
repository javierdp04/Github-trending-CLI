import { durationToDate } from "./utils.js";

const list = async (options) => {
    try{
        const {duration, limit} = options;
        const metadata = await getMetaData(duration, limit);
        const result = extractUsefullMetadata(metadata);
        result.forEach(element => {
            console.log(element);
        });
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

const getMetaData = async (duration, limit) => {
    if(limit<=0 || limit>100) throw Error("Invalid limit argument")
    const date = durationToDate(duration);

    const apiURL = `https://api.github.com/search/repositories?q=created:<${date}&per_page=${limit}&sort=stars`;

    const response = await fetch(apiURL,{
        method : "GET",
        headers : {
            Accept : "application/vnd.github+json"
        }
    });

    if(!response.ok) throw new Error("Error fetching the server");

    return await response.json();
};

const extractUsefullMetadata = (response) => {
    return response.items.map( e => ({
            "title" : e.name,
            "description" : e.description,
            "owner" : e.owner.login,
            "stars" : e.stargazers_count,
    }));
}

export default list;