const deleteData = async book => {
  const apiUrl = `https://jamezjez-bookstore-api.herokuapp.com/books/${book.id}`;
  const response = await fetch(apiUrl, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};

export default deleteData;
