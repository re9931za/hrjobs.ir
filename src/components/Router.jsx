import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Grid, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/services/Services";
import Service1 from "../pages/services/Service1";
import Service2 from "../pages/services/Service2";

//list of menus and sub menus
export let menuData = [
  { name: Home, caption: "خانه", path: "/", sub: [] },
  {
    name: Services,
    caption: "خدمات و محصولات",
    path: "/services/services",
    sub: [
      {
        name: Service1,
        caption: "خدمات مشاوره ای",
        path: "/services/service1",
        sub: [],
      },
      {
        name: Service2,
        caption: "نرم افزارهای HR",
        path: "/services/service2",
        sub: [],
      },
    ],
  },
  { name: AboutMe, caption: "درباره ما", path: "/aboutme", sub: [] },
  {
    name: ContactUs,
    caption: "تماس با ما",
    path: "/contactus",
    sub: [],
  },
];

//create route
export default function Router() {
  return (
    <BrowserRouter>
      <Stack minHeight={"100vh"}>
        <Header />
        <Container sx={{ flexGrow: 1 }}>
          <Routes>
            {menuData.map((x) =>
              x.sub.length === 0 ? (
                <Route path={x.path} element={<x.name />} />
              ) : (
                <>
                  <Route path={x.path} element={<x.name />} />
                  {x.sub.map((sub) => (
                    <Route path={sub.path} element={<sub.name />} />
                  ))}
                </>
              )
            )}
          </Routes>
        </Container>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}
