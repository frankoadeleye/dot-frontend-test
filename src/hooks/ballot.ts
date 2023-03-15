import { useState, useEffect } from "react";

function useNominees() {
  const [isLoadingBallots, setLoadingBallotsState] = useState(false);
  const [allNominees, setAllNominees] = useState([]);

  const getBallotData = async () => {
    setLoadingBallotsState(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_DOT}/getBallotData`
      );
      let data = await response.json();
      setAllNominees(data.items);
      setLoadingBallotsState(false);
    } catch (error) {
      console.log(error);
      setLoadingBallotsState(false);
    }
  };

  useEffect(() => {
    getBallotData();
  }, []);

  return {
    allNominees,
    isLoadingBallots,
  };
}

export default useNominees;
