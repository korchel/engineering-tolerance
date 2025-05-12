import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const createPDF = async (name: string) => {
  const pdf = new jsPDF();
  const data = await html2canvas(
    document.querySelector("#result") as HTMLElement,
    { scale: 3 }
  );
  const img = data.toDataURL("image/png");
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();
  pdf.addImage(img, "PNG", 0, 0, width, height);
  pdf.save(name);
};
