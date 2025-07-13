import { getTranslations } from "next-intl/server";
import styles from "./FitTable.module.scss";

export const FitTable = async () => {
  const t = await getTranslations("homePage");
  return (
    <table className={styles.fitTable}>
      <thead>
        <tr>
          {t
            .raw("fitChoiceSection.table.headers")
            .map((header: string, i: number) => (
              <th key={i}>{header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={5} scope="row">
            {t("fitChoiceSection.table.rows.1.header")}
          </th>
          <th scope="row">
            {t("fitChoiceSection.table.rows.1.content.1.subHeader")}
          </th>
          <td colSpan={2}>
            {t.raw("fitChoiceSection.table.rows.1.content.1.values")[0]}
          </td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.1.content.2.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.2.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.2.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.1.content.3.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.3.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.3.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.1.content.4.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.4.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.4.values")[0]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.1.content.5.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.5.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.1.content.5.values")[1]}</td>
        </tr>
        <tr>
          <th rowSpan={3}>{t("fitChoiceSection.table.rows.2.header")}</th>
          <th scope="row">
            {t("fitChoiceSection.table.rows.2.content.1.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.1.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.1.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.2.content.2.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.2.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.2.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.2.content.3.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.3.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.2.content.3.values")[1]}</td>
        </tr>
        <tr>
          <th rowSpan={4}>{t("fitChoiceSection.table.rows.3.header")}</th>
          <th scope="row">
            {t("fitChoiceSection.table.rows.3.content.1.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.1.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.1.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.3.content.2.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.2.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.2.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.3.content.3.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.3.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.3.values")[1]}</td>
        </tr>
        <tr>
          <th scope="row">
            {t("fitChoiceSection.table.rows.3.content.4.subHeader")}
          </th>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.4.values")[0]}</td>
          <td>{t.raw("fitChoiceSection.table.rows.3.content.4.values")[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};
