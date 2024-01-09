function Cards({ href, imgAlt, imgSrc, title, children }) {
  console.log({ href, imgAlt, imgSrc, title, children });

  const cardStyle = {
    height: "100%",
    width: "100%",
    marginRight: "20px",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid",
    borderRadius: "20px",
    padding: "20px",
  };

  return (
    <div style={cardStyle}>
      <a href={href}>
        <div className="w-full h-full">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ipsum?
        </p>
        {children}
      </a>
    </div>
  );
}

export default Cards;
