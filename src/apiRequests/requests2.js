const getData = async () => {
  const apiUrl = 'https://jamezjez-bookstore-api.herokuapp.com/books';
  const response = await fetch(apiUrl, {
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

export default getData;
