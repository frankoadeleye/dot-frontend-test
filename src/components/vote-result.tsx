import { VotesResult } from "src/styles/components/vote-result";
import Partition from "src/components/partition";

type VRProps = {
  selectedBestPictureNominee: string;
  selectedBestDirectorNominee: string;
  selectedBestActorNominee: string;
  selectedBestActressNominee: string;
  selectedBestSupportingActorNominee: string;
  selectedBestSupportingActressNominee: string;
  selectedBestVisualEffectsNominee: string;
};

function VoteResult(props: VRProps) {
  const {
    selectedBestPictureNominee,
    selectedBestDirectorNominee,
    selectedBestActorNominee,
    selectedBestActressNominee,
    selectedBestSupportingActorNominee,
    selectedBestSupportingActressNominee,
    selectedBestVisualEffectsNominee,
  } = props;
  return (
    <VotesResult>
      <Partition text="Vote Result" />
      Best Picture:{" "}
      {selectedBestPictureNominee === ""
        ? "Not Chosen"
        : selectedBestPictureNominee}
      <br />
      Best Director:{" "}
      {selectedBestDirectorNominee === ""
        ? "Not Chosen"
        : selectedBestDirectorNominee}{" "}
      <br />
      Best Actor:{" "}
      {selectedBestActorNominee === ""
        ? "Not Chosen"
        : selectedBestActorNominee}{" "}
      <br />
      Best Actress:{" "}
      {selectedBestActressNominee === ""
        ? "Not Chosen"
        : selectedBestActressNominee}{" "}
      <br />
      Best Supporting Actor:{" "}
      {selectedBestSupportingActorNominee === ""
        ? "Not Chosen"
        : selectedBestSupportingActorNominee}
      <br />
      Best Supporting Actress:{" "}
      {selectedBestSupportingActressNominee === ""
        ? "Not Chosen"
        : selectedBestSupportingActressNominee}{" "}
      <br />
      Best Visual Effects:{" "}
      {selectedBestVisualEffectsNominee === ""
        ? "Not Chosen"
        : selectedBestVisualEffectsNominee}{" "}
      <br />
    </VotesResult>
  );
}

export default VoteResult;
