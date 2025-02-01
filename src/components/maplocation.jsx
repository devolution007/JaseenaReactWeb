export default function Addresses() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(271deg, #BDA10E 32%, #9F6310 100%)",
      }}
      className="flex mb-[100px]"
    >
      {/* Left Side Image */}
      <div className="w-3/12">
        <img
          src="https://magnetmakerz.com/wp-content/uploads/2025/01/image-28.png"
          alt="City Skyline"
          className="h-[322px] w-full"
        />
      </div>

      {/* Right Side Addresses */}
      <div className="w-3/4 text-white p-6 text-left">
        <h2 className="text-3xl font-bold mb-6">Addresses</h2>
        <div className="grid grid-cols-6 gap-6">
          {/* UAE */}
          <div>
            <h3 className="font-bold pb-[20px]">UNITED ARAB EMIRATES</h3>
            <p className="text-[12px]">JASEENA TRADING CO. LLC</p>
            <p className="text-[12px]">P.O.Box: 55957</p>
            <p className="text-[12px]">#1007, 10th floor, E</p>
            <p className="text-[12px]">
              NBD New Building, Deira Creek Road, Al Ras, Deira, Dubai, United
              Arab Emirates
            </p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +971 4 255 5901
            </p>
            <p className="text-[12px]">
              <strong>Fax:</strong> +971 4 255 5902
            </p>
          </div>

          {/* Oman */}
          <div>
            <h3 className="font-bold pb-[20px]">OMAN</h3>
            <p className="text-[12px]">MUSCAT CITY GIFT</p>
            <p className="text-[12px]">
              Office 502, next to Shell Gas Station,
            </p>
            <p className="text-[12px]">Wadi Kabeer, MBD Area</p>
            <p className="text-[12px]">Muscat, Sultanate of Oman</p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +968 9614 1910
            </p>
            <p className="text-[12px]">
              <strong>Office Tel:</strong> +968 2472 7494
            </p>
          </div>

          {/* Saudi Arabia */}
          <div>
            <h3 className="font-bold pb-[20px]">SAUDI ARABIA</h3>
            <p className="text-[12px]">ABDULLAH SAEED</p>
            <p className="text-[12px]">AL MOGRIBI TRADING EST</p>
            <p className="text-[12px]">Block #3, Area 3040,</p>
            <p className="text-[12px]">
              Istanbul Street North, As Sulay, Riyadh, Kingdom of Saudi Arabia
            </p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +966 11 270 1115
            </p>
          </div>

          {/* Qatar */}
          <div>
            <h3 className="font-bold pb-[20px]">QATAR</h3>
            <p className="text-[12px]">JASEENA TRADING CO. WLL</p>
            <p className="text-[12px]">P.O. Box: 17180, Floor 22,</p>
            <p className="text-[12px]">Tornado Tower, West Bay</p>
            <p className="text-[12px]">Doha, Qatar</p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +974 4429 4994
            </p>
          </div>

          {/* Singapore 1 */}
          <div>
            <h3 className="font-bold pb-[20px]">SINGAPORE</h3>
            <p className="text-[12px]">JASINA COSMETICS PTE LTD</p>
            <p className="text-[12px]">15 Changi North St 1,</p>
            <p className="text-[12px]">#01-16/17</p>
            <p className="text-[12px]">ILofts@changi</p>
            <p className="text-[12px]">Singapore 498765</p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +65 6548 4862
            </p>
            <p className="text-[12px] ">
              <strong>Fax:</strong> +65 6543 4863
            </p>
          </div>

          {/* Singapore 2 */}
          <div>
            <h3 className="font-bold pb-[20px]">SINGAPORE</h3>
            <p className="text-[12px]">JASINA COSMETICS PTE LTD</p>
            <p className="text-[12px]">Branch: #01-11, High Street Centre,</p>
            <p className="text-[12px]">North Bridge Road</p>
            <p className="text-[12px]">Singapore 179094</p>
            <p className="text-[12px] mt-3">
              <strong>Tel:</strong> +65 6338 5266
            </p>
            <p className="text-[12px]">
              <strong>Fax:</strong> +65 6337 1634
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
