import { Container, Paper } from "@mui/material";
import products from "../../data/products.json";
const Service1 = () => {
  return (
    <Container className="mt-5">
      <div>
        <div
          className="grid lg:grid-cols-2 place-items-center gap-5 p-5 text-justify
        bg-[url('assets/services/banner.webp')] bg-cover
        "
        >
          <div>
            <p className="text-center font-bold text-2xl">
              خدمات مشاوره‌ای منابع انسانی{" "}
            </p>
            <p className="my-5">
              خدمات مشاوره‌ای منابع انسانی مثل داشتن یک قطب‌نما برای هدایت
              سازمان در مسیر رشد و بهره‌وری است. این خدمات به شرکت‌ها کمک
              می‌کنند تا با استفاده از تخصص مشاوران، نیروی انسانی خود را به
              بهترین شکل مدیریت کنند. در ادامه، نگاهی بیندازیم به مهم‌ترین
              حوزه‌هایی که مشاوران منابع انسانی پوشش می‌دهند:
            </p>
            <div className="*:mb-3">
              <p className="text-xl font-bold text-center">
                💼 حوزه‌های اصلی خدمات مشاوره منابع انسانی
              </p>
              <p>
                اجرای نظام طبقه بندی مشاغل با مجوز وزارت تعاون، کار و رفاه
                اجتماعی
              </p>
              <p>جذب و استخدام نیرو</p>
              <p>ارزیابی سیستمی عملکرد کارکنان</p>
              <p>آموزش و توسعه کارکنان</p>
              <p>تحلیل و بهینه سازی سیستم های مدیریت منابع انسانی</p>
              <p>
                برنامه ریزی منابع انسانی از طریق کارسنجی (اندازه گیری کار و
                زمان)
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
          <img src="assets/services/IT.gif" alt="" className="max-w-[300px]" />
        </div>
        <p className="text-center font-bold text-2xl m-5">
          خدمات مشاوره ای منابع انسانی
        </p>
        <div className="text-center grid gap-5">
          {products.map((product, index) => (
            <Paper className="grid place-items-center sm:grid-cols-[1fr_2fr] sm:text-justify p-3 hover:!ring-1 hover:!text-shadow-sm group">
              <img
                src={`assets/home/product (${index + 1}).svg`}
                className="group-hover:scale-110 duration-300 max-w-[200px]"
              />
              <div>
                <p className="mt-5 mb-3 font-bold text-xl">{product[0]}</p>
                <br />
                {product[1]}
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service1;
