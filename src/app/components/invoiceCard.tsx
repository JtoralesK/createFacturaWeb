import Image from "next/image";
import { InvoiceCardTable } from "./InvoiceCardTable";
import { InvoiceCardMiniTable } from "./invoiceCardMiniTable";
import { InvoiceCardInfo } from "./invoiceCardInfo";

export function InvoiceCard() {
  return (
    <div
      className="w-[35em] h-auto bg-white px-12 py-8 mb-10 border-2 border-red"
      id="invoice"
      style={{
        margin: "0 auto",
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-3xl font-semibold tracking-wider">FACTURA</p>
          <p className="font-medium">Factura n.°1</p>
          <p className="font-medium">
            Fecha <b>13/08/24</b>
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/apxschool/image/upload/v1721274096/logoSinFondo_b677mv.png"
          width={100}
          height={100}
          alt="Javier torales logo"
        />
      </div>
      <p className="font-semibold mt-4">JOSE C. PAZ</p>
      <p>Calle viva 1234</p>
      <p>(54) 9 1143523300</p>
      <InvoiceCardTable />
      <div className="flex justify-end">
        <InvoiceCardMiniTable />
      </div>
      <InvoiceCardInfo />
    </div>
  );
}
