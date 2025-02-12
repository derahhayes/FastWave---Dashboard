import { DownloadIcon, PdfIcon, PrintIcon, SendMessageIcon } from "@/assets/icons";
import Link from "next/link";

const productList = [
  {
    meetname: "Future Challengers",
    events: "50 Free, 100 Back, 50 Fly",
    quantity: 3,
    pricePerevent: 8,
    total: 24,
  },
  {
    meetname: "Aspiring Champs",
    events: "50 Back, 100 Fly, 200 Free",
    quantity: 3,
    pricePerevent: 8,
    total: 24,
  },
];

const InVoiceTwo = () => {
  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-end gap-3.5">
        <button className="inline-flex items-center gap-2.5 rounded-lg bg-green-light-1 px-4 py-[7px] font-medium text-white hover:bg-opacity-90">
          <PrintIcon />
          Print
        </button>

        <button className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-4 py-[7px] font-medium text-white hover:bg-opacity-90">
          <PdfIcon />
          Save As PDF
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        <div>
          <p className="mb-1.5 font-medium text-dark dark:text-white">
            Billing From:
          </p>
          <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
            Another Munster Swim Club
          </h4>
          <Link href="#" className="block">
            <span className="font-medium text-dark dark:text-white">
              Email:{" "}
            </span>
            treasurer@swimclub.com
          </Link>
          <span className="mt-1.5 block">
            <span className="font-medium text-dark dark:text-white">
              Address:{" "}
            </span>
            72 Washington St. Cork.
          </span>
        </div>

        <div>
          <p className="mb-1.5 font-medium text-dark dark:text-white">
            Billing To:
          </p>
          <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
            Swim Club Munster
          </h4>
          <Link href="#" className="block">
            <span className="font-medium text-dark dark:text-white">
              Email:{" "}
            </span>
            contact@swimclubmunster.com
          </Link>
          <span className="mt-1.5 block">
            <span className="font-medium text-dark dark:text-white">
              Address:{" "}
            </span>
             Old Birr Road, Nenagh
          </span>
        </div>
      </div>

      <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-dark-3 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 sm:border-b-0">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Invoice ID :
          </h5>
          <span className="text-body-sm font-medium"> #STK83084398239 </span>
        </div>

        <div className="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 sm:border-b-0 sm:border-r">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Date Issued :
          </h5>
          <span className="text-body-sm font-medium"> 29, Nov 2027 </span>
        </div>

        <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 xsm:border-b-0">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Due Date :
          </h5>
          <span className="text-body-sm font-medium"> 29, Dec 2027 </span>
        </div>

        <div className="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Due Amount :
          </h5>
          <span className="text-body-sm font-medium"> €48 </span>
        </div>
      </div>

      <div className="grid border border-stroke dark:border-dark-3">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full min-w-[670px] border-collapse">
            {/* <!-- table header start --> */}
            <thead className="border-b border-stroke dark:border-dark-3">
              <tr className="grid grid-cols-12 py-3.5 pl-5 pr-6">
                <th className="col-span-3 text-left font-medium text-dark dark:text-white">
                  Meet Name
                </th>
                <th className="col-span-4 text-left font-medium text-dark dark:text-white">
                  Events
                </th>
                <th className="col-span-2 text-left font-medium text-dark dark:text-white">
                  Quantity
                </th>
                <th className="col-span-2 text-left font-medium text-dark dark:text-white">
                  Price Per Event
                </th>
                <th className="col-span-1 text-right font-medium text-dark dark:text-white">
                  Total
                </th>
              </tr>
            </thead>
            {/* <!-- table header end --> */}

            <tbody>
              {productList.map((item, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-dark-3"
                >
                  <td className="col-span-3 font-medium">{item.meetname}</td>
                  <td className="col-span-4 font-medium">{item.events}</td>
                  <td className="col-span-2 font-medium">{item.quantity}</td>
                  <td className="col-span-2 font-medium">
                    €{item.pricePerevent}
                  </td>
                  <td className="col-span-1 text-right font-medium">
                    €{item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <!-- total price start --> */}
        <div className="flex justify-end p-6">
          <div className="w-full max-w-65">
            <div className="flex flex-col gap-4">
              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>Subtotal</span>
                <span>€48</span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>Shipping Cost (+)</span>
                <span>€0.00</span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>
                  Coupon Discount (if applicable)
                  <span className="text-green-light-1">(10%)</span>
                </span>
                <span>€0</span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>
                  Vat (if appplicable) <span className="text-[#FB5454]">(5%)</span>
                </span>
                <span>€0</span>
              </p>
            </div>

            <p className="mt-4 flex justify-between border-t border-stroke pt-5 dark:border-dark-3">
              <span className="font-medium text-dark dark:text-white">
                Total
              </span>
              <span className="font-bold text-green-light-1">€48</span>
            </p>

            <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">    
            <button className="flex items-center justify-center rounded-lg border border-primary px-7.5 py-2.5 text-center font-medium text-primary hover:bg-blue-light-5 dark:hover:border-primary dark:hover:bg-blue-light-3 dark:hover:text-primary">
              <DownloadIcon />
              Download
            </button>

            <button className="flex items-center justify-center rounded-lg bg-primary px-7.5 py-2.5 text-center font-medium text-gray-2 hover:bg-opacity-90">
              <SendMessageIcon/>
                Send Invoice
            </button>
            </div>
          </div>
        </div>
        {/* <!-- total price end --> */}
      </div>
    </div>
  );
};

export default InVoiceTwo;
