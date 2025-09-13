import { Container, Paper } from "@mui/material";
import productsIT from "../../data/productsIT.json";
const Service2 = () => {
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
              انواع نرم افزارها به همراه هوش مصنوعی
            </p>
            <p className="my-5">
              هوش مصنوعی به مجموعه‌ای از الگوریتم‌ها و فناوری‌ها گفته می‌شود که
              به سیستم‌ها امکان یادگیری، تحلیل و تصمیم‌گیری مشابه انسان را
              می‌دهند. در منابع انسانی، از AI برای تحلیل داده‌های کارکنان،
              پیش‌بینی رفتارها، خودکارسازی کارهای اداری، افزایش دقت در استخدام و
              … استفاده می‌شود.
            </p>
            <p className="text-xl font-bold text-center">
              مزایای AI در منابع انسانی
            </p>
            <ul>
              کاهش زمان استخدام
              <li className="text-sm mb-3">
                با استفاده از ابزارهای مبتنی بر AI، غربال‌گری رزومه‌ها با سرعت و
                دقت بالا انجام می‌شود.
              </li>
            </ul>
            <ul>
              بهبود تجربه کارکنان
              <li className="text-sm mb-3">
                با چت ‌بات‌ها و سیستم‌های هوشمند پاسخ‌گویی، تجربه کارمندان در
                تعامل با واحد HR بهبود می‌یابد.
              </li>
            </ul>
            <ul>
              تحلیل داده‌های منابع انسانی
              <li className="text-sm mb-3">
                AI می‌تواند از داده‌های رفتاری و عملکردی کارکنان تحلیل‌هایی
                ارزشمند برای مدیران تولید کند.
              </li>
            </ul>
            <ul>
              شخصی‌سازی آموزش‌ها
              <li className="text-sm mb-3">
                سیستم‌های یادگیری هوشمند، محتواهای آموزشی را بر اساس نیاز هر
                کارمند توصیه می‌کنند.
              </li>
            </ul>
          </div>
          <img
            src="assets/services/product.webp"
            alt=""
            className="max-w-[300px]"
          />
        </div>
        <p className="text-center font-bold text-2xl m-5">
          نرم افزارهای سیستم های منابع انسانی
        </p>
        <div className="text-center grid gap-5">
          {productsIT.map((product, index) => (
            <Paper className="grid place-items-start md:grid-cols-[1fr_2fr] md:text-justify p-3 hover:!ring-1 hover:!text-shadow-sm group">
              <img
                src={`assets/services/productsIT (${index + 1}).gif`}
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

export default Service2;
