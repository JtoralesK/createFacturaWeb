export function InvoiceCardInfo() {
  return (
    <>
      <div className="mt-10">
        <p className="font-semibold text-xl">Gracias por confiar en mí</p>
        <div className="w-full flex flex row justify-between mt-4 border-t-2 border-gray-800">
          <div>
            <h5 className="font-semibold">Información de pago</h5>
            <p className="text-sm">Isabel Mercado</p>
            <p className="text-sm">El Banquito</p>
            <p className="text-sm">Cuenta: 0123 4567 8901 2345</p>
            <p className="text-sm">Fecha de pago: 2 de junio 2025</p>
          </div>
          <div>
            <h5 className="font-semibold">Contacto</h5>
            <p className="text-sm">(54) 1124670573</p>
            <p className="text-sm">hola@sitioincreible.com</p>
            <p className="text-sm">Avenida Croacia 2931</p>
            <p className="text-sm">www.sitioincreible.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
