import { PrimaryButton } from "./Button";
import goToSection from "../../utils/navigate";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center overflow-x-clip w-screen">
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen max-w-[1440px]">
          <div className="flex flex-col gap-3 lg:gap-4">
            <p className="font-instrument text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem]">
              Let's launch your project!
            </p>
            <p className="lg:text-lg 2xl:text-xl text-zinc-300">
              Schedule a call with me.
            </p>
          </div>
          <PrimaryButton
            link={"https://cal.com/temitope-famuyiwa"}
            buttonText="Book a call"
          />
          <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3 text-zinc-300">
            <p className="lg:text-lg 2xl:text-xl">Or send me an email</p>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12.7402H20.5M20.5 12.7402L14.5 6.74023M20.5 12.7402L14.5 18.7402"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="mailto:olutemitopefamuyiwa@gmail.com"
              className="lg:text-lg 2xl:text-xl text-white hover:text-primary transition-all duration-300"
            >
              olutemitopefamuyiwa@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col items-center overflow-x-clip w-screen"
      >
        <div className="flex flex-col items-center py-6 md:py-8 lg:py-12 2xl:py-16 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen max-w-[1440px]">
          <div className="flex flex-col items-center gap-4 pt-4 lg:pt-6 2xl:pt-8 border-t border-t-[#484848] w-full">
            <p className="font-instrument text-lg lg:text-xl 2xl:text-2xl uppercase block md:hidden">
              temitope famuyiwa
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-sm lg:text-base text-[#A8A8B5]">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
              <p className="font-instrument text-lg lg:text-xl 2xl:text-2xl uppercase hidden md:block">
                temitope famuyiwa
              </p>
              <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8">
                <a
                  href="mailto:olutemitopefamuyiwa@gmail.com"
                className="bg-[#1c1c1c] rounded-full p-2 xl:p-3 hover:stroke-primary stroke-zinc-300 transition-all duration-300"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7.31152L7.19384 10.7741C7.49349 10.9738 7.64331 11.0737 7.8054 11.1445C7.94927 11.2073 8.10003 11.2529 8.25458 11.2805C8.42869 11.3115 8.60876 11.3115 8.96888 11.3115H15.0311C15.3912 11.3115 15.5713 11.3115 15.7454 11.2805C15.9 11.2529 16.0507 11.2073 16.1946 11.1445C16.3567 11.0737 16.5065 10.9738 16.8062 10.7741L22 7.31152M6.8 20.3115H17.2C18.8802 20.3115 19.7202 20.3115 20.362 19.9845C20.9265 19.6969 21.3854 19.238 21.673 18.6735C22 18.0318 22 17.1917 22 15.5115V9.11152C22 7.43137 22 6.59129 21.673 5.94955C21.3854 5.38507 20.9265 4.92612 20.362 4.6385C19.7202 4.31152 18.8802 4.31152 17.2 4.31152H6.8C5.11984 4.31152 4.27976 4.31152 3.63803 4.6385C3.07354 4.92612 2.6146 5.38507 2.32698 5.94955C2 6.59129 2 7.43137 2 9.11152V15.5115C2 17.1917 2 18.0318 2.32698 18.6735C2.6146 19.238 3.07354 19.6969 3.63803 19.9845C4.27976 20.3115 5.11984 20.3115 6.8 20.3115Z"
                      stroke="inherit"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="bg-[#1c1c1c] rounded-full p-2 xl:p-3 hover:fill-primary fill-zinc-300 transition-all duration-300"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3663 0.311523H1.9147C0.93501 0.311523 0.142822 1.08496 0.142822 2.04121V22.5771C0.142822 23.5334 0.93501 24.3115 1.9147 24.3115H22.3663C23.3459 24.3115 24.1428 23.5334 24.1428 22.5818V2.04121C24.1428 1.08496 23.3459 0.311523 22.3663 0.311523ZM7.26313 20.7631H3.70063V9.30684H7.26313V20.7631ZM5.48188 7.7459C4.33813 7.7459 3.4147 6.82246 3.4147 5.6834C3.4147 4.54434 4.33813 3.6209 5.48188 3.6209C6.62095 3.6209 7.54438 4.54434 7.54438 5.6834C7.54438 6.81777 6.62095 7.7459 5.48188 7.7459ZM20.5944 20.7631H17.0366V15.1943C17.0366 13.8678 17.0131 12.1568 15.185 12.1568C13.3334 12.1568 13.0522 13.6053 13.0522 15.1006V20.7631H9.49907V9.30684H12.9116V10.8725H12.9584C13.4319 9.97246 14.5944 9.0209 16.3241 9.0209C19.9288 9.0209 20.5944 11.3928 20.5944 14.4771V20.7631Z"
                      fill="inherit"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="bg-[#1c1c1c] rounded-full p-2 xl:p-3 hover:fill-primary fill-zinc-300 transition-all duration-300"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1206_625)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2312 23.3115L10.6818 15.4016L3.73463 23.3115H0.795532L9.37785 13.5426L0.795532 1.31152H8.34148L13.5717 8.76654L20.125 1.31152H23.0641L14.8801 10.628L23.7772 23.3115H16.2312ZM19.5042 21.0815H17.5255L5.00388 3.54152H6.98287L11.9979 10.5647L12.8651 11.7834L19.5042 21.0815Z"
                        fill="inherit"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1206_625">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.285767 0.311523)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="bg-[#1c1c1c] rounded-full p-2 xl:p-3 hover:fill-primary fill-zinc-300 transition-all duration-300"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1206_633)">
                      <path
                        d="M12.4286 0.311523C19.056 0.311523 24.4286 5.68411 24.4286 12.3115C24.4286 18.9389 19.056 24.3115 12.4286 24.3115C5.80117 24.3115 0.428589 18.9389 0.428589 12.3115C0.428589 5.68411 5.80117 0.311523 12.4286 0.311523ZM17.3348 7.53516C16.8835 7.54314 16.1905 7.7849 12.8583 9.1709C11.691 9.65644 9.35803 10.6606 5.86023 12.1846C5.29239 12.4104 4.99486 12.6316 4.96765 12.8477C4.91564 13.2625 5.51308 13.3915 6.26453 13.6357C6.87717 13.8349 7.70126 14.0678 8.12976 14.0771C8.51842 14.0855 8.95261 13.9255 9.43152 13.5967C12.6999 11.3905 14.3871 10.275 14.493 10.251C14.5677 10.234 14.671 10.2132 14.7411 10.2754C14.8112 10.3377 14.8042 10.4555 14.7968 10.4873C14.7374 10.7405 11.6718 13.5297 11.4911 13.7168C10.8159 14.4181 10.0477 14.8472 11.2323 15.6279C12.2574 16.3034 12.8541 16.7346 13.91 17.4268C14.585 17.8692 15.1145 18.3942 15.8114 18.3301C16.132 18.3004 16.4635 17.9986 16.6317 17.0996C17.0293 14.9743 17.8105 10.3701 17.9911 8.47266C18.0069 8.30641 17.9866 8.0934 17.9706 8C17.9546 7.90661 17.921 7.77327 17.7997 7.6748C17.6559 7.55836 17.434 7.53341 17.3348 7.53516Z"
                        fill="inherit"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1206_633">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.428589 0.311523)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
