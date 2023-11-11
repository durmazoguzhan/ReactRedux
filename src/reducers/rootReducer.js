const initState = {
  posts: [
    { id: 1, title: "Blog1", body: "Blog 1 İçerik" },
    { id: 2, title: "Blog2", body: "Blog 2 İçerik" },
    { id: 3, title: "Blog3", body: "Blog 3 İçerik" },
    { id: 4, title: "Blog4", body: "Blog 4 İçerik" },
    { id: 5, title: "Blog5", body: "Blog 5 İçerik" },
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
