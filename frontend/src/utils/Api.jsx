export const fetchMenuItemsAPI = async () => {
  try {
    const response = await fetch("http://localhost:8080/food-menu"); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch menu items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};
