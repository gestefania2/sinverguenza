import fetchData from "./apiCallController.js"


async function getAllCategories() {
    try {
      const category= await fetchData("/category/list");
      return category;
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      throw error;
    }
  } //ok
  
 


export default getAllCategories;
 

  


  
    
