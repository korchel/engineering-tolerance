import messages from "../dictionaries/ru.json";

export const normalizeI18nString = (key: string | undefined) =>
  key as unknown as string;
