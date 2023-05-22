import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatFacts } from "./actions/catFactsActions";
import { Audio } from "react-loader-spinner";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const catFacts = useSelector((state) => state.catFacts.catFacts);
  const isLoading = useSelector((state) => state.catFacts.isLoading);

  useEffect(() => {
    dispatch(fetchCatFacts({ page: 1, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        dispatch(fetchCatFacts({ page: 1, limit: 10 }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <div className="App">
      {catFacts.map((fact) => (
        <div
          className="catFact"
          key={fact.length + Math.floor(Math.random() * 1000000) + 1}
        >
          {fact.fact}
        </div>
      ))}
      {isLoading && (
        <div>
          <Audio
            height="100"
            width="100"
            color="green"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
