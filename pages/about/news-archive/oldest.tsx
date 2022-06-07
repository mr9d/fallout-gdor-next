import type { NextPage } from "next";
import { Breadcrumbs } from "../../../app/components/Breadcrumbs";

const OldestNewsPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Самые старые новости</div>
    </>
  );
};

export default OldestNewsPage;
