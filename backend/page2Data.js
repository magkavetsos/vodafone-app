export const getPage2Data = async () => {
    const response = await fetch(
      "https://voda-react-assessment.herokuapp.com/page"
    );
    return response.json();
  };