import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Section } from "../../components/homePage/Section/Section";
import { SideBar } from "../../components/homePage/SideBar/SideBar";
import { Container, HRTag, Paper, Paragraph, Title } from "../../components/ui";
import { homePageSections } from "../../lib";
import { FitTable } from "../../components/homePage/FitTable/FitTable";
import styles from "./page.module.scss";

export default async function Home() {
  const t = await getTranslations("homePage");
  const locale = await getLocale();
  return (
    <>
      <Container>
        <SideBar
          sections={[
            {
              text: t("toleranceSection.title"),
              href: homePageSections.tolerances,
            },
            { text: t("fitSection.title"), href: homePageSections.fits },
            {
              text: t("fitChoiceSection.title"),
              href: homePageSections.fitSelection,
            },
          ]}
        />
        <Paper className={styles.ml}>
          <Section id={homePageSections.tolerances}>
            <Title level="h2" centered>
              {t("toleranceSection.title")}
            </Title>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n, i) => (
              <Paragraph key={i}>
                {t(`toleranceSection.paragraphs.${n}`)}
              </Paragraph>
            ))}
            <Image
              src={`/images/Scheme_${locale}.png`}
              alt="Basic deviation"
              layout="responsive"
              height={1084}
              width={2000}
            />
            {Array.from({ length: 8 }, (_, i) => i + 8).map((n, i) => (
              <Paragraph key={i}>
                {t.rich(`toleranceSection.paragraphs.${n}`, {
                  br: () => <br />,
                })}
              </Paragraph>
            ))}
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
            <Title level="h2" centered>
              {t("fitSection.title")}
            </Title>
            {Array.from({ length: 7 }, (_, i) => i + 1).map((n, i) => (
              <Paragraph key={i}>{t(`fitSection.paragraphs.${n}`)}</Paragraph>
            ))}
            <Image
              src="/images/Clearance.png"
              alt="Clearance fit"
              layout="responsive"
              height={779}
              width={1300}
            />
            <Paragraph>{t("fitSection.paragraphs.8")}</Paragraph>
            <Image
              src="/images/Interference.png"
              alt="Interference fit"
              layout="responsive"
              height={803}
              width={1300}
            />
            <Paragraph>{t("fitSection.paragraphs.9")}</Paragraph>
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
            {Array.from({ length: 5 }, (_, i) => i + 9).map((n, i) => (
              <Paragraph key={i}>{t(`fitSection.paragraphs.${n}`)}</Paragraph>
            ))}
          </Section>
          <HRTag />
          <Section id={homePageSections.fitSelection}>
            <Title level="h2" centered>
              {t("fitChoiceSection.title")}
            </Title>
            <Paragraph>{t("fitChoiceSection.paragraphs.1")}</Paragraph>
            <Paragraph>{t("fitChoiceSection.paragraphs.2")}</Paragraph>
            <FitTable />

            <Title level="h3" centered>
              {t("fitChoiceSection.subSections.1.title")}
            </Title>
            <Title level="h4">
              {t("fitChoiceSection.subSections.1.subTitle1")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.1.paragraphs1.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.1.paragraphs1.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.1.subTitle2")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.1.paragraphs2.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.1.paragraphs2.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.1.subTitle3")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.1.paragraphs3.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.1.paragraphs3.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.1.subTitle4")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.1.paragraphs4.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.1.paragraphs4.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.1.subTitle5")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.1.paragraphs5.1")}
            </Paragraph>
            <Title level="h3" centered>
              {t("fitChoiceSection.subSections.2.title")}
            </Title>
            <Title level="h4">
              {t("fitChoiceSection.subSections.2.subTitle1")}
            </Title>

            <Paragraph>
              {t("fitChoiceSection.subSections.2.paragraphs1.1")}
            </Paragraph>
            <Title level="h4">
              {t("fitChoiceSection.subSections.2.subTitle2")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.2.paragraphs2.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.2.paragraphs2.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.2.subTitle3")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.2.paragraphs3.1")}
            </Paragraph>
            <Title level="h4">
              {t("fitChoiceSection.subSections.2.subTitle3")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.2.paragraphs3.1")}
            </Paragraph>
            <Title level="h3" centered>
              {t("fitChoiceSection.subSections.3.title")}
            </Title>
            <Title level="h4">
              {t("fitChoiceSection.subSections.3.subTitle1")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.3.paragraphs1.1")}
            </Paragraph>
            <Title level="h4">
              {t("fitChoiceSection.subSections.3.subTitle2")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.3.paragraphs2.1")}
            </Paragraph>
            <ul>
              {t
                .raw("fitChoiceSection.subSections.3.paragraphs2.list")
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <Title level="h4">
              {t("fitChoiceSection.subSections.3.subTitle3")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.3.paragraphs3.1")}
            </Paragraph>
            <Title level="h4">
              {t("fitChoiceSection.subSections.3.subTitle4")}
            </Title>
            <Paragraph>
              {t("fitChoiceSection.subSections.3.paragraphs4.1")}
            </Paragraph>
          </Section>
        </Paper>
      </Container>
    </>
  );
}
