const PhotoBG = ({ photo, children }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default PhotoBG;
