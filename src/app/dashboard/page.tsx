import { InvoiceCard } from "../components/invoiceCard";
import { InvoiceForm } from "../components/invoiceForm";
export default function InvoiceSection() {
  return (
    <>
      <div className="w-full h-full flex flex-row gap-5 ">
        <InvoiceCard />
        <InvoiceForm />
      </div>
    </>
  );
}
