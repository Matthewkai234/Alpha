export function filttering(filterWords) {
    let queryObj = { ...filterWords };
    const execQuery = ["page", "limit", "skip", "sort", "fields", "search"];
    execQuery.map((ele) => {
        delete queryObj[ele];
    });
    queryObj = JSON.stringify(queryObj);
    queryObj = queryObj.replace(
        /\b(gt|gte|lt|lte|in|nin|eq|neq)\b/g,
        (match) => `$${match}`
    );
    queryObj = JSON.parse(queryObj);
    return queryObj;
}
