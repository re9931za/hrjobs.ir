import { Container, Paper } from "@mui/material";
import products from "../../data/products.json";
const Service1 = () => {
  return (
    <Container className="mt-5">
      <div>
        <div
          className="grid lg:grid-cols-2 place-items-center gap-5 p-5 text-justify
        bg-[url('../../../public/assets/services/banner.webp')] bg-cover
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
            <p className="text-xl font-bold text-center">
              💼 حوزه‌های اصلی خدمات مشاوره منابع انسانی
            </p>
            <ul>
              استخدام و جذب نیرو{" "}
              <li className="text-sm mb-3">
                طراحی فرآیندهای جذب، بررسی رزومه‌ها، مصاحبه‌های تخصصی و انتخاب
                بهترین گزینه‌ها برای موقعیت‌های شغلی
              </li>
            </ul>
            <ul>
              آموزش و توسعه کارکنان{" "}
              <li className="text-sm mb-3">
                برگزاری دوره‌های آموزشی تخصصی، طراحی مسیرهای رشد شغلی و ارتقاء
                مهارت‌های کارکنان
              </li>
            </ul>
            <ul>
              ارزیابی عملکرد{" "}
              <li className="text-sm mb-3">
                طراحی سیستم‌های ارزیابی عملکرد، تعیین شاخص‌های کلیدی و ارائه
                بازخورد مؤثر برای بهبود عملکرد فردی و سازمانی
              </li>
            </ul>
            <ul>
              برون‌سپاری منابع انسانی{" "}
              <li className="text-sm mb-3">
                واگذاری کامل یا بخشی از وظایف منابع انسانی به شرکت‌های مشاوره
                برای کاهش هزینه‌ها و افزایش بهره‌وری
              </li>
            </ul>
            <ul>
              جبران خدمات و مزایا
              <li className="text-sm mb-3">
                طراحی نظام‌های حقوق و مزایا بر اساس مدل‌های بین‌المللی
              </li>
            </ul>
            <ul>
              شناسنامه شغلی و گریدینگ
              <li className="text-sm mb-3">
                تهیه شرح وظایف دقیق، تحلیل مشاغل و تعیین سطح‌بندی برای
                موقعیت‌های شغلی مختلف
              </li>
            </ul>
          </div>
          <img
            src="../../../public/assets/services/IT.gif"
            alt=""
            className="max-w-[400px]"
          />
        </div>
        <p className="text-center font-bold text-2xl m-5">
          خدمات مشاوره ای منابع انسانی
        </p>
        <div className="text-center grid gap-5">
          {products.map((product, index) => (
            <Paper className="grid place-items-center md:grid-cols-[1fr_2fr] md:text-justify p-3 hover:!ring-1 hover:!text-shadow-sm group">
              <img
                src={`../../public/assets/home/product (${index + 1}).svg`}
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
