import { Button, Paper, TextField, Typography } from "@mui/material";
const ContactUs = () => {
  return (
    <div>
      {/* addr */}
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mt-5">
        {/* <Paper>
          <div className="flex items-center gap-5">
            <div className="[&_*]:size-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="#66e1ff"
                    d="M12.478 1H2.913A1.913 1.913 0 0 0 1 2.913v18.174A1.913 1.913 0 0 0 2.913 23h9.565a1.91 1.91 0 0 0 1.913-1.913V2.913A1.914 1.914 0 0 0 12.478 1"
                  />
                  <path
                    fill="#c2f3ff"
                    d="M14.391 3.958V2.913A1.914 1.914 0 0 0 12.478 1H2.913A1.913 1.913 0 0 0 1 2.913v14.436z"
                  />
                  <path
                    fill="#ffdda1"
                    d="M23 7.696v9.565h-4.782a4.11 4.11 0 0 1-3.827-3.826h-2.87a1.913 1.913 0 1 1 0-3.826h2.87V4.348h1.31c.393.003.777.122 1.1.344l4.286 3.004z"
                  />
                  <path
                    fill="#ffdda1"
                    d="m21.086 7.696l-4.285-3.004a1.97 1.97 0 0 0-1.1-.344h-1.31v2.391h1.31c.392.003.776.123 1.1.345l4.285 3.003H23V7.696z"
                  />
                  <path
                    fill="#fff"
                    d="M1 19.174v1.913A1.913 1.913 0 0 0 2.913 23h9.565a1.913 1.913 0 0 0 1.913-1.913v-1.913z"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.39 4.348h1.311c.392 0 .775.12 1.096.346l4.29 3.002h1.912M23 17.26h-4.782a4.11 4.11 0 0 1-3.827-3.825h-2.87a1.913 1.913 0 0 1 0-3.826h5.262m-2.392 9.565H1"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    d="M7.696 21.326a.24.24 0 0 1 0-.478"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    d="M7.695 21.326a.24.24 0 0 0 0-.478"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.391 17.711v3.376A1.914 1.914 0 0 1 12.478 23H2.913A1.913 1.913 0 0 1 1 21.087V2.913A1.913 1.913 0 0 1 2.913 1h9.565a1.913 1.913 0 0 1 1.913 1.913v6.696M7.695 3.87v4.304"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.26 5.783L7.697 3.87L9.13 5.783M7.695 16.304V12m1.435 2.391l-1.434 1.913l-1.435-1.913"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div>
                <p className="font-bold">عنوان</p>
                <p>توضیحات</p>
              </div>
            </div>
          </div>
        </Paper> */}
        <Paper>
          <div className="flex items-center gap-5">
            <div className="[&_*]:size-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="#e3e3e3"
                    d="M13.435 19.174A7.15 7.15 0 0 0 14.738 23H9.26a7.16 7.16 0 0 0 1.303-3.826z"
                  />
                  <path
                    fill="#fff"
                    d="M23 16.304v1.913a.957.957 0 0 1-.957.957H1.957A.956.956 0 0 1 1 18.217v-1.913z"
                  />
                  <path
                    fill="#66e1ff"
                    d="M23 1.957v14.347H1V1.957A.957.957 0 0 1 1.957 1h20.087a.956.956 0 0 1 .956.957"
                  />
                  <path
                    fill="#c2f3ff"
                    d="M1 1.957v14.347h4.175L20.48 1H1.957A.957.957 0 0 0 1 1.957"
                  />
                  <path
                    fill="#e3e3e3"
                    d="M16.302 5.783h-8.61a.957.957 0 0 0-.956.956v4.783a.957.957 0 0 0 .957.956h8.609a.957.957 0 0 0 .956-.956V6.739a.956.956 0 0 0-.956-.956"
                  />
                  <path
                    fill="#fff"
                    d="M7.696 5.783a.957.957 0 0 0-.957.956v4.783a.957.957 0 0 0 .957.956H9l6.696-6.695z"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.305 5.783h-8.61a.957.957 0 0 0-.956.956v4.783a.957.957 0 0 0 .957.956h8.609a.956.956 0 0 0 .956-.956V6.739a.956.956 0 0 0-.957-.956"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.74 7.217l4.304 2.2a1.91 1.91 0 0 0 1.913 0l4.304-2.2M9.262 23a7.16 7.16 0 0 0 1.303-3.826M14.737 23a7.16 7.16 0 0 1-1.302-3.826M7.695 23h8.609M1 16.304h22"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M22.044 1H1.957A.957.957 0 0 0 1 1.957v16.26a.957.957 0 0 0 .957.957h20.087a.956.956 0 0 0 .956-.957V1.957A.956.956 0 0 0 22.044 1"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div>
                <p className="font-bold">ایمیل</p>
                <p>info@hrjobs.ir</p>
              </div>
            </div>
          </div>
        </Paper>
        <Paper>
          <div className="flex items-center gap-5">
            <div className="[&_*]:size-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="#ff808c"
                    d="M16.305 1a5.74 5.74 0 0 1 5.739 5.74c0 2.432-3.38 7.608-4.952 9.886a.956.956 0 0 1-1.575 0c-1.572-2.278-4.952-7.454-4.952-9.887A5.74 5.74 0 0 1 16.305 1"
                  />
                  <path
                    fill="#ffbfc5"
                    d="M16.305 17.038a.96.96 0 0 1-.788-.413c-1.572-2.277-4.952-7.453-4.952-9.886A5.74 5.74 0 0 1 16.305 1z"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.957 15.348V23"
                    stroke-width="1"
                  />
                  <path
                    fill="#ffdda1"
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.304 22.044a2.87 2.87 0 0 0-2.87-2.87H9.849a2.87 2.87 0 0 0-2.87-2.87H1.957v5.74z"
                    stroke-width="1"
                  />
                  <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.979 19.174h3.586M16.305 1a5.74 5.74 0 0 1 5.739 5.74c0 2.432-3.38 7.608-4.952 9.886a.956.956 0 0 1-1.575 0c-1.572-2.278-4.952-7.454-4.952-9.887A5.74 5.74 0 0 1 16.305 1"
                    stroke-width="1"
                  />
                  <path
                    fill="#fff"
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.304 8.652a1.913 1.913 0 1 0 0-3.826a1.913 1.913 0 0 0 0 3.826"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div>
                <p className="font-bold">آدرس</p>
                <p>استان مازندران - شهرستان ساری</p>
              </div>
            </div>
          </div>
        </Paper>
      </div>

      {/* form */}
      {/* <div className="my-10 md:grid grid-cols-2 items-center gap-10">
        <Paper className="">
          <div className="flex flex-col gap-y-8 p-5">
            <p className="font-bold text-center md:mt-5">تماس با ما</p>
            <p>
              لطفاً شماره تماس خود را ثبت کنید تا کارشناسان ما، در اولین فرصت با
              شما تماس بگیرند.
            </p>
            <TextField
              variant="standard"
              label="نام و نام خانوادگی"
              fullWidth="true"
              className="!block"
            />
            <TextField
              variant="standard"
              label="شماره تماس / ایمیل"
              fullWidth="true"
              className="!block"
            />
            <TextField
              variant="standard"
              label="پیام"
              fullWidth="true"
              className="!block"
              multiline
              // rows={4}
            />
            <div className="w-1/2 grid grid-cols-2 gap-5">
              <Button variant="contained">تائید</Button>
              <Button variant="contained">انصراف</Button>
            </div>
          </div>
        </Paper>
        <img
          src="/public/assets/images/gradient-image-3.svg"
          className="hidden md:block drop-shadow-2xl drop-shadow-blue-800"
        />
      </div> */}
    </div>
  );
};

export default ContactUs;
