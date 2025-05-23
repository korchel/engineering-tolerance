import { Section } from "../components/homePage/Section/Section";
import { SideBar } from "../components/homePage/SideBar/SideBar";
import { Container, HRTag, Paragraph } from "../components/ui";
import Image from "next/image";
import { homePageSections } from "../lib";

export default async function Home() {
  return (
    <>
      <Container>
        <SideBar />
        <div className="paper" style={{ width: "80%" }}>
          <Section id={homePageSections.deviations}>
            <Paragraph>
              Две детали, элементы которых входят друг в друга, образуют
              соединение.
            </Paragraph>
            <Paragraph>
              В соединении элементов двух деталей один из них является
              охватывающим, другой — охватываемым. В системе допусков и посадок
              охватывающий элемент условно называется отверстием, охватываемый —
              валом.
            </Paragraph>
            <Paragraph>
              Номинальный размер — идеальный размер, указанный в чертеже.
            </Paragraph>
            <Paragraph>
              Действительный размер — размер готовой детали, полученный прямым
              измерением.
            </Paragraph>
            <Paragraph>
              Предельные размеры — два предельных значения размера, между
              которыми должен находиться действительный размер.
            </Paragraph>
            <Paragraph>
              Допуск размера — разность между наибольшими и наименьшими
              предельными размерами. Допуск, как правило, измеряется в
              микрометрах и состоит из двух отклонений от номинального размера:
              верхнего и нижнего.
            </Paragraph>
            <Paragraph>
              Отклонение может быть положительным, если предельный размер больше
              номинального, и отрицательным, если предельный размер меньше
              номинального.
            </Paragraph>
            <Paragraph>
              Основное отклонение — отклонение, определяющее расположение
              интервала допуска относительно номинального размера. Основное
              отклонение обозначается буквой латинского алфавита: заглавной —
              для охватывающих размеров, прописной — для охватываемых.
            </Paragraph>

            <Image
              src="/images/Basic deviation.png"
              alt="Basic deviation"
              layout="responsive"
              height={447}
              width={870}
            />
            <Paragraph>
              В расчетах отклонения обозначаются следующим образом: <br /> ES,
              es - верхнеее отклонение отверстия и вала соответственно; <br />
              EI, ei - верхнеее отклонение отверстия и вала соответственно;
            </Paragraph>
            <Paragraph>
              На чертежах рядом с размером указывается класс допуска.
            </Paragraph>
            <Paragraph>
              Класс допуска - сочетание основного отклонения и квалитета.
            </Paragraph>
            <Paragraph>
              Квалитет — допуск размера. Всего существует 20 квалитетов от 01 до
              18. Чем выше квалитет, тем меньше точность. Например, для
              квалитета 8 для любых размеров отверстий и валов допуск составит
              33 мкм.
            </Paragraph>
            <Paragraph>
              Класс допуска — это сочетание латинских букв и цифр, например:
              Ø60H8, Ø60k6.
            </Paragraph>
            <Paragraph>Число указывает на квалитет.</Paragraph>
            <Paragraph>
              Буква указывает на основое отклонение. Его определяют по таблицам
              для данного размера. Для отверстий используются заглавные буквы,
              для валов — прописные.
            </Paragraph>
            <Paragraph>
              На рисунке ниже представлена схема расположения основных
              отклонений для отверстий и валов.
            </Paragraph>
            <Image
              src="/images/Basic deviations.png"
              alt="Basic deviations"
              layout="responsive"
              height={901}
              width={1353}
            />
          </Section>
          <HRTag />
          <Section id={homePageSections.fits}>
            <Paragraph>
              На сборочных чертежах, в месте соединения рядом с размером
              указывают посадку.
            </Paragraph>
            <Paragraph>
              Посадки обозначаются двумя значениями допуска: для отверстия и
              вала, например: Ø60H8/k6
            </Paragraph>
            <Paragraph>
              Диапазон посадки — арифметическая сумма допусков размеров двух
              размерных элементов, образующих посадку
            </Paragraph>
            <Paragraph>
              Зазор — разность между размерами отверстия и вала, когда диаметр
              вала меньше диаметра отверстия. Зазор — положительное число.
            </Paragraph>
            <Paragraph>
              Натяг — разность размеров отверстия и вала до сборки, когда
              диаметр вала больше диаметра отверстия. Натяг — отрицательное
              число.
            </Paragraph>
          </Section>
          <HRTag />
          <Section id={homePageSections.standarts}>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
          </Section>
          <HRTag />
        </div>
      </Container>
    </>
  );
}
