import type { NextPage } from "next";
import { Breadcrumbs } from "../../../../app/components/Breadcrumbs";

const TownArticlePage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>В вашем городе появился Избранный, если...</div>
    </>
  );
};

export default TownArticlePage;
