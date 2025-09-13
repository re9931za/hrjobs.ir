import { Avatar, Paper } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import benefits from "../data/benefits.json";
import { HomeAccordions } from "./home/HomeAccordion";
import { HomeTabs } from "./home/HomeTabs";
const AboutMe = () => {
  return (
    <div>
      {/* story */}
      <div className="md:flex gap-10">
        <div className="flex-1">
          <p className="font-bold text-2xl my-5">
            <PermContactCalendarIcon />
            مدیریت مبتکر
          </p>
          <p className="text-justify">
            ما باور داريم كه هر سازماني شايسته آن است كه بهترين نسخه از خود را
            بسازد.شركت توسعه سرمايه انساني شمال توسط تيم HRJOBS با تكيه بر دانش
            روز و درك اصيل از پيچيدگي هاي روابط انساني در سازمانها و كسب و كارها
            در كنار شماست تا فاصله‌ « آنچه هستيد» و « آنچه مي توانيد باشيد» را
            ازميان بردارد.
          </p>
        </div>
        <div className="flex-1 self-center">
          <img src="/assets/logo/logo_1.png" className="w-full h-auto" />
        </div>
      </div>
      {/* team */}
      {/* <div className="bg-gray-200 p-5">
        <p className="font-bold text-center m-5">تیم مدیریتی</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Paper className="flex gap-4 flex-row !p-0 hover:-translate-y-1 duration-300 hover:!ring-1">
            <img
              src="../../public/assets/aboutme/about (1).jpeg"
              className="shadow rounded-s-md  size-[100px] object-cover
               object-center border border-gray"
            />
            <div className="pt-3">
              <p className="font-bold">نام و نام خانوادگی</p>
              <p>توضیحات کوتاه حداکثر دو خط</p>
            </div>
          </Paper>
          <Paper className="flex gap-4 flex-row !p-0 hover:-translate-y-1 duration-300 hover:!ring-1">
            <img
              src="../../public/assets/aboutme/about (1).jpeg"
              className="shadow rounded-s-md  size-[100px] object-cover
               object-center border border-gray"
            />
            <div className="pt-3">
              <p className="font-bold">نام و نام خانوادگی</p>
              <p>توضیحات کوتاه حداکثر دو خط</p>
            </div>
          </Paper>
          <Paper className="flex gap-4 flex-row !p-0 hover:-translate-y-1 duration-300 hover:!ring-1">
            <img
              src="../../public/assets/aboutme/about (1).jpeg"
              className="shadow rounded-s-md  size-[100px] object-cover
               object-center border border-gray"
            />
            <div className="pt-3">
              <p className="font-bold">نام و نام خانوادگی</p>
              <p>توضیحات کوتاه حداکثر دو خط</p>
            </div>
          </Paper>
          <Paper className="flex gap-4 flex-row !p-0 hover:-translate-y-1 duration-300 hover:!ring-1">
            <img
              src="../../public/assets/aboutme/about (1).jpeg"
              className="shadow rounded-s-md  size-[100px] object-cover
               object-center border border-gray"
            />
            <div className="pt-3">
              <p className="font-bold">نام و نام خانوادگی</p>
              <p>توضیحات کوتاه حداکثر دو خط</p>
            </div>
          </Paper>
        </div>
      </div> */}
      {/* target */}
      <div className="p-5">
        <p className="text-center font-bold text-2xl m-5">
          مزایای استفاده از طرح منابع انسانی
        </p>
        <div className="text-center grid gap-5 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Paper className="grid place-items-center sm:grid-cols-2 p-3 hover:!ring-1 hover:!text-shadow-sm group">
              <img
                src={`/assets/aboutme/${index + 1}.svg`}
                className="group-hover:rotate-6 duration-300"
              />
              <div>
                <b>{benefit[0]}</b>
                <br />
                {benefit[1]}
              </div>
            </Paper>
          ))}
        </div>
        <p className=" py-5 mt-5 text-2xl text-center font-extrabold">
          خدمات و محصولات شرکت توسعه سرمایه انسانی شمال
        </p>
        <div className="sm:hidden">
          <HomeAccordions />
        </div>
        <div className="hidden sm:block">
          <HomeTabs />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
