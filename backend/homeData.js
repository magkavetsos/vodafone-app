export const getHomeData = async () => {
  const response = await fetch(
    "https://voda-react-assessment.herokuapp.com/home"
  );
  return response.json();
};
