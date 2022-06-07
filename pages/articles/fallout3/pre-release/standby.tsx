import type { NextPage } from "next";
import { Breadcrumbs } from "../../../../app/components/Breadcrumbs";

const StandByArticlePage: NextPage = () => {
  return (
    <>
      <Breadcrumbs currentPageLabel='В ожидании тизера Fallout 3 или "Please stand by"' />
      <div>Fallout 3 articles - В ожидании тизера Fallout 3 или &quot;Please stand by&quot;</div>
    </>
  );
};

export default StandByArticlePage;
