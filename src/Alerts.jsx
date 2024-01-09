function Alert({ backgroundColor, icon, size }) {
  const alertStyle = {
    width: size * 25,
    height: size,
    backgroundColor: backgroundColor,
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
  };

  const Icon = icon;

  return (
    <div style={alertStyle}>
      <div className="m-10">{<Icon className=" h-44" />}</div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat rem ab id
      quidem natus, repellat voluptas libero quaerat architecto nobis!
    </div>
  );
}

export default Alert;
