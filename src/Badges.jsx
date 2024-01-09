function Badges({ backgroundColor, size, icon }) {
  const badgeStyle = {
    height: size,
    width: size,
    backgroundColor: backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    marginTop: "20px",
    marginRight: "20px",
  };
  const Icon = icon;

  return <div style={badgeStyle}>{<Icon />}</div>;
}

export default Badges;
