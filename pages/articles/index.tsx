import type { NextPage } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../app/components/Breadcrumbs";

const Fallout12ArticlesPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>Исследования</div>
      <ul>
        <li><Link href="/articles/fallout1-2">Fallout 1-2</Link></li>
        <li><Link href="/articles/fallout3">Fallout 3</Link></li>
        <li><Link href="/articles/humor">Юмор</Link></li>
      </ul>
    </>
  );
};

export default Fallout12ArticlesPage;
