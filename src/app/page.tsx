import ImagePlaceholder from "@/components/ImagePlaceholder";
import Navbar from "@/components/Navbar";
import Ornament from "@/components/Ornament";
import SectionTitle from "@/components/SectionTitle";
import { CheckIcon, CrossIcon, XIcon } from "@/components/Icons";

const ageCards = [
  {
    title: "С первых дней жизни",
    text: "Крещение допустимо даже в первые дни после рождения, а в случае угрозы здоровью младенца — прямо в роддоме или больнице.",
  },
  {
    title: "Традиционный срок — на 40-й день",
    text: "Эта традиция связана с тем, что на 40-й день над матерью читают очистительную молитву, и она может полноценно участвовать в таинстве. Но это именно традиция, а не обязательное правило.",
  },
  {
    title: "В более старшем возрасте",
    text: "Детей старше года, подростков и взрослых тоже крестят, но для них требуется подготовка: беседы со священником, чтобы человек осознанно принял веру.",
  },
];

const catechesisReasons = [
  "Помочь осознать смысл Таинства Крещения и необходимость изменения жизни в соответствии с евангельскими заповедями.",
  "Для родителей и восприемников (крёстных) — понять степень ответственности за духовное воспитание крещаемого, обсудить, как именно они будут помогать ребёнку возрастать в вере.",
  "Подготовить человека к участию в других таинствах, прежде всего Исповеди и Причащения.",
];

const godparentImages = ["krestniy1.jpg", "krestniy4.png"]; //"krestniy2.png", "krestniy3.png",

const cannotBeGodparent = [
  "Некрещёный человек или представитель другой религии.",
  "Родители самого ребёнка.",
  "Супруги (или жених и невеста) не могут быть крёстными у одного ребёнка, так как между ними возникает духовное родство, которое выше брачных уз.",
  "Несовершеннолетние (обычно до 14–15 лет), так как они ещё не способны в полной мере осознавать ответственность.",
  "Люди, ведущие явно греховный образ жизни без покаяния, а также находящиеся под отлучением от Церкви.",
  "Люди с психическими заболеваниями, которые мешают им полноценно выполнять свои обязанности.",
];

const howToChoose = [
  "Оцените степень знакомства и близость. Хорошо, если человек давно и доверительно общается с семьёй.",
  "Убедитесь в его воцерковлённости. Он должен сам жить церковной жизнью и быть готовым помогать в духовном воспитании.",
  "Обсудите его готовность. Объясните, что от крёстного ждут не только формального участия в крещении, но и постоянной молитвы за ребёнка, участия в его духовном развитии, поддержки. Человек должен согласиться осознанно, а не из вежливости.",
  "Поговорите со священником. Он поможет оценить готовность кандидата и подскажет, нужно ли ему пройти дополнительные беседы.",
];

const baptismKit = [
  "Крестильная рубашка или крыжма. Это специальная одежда, в которую надевают ребёнка после обряда. Она должна быть чистой, желательно из натуральных тканей, и белого цвета — символа чистоты и нового начала.",
  "Крестик. Его чаще всего покупают крестные. Он должен быть освящённым и удобным для малыша — без острых углов и из лёгкого металла (золота, серебра).",
  "Полотенце или пелёнка. Чтобы укутать малыша после купели. Лучше выбирать мягкие, хорошо впитывающие материалы.",
  "Чепчик или шапочка. Особенно важны, если в храме прохладно — новорождённому после воды необходимо сохранить тепло.",
  "Свидетельство о рождении ребёнка. Иногда требуется для оформления записи о крещении. Уточните этот момент заранее.",
  "Свечи. Обычно приобретаются в храме.",
  "Икона или крестильный набор. По желанию семьи или по традиции региона.",
  "Крестильный набор, свечи, крестик, иконы для крещения рекомендуем приобретать в церковной лавке.",
];

