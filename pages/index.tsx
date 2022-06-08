import type { NextPage } from "next";
import { Disclaimer } from "../app/components/Disclaimer";
import { NewsItem } from "../app/components/NewsItem";

const HomePage: NextPage = () => {
  return (
    <>
      <Disclaimer>
        <p>lalala</p>
      </Disclaimer>
      <h1>Новости</h1>
      <NewsItem date={new Date("2010-06-29")}>
        <p>
          Внезапно обновился братский проект: <a href="http://pipboy.fallout-archives.com/">PIP-BOY</a>. Новые подборки:{" "}
          <a href="http://pipboy.fallout-archives.com/fan-art/poshelushin/">музыкальный vault-boy</a> и брутальный{" "}
          <a href="http://pipboy.fallout-archives.com/fan-art/poshelushin-death/">vault-boy самоубийца</a> Александра
          Пошелюжина, а также <a href="http://pipboy.fallout-archives.com/vector/">несколько изображений в векторе!</a>
        </p>
        <p>
          Кроме 2 вышеназванных подборок Александр провел интересное исследование и подарил нам статью:{" "}
          <a href="facts/walls/index.php">Проходимые стены в Fallout 2</a>.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2009-11-09")}>
        <p>
          Привет всем, кто до сих пор находит наш сайт через поисковики не смотря на то, что google срезал pagerank
          из-за чересчур активной продажи ссылок.
        </p>
        <p>
          Сегодня две новые статьи от hamster{"'"}а: <a href="facts/fallout-tactics-2/index.php">Чучела крокодилов</a>{" "}
          об ископаемом Fallout Tactics 2 и <a href="facts/nature/index.php">Возвращение к природе</a> о мотивах
          взаимоотношения человека и природы в играх серии Fallout.
        </p>
        <p>Крайне познавательно!</p>
      </NewsItem>
      <NewsItem date={new Date("2009-05-04")}>
        <p>
          Размещены статьи <a href="facts/fallout-1-editorial/index.php">Ретроспектива Fallout</a> и{" "}
          <a href="facts/fallout-2-editorial/index.php">Fallout 2</a>, являющиеся переводами «Fallout editorial» с сайта{" "}
          <a href="http://www.gog.com/en/">gog.com</a>, составленными в рамках прошедшей недавно Недели Fallout.
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
          Представляем статью <a href="fallout-3/evolution/">Эволюция Пустоши</a> за авторством товарища Verdana,
          рассказывающую о механизмах эволюции и неизбежности изменений флоры и фауны после ядерной войны.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-10-18")}>
        <p>
          Не пропустите, возможно, последнюю статью на сайте, посвященную Fallout 2, ведь третья часть выйдет уже в
          конце месяца… <a href="facts/v13path/index.php">Кратчайший путь в Убежище 13</a> – статья от нашего
          постоянного читателя <b>Кирилла «Cherna» Чернышенко</b>, который описал наиболее простой из всех способов
          нахождения Убежища 13. И это не читерство! :-)
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-10-07")}>
        <p>
          С радостью представляю вам: <a href="http://smiles-c.org/">Smiles-City</a> - веб-комикс от нашего постоянного
          читателя и создателя сайта fallout.pub: <b>Vault Soilson</b>. Хотя Smiles-City и связан с миром Fallout, юмор
          довольно интернационален :-) и рекомендуется всем без исключения.
        </p>
        <p>
          <a href={"http://top.a-comics.ru/voter.php/?q=ZA&cid=38"}>Здесь</a> можно проголосовать за комикс в Рейтинге.
        </p>
      </NewsItem>
      <NewsItem date={new Date("2008-09-14")}>
        <p>
          <a href="humor/fo2hate/index.php">«Почему я ненавижу Fallout 2»</a> за авторством franzuck - всем, кто следит
          за Fallout 3 и уже строит свое мнение об игре читать обязательно. Надеюсь, из этой юмористической заметки вы
          сделаете правильные выводы, а может даже увидите себя со стороны.
        </p>
      </NewsItem>
    </>
  );
};

export default HomePage;
