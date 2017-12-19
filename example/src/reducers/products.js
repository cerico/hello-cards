const initialState = [{
  name: "Roco Go",
  page:  '/rocogo',
  description: "hartlepool 2 sheffield united 4",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  '#222',
  url:  "http://www.google.com",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 7
},{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  '#22314b',
  url:  "http://www.google.com",
  logo: 'http://malham.io/roco-wide.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 7
},{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  'rgb(64, 116, 69)',
  url:  "http://www.google.com",
  // logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 7
},{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  'rgb(79, 92, 191)',
  url:  "http://www.google.com",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 12
},{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "rgb(246, 235, 213)",
  cols:  "2",
  direction:  'column',
  background:  'rgb(176, 100, 45)',
  url:  "http://www.google.com",
  logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 4
},{
  name: "Roco Go",
  page:  '/rocogo',
  description: "allen ginsberg and the roles of doom",
  color:  "#222",
  cols:  "23",
  direction:  'column',
  background:  'rgb(230, 185, 185)',
  url:  "http://www.google.com",
  // logo: 'http://malham.io/static/206c8e0ff48823e13b036fd90c5abdd8.png',
  textOne: "React",
  textTwo: "Redux",
  textThree: "Rails",
  number: 10
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return action.products;
    default:
      return state;
  }
}