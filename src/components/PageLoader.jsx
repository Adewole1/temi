const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      {/* Seding effect loader using css-doodle */}
      {/* Replacing css-doodle with a custom React/JS loader */}
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "80%",
              height: "80%",
              left: "10%",
              top: "10%",
              borderRadius: "50%",
              background: `radial-gradient(circle at 50% 50%, ${
                ["#00b8a9", "#f8f3d4", "#f6416c", "#ffde7d"][i % 4]
              } 15%, transparent 70%)`,
              transform: `rotate(${i * 20}deg) translateY(-60px) scale(0.8)`,
              animation: `loader-bubble 2s linear infinite`,
              animationDelay: `${i * -0.11}s`,
              opacity: 0.7,
              zIndex: 1,
            }}
          />
        ))}
        <style>
          {`
            @keyframes loader-bubble {
              0% {
                opacity: 0;
                transform: scale(0.8) translateY(-60px) rotate(0deg);
              }
              10% {
                opacity: 1;
              }
              95% {
                transform: scale(1.1) translateY(-80px) rotate(360deg);
              }
              100% {
                opacity: 0;
                transform: scale(0.8) translateY(-60px) rotate(720deg);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default PageLoader;
