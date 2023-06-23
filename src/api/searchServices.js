
export const searchServices = async (search) => {
  //const params = new URLSearchParams({ q: search});
  // console.log('url-1', search);
  // console.log('URL-1', `${process.env.REACT_APP_SEARCH_URL}`);
  const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}`)
  if (!response.ok) {
    // console.log('URL ERROR');
    throw new Error(response.statusText);
  }
  // console.log('555', response.json);
  return await response.json();
}
