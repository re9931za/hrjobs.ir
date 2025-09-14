import { Container, Link, Paper } from "@mui/material";
import { SocialMedia } from "./SocialMedia";

const Footer = () => {
  return (
    <Paper
      sx={{
        padding: 0,
        margin: 0,
        marginTop: 5,
        borderRadius: 0,
        fontSize: "small",
      }}
    >
      {" "}
      <Container>
        <div className="grid text-center sm:text-right sm:grid-cols-2">
          <div className="pt-5 *:px-5 *:py-1 *:block">
            <a href="/">خانه</a>
            <a href="/aboutme">درباره ما</a>
            <a href="/contactus">تماس با ما</a>
          </div>
          <div className="pt-5 *:px-5 *:py-1 *:block">
            <a href="/services/services">خدمات و محصولات</a>
            <a href="/services/service1">خدمات مشاوره ای</a>
            <a href="/services/service2">نرم افزارهای HR</a>
          </div>
        </div>

        <div className={`shadow-xl`}>
          <hr className="text-gray-400 shadow-2xs" />
          <div className="p-3 sm:flex sm:justify-between space-y-2">
            <p className="text-xs text-center self-center sm:text-righ">
              کلیه حقوق مادی و معنوی این وب‌سایت متعلق به اچ آر جابز می‌باشد.
              HRJOBS(1404)
            </p>
            <SocialMedia />
          </div>
        </div>
      </Container>
    </Paper>
  );
};

export default Footer;
