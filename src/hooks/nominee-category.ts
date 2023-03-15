import { useState } from "react";

function useNomineeCategory() {
  const [selectedBestPictureNominee, setBestPictureNominee] = useState("");
  const [selectedBestDirectorNominee, setBestDirectorNominee] = useState("");
  const [selectedBestActorNominee, setBestActorNominee] = useState("");
  const [selectedBestActressNominee, setBestActressNominee] = useState("");
  const [selectedBestSupportingActorNominee, setBestSupportingActorNominee] =
    useState("");
  const [
    selectedBestSupportingActressNominee,
    setBestSupportingActressNominee,
  ] = useState("");
  const [selectedBestVisualEffectsNominee, setBestBestVisualEffectsNominee] =
    useState("");

  const handleTargetCategory = (category: string) => {
    if (category === "best-picture") {
      return selectedBestPictureNominee;
    }
    if (category === "best-director") {
      return selectedBestDirectorNominee;
    }
    if (category === "best-actor") {
      return selectedBestActorNominee;
    }
    if (category === "best-actress") {
      return selectedBestActressNominee;
    }
    if (category === "best-supporting-actor") {
      return selectedBestSupportingActorNominee;
    }
    if (category === "best-supporting-actress") {
      return selectedBestSupportingActressNominee;
    }
    if (category === "best-visual-effects") {
      return selectedBestVisualEffectsNominee;
    }
    console.log(category);
  };

  const handleCardState = (category: string, title: string) => () => {
    handleTargetCategory(category);
    if (category === "best-picture") {
      setBestPictureNominee(title);
    }
    if (category === "best-director") {
      setBestDirectorNominee(title);
    }
    if (category === "best-actor") {
      setBestActorNominee(title);
    }
    if (category === "best-actress") {
      setBestActressNominee(title);
    }
    if (category === "best-supporting-actor") {
      setBestSupportingActorNominee(title);
    }
    if (category === "best-supporting-actress") {
      setBestSupportingActressNominee(title);
    }
    if (category === "best-visual-effects") {
      setBestBestVisualEffectsNominee(title);
    }
  };

  return {
    selectedBestPictureNominee,
    selectedBestDirectorNominee,
    selectedBestActorNominee,
    selectedBestActressNominee,
    selectedBestSupportingActorNominee,
    selectedBestSupportingActressNominee,
    selectedBestVisualEffectsNominee,
    handleTargetCategory,
    handleCardState,
  };
}

export default useNomineeCategory;
