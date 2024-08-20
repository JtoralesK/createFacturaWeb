// InvoiceCardMiniTable.js
export function InvoiceCardMiniTable() {
  return (
    <div className="w-1/2  text-right">
      <div className="flex flex-col  rounded-lg">
        <div className="flex justify-between p-2 ">
          <p className="w-1/2 text-left"></p>
          <p className="w-1/2 text-center"></p>
        </div>
        <div>
          <div className="flex justify-between p-1 ">
            <p className="w-1/2">Subtotal:</p>
            <p className="w-1/2 text-center">$10214</p>
          </div>
          <div className="flex justify-between p-1 border-b border-gray-300">
            <p className="w-1/2">Impuestos(0%):</p>
            <p className="w-1/2 text-center">$0</p>
          </div>
          <div className="flex justify-between p-2 border-t-2 border-gray-800">
            <p className="w-1/2 font-bold">Total:</p>
            <p className="w-1/2 text-center font-bold">$10214</p>
          </div>
        </div>
      </div>
    </div>
  );
}
