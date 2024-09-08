import ReceipeList from "@/components/recepe-list";

async function fetchListOfRecipes() {

    try {

        const apiRes = await fetch('https://dummyjson.com/recipes');
        const data = await apiRes.json();

        return data?.recipes

    } catch (error) {
        throw new Error(error);
    }
}

export default async function Recipes() {
    const recipeList = await fetchListOfRecipes();

    return <ReceipeList recipeList={recipeList} />
}