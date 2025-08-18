import figma from "../assets/logos/tools/figma.svg";
import framer from "../assets/logos/tools/framer_logo.svg";
import claude from "../assets/logos/tools/claude.svg";
import jitter from "../assets/logos/tools/jitter_logo.svg";
import miro from "../assets/logos/tools/miro.svg";
import ux_Pilot from "../assets/logos/tools/ux_pilot.svg";

export const CaseStudies = [
  {
    id: 1,
    image: "https://baticali.sirv.com/Temi/Dreamtter%20reel%202.mp4",
    title:
      "Dreamtter — Built a mobile-first productivity app that guides users with AI",
    description:
      "I redesigned Dreamtter, a mobile app that helps users achieve their goals through dream journaling, habit tracking, and an AI mentor.",
    features: ["Productivity", "Mobile App", "Design System"],
    industry: {
      title: "AI",
      logo: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1206_288)">
            <path
              d="M2.99999 15.4069V12.0736M2.99999 5.40694V2.07361M1.33333 3.74027H4.66666M1.33333 13.7403H4.66666M8.66666 2.74028L7.51054 5.74618C7.32253 6.235 7.22853 6.47941 7.08235 6.685C6.95279 6.86721 6.79359 7.0264 6.61138 7.15596C6.4058 7.30214 6.16139 7.39615 5.67257 7.58416L2.66666 8.74027L5.67257 9.89639C6.16139 10.0844 6.4058 10.1784 6.61139 10.3246C6.79359 10.4541 6.95279 10.6133 7.08235 10.7956C7.22853 11.0011 7.32253 11.2455 7.51054 11.7344L8.66666 14.7403L9.82278 11.7344C10.0108 11.2455 10.1048 11.0011 10.251 10.7956C10.3805 10.6133 10.5397 10.4541 10.7219 10.3246C10.9275 10.1784 11.1719 10.0844 11.6608 9.89639L14.6667 8.74027L11.6608 7.58416C11.1719 7.39615 10.9275 7.30214 10.7219 7.15596C10.5397 7.0264 10.3805 6.86721 10.251 6.685C10.1048 6.47941 10.0108 6.235 9.82278 5.74618L8.66666 2.74028Z"
              stroke="#EA6DE8"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1206_288">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.740234)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  },
  {
    id: 2,
    image: "https://baticali.sirv.com/Temi/medics-partners-reel%20(1).mp4",
    title:
      "Medics Partners — Designed a custom EMR system that connects hospital teams",
    description:
      "I designed a custom Electronic Medical Record (EMR) platform that unified operations across front desk, finance, and care providers.",
    features: ["EMR", "UX RESEARCH", "SAAS", "WEB DESIGN"],
    industry: {
      title: "HealthTECH",
      logo: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1206_300)">
            <path
              d="M3.99998 14.1316H5.74017C5.96706 14.1316 6.19257 14.1586 6.41252 14.2126L8.25124 14.6595C8.65021 14.7567 9.06583 14.7661 9.46896 14.6878L11.502 14.2923C12.039 14.1877 12.533 13.9305 12.9202 13.5539L14.3586 12.1547C14.7693 11.7558 14.7693 11.1085 14.3586 10.7089C13.9887 10.3492 13.4031 10.3087 12.9847 10.6137L11.3084 11.8368C11.0683 12.0123 10.7762 12.1068 10.4757 12.1068H8.85698L9.88736 12.1067C10.4681 12.1067 10.9386 11.6491 10.9386 11.0841V10.8796C10.9386 10.4105 10.6104 10.0015 10.1427 9.88812L8.55238 9.50137C8.29357 9.4386 8.02851 9.40687 7.76207 9.40687C7.11887 9.40687 5.95457 9.93942 5.95457 9.93942L3.99998 10.7568M1.33331 10.4735L1.33331 14.3402C1.33331 14.7136 1.33331 14.9003 1.40598 15.0429C1.46989 15.1683 1.57188 15.2703 1.69732 15.3342C1.83993 15.4069 2.02661 15.4069 2.39998 15.4069H2.93331C3.30668 15.4069 3.49337 15.4069 3.63597 15.3342C3.76141 15.2703 3.8634 15.1683 3.92732 15.0429C3.99998 14.9003 3.99998 14.7136 3.99998 14.3402V10.4735C3.99998 10.1002 3.99998 9.91349 3.92732 9.77088C3.8634 9.64544 3.76141 9.54345 3.63597 9.47954C3.49337 9.40687 3.30668 9.40687 2.93331 9.40687H2.39998C2.02661 9.40687 1.83993 9.40687 1.69732 9.47953C1.57188 9.54345 1.46989 9.64544 1.40598 9.77088C1.33331 9.91349 1.33331 10.1002 1.33331 10.4735ZM11.4609 3.13504C11.063 2.30247 10.1457 1.86139 9.2536 2.28712C8.3615 2.71285 7.98144 3.72246 8.35495 4.60876C8.58578 5.15651 9.24714 6.22021 9.7187 6.95289C9.89294 7.22361 9.98006 7.35897 10.1073 7.43816C10.2165 7.50608 10.3531 7.54269 10.4816 7.53844C10.6314 7.53349 10.7745 7.45982 11.0607 7.31249C11.8355 6.91375 12.9401 6.32324 13.4139 5.96429C14.1805 5.38348 14.3704 4.31592 13.7964 3.50437C13.2225 2.69281 12.2218 2.61295 11.4609 3.13504Z"
              stroke="#EA6DE8"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1206_300">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.740234)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  },
  {
    id: 3,
    image: "https://baticali.sirv.com/Temi/PPN%20Editor%20reel.mp4",
    title:
      "Vendor Editor — Designed an easy-to-use website builder for e-commerce sellers",
    description:
      "I designed a no-code vendor editor tool that lets users create clean, customizable storefronts with pre-built templates.",
    features: ["saas", "web builder", "no-code"],
    industry: {
      title: "E-Commerce",
      logo: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 14.7402V11.1402C10 10.7669 10 10.5802 9.92734 10.4376C9.86342 10.3121 9.76144 10.2101 9.63599 10.1462C9.49339 10.0736 9.3067 10.0736 8.93333 10.0736H7.06667C6.6933 10.0736 6.50661 10.0736 6.36401 10.1462C6.23857 10.2101 6.13658 10.3121 6.07266 10.4376C6 10.5802 6 10.7669 6 11.1402V14.7402M2 5.4069C2 6.51147 2.89543 7.4069 4 7.4069C5.10457 7.4069 6 6.51147 6 5.4069C6 6.51147 6.89543 7.4069 8 7.4069C9.10457 7.4069 10 6.51147 10 5.4069C10 6.51147 10.8954 7.4069 12 7.4069C13.1046 7.4069 14 6.51147 14 5.4069M4.13333 14.7402H11.8667C12.6134 14.7402 12.9868 14.7402 13.272 14.5949C13.5229 14.4671 13.7268 14.2631 13.8547 14.0122C14 13.727 14 13.3536 14 12.6069V4.87357C14 4.12683 14 3.75346 13.8547 3.46825C13.7268 3.21736 13.5229 3.01339 13.272 2.88556C12.9868 2.74023 12.6134 2.74023 11.8667 2.74023H4.13333C3.3866 2.74023 3.01323 2.74023 2.72801 2.88556C2.47713 3.01339 2.27316 3.21736 2.14532 3.46825C2 3.75346 2 4.12683 2 4.87357V12.6069C2 13.3536 2 13.727 2.14532 14.0122C2.27316 14.2631 2.47713 14.4671 2.72801 14.5949C3.01323 14.7402 3.3866 14.7402 4.13333 14.7402Z"
            stroke="#EA6DE8"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 4,
    image: "https://baticali.sirv.com/Temi/Hillford%20website%20promo.mp4",
    title:
      "Hillford Properties — Designed a website that boosted Leads and credibility",
    description:
      "I transformed Hillford's online presence with a clean website. Users could easily explore rental, sales, and property services.",
    features: ["web design", "ui/ux", "content strategy"],
    industry: {
      title: "Real Estate",
      logo: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99998 8.07357H3.06665C2.69328 8.07357 2.50659 8.07357 2.36399 8.14623C2.23854 8.21015 2.13656 8.31213 2.07264 8.43757C1.99998 8.58018 1.99998 8.76687 1.99998 9.14023V14.7402M11 8.07357H12.9333C13.3067 8.07357 13.4934 8.07357 13.636 8.14623C13.7614 8.21015 13.8634 8.31213 13.9273 8.43757C14 8.58018 14 8.76687 14 9.14023V14.7402M11 14.7402V4.87357C11 4.12683 11 3.75346 10.8547 3.46825C10.7268 3.21736 10.5228 3.01339 10.272 2.88556C9.98675 2.74023 9.61338 2.74023 8.86665 2.74023H7.13331C6.38658 2.74023 6.01321 2.74023 5.72799 2.88556C5.47711 3.01339 5.27314 3.21736 5.1453 3.46825C4.99998 3.75346 4.99998 4.12683 4.99998 4.87357V14.7402M14.6666 14.7402H1.33331M7.33331 5.4069H8.66665M7.33331 8.07357H8.66665M7.33331 10.7402H8.66665"
            stroke="#EA6DE8"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 5,
    image: "https://baticali.sirv.com/Temi/tracehut-mockup.png",
    title:
      "Tracehut — Designed a verified property review app making renting easier for Nigerians",
    description:
      "I led the design of the app that simplified the entire experience around property discovery and community insights.",
    features: ["mobile app", "ux research"],
    industry: {
      title: "REAL ESTATE",
      logo: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99999 8.07357H3.06666C2.69329 8.07357 2.50661 8.07357 2.364 8.14623C2.23856 8.21015 2.13657 8.31213 2.07266 8.43757C1.99999 8.58018 1.99999 8.76687 1.99999 9.14023V14.7402M11 8.07357H12.9333C13.3067 8.07357 13.4934 8.07357 13.636 8.14623C13.7614 8.21015 13.8634 8.31213 13.9273 8.43757C14 8.58018 14 8.76687 14 9.14023V14.7402M11 14.7402V4.87357C11 4.12683 11 3.75346 10.8547 3.46825C10.7268 3.21736 10.5229 3.01339 10.272 2.88556C9.98677 2.74023 9.6134 2.74023 8.86666 2.74023H7.13333C6.38659 2.74023 6.01322 2.74023 5.72801 2.88556C5.47712 3.01339 5.27315 3.21736 5.14532 3.46825C4.99999 3.75346 4.99999 4.12683 4.99999 4.87357V14.7402M14.6667 14.7402H1.33333M7.33333 5.4069H8.66666M7.33333 8.07357H8.66666M7.33333 10.7402H8.66666"
            stroke="#EA6DE8"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
];

export const Skills = [
  {
    id: 1,
    title: "UX Research",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21.7402L16.65 17.3902M11 6.74023C13.7614 6.74023 16 8.97881 16 11.7402M19 11.7402C19 16.1585 15.4183 19.7402 11 19.7402C6.58172 19.7402 3 16.1585 3 11.7402C3 7.32196 6.58172 3.74023 11 3.74023C15.4183 3.74023 19 7.32196 19 11.7402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Product Design",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9.74023V15.7402M5 7.74023V17.7402M17 7.45452L7 6.02595M17 18.026L7 19.4545M4.6 7.74023H5.4C5.96005 7.74023 6.24008 7.74023 6.45399 7.63124C6.64215 7.53537 6.79513 7.38239 6.89101 7.19422C7 6.98031 7 6.70029 7 6.14023V5.34023C7 4.78018 7 4.50016 6.89101 4.28624C6.79513 4.09808 6.64215 3.9451 6.45399 3.84923C6.24008 3.74023 5.96005 3.74023 5.4 3.74023H4.6C4.03995 3.74023 3.75992 3.74023 3.54601 3.84923C3.35785 3.9451 3.20487 4.09808 3.10899 4.28624C3 4.50016 3 4.78018 3 5.34023V6.14023C3 6.70029 3 6.98031 3.10899 7.19422C3.20487 7.38239 3.35785 7.53537 3.54601 7.63124C3.75992 7.74023 4.03995 7.74023 4.6 7.74023ZM4.6 21.7402H5.4C5.96005 21.7402 6.24008 21.7402 6.45399 21.6312C6.64215 21.5354 6.79513 21.3824 6.89101 21.1942C7 20.9803 7 20.7003 7 20.1402V19.3402C7 18.7802 7 18.5002 6.89101 18.2862C6.79513 18.0981 6.64215 17.9451 6.45399 17.8492C6.24008 17.7402 5.96005 17.7402 5.4 17.7402H4.6C4.03995 17.7402 3.75992 17.7402 3.54601 17.8492C3.35785 17.9451 3.20487 18.0981 3.10899 18.2862C3 18.5002 3 18.7802 3 19.3402V20.1402C3 20.7003 3 20.9803 3.10899 21.1942C3.20487 21.3824 3.35785 21.5354 3.54601 21.6312C3.75992 21.7402 4.03995 21.7402 4.6 21.7402ZM18.6 9.74023H19.4C19.9601 9.74023 20.2401 9.74023 20.454 9.63124C20.6422 9.53537 20.7951 9.38239 20.891 9.19422C21 8.98031 21 8.70029 21 8.14023V7.34023C21 6.78018 21 6.50016 20.891 6.28624C20.7951 6.09808 20.6422 5.9451 20.454 5.84923C20.2401 5.74023 19.9601 5.74023 19.4 5.74023H18.6C18.0399 5.74023 17.7599 5.74023 17.546 5.84923C17.3578 5.9451 17.2049 6.09808 17.109 6.28624C17 6.50016 17 6.78018 17 7.34023V8.14023C17 8.70029 17 8.98031 17.109 9.19422C17.2049 9.38239 17.3578 9.53537 17.546 9.63124C17.7599 9.74023 18.0399 9.74023 18.6 9.74023ZM18.6 19.7402H19.4C19.9601 19.7402 20.2401 19.7402 20.454 19.6312C20.6422 19.5354 20.7951 19.3824 20.891 19.1942C21 18.9803 21 18.7003 21 18.1402V17.3402C21 16.7802 21 16.5002 20.891 16.2862C20.7951 16.0981 20.6422 15.9451 20.454 15.8492C20.2401 15.7402 19.9601 15.7402 19.4 15.7402H18.6C18.0399 15.7402 17.7599 15.7402 17.546 15.8492C17.3578 15.9451 17.2049 16.0981 17.109 16.2862C17 16.5002 17 16.7802 17 17.3402V18.1402C17 18.7003 17 18.9803 17.109 19.1942C17.2049 19.3824 17.3578 19.5354 17.546 19.6312C17.7599 19.7402 18.0399 19.7402 18.6 19.7402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Website Design",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12.7402H22M2 12.7402C2 18.2631 6.47715 22.7402 12 22.7402M2 12.7402C2 7.21739 6.47715 2.74023 12 2.74023M22 12.7402C22 18.2631 17.5228 22.7402 12 22.7402M22 12.7402C22 7.21739 17.5228 2.74023 12 2.74023M12 2.74023C14.5013 5.47859 15.9228 9.03227 16 12.7402C15.9228 16.4482 14.5013 20.0019 12 22.7402M12 2.74023C9.49872 5.47859 8.07725 9.03227 8 12.7402C8.07725 16.4482 9.49872 20.0019 12 22.7402"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Mobile Design",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 2.74023V4.14023C15 4.70029 15 4.98031 14.891 5.19422C14.7951 5.38239 14.6422 5.53537 14.454 5.63124C14.2401 5.74023 13.9601 5.74023 13.4 5.74023H10.6C10.0399 5.74023 9.75992 5.74023 9.54601 5.63124C9.35785 5.53537 9.20487 5.38239 9.10899 5.19422C9 4.98031 9 4.70029 9 4.14023V2.74023M8.2 22.7402H15.8C16.9201 22.7402 17.4802 22.7402 17.908 22.5222C18.2843 22.3305 18.5903 22.0245 18.782 21.6482C19 21.2204 19 20.6603 19 19.5402V5.94023C19 4.82013 19 4.26008 18.782 3.83225C18.5903 3.45593 18.2843 3.14997 17.908 2.95822C17.4802 2.74023 16.9201 2.74023 15.8 2.74023H8.2C7.0799 2.74023 6.51984 2.74023 6.09202 2.95822C5.71569 3.14997 5.40973 3.45593 5.21799 3.83225C5 4.26008 5 4.82013 5 5.94023V19.5402C5 20.6603 5 21.2204 5.21799 21.6482C5.40973 22.0245 5.71569 22.3305 6.09202 22.5222C6.51984 22.7402 7.07989 22.7402 8.2 22.7402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Product Management",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5.94023C2 4.82013 2 4.26008 2.21799 3.83225C2.40973 3.45593 2.71569 3.14997 3.09202 2.95822C3.51984 2.74023 4.0799 2.74023 5.2 2.74023H12.8C13.9201 2.74023 14.4802 2.74023 14.908 2.95822C15.2843 3.14997 15.5903 3.45593 15.782 3.83225C16 4.26008 16 4.82013 16 5.94023V13.5402C16 14.6603 16 15.2204 15.782 15.6482C15.5903 16.0245 15.2843 16.3305 14.908 16.5222C14.4802 16.7402 13.9201 16.7402 12.8 16.7402H5.2C4.07989 16.7402 3.51984 16.7402 3.09202 16.5222C2.71569 16.3305 2.40973 16.0245 2.21799 15.6482C2 15.2204 2 14.6603 2 13.5402V5.94023Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 11.9402C8 10.8201 8 10.2601 8.21799 9.83225C8.40973 9.45593 8.71569 9.14997 9.09202 8.95822C9.51984 8.74023 10.0799 8.74023 11.2 8.74023H18.8C19.9201 8.74023 20.4802 8.74023 20.908 8.95822C21.2843 9.14997 21.5903 9.45593 21.782 9.83225C22 10.2601 22 10.8201 22 11.9402V19.5402C22 20.6603 22 21.2204 21.782 21.6482C21.5903 22.0245 21.2843 22.3305 20.908 22.5222C20.4802 22.7402 19.9201 22.7402 18.8 22.7402H11.2C10.0799 22.7402 9.51984 22.7402 9.09202 22.5222C8.71569 22.3305 8.40973 22.0245 8.21799 21.6482C8 21.2204 8 20.6603 8 19.5402V11.9402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "UX Writer",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21.7403H13M2.5 22.2403L8.04927 20.106C8.40421 19.9694 8.58168 19.9012 8.74772 19.8121C8.8952 19.7329 9.0358 19.6415 9.16804 19.5389C9.31692 19.4234 9.45137 19.2889 9.72028 19.02L21 7.74029C22.1046 6.63573 22.1046 4.84486 21 3.74029C19.8955 2.63572 18.1046 2.63572 17 3.74029L5.72028 15.02C5.45138 15.2889 5.31692 15.4234 5.20139 15.5723C5.09877 15.7045 5.0074 15.8451 4.92823 15.9926C4.83911 16.1586 4.77085 16.3361 4.63433 16.691L2.5 22.2403ZM2.5 22.2403L4.55812 16.8893C4.7054 16.5063 4.77903 16.3149 4.90534 16.2272C5.01572 16.1505 5.1523 16.1216 5.2843 16.1468C5.43533 16.1756 5.58038 16.3207 5.87048 16.6108L8.12957 18.8698C8.41967 19.1599 8.56472 19.305 8.59356 19.456C8.61877 19.588 8.58979 19.7246 8.51314 19.835C8.42545 19.9613 8.23399 20.0349 7.85107 20.1822L2.5 22.2403Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "No Code",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 18.7402L22 12.7402L16 6.74023M8 6.74023L2 12.7402L8 18.7402"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 8,
    title: "User Testing",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2 22.7402C21.48 22.7402 21.62 22.7402 21.727 22.6857C21.8211 22.6378 21.8976 22.5613 21.9455 22.4672C22 22.3603 22 22.2203 22 21.9402V11.5402C22 11.2602 22 11.1202 21.9455 11.0132C21.8976 10.9192 21.8211 10.8427 21.727 10.7947C21.62 10.7402 21.48 10.7402 21.2 10.7402L18.8 10.7402C18.52 10.7402 18.38 10.7402 18.273 10.7947C18.1789 10.8427 18.1024 10.9192 18.0545 11.0132C18 11.1202 18 11.2602 18 11.5402V13.9402C18 14.2203 18 14.3603 17.9455 14.4672C17.8976 14.5613 17.8211 14.6378 17.727 14.6857C17.62 14.7402 17.48 14.7402 17.2 14.7402H14.8C14.52 14.7402 14.38 14.7402 14.273 14.7947C14.1789 14.8427 14.1024 14.9192 14.0545 15.0132C14 15.1202 14 15.2602 14 15.5402V17.9402C14 18.2203 14 18.3603 13.9455 18.4672C13.8976 18.5613 13.8211 18.6378 13.727 18.6857C13.62 18.7402 13.48 18.7402 13.2 18.7402H10.8C10.52 18.7402 10.38 18.7402 10.273 18.7947C10.1789 18.8427 10.1024 18.9192 10.0545 19.0132C10 19.1202 10 19.2602 10 19.5402V21.9402C10 22.2203 10 22.3603 10.0545 22.4672C10.1024 22.5613 10.1789 22.6378 10.273 22.6857C10.38 22.7402 10.52 22.7402 10.8 22.7402L21.2 22.7402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 7.54023C10 7.26021 10 7.12019 10.0545 7.01324C10.1024 6.91916 10.1789 6.84267 10.273 6.79473C10.38 6.74023 10.52 6.74023 10.8 6.74023H13.2C13.48 6.74023 13.62 6.74023 13.727 6.79473C13.8211 6.84267 13.8976 6.91916 13.9455 7.01324C14 7.12019 14 7.26021 14 7.54023V9.94023C14 10.2203 14 10.3603 13.9455 10.4672C13.8976 10.5613 13.8211 10.6378 13.727 10.6857C13.62 10.7402 13.48 10.7402 13.2 10.7402H10.8C10.52 10.7402 10.38 10.7402 10.273 10.6857C10.1789 10.6378 10.1024 10.5613 10.0545 10.4672C10 10.3603 10 10.2203 10 9.94023V7.54023Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 13.5402C3 13.2602 3 13.1202 3.0545 13.0132C3.10243 12.9192 3.17892 12.8427 3.273 12.7947C3.37996 12.7402 3.51997 12.7402 3.8 12.7402H6.2C6.48003 12.7402 6.62004 12.7402 6.727 12.7947C6.82108 12.8427 6.89757 12.9192 6.9455 13.0132C7 13.1202 7 13.2602 7 13.5402V15.9402C7 16.2203 7 16.3603 6.9455 16.4672C6.89757 16.5613 6.82108 16.6378 6.727 16.6857C6.62004 16.7402 6.48003 16.7402 6.2 16.7402H3.8C3.51997 16.7402 3.37996 16.7402 3.273 16.6857C3.17892 16.6378 3.10243 16.5613 3.0545 16.4672C3 16.3603 3 16.2203 3 15.9402V13.5402Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 3.54023C2 3.26021 2 3.12019 2.0545 3.01324C2.10243 2.91916 2.17892 2.84267 2.273 2.79473C2.37996 2.74023 2.51997 2.74023 2.8 2.74023H5.2C5.48003 2.74023 5.62004 2.74023 5.727 2.79473C5.82108 2.84267 5.89757 2.91916 5.9455 3.01324C6 3.12019 6 3.26021 6 3.54023V5.94023C6 6.22026 6 6.36027 5.9455 6.46723C5.89757 6.56131 5.82108 6.6378 5.727 6.68574C5.62004 6.74023 5.48003 6.74023 5.2 6.74023H2.8C2.51997 6.74023 2.37996 6.74023 2.273 6.68574C2.17892 6.6378 2.10243 6.56131 2.0545 6.46723C2 6.36027 2 6.22026 2 5.94023V3.54023Z"
          stroke="#EA6DE8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const Tools = [
  {
    id: 1,
    title: "Figma",
    icon: figma,
  },
  {
    id: 2,
    title: "Framer",
    icon: framer,
  },
  {
    id: 3,
    title: "Claude",
    icon: claude,
  },
  {
    id: 4,
    title: "Jitter",
    icon: jitter,
  },
  {
    id: 5,
    title: "Miro",
    icon: miro,
  },
  {
    id: 6,
    title: "UX Pilot",
    icon: ux_Pilot,
  },
];

export const Reviews = [
  {
    id: 1,
    name: "Busola Ayelowo",
    review:
      "Temi helped us lauch our hospital's EMR system. She's able to understand the briefs and the entire workflow. We're able to provide quality health care to our patients with a simple and intuitive user experience.",
    position: "CEO, Medics Partners",
    image: "https://baticali.sirv.com/Temi/busola.jpg",
  },
  {
    id: 2,
    name: "Emmanuel Uchewa",
    review:
      "I worked with Temitope Famuyiwa as a client on two major projects: a custom web drag-and-drop editor and the full redesign of the Promotional Products Now website (https://promotionalproductsnow.au/). From the very beginning, Temitope brought a high level of professionalism, creativity, and attention to detail to the work. She delivered designs that not only looked great but were incredibly well-prepared for development. The dev handoff was seamless.",
    position: "SalTech Apps",
    image: "https://baticali.sirv.com/Temi/emmanuel.jpg",
  },
  {
    id: 3,
    name: "Joshua Dosubi",
    review:
      "Temitope is a UI/UX specialist whom Tracehut, as a company, was fortunate enough to employ. Her designs are what make our platform appealing for attracting repeat visitors. With her designs, we were able to present world-class UIs to investors and accelerators, such as the Founders Institute, resulting in applause. She is an excellent team worker, self-driven, committed, and Reliable. Your projects are in the most 'Fit' hands with Temitope.",
    position: "CEO, Tracehut",
    image: "https://baticali.sirv.com/Temi/joshua.jpg",
  },
  {
    id: 4,
    name: "Michael Adedayo",
    review:
      "I've worked with Temi across several projects— most notably Tuboh, MedicsPartners, and a series of internal tools. And every time, she has brought a level of creativity, precision, and user-focused thinking that truly elevates work. Beyond her design skills - her intuition to anticipate user experience needs really stands out.",
    position: "Senior Software Developer",
    image: "https://baticali.sirv.com/Temi/michael.png",
  },
  {
    id: 5,
    name: "Adedayo Bello",
    review:
      "I worked with Temi on a full app redesign and she was amazing. Her thoughtful approach gave me a deeper appreciation for how great designers think and bring ideas to life. She brought fresh ideas, a unique visual style, and cared deeply about the user experience. Communication was smooth, and her designs were clear and well-crafted. We delivered on time thanks to her dedication. I’d definitely recommend working with her!",
    position: "Brand & UI/UX Designer",
    image: "https://baticali.sirv.com/Temi/adedayo.png",
  },
];

export const Processes = [
  {
    id: 1,
    title: "Discovery & Alignment",
    description: "Understanding your product, users, and business goals",
  },
  {
    id: 2,
    title: "UX Strategy",
    description: "Mapping user flows, pain points, and opportunities",
  },
  {
    id: 3,
    title: "Design Implementation",
    description: "From wireframes to high-fidelity UI, tailored to your brand",
  },
  {
    id: 4,
    title: "Prototyping & Validation",
    description: "Interactive prototypes, real feedback, smarter iterations",
  },
  {
    id: 5,
    title: "Handoff & Support",
    description: "Clean design files, dev collaboration, and launch readiness",
  },
];