const orthodoxLifeSteps = [
  {
    title: "Осознание и желание",
    text: "Всё начинается с внутреннего пробуждения: человек задумывается о смысле жизни, о том, что ждёт его за гранью земного бытия. Это первый шаг — желание найти эту опору в Боге.",
  },
  {
    title: "Вера",
    text: "Это не просто интеллектуальное согласие с какими-то утверждениями, а живое, личностное доверие Богу, принятие Его как своего Спасителя и Господа. Без этой веры все последующие действия теряют смысл.",
  },
  {
    title: "Изучение основ вероучения",
    text: "Важно познакомиться с тем, во что верят православные: изучить Символ Веры, основы догматики, учение о Боге, человеке, спасении. Для этого полезно читать Священное Писание (особенно Новый Завет — Евангелие) и творение Святых отцов.",
  },
  {
    title: "Молитва",
    text: "Святые отцы часто называют молитву основой духовной жизни, живым общением с Богом. Начинать можно с простого — например, с молитвы «Отче наш». Важно не просто механически читать тексты, а вкладывать в них сердце, стремиться к искренности.",
  },
  {
    title: "Участие в жизни Церкви",
    text: "Регулярное посещение храма, участие в богослужениях, а главное в Таинствах, через которые верующим сообщается благодать. Ключевыми являются Крещение (духовное рождение), Причащение (соединение со Христом) и Покаяние (исправление жизни).",
  },
  {
    title: "Покаяние и изменение жизни",
    text: "Начинается внутренняя работа: человек начинает переосмысливать свои поступки, раскаивается в грехах и старается жить по заповедям Божиим.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ---------- Hero ---------- */}
      <header className="relative overflow-hidden md:h-[150vh]">
        <div className="relative flex h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#3a3226] px-6 text-center md:sticky md:top-0 md:h-screen">
          <div
            className="hero-image absolute inset-0 bg-[center_38%] bg-cover bg-no-repeat md:bg-fixed md:bg-center"
            style={{ backgroundImage: "url('/cover.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/60" />

          <div className="relative z-10 flex flex-col items-center">
            <CrossIcon className="mb-6 h-10 w-10 text-accent drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />
            <h1 className="hero-text-shadow font-heading max-w-4xl text-4xl leading-tight text-[#fdfaf4] sm:text-6xl">
              О таинстве Крещения
            </h1>
            <div className="ornament my-6 text-accent" aria-hidden="true" />
            <blockquote className="quote-block hero-text-shadow max-w-2xl">
              <p className="px-2">
                «Истинно говорю тебе, если кто не родится от воды и Духа, не может
                войти в Царствие Божие»
              </p>
              <footer className="mt-4 text-sm font-semibold tracking-wide text-[#d8ecf5]">
                Евангелие от Иоанна (3:5)
              </footer>
            </blockquote>
          </div>
        </div>
      </header>

      <main className="relative z-10 rounded-t-[2rem] bg-background shadow-[0_-25px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3rem]">
        {/* ---------- Возраст крещения ---------- */}
        <section id="vozrast" className="mx-auto max-w-5xl px-6 py-20 scroll-mt-20">
          <SectionTitle title="С какого возраста можно крестить?" />
          <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-muted">
            Возможность получить Божью благодать через крещение человеку
            предоставляется с самого рождения. В православной традиции нет
            строгого возрастного ограничения для крещения — ребёнка можно
            крестить практически в любом возрасте.
          </p>

          <h3 className="font-heading mt-14 text-center text-lg text-accent-dark">
            Основные моменты
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ageCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 rounded-sm border border-accent/20 bg-white/60 p-6 shadow-sm"
              >
                <CrossIcon className="h-6 w-6 text-accent" />
                <h4 className="font-heading text-base text-accent-dark">{card.title}</h4>
                <p className="text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Огласительные беседы ---------- */}
        <section id="besedy" className="bg-white/60 py-20 scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6">
            <SectionTitle title="Огласительные беседы перед Крещением" />
            <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-muted">
              Огласительная беседа — это серия наставлений, которые проводит
              священник или специально подготовленный мирянин (катехизатор) с
              людьми, готовящимися к принятию христианского таинства, чаще
              всего — Таинства Крещения. Цель таких бесед — помочь человеку
              осознанно подойти к этому шагу, понять основы вероучения и в
              дальнейшем полноценно войти в жизнь Церкви.
            </p>

            <div className="mt-12 grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
              <ImagePlaceholder label="katehezis.png" src="katehezis.png" ratio="aspect-[4/3]" />
              <div>
                <h3 className="font-heading text-lg text-accent-dark">
                  Зачем нужны огласительные беседы?
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {catechesisReasons.map((reason) => (
                    <li key={reason} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <CrossIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---------- Молитвы на Крещение ---------- */}
            <div className="mt-16">
              <SectionTitle title="Молитвы на Крещение" align="center" />
              <div className="molitvoslov mx-auto mt-8 max-w-3xl rounded-sm p-8 sm:p-12">
                <div className="mb-10">
                  <h4 className="font-heading text-center text-base text-accent-dark">
                    Молитва Господня
                  </h4>
                  <Ornament className="w-16" />
                  <p className="drop-cap text-left italic leading-8 text-foreground">
                    Отче наш, Иже еси на небесех! Да святится имя Твое. да
                    приидет Царствие Твое, да будет воля Твоя, яко на небеси и
                    на земли. Хлеб наш насущный даждь нам днесь; и остави нам
                    долги наша, якоже и мы оставляем должником нашим; и не
                    введи нас во искушение, но избави нас от лукаваго.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-center text-base text-accent-dark">
                    Символ веры
                  </h4>
                  <Ornament className="w-16" />
                  <p className="drop-cap text-left italic leading-8 text-foreground">
                    Верую во единаго Бога Отца, Вседержителя, Творца Небу и
                    земли, видимым же всем и невидимым. И во единаго Господа
                    Иисуса Христа, Сына Божия, Единороднаго, Иже от Отца
                    рожденнаго прежде всех век; Света от Света, Бога истинна
                    от Бога истинна, рожденна, несотворенна, единосущна Отцу,
                    Имже вся быша. Нас ради человек и нашего ради спасения
                    сшедшаго с Небес, и воплотившагося от Духа Свята и Марии
                    Девы, и вочеловечшася. Распятаго же за ны при Понтийстем
                    Пилате, и страдавша, и погребенна. И воскресшаго в третий
                    день, по Писанием. И восшедшаго на Небеса, и седяща
                    одесную Отца. И паки грядущаго со славою судити живым и
                    мертвым, Егоже Царствию не будет конца. И в Духа Святаго,
                    Господа, Животворящаго, Иже от Отца исходящаго, Иже со
                    Отцем и Сыном спокланяема и сславима, глаголавшаго
                    пророки. Во Едину Святую, Соборную и Апостольскую Церковь.
                    Исповедую едино Крещение во оставление грехов. Чаю
                    воскресения мертвых. И жизни будущаго века. Аминь.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Выбор крёстного ---------- */}
        <section id="krestny" className="mx-auto max-w-5xl px-6 py-20 scroll-mt-20">
          <SectionTitle title="Выбор крёстного" />
          <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-muted">
            Выбор крёстного родителя — это серьёзное решение, ведь он берёт на
            себя ответственность за духовное воспитание ребёнка.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative rounded-sm border border-accent/30 bg-accent/5 p-8">
              <span className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-sm">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg text-accent-dark">
                Кто может быть крёстным?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Главное требование — человек должен быть крещёным православным
                христианином. Он должен жить церковной жизнью: регулярно
                посещать храм, исповедоваться и причащаться. Если кандидат сам
                не очень хорошо знаком с основами веры, ему стоит пройти
                огласительные беседы (катехизацию) перед таинством.
              </p>
            </div>

            <div className="relative rounded-sm border border-secondary/30 bg-secondary/5 p-8">
              <span className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white shadow-sm">
                <XIcon className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg text-accent-dark">
                Крёстным не может быть:
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {cannotBeGodparent.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <XIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2">
            {godparentImages.map((label) => (
              <ImagePlaceholder key={label} label={label} src={label} ratio="aspect-square" />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg text-accent-dark">
                Сколько крёстных нужно?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                По церковным канонам достаточно одного восприемника того же
                пола, что и ребёнок: для мальчика — мужчина, для девочки —
                женщина. Наличие двух крёстных (мужчины и женщины) — это
                благочестивая традиция, а не жёсткое правило.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-accent-dark">
                С какого возраста не нужен крёстный?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Согласно документу «О религиозно-образовательном и
                катехизическом служении в Русской Православной Церкви»
                обязательное наличие крёстного предполагается только для
                детей до 7-ми лет.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-heading text-center text-lg text-accent-dark">
              Как выбрать подходящего кандидата?
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {howToChoose.map((item, i) => (
                <div key={item} className="flex gap-4">
                  <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent text-accent-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Работа в храме ---------- */}
        <section className="bg-white/60 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <SectionTitle title="Работа в храме как форма благодарности" />
            <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-muted">
              Участие в жизни храма — уборка, ремонт, помощь в алтаре, работа
              в свечной лавке — это тоже способ выразить свою признательность.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ImagePlaceholder label="man-labor.png" src="man-labor.png" ratio="aspect-[4/3]" />
              <ImagePlaceholder label="woman-labor.jpeg" src="woman-labor.jpeg" ratio="aspect-[4/3]" />
            </div>

            <div className="mt-14 grid grid-cols-1 items-start gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-lg text-accent-dark">
                  Пожертвования как выражение благодарности
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Материальные пожертвования — ещё один способ проявить
                  благодарность. Они идут на содержание храма, оплату
                  коммунальных услуг, приобретение необходимых для богослужений
                  предметов (ладана, свечей, масла).
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Но мы должны понимать, что физический труд ради храма
                  воспринимается как форма духовного делания: человек жертвует
                  своим временем и силами, преодолевает лень, учится смирению,
                  тем самым получается не просто «работа», а форма
                  богослужебного участия.
                </p>
              </div>

              <blockquote className="quote-block rounded-sm bg-secondary/90 p-8 text-center text-[#fdfaf4]">
                <span className="quote-mark">«</span>
                <p className="px-2">
                  Каждый уделяй по расположению сердца, не с огорчением и не с
                  принуждением; ибо доброхотно дающего любит Бог
                </p>
                <footer className="mt-4 text-sm tracking-wide text-[#f3d9d0]">
                  2 Коринфянам 9:7 (Новый Завет)
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ---------- Что нужно для крестин ---------- */}
        <section id="veshi" className="mx-auto max-w-5xl px-6 py-20 scroll-mt-20">
          <SectionTitle title="Что нужно для крестин: список необходимых вещей" />

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[minmax(0,320px)_1fr] sm:items-start">
            <ImagePlaceholder label="baptise-kit.png" src="baptise-kit.png" ratio="aspect-[3/4]" />
            <ul className="flex flex-col gap-4">
              {baptismKit.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <CrossIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Причастие ---------- */}
        <section className="bg-white/60 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <SectionTitle title="Следующий день после крещения, для крещёного" />
            <div className="mt-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_minmax(0,340px)]">
              <div>
                <p className="leading-8 text-muted">
                  На следующий день после крещения в православной традиции
                  часто причащают новокрещённого — ребёнка или взрослого. Это
                  не жёсткое правило, а распространённая практика: иногда
                  литургия завершается в тот же день, и причастие проводят
                  сразу, а в других случаях священник приглашает прийти на
                  следующую службу.
                </p>
                <p className="mt-4 leading-8 text-muted">
                  Почему так? Крещение и Причастие — это два разных таинства.
                  Само по себе Крещение делает человека членом Церкви и даёт
                  благодать, а Причастие — это соединение с Богом, приобщение
                  к вечной жизни. Священники часто советуют не затягивать с
                  Причастием после крещения: так новообращённый быстрее
                  получает благодатные силы для духовной жизни.
                </p>
              </div>
              <ImagePlaceholder label="holy-comunion.jpg" src={'holy-comunion.jpg'} ratio="aspect-[4/5]" />
            </div>
          </div>
        </section>

        {/* ---------- Православная жизнь ---------- */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <SectionTitle title="С чего начинается православная жизнь?" />
          <div className="mt-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-[minmax(0,340px)_1fr]">
            <ImagePlaceholder label="orthodox-life.png" src="orthodox-life.png" ratio="aspect-[4/5]" />
            <p className="leading-8 text-muted">
              Православная жизнь начинается с внутреннего поворота человека к
              Богу, который выражается в нескольких ключевых шагах. Это не
              просто набор ритуалов, а целостный процесс духовного
              становления.
            </p>
          </div>

          <div className="mt-16 rounded-sm border border-accent/20 bg-accent/5 p-8 sm:p-12 text-center">
            <h3 className="font-heading text-xl text-accent-dark">
              «Семья — это малая церковь»
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">
              Место, где учатся любить и прощать, вера становится не просто
              словами, а привычкой сердца. Здесь каждый день — маленький урок
              доброты, а взаимная поддержка помогает расти в вере и
              становиться лучше.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">
              Совместная молитва, участие в таинствах, чтение Евангелия,
              взаимная поддержка и служение, воспитание в вере — это
              основополагающие православной семейной жизни.
            </p>
          </div>

          <div className="mt-14">
            <blockquote className="quote-block-light mx-auto max-w-2xl text-center">
              <span className="quote-mark">«</span>
              <p className="px-2">
                Где двое или трое собраны во имя Моё, там Я посреди них
              </p>
              <footer className="mt-3 text-sm tracking-wide text-accent-dark">
                Мф. 18:20
              </footer>
            </blockquote>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {orthodoxLifeSteps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary text-secondary">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-heading text-base text-accent-dark">{step.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Заключительная цитата ---------- */}
        <section className="px-6 pb-24">
          <div
            className="mx-auto max-w-4xl rounded-sm px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: "#3a3226" }}
          >
            <CrossIcon className="mx-auto h-8 w-8 text-accent" />
            <blockquote className="quote-block mt-6">
              <p>
                Главная заповедь — любовь к Богу и к ближнему — становится
                итогом и смыслом всего пути. Без любви все подвиги и знания
                теряют смысл
              </p>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="border-t border-accent/20 bg-white/60 py-10 text-center text-sm text-muted">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6">
          <CrossIcon className="h-5 w-5 text-secondary" />
          <p>О таинстве Крещения</p>
        </div>
      </footer>
    </div>
  );
}
