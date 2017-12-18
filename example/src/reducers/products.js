const initialState = [{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  '#222',
  url:  "http://www.google.com",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails"
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.products;
    default:
      return state;
  }
}