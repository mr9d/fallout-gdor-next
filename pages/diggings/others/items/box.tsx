import type { NextPage } from "next";
import { Breadcrumbs } from "../../../../app/components/Breadcrumbs";

const BoxPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Желтый чемодан с застежками</div>
    </>
  );
};

export default BoxPage;
