import fetchData from "./apiCallController";

async function getQuestionAndAnswerByCategory(category_id, total_players) {
    try {
        const game = await fetchData("/card/qa"+ "/" + category_id + "/" + total_players);
        return game;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
} //ok





export default getQuestionAndAnswerByCategory;