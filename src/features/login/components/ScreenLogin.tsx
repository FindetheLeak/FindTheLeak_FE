export default function ScreenLogin() {
  return (
    <div className="flex min-h-[1024px] h-screen w-screen flex-col items-center justify-end gap-[236.256px] bg-gradient-to-b from-[#F7F7F7] to-[#DADCE0] pt-[269px] relative lg:min-h-screen lg:gap-[150px] lg:pt-[150px] sm:gap-[100px] sm:pt-[100px]">
      <div className="flex h-[386px] w-[400px] flex-col items-center gap-20 lg:w-[350px] lg:gap-[60px] sm:w-[300px] sm:gap-[50px]">
        <div className="flex flex-col items-center gap-3">
          <div
            className="text-center font-normal text-[32px] leading-[160%] text-[#5F6368] lg:text-[28px] sm:text-[24px]"
            style={{
              fontFamily:
                "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            누구나 하는 버그바운티
          </div>
          <div>
            <svg
              width="324"
              height="45"
              viewBox="0 0 324 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex h-[44.744px] w-[323.34px] items-center justify-center"
            >
              <path
                d="M24.92 7.784H7.168V19.488H23.856V25.648H7.168V43.624H0V1.568H24.92V7.784Z"
                fill="black"
              ></path>
              <path
                d="M35.5604 7.448H27.8324V0H35.5604V7.448ZM35.2244 43.624H28.1684V12.88H35.2244V43.624Z"
                fill="black"
              ></path>
              <path
                d="M65.429 24.696V43.624H58.485V24.696C58.485 20.608 56.861 18.312 53.165 18.312C48.573 18.312 46.557 22.176 46.557 26.88V43.624H39.613V12.88H46.277L46.389 15.68C48.461 13.496 51.149 12.264 53.893 12.264C61.509 12.264 65.429 16.688 65.429 24.696Z"
                fill="black"
              ></path>
              <path
                d="M97.4899 43.68H90.8259L90.6579 41.552C88.6979 43.344 85.5619 44.632 82.5379 44.632C73.9699 44.632 68.3699 37.52 68.3699 28.336C68.3699 19.208 73.9699 12.152 82.5379 12.152C85.6739 12.152 88.6979 13.384 90.4339 15.344V0.335999H97.4899V43.68ZM90.6579 28.392C90.6579 23.352 88.2499 18.256 83.0979 18.256C77.9459 18.256 75.5379 23.352 75.5379 28.392C75.5379 33.376 77.9459 38.472 83.0979 38.472C88.2499 38.472 90.6579 33.432 90.6579 28.392Z"
                fill="black"
              ></path>
              <path
                d="M119.077 43.064C117.117 43.904 114.821 44.352 113.197 44.352C107.429 44.352 104.349 42.056 104.349 36.176V18.76H99.309V12.88H104.349V2.968H111.405V12.88H118.069V18.76H111.405V35.336C111.405 37.408 112.021 38.416 113.981 38.416C114.933 38.416 116.501 38.08 117.621 37.464L119.077 43.064Z"
                fill="black"
              ></path>
              <path
                d="M146.091 24.696V43.624H139.147V24.696C139.147 20.608 137.523 18.312 133.827 18.312C129.235 18.312 127.219 22.176 127.219 26.88V43.624H120.275V0.615999H127.219V15.12C128.955 13.496 131.811 12.264 134.555 12.264C142.171 12.264 146.091 16.688 146.091 24.696Z"
                fill="black"
              ></path>
              <path
                d="M178.432 30.296H156.088C156.424 34.664 159.112 38.64 163.816 38.64C167.344 38.64 170.088 37.016 171.096 34.44L177.536 36.4C175.352 41.888 170.536 44.632 163.872 44.632C154.016 44.632 149.032 36.904 149.032 28.392C149.032 19.264 154.576 12.152 163.816 12.152C173.896 12.152 178.544 19.768 178.432 30.296ZM170.872 24.248C170.424 20.888 167.736 18.088 163.816 18.088C159.728 18.088 156.872 20.72 156.368 24.248H170.872Z"
                fill="black"
              ></path>
              <path
                d="M208.338 43.624H181.794V1.568H188.962V37.408H208.338V43.624Z"
                fill="black"
              ></path>
              <path
                d="M237.803 30.296H215.459C215.795 34.664 218.483 38.64 223.187 38.64C226.715 38.64 229.459 37.016 230.467 34.44L236.907 36.4C234.723 41.888 229.907 44.632 223.243 44.632C213.387 44.632 208.403 36.904 208.403 28.392C208.403 19.264 213.947 12.152 223.187 12.152C233.267 12.152 237.915 19.768 237.803 30.296ZM230.243 24.248C229.795 20.888 227.107 18.088 223.187 18.088C219.099 18.088 216.243 20.72 215.739 24.248H230.243Z"
                fill="black"
              ></path>
              <path
                d="M268.493 43.68H261.829L261.661 41.552C259.701 43.344 256.565 44.632 253.541 44.632C244.973 44.632 239.373 37.52 239.373 28.336C239.373 19.208 244.973 12.152 253.541 12.152C256.677 12.152 259.869 13.384 261.605 15.344L261.829 13.16H268.493V43.68ZM261.661 28.392C261.661 23.352 259.253 18.256 254.101 18.256C248.949 18.256 246.541 23.352 246.541 28.392C246.541 33.376 248.949 38.472 254.101 38.472C259.253 38.472 261.661 33.432 261.661 28.392Z"
                fill="black"
              ></path>
              <path
                d="M279.832 43.624H272.776V0.615999H279.832V24.528L289.576 12.88H298.368L286.552 26.6L300.048 43.624H291.2L279.832 28.896V43.624Z"
                fill="black"
              ></path>
              <path
                d="M323.34 34.72C323.34 40.936 318.636 44.744 311.244 44.744C303.684 44.744 298.924 40.936 298.084 35.112L304.524 33.432C305.084 36.96 307.94 38.92 311.244 38.92C314.324 38.92 316.172 37.688 316.172 35.336C316.172 33.376 314.716 32.256 312.868 31.808L307.716 30.576C302.228 29.288 299.036 26.32 299.036 21.616C299.036 15.12 304.524 12.04 310.46 12.04C317.236 12.04 321.66 14.84 322.892 20.72L316.284 22.456C315.612 19.432 313.204 17.864 310.404 17.864C307.716 17.864 306.092 19.208 306.092 21.224C306.092 22.904 307.436 24.024 309.396 24.472L314.548 25.704C320.036 26.992 323.34 30.184 323.34 34.72Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div
            className="text-center font-normal text-[24px] leading-[160%] text-[#5F6368] lg:text-[20px] sm:text-[18px]"
            style={{
              fontFamily:
                "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            간편로그인으로 빠르게 시작하세요
          </div>
          <div className="flex flex-col items-start gap-4 lg:w-full sm:w-full">
            <button className="flex h-14 w-[400px] cursor-pointer flex-col items-center justify-center gap-[10px] rounded-2xl border border-[#DADCE0] bg-white px-[86px] py-4 lg:h-[52px] lg:w-[350px] lg:px-[70px] lg:py-[14px] sm:h-12 sm:w-[300px] sm:px-[50px] sm:py-3">
              <div className="flex items-center gap-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dc90d7009503b20ff98c53079fe8eaced0bd540e?width=40"
                  alt="Google logo"
                  className="aspect-square h-5 w-5"
                />
                <div
                  className="text-center font-normal text-[20px] text-[#797479] lg:text-[18px] sm:text-base"
                  style={{
                    fontFamily:
                      "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  구글로 시작하기
                </div>
              </div>
            </button>
            <button className="flex h-14 w-[400px] cursor-pointer flex-col items-center justify-center gap-[10px] rounded-2xl border border-[#DADCE0] bg-[#2B3137] px-[86px] py-4 lg:h-[52px] lg:w-[350px] lg:px-[70px] lg:py-[14px] sm:h-12 sm:w-[300px] sm:px-[50px] sm:py-3">
              <div className="flex items-center gap-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-5 w-5"
                >
                  <g clipPath="url(#clip0_96_478)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.9702 0C4.45694 0 0 4.58333 0 10.2535C0 14.786 2.85571 18.6227 6.81735 19.9806C7.31265 20.0827 7.49408 19.76 7.49408 19.4885C7.49408 19.2508 7.47775 18.436 7.47775 17.5871C4.70429 18.1983 4.12673 16.3648 4.12673 16.3648C3.68102 15.1765 3.02061 14.871 3.02061 14.871C2.11286 14.2429 3.08673 14.2429 3.08673 14.2429C4.09367 14.3108 4.62204 15.2954 4.62204 15.2954C5.51327 16.8571 6.94939 16.4158 7.52714 16.1442C7.60959 15.4821 7.87388 15.0237 8.15449 14.7692C5.94245 14.5315 3.6151 13.6488 3.6151 9.71021C3.6151 8.58979 4.01102 7.67312 4.63837 6.96021C4.53939 6.70563 4.19265 5.65292 4.73755 4.24396C4.73755 4.24396 5.57939 3.97229 7.47755 5.29646C8.29022 5.07201 9.12832 4.95784 9.9702 4.95687C10.812 4.95687 11.6702 5.07583 12.4627 5.29646C14.361 3.97229 15.2029 4.24396 15.2029 4.24396C15.7478 5.65292 15.4008 6.70563 15.3018 6.96021C15.9457 7.67312 16.3253 8.58979 16.3253 9.71021C16.3253 13.6488 13.998 14.5144 11.7694 14.7692C12.1327 15.0917 12.4461 15.7027 12.4461 16.6704C12.4461 18.0454 12.4298 19.149 12.4298 19.4883C12.4298 19.76 12.6114 20.0827 13.1065 19.9808C17.0682 18.6225 19.9239 14.786 19.9239 10.2535C19.9402 4.58333 15.4669 0 9.9702 0Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_96_478">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="text-center font-normal text-[20px] text-white lg:text-[18px] sm:text-base"
                  style={{
                    fontFamily:
                      "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  깃허브로 시작하기
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-[133px] w-full flex-col items-center justify-center gap-[19px] py-10 lg:gap-[15px] lg:py-[30px] sm:gap-3 sm:py-5">
        <div className="flex items-center">
          <div
            className="font-normal text-[14px] leading-[140%] text-[#5F6368] sm:text-xs"
            style={{
              fontFamily:
                "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Terms
          </div>
          <div className="flex h-4 w-[33px] flex-col items-start px-4">
            <div className="h-4 w-px shrink-0 bg-[#BDC1C6]" />
          </div>
          <div
            className="font-normal text-[14px] leading-[140%] text-[#5F6368] sm:text-xs"
            style={{
              fontFamily:
                "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Privacy Policy
          </div>
        </div>
        <div
          className="w-full text-center font-normal text-[10px] leading-[140%] text-[#9AA0A6] sm:text-[9px]"
          style={{
            fontFamily:
              "'Goorm Sans OTF', -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Copyright FindtheLeaks, CUK. All rights reserved.
        </div>
      </div>
    </div>
  );
}
