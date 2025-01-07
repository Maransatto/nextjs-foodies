export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>{params.mealSlug}</p>
    </>
  );
}
