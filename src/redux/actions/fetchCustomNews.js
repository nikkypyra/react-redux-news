export function fetchCustomNews(source, relevance) {
  //return the actual action to do
  return function (dispatch) {
    fetch(
      "https://newsapi.org/v1/articles?source=" +
        source +
        "&sortBy=" +
        relevance +
        "&apiKey=0cf748919db94ab59061558b5a28cf7d"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res)
        dispatch({ type: "FETCH_CUSTOM_NEWS", payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
