import type { NextPage } from "next";
import { Breadcrumbs } from "../../../../app/components/Breadcrumbs";

const DemoPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Наследие демоверсии</div>
    </>
  );
};

export default DemoPage;
