import {
  NomineeCardBlock,
  NomineeName,
  NomineeImage,
} from "src/styles/components/nominee-card";
import { NomineeSelectBtn } from "src/styles/components/buttons";
import elipsis from "src/utils/elipsis";

type NomineeCardProps = {
  nomineeProps: {
    photoUrL: string;
    title: string;
  };
  onCardClick: React.FormEventHandler;
  isSelected: boolean;
};

function NomineeCard({
  nomineeProps,
  onCardClick,
  isSelected,
}: NomineeCardProps) {
  const { title, photoUrL } = nomineeProps;
  return (
    <NomineeCardBlock isSelected={isSelected} onClick={onCardClick}>
      <NomineeName>{elipsis(title)}</NomineeName>
      <NomineeImage src={photoUrL} />
      <NomineeSelectBtn>Select Button</NomineeSelectBtn>
    </NomineeCardBlock>
  );
}

export default NomineeCard;
