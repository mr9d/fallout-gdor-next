import type { NextPage } from "next";
import { Breadcrumbs } from "../../app/components/Breadcrumbs";

const FilesPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Файлы</div>
    </>
  );
};

export default FilesPage;
