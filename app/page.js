import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="home-container px-8">
      {/***** box-product ******/}
      <div className="box">
        {/***** box-one image ******/}
        <div className="image-box">
          <Image
            className="box-img"
            src="/monitor.webp"
            width={200}
            height={200}
            alt="product image"
          />
        </div>
        {/***** box-two title ******/}
        <div className="title-box mb-4">
          <h1>LG OLED65BX6LB 65" 4K OLED Smart TV - A Energy Rated</h1>
          <div className="stars flex items-center pt-1">
            <i className="fa-solid fa-star text-yellow-500 fa-xs"></i>
            <i className="fa-solid fa-star text-yellow-500 fa-xs"></i>
            <i className="fa-solid fa-star text-yellow-500 fa-xs"></i>
            <i className="fa-solid fa-star text-yellow-500 fa-xs"></i>
            <i className="fa-solid fa-star text-yellow-500 fa-xs "></i>
            <p className="text-xs text-slate-700 pl-2 pt-1">XX Reviews</p>
          </div>
          {/***** box-three info ******/}
          <div className="info-box">
            <div className="info-box-ul text-sm">
              <div><i className=" pr-2 fa-solid fa-check fa-sm font-semibold"></i>Self-lit pixels</div>
              <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>α7 Gen3 Intelligent Processor 4K</div>
              <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>Transform your TV into a central hub with ThinQ AI</div>
              <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>Dolby Vision IQ & Dolby Atmos</div>
              <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>2 year warranty</div>
            </div>

            <div className="info-box-icons flex gap-2">
              <div className="border w-8 text-center text-zinc-400"><i class="fa-solid fa-heart"></i></div>
              <div className="border w-8 text-center text-zinc-400"><i class="fa-solid fa-chart-simple"></i></div>
            </div>
          </div>
          {/***** box-four price ******/}
          <div className="price-box">
            {/***** price ******/}
            <div className="price">
              <div>
                <div className="price-cut text-sm text-gray-400 font-semibold">RRP £1,799.00</div>
                <div> £1,599.00</div>
              </div>
              <div>Save £200</div>
            </div>
            {/***** stock ******/}
            <div className="line-stock">
              <div className="stock-bar">
                <div className="inStock"></div>
              </div>
              <p className="text-xs stock-text">Last few left</p>
            </div>
            {/***** delivery ******/}
            <div className="delivery text-sm">
              <div> <i className="fa-solid fa-truck pr-2 "></i>Order in the next <b>3:04:27</b> for delivery on <b>3rd March</b></div>
              <div className="delivery-info">
                <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>FREE UK delivery</div>
                <div><i className="pr-2 fa-solid fa-check fa-sm font-semibold"></i>PayPal credit available</div>
              </div>
            </div>
            {/***** but button ******/}
            <button>
              <i className="fa-solid fa-cart-shopping text-gray-100"></i> ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
