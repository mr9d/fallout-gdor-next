import type { NextPage } from "next";
import Link from "next/link";
import { Disclaimer } from "../app/components/Disclaimer";
import { NewsAllLink } from "../app/components/NewsAllLink";
import { NewsItem } from "../app/components/NewsItem";

const HomePage: NextPage = () => {
  return (
    <>
      <Disclaimer>
        <p>
          [WIP] Это - тестовая версия редизайна сайта <Link href="https://falloutgdor.ru/">Fallout: Gravedigger&apos;s Original Research</Link>.
          Работы по обновлению еще ведутся.
        </p>
      </Disclaimer>
      <h1>Новости</h1>
      <NewsItem date={new Date("2010-06-29")}>
        <p>
          Внезапно обновился братский проект: <Link href="http://pipboy.fallout-archives.com/">PIP-BOY</Link>. Новые
          подборки: <Link href="http://pipboy.fallout-archives.com/fan-art/poshelushin/">музыкальный vault-boy</Link> и
          брутальный{" "}
          <Link href="http://pipboy.fallout-archives.com/fan-art/poshelushin-death/">vault-boy самоубийца</Link>{" "}
          Александра Пошелюжина, а также{" "}
          <Link href="http://pipboy.fallout-archives.com/vector/">несколько изображений в векторе!</Link>
        </p>
        <p>
          Кроме 2 вышеназванных подборок Александр провел интересное исследование и подарил нам статью:{" "}
          <Link href="facts/walls/index.php">Проходимые стены в Fallout 2</Link>.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2009-11-09")}>
        <p>
          Привет всем, кто до сих пор находит наш сайт через поисковики не смотря на то, что google срезал pagerank
          из-за чересчур активной продажи ссылок.
        </p>
        <p>
          Сегодня две новые статьи от hamster{"'"}а:{" "}
          <Link href="facts/fallout-tactics-2/index.php">Чучела крокодилов</Link> об ископаемом Fallout Tactics 2 и{" "}
          <Link href="facts/nature/index.php">Возвращение к природе</Link> о мотивах взаимоотношения человека и природы
          в играх серии Fallout.
        </p>
        <p>Крайне познавательно!</p>
      </NewsItem>
      <NewsItem date={new Date("2009-05-04")}>
        <p>
          Размещены статьи <Link href="facts/fallout-1-editorial/index.php">Ретроспектива Fallout</Link> и{" "}
          <Link href="facts/fallout-2-editorial/index.php">Fallout 2</Link>, являющиеся переводами «Fallout editorial» с
          сайта <Link href="http://www.gog.com/en/">gog.com</Link>, составленными в рамках прошедшей недавно Недели
          Fallout.
        </p>
        <p>
          Хотя статьи и являются хорошими вводными для людей, совершенно не знакомыми с серией, они будут интересны
          также и бывалым игрокам, которые подчерпнут из них некоторые любопытные факты. В частности, о грядущей MMORPG
          по мотивам Fallout.
        </p>
        <p>
          За перевод и инициативу спасибо <strong>hamster</strong>!
        </p>
      </NewsItem>
      <NewsItem date={new Date("2009-04-12")}>
        <p>
          Представляем статью <Link href="fallout-3/evolution/">Эволюция Пустоши</Link> за авторством товарища Verdana,
          рассказывающую о механизмах эволюции и неизбежности изменений флоры и фауны после ядерной войны.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-10-18")}>
        <p>
          Не пропустите, возможно, последнюю статью на сайте, посвященную Fallout 2, ведь третья часть выйдет уже в
          конце месяца… <Link href="facts/v13path/index.php">Кратчайший путь в Убежище 13</Link> – статья от нашего
          постоянного читателя <b>Кирилла «Cherna» Чернышенко</b>, который описал наиболее простой из всех способов
          нахождения Убежища 13. И это не читерство! :-)
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-10-07")}>
        <p>
          С радостью представляю вам: <Link href="http://smiles-c.org/">Smiles-City</Link> - веб-комикс от нашего
          постоянного читателя и создателя сайта fallout.pub: <b>Vault Soilson</b>. Хотя Smiles-City и связан с миром
          Fallout, юмор довольно интернационален :-) и рекомендуется всем без исключения.
        </p>
        <p>
          <Link href={"http://top.a-comics.ru/voter.php/?q=ZA&cid=38"}>Здесь</Link> можно проголосовать за комикс в
          Рейтинге.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-09-14")}>
        <p>
          <Link href="humor/fo2hate/index.php">«Почему я ненавижу Fallout 2»</Link> за авторством franzuck - всем, кто
          следит за Fallout 3 и уже строит свое мнение об игре читать обязательно. Надеюсь, из этой юмористической
          заметки вы сделаете правильные выводы, а может даже увидите себя со стороны.
        </p>
      </NewsItem>
      <NewsAllLink />
    </>
  );
};

export default HomePage;
