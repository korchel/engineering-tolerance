import { Section } from "../components/homePage/Section/Section";
import { SideBar } from "../components/homePage/SideBar/SideBar";
import { Container, HRTag, Paragraph } from "../components/ui";

export default async function Home() {
  return (
    <>
      <Container>
        <SideBar />
        <div className="paper" style={{ width: "80%" }}>
          <Section id="definitions">
            <Paragraph>
              Две детали, элементы которых входят друг в друга, образуют
              соединение.
            </Paragraph>
            <Paragraph>
              В соединении элементов двух деталей один из них является
              охватывающим, другой - охватываемым. В системе допусков и посадок
              охватывающий элемент условно называется валом, охватываемый -
              отверстием.
            </Paragraph>
            <Paragraph>
              Номинальный размер - идеальный размер, указанный в чертеже.
            </Paragraph>
            <Paragraph>
              Действительный размер - размер готовой детали, полученный прямым
              измерением.
            </Paragraph>
            <Paragraph>
              Предельные размеры - два предельных значения размера, между
              которыми должен находиться действительный размер.
            </Paragraph>
            <Paragraph>
              Допуск размера - разность между наибольшими и наименьшими
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
              Основное отклонение - предельное отклонение, определяющее
              расположение интервала допуска относительно номинального размера.
              Основное отклонение обозначается буквой латинского алфавита:
              заглавной - для охватывающих размеров, прописной - для
              охватываемых.
            </Paragraph>

            <Paragraph>
              Диапазон посадки - арифметическая сумма допусков размеров двух
              размерных элементов, образующих посадку
            </Paragraph>
          </Section>
          <HRTag />
          <Section id="designations">
            <Paragraph>designations</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>designations</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>standarts</Paragraph>
            <Paragraph>designations</Paragraph>
          </Section>
          <HRTag />
          <Section id="standarts">
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
