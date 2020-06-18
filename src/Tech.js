import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "./redux/actions/fetchTech";

export default function Tech() {
  //----- redux and dispatch the action
  const techSelector = useSelector((state) => state.FetchTech);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchTech());

  useEffect(
    () => {
      getTechNews();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <section>
        <h2>Technology News</h2>
        <div className="news">
          {techSelector.techNews.map((x) => {
            return (
              <div className="post" key={x.title}>
                <img src={x.urlToImage} alt="" />
                <h2>{x.title}</h2>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
