import Image from "next/image";

export default function Home() {
  return (
    <body>
      <header id="header1">
        <h1>自己紹介</h1>
      </header>
      <header id="header2">
        <h1>自己紹介</h1>
      </header>
      <main>
        <section id="profile">
            <h2>プロフィール</h2>
            <p>名前: 西岡大仁</p>
            <p>年齢: 19</p>
            <p>所属学部・学科: 工学部情報工学科</p>
        </section>
        <section id="career">
            <h2>経歴</h2>
            <ul>
              <li>[経歴1]</li>
              <li>[経歴2]</li>
              <li>[経歴3]</li>
            </ul>
        </section>
        <section id="hobbies">
            <h2>趣味</h2>
            <ul id="sort">
            <p>valorant</p>
            <p>スノーボード</p>
            </ul>
        </section>
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>python</li>
                <li>java</li>
                <li>c</li>
                <li>kotlin</li>
            </ul>
        </section>
      </main>
    </body>
  );
}