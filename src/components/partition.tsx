import { PartitionBlock } from "src/styles/components/partition";

type PProps = {
  text: string | React.ReactNode;
};

function Partition({ text }: PProps) {
  return <PartitionBlock>{text}</PartitionBlock>;
}

export default Partition;
