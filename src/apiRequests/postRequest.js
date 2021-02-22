const postData = async data => {
  const apiUrl = 'https://jamezjez-bookstore-api.herokuapp.com/books';
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(data),
  }); return response.json();
};

export default postData;
