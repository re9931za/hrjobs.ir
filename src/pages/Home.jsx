import Button from "@mui/material/Button";
import { HomeGrid } from "./home/HomeGrid";
import { SliderBanner } from "./home/SliderBanner";
import { SliderProducts } from "./home/SliderProducts";
import { HomeAccordions } from "./home/HomeAccordion";
import { HomeTabs } from "./home/HomeTabs";
import Link from "@mui/material/Link";
import { Paper } from "@mui/material";

const Home = () => {
  return (
    <div>
      {/* slider */}
      <SliderBanner />
      <p className="font-bold text-2xl mt-10 text-center">
        از مشاوره، تدوین، پیاده‌سازی ابزارها و پایش در کنار شما خواهیم بود
      </p>
      <p className="text-center">
        مشاوران مجرب ما دوره‌های آموزشی مورد نیاز را تمام و کمال به کارشناسان
        شما آموزش می‌دهند تا در آینده راهبران کسب و کار شما با قدرت بیشتری
        فعالیت کنند
      </p>
      <div className="my-10 grid sm:grid-cols-2 items-center gap-10">
        <Paper className="">
          <p className="py-3 text-xl font-bold text-center">
            اهمیت مدیریت سرمایه انسانی
          </p>
          <ul className="*:p-1">
            <li>افزایش بهره‌وری سازمان از طریق توسعه کارکنان</li>
            <li>نقش سرمایه انسانی در نوآوری و مزیت رقابتی</li>
            <li>جذب و نگهداشت استعدادها؛ چالش حیاتی مدیران منابع انسانی</li>
            <li>سرمایه‌گذاری در آموزش و توسعه؛ کلید رشد پایدار</li>
            <li>ایجاد فرهنگ سازمانی مثبت با تمرکز بر سرمایه انسانی</li>
            <li>مدیریت عملکرد و انگیزش کارکنان برای تحقق اهداف استراتژیک</li>
            <li>تأثیر سرمایه انسانی بر رضایت مشتری و کیفیت خدمات</li>
            <li>سازگاری با تغییرات محیطی از طریق توانمندسازی نیروی انسانی</li>
            <li>نقش سرمایه انسانی در تحقق مسئولیت اجتماعی سازمان</li>
            <li>تحلیل داده‌های منابع انسانی برای تصمیم‌گیری هوشمندانه</li>
          </ul>
        </Paper>
        <img
          src="assets/home/HR.jpg"
          className="drop-shadow-xl  drop-shadow-gray-800"
        />
      </div>
      {/* apps description */}
      <div className=" p-5 my-5">
        <p className="  mt-10 mb-5 text-center font-bold text-xl">
          خدمات و محصولات اچ آر جابز
        </p>
        <div className="sm:hidden">
          <HomeAccordions />
        </div>
        <div className="hidden sm:block">
          <HomeTabs />
        </div>
        <p className="  mt-10 mb-5 text-center font-bold text-xl">
          شرکت هایی که افتخار همکاری با آنها داشتیم
        </p>
        <SliderProducts />
      </div>
      {/* video */}
      <div className="sm:grid grid-cols-[1fr_2fr] items-center text-center sm:text-start gap-x-10">
        <div className="my-10 space-y-5 ">
          <h2 className="font-extrabold bg-blue-200 text-center py-5 rounded-lg">
            توسعه سرمایه انسانی شمال همراه با تعالی سازمان
          </h2>
          <p>شما شایسته آن هستید که بهترین نسخه از خود را بسازید</p>
          <Link
            href="/contactus"
            variant="button"
            className="lg:w-full  block text-left text-blue-200"
          >
            با ما در ارتباط باشید
          </Link>
        </div>

        <video
          controls
          src="assets/home/video.mp4"
          className="cursor-pointer rounded-xl w-full"
        ></video>
      </div>
    </div>
  );
};

export default Home;
