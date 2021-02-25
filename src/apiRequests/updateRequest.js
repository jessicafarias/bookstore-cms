const updateData = async book => {
  const apiUrl = `https://jamezjez-bookstore-api.herokuapp.com/books/${book.id}`;
  const response = await fetch(apiUrl, {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }); return response;
};

export default updateData;
