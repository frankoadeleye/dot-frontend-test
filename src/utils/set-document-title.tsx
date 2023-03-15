import { useEffect } from "react";

const SetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `Dot | ${title}`;
  }, [title]);
};

export { SetDocumentTitle };
