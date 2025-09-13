import products from "../../data/products.json";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function HomeGrid() {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
      {products.map((item, index) => {
        return (
          <Paper className="flex flex-col items-center">
            <img
              src={`../../../public/assets/home/product (${index + 1}).svg`}
              alt=""
              className="w-1/4"
            />
            <p className="font-bold text-xl my-3">{item[0]}</p>
            <p className="grow text-justify">{item[1]}</p>
            <Button
              endIcon={<ArrowBackIcon />}
              variant="contained"
              className="self-end !text-xs !mt-5"
            >
              توضیح بیشتر
            </Button>
          </Paper>
        );
      })}
    </div>
  );
}
