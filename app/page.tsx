import { Section } from "../components/homePage/Section/Section";
import { SideBar } from "../components/homePage/SideBar/SideBar";
import { Container, HRTag, Paragraph, Title } from "../components/ui";
import Image from "next/image";
import { homePageSections } from "../lib";
import { FitTable } from "../components/homePage/FitTable/FitTable";

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
              Основной вал - вал, верхнее отклонение которого равно нулю.
            </Paragraph>
            <Paragraph>
              Основное отверстие - отверстие, нижнее отклонение которого равно
              нулю.
            </Paragraph>
            <Paragraph>
              В расчетах отклонения обозначаются следующим образом: <br /> ES,
              es - верхнеее отклонение отверстия и вала соответственно; <br />
              EI, ei - нижнее отклонение отверстия и вала соответственно;
            </Paragraph>
            <Paragraph>
              На чертежах рядом с размером указывается класс допуска.
            </Paragraph>
            <Paragraph>
              Класс допуска - сочетание основного отклонения и квалитета,
              например: Ø60H8, Ø60k6.
            </Paragraph>
            <Paragraph>Число указывает на квалитет.</Paragraph>
            <Paragraph>
              Квалитет — допуск размера. Всего существует 20 квалитетов от 01 до
              18. Чем выше квалитет, тем меньше точность. Например, для
              квалитета 8 для любых размеров отверстий и валов допуск составит
              33 мкм.
            </Paragraph>
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
              вала меньше диаметра отверстия. Зазор — положительное число. В
              расчетах зазор обозначается буквой S.
            </Paragraph>
            <Paragraph>
              Натяг — разность размеров отверстия и вала до сборки, когда
              диаметр вала больше диаметра отверстия. Натяг — отрицательное
              число. В расчетах натяг обозначается буквой N.
            </Paragraph>
            <Paragraph>
              Посадки бывают с зазором, с натягом и переходные.
            </Paragraph>
            <Paragraph>
              Посадка с зазором - посадка, при которой в соединении отверстия и
              вала всегда образуется зазор, т. е. нижний предельный размер
              отверстия больше или равен верхнему предельному размеру вала.
            </Paragraph>
            <Image
              src="/images/Clearance.png"
              alt="Clearance fit"
              layout="responsive"
              height={779}
              width={1300}
            />
            <Paragraph>
              Посадка с натягом - посадка, при которой в соединении отверстия и
              вала всегда образуется натяг, т. е. верхний предельный размер
              отверстия меньше или равен нижнему предельному размеру вала.
            </Paragraph>
            <Image
              src="/images/Interference.png"
              alt="Interference fit"
              layout="responsive"
              height={803}
              width={1300}
            />
            <Paragraph>
              Переходная посадка - посадка, при которой в соединении отверстия и
              вала возможно получение как зазора, так и натяга
            </Paragraph>
            <Image
              src="/images/Transition_1.png"
              alt="Interference fit"
              layout="responsive"
              height={469}
              width={1300}
            />
            <Image
              src="/images/Transition_2.png"
              alt="Interference fit"
              layout="responsive"
              height={489}
              width={1300}
            />
            <Paragraph>
              В переходной посадке интервал допуска отверстия и интервал допуска
              вала перекрываются частично или полностью, поэтому наличие зазора
              или натяга в соединении зависит от действительных размеров
              отверстия и вала.
            </Paragraph>
            <Paragraph>
              Рекоммендуется применять посадки либо в системе отверстия, либо в
              системе вала.
            </Paragraph>
            <Paragraph>
              Посадка в системе отверстия - посадка, в которой основное
              отклонение (нижнее предельное отклонение) отверстия равно нулю
            </Paragraph>
            <Paragraph>
              Посадка в системе вала - посадка, в которой основное отклонение
              (верхнее предельное отклонение) вала равно нулю.
            </Paragraph>
            <Paragraph>
              С точки зрения функциональности соединения нет разницы, какую
              систему использовать. Выбор делают исходя из экономических
              соображений.
            </Paragraph>
            <Paragraph>
              Для общего применения выбирают систему отверстия. Выбор системы
              отверстия позволяет избежать чрезмерного числа инструмента
              (например, протяжек) и калибров, применяемых при изготовлении
              изделия. Систему вала следует применять в экономически
              обоснованных случаях (например, если на одном гладком валу
              необходимо установить несколько деталей с отверстиями, имеющими
              разные отклонения, то применение системы вала позволит упростить
              обработку вала).
            </Paragraph>
          </Section>
          <HRTag />
          <Section id={homePageSections.standarts}>
            <Paragraph>
              Информацию, представленную выше, можно найти в ГОСТ25346.
            </Paragraph>
            <FitTable />
            <Title level="h3">Скользящие посадки</Title>
            <Paragraph>
              Скользящие посадки H/h - самые плотные из свободных посадок. Такие
              посадки применяют для:
            </Paragraph>
            <ul>
              <li>неподвижных соединений при необходимости частой разборки;</li>
              <li>центрирования легкоразъемных соединений;</li>
              <li>
                в подвижных соединениях для медленных перемещений или вращений.
              </li>
            </ul>
            <Title level="h3">Посадки движения</Title>
            <Paragraph>
              Посадки движения H/g - свободные, применяются для:
            </Paragraph>
            <ul>
              <li>
                в подвижных соединениях для обеспечения герметичности, точного
                направления.
              </li>
            </ul>
            <Title level="h3">Ходовые посадки</Title>
            <Paragraph>standarts</Paragraph>
            <Title level="h3">Легкоходовые посадки</Title>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Title level="h3">Широкоходовые посадки</Title>
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
