import NomineeCard from "src/components/nominee-card";
import PageHeading from "src/components/page-heading";
import Partition from "src/components/partition";
import React, { useState } from "react";
import {
  NomineesBlock,
  VotingPageBlock,
  NomineesSectionWrap,
} from "src/styles/pages/voting";
import { SetDocumentTitle } from "src/utils/set-document-title";
import useNominees from "src/hooks/ballot";
import { SubmitButton } from "src/styles/components/buttons";
import useNomineeCategory from "src/hooks/nominee-category";
import Modal from "src/components/modal";
import VoteResult from "src/components/vote-result";

function VotingPage() {
  SetDocumentTitle("Cast Your Vote");
  const [isOpenModal, setModalState] = useState(false);

  const selectModal = () => {
    setModalState(!isOpenModal);
  };

  const {
    selectedBestPictureNominee,
    selectedBestDirectorNominee,
    selectedBestActorNominee,
    selectedBestActressNominee,
    selectedBestSupportingActorNominee,
    selectedBestSupportingActressNominee,
    selectedBestVisualEffectsNominee,
    handleTargetCategory,
    handleCardState,
  } = useNomineeCategory();

  const { allNominees } = useNominees();

  return (
    <VotingPageBlock>
      <PageHeading
        text={
          <>
            GOLDEN GLOBE <br /> AWARD
          </>
        }
      />

      <NomineesBlock>
        <NomineesSectionWrap>
          {allNominees?.map((nominees) => {
            return (
              <React.Fragment key={nominees.id}>
                <Partition text={nominees.title} />
                {nominees?.items?.map((nominee) => {
                  return (
                    <NomineeCard
                      onCardClick={handleCardState(nominees.id, nominee.title)}
                      isSelected={
                        nominee.title === handleTargetCategory(nominees.id)
                      }
                      key={nominee.id}
                      nomineeProps={nominee}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </NomineesSectionWrap>
        <SubmitButton onClick={selectModal}>Submit vote button</SubmitButton>
      </NomineesBlock>
      <Modal displayModal={isOpenModal} closeModal={selectModal}>
        <VoteResult
          selectedBestPictureNominee={selectedBestPictureNominee}
          selectedBestDirectorNominee={selectedBestDirectorNominee}
          selectedBestActorNominee={selectedBestActorNominee}
          selectedBestActressNominee={selectedBestActressNominee}
          selectedBestSupportingActorNominee={
            selectedBestSupportingActorNominee
          }
          selectedBestSupportingActressNominee={
            selectedBestSupportingActressNominee
          }
          selectedBestVisualEffectsNominee={selectedBestVisualEffectsNominee}
        />
      </Modal>
    </VotingPageBlock>
  );
}

export default VotingPage;
