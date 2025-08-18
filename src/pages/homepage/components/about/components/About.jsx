import { Skills, Tools } from "../../../../../constants";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 overflow-x-hidden">
      <div className="md:col-span-6 lg:col-span-5 w-full rounded-t-xl md:rounded-t-none md:rounded-s-xl xl:rounded-s-2xl overflow-hidden h-full">
        <img
          data-src={"https://baticali.sirv.com/Temi/Temi.png"}
          alt="Temitope Famuyiwa"
          data-options="fit:cover;"
          className="Sirv object-cover object-top grayscale"
        />
      </div>
      <div className="md:col-span-6 lg:col-span-7 flex flex-col rounded-b-xl md:rounded-b-none md:rounded-e-xl xl:rounded-e-2xl relative overflow-hidden bg-zinc-900">
        <div className="flex flex-col p-4 md:p-6 lg:p-8 xl:p-10 min-[90rem]:p-12 gap-3 md:gap-4 lg:gap-6 min-[90rem]:gap-8 rounded-b-xl md:rounded-b-none md:rounded-e-xl xl:rounded-e-2xl relative overflow-hidden bg-zinc-900/50 items-start text-start backdrop-blur-2xl h-full justify-between">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='1' numOctaves='1' seed='1'/></filter><rect width='100%' height='100%' fill='%2300000040' filter='url(%23n)'/></svg>\")",
              opacity: 0.6,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />
          <div className="w-44 h-28 bg-fuchsia-400 rounded-full blur-3xl absolute -top-30 left-1/2 -translate-x-1/2 z-[3]" />
          <h2 className="text-3xl xl:text-4xl min-[90rem]:text-5xl font-medium capitalize z-[4]">
            About Me
          </h2>
          <p className="text-base xl:text-lg text-zinc-300 z-[4]">
            I'm Temi — a product designer who partners with startups, agencies,
            and founders to turn bold ideas into clean, intuitive digital
            experiences. With a background in product management and over 4
            years of hands-on design work, I've helped build AI tools,
            healthtech platforms, e-commerce systems, and SaaS dashboards that
            solve real problems and drive results.
          </p>
          <p className="text-base xl:text-lg text-zinc-300 z-[4]">
            Whether starting from scratch or improving what exists, I
            collaborate closely with teams to bring thoughtful, high-impact
            digital products to life.
          </p>
          <p className="font-geist-mono uppercase text-sm md:text-base text-zinc-300 text-center z-[4]">
            My Skills
          </p>
          <div className="flex items-center flex-wrap gap-2 md:gap-3 lg:gap-x-3 xl:gap-x-4 lg:gap-y-4 xl:gap-y-5 z-[4]">
            {Skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                {skill.icon}
                <p className="text-sm font-medium">{skill.title}</p>
              </div>
            ))}
          </div>
          <p className="font-geist-mono uppercase text-sm md:text-base text-zinc-300 text-center z-[4]">
            Tools
          </p>
          <div className="flex items-center flex-wrap gap-2 md:gap-3 xl:gap-4 z-[4]">
            {Tools.map((tool) => (
              <img
                key={tool.id}
                src={tool.icon}
                alt={tool.title}
                className="h-4 lg:h-5 w-auto grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
