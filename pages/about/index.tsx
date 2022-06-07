import type { NextPage } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../app/components/Breadcrumbs";

const AboutPage: NextPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div>О сайте</div>
      <ul>
        <li><Link href="/about/links">Ссылки</Link></li>
        <li><Link href="/about/music">Музыка</Link></li>
      </ul>
    </>
  );
};

export default AboutPage;
