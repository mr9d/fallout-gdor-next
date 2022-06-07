import type { NextPage } from "next";
import { Breadcrumbs } from "../../../../app/components/Breadcrumbs";

const TooLongArticlePage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Вы слишком долго играли в Fallout, если...</div>
    </>
  );
};

export default TooLongArticlePage;
