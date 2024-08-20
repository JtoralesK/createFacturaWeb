"use client";
import dynamic from "next/dynamic";
import { Input } from "./input";

const html2pdf: any = dynamic(() => import("html2pdf.js"), { ssr: false });

export function InvoiceForm() {
  const options = {
    margin: [0, 0, 0, 0], // Ajusta los márgenes si es necesario
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }, // Ajusta el tamaño y orientación si es necesario
  };
  const generatePdf = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("invoice");
      html2pdf().set(options).from(element).save();
    }
  };
  return (
    <div className="w-[45em] h-64 bg-white bg-white shadow-md rounded px-12 py-6 ">
      <form>
        <div className="flex flex-row justify-between gap-4">
          <Input label="Vendedor" type="text" value="Javier Torales" readonly />
          <Input label="Cliente" type="text" placeholder="Nombre cliente" />
          <Input label="Username" type="text" placeholder="Username" />
        </div>
        <div className="flex flex-row justify-between gap-4 mt-4">
          <Input label="Articulo" type="text" placeholder="Servicio Técnico" />
          <Input label="Cantidad" type="number" placeholder="1" />
          <Input label="Username" type="text" placeholder="Username" />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-principalColor hover:text-secondaryColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="button"
            onClick={generatePdf}
          >
            Crear Factura
          </button>
        </div>
      </form>
    </div>
  );
}
