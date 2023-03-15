import { PageHeadingBlock } from "src/styles/components/page-heading";

type PHProp = {
  text: string | React.ReactNode;
};

function PageHeading({ text }: PHProp) {
  return <PageHeadingBlock>{text}</PageHeadingBlock>;
}

export default PageHeading;
