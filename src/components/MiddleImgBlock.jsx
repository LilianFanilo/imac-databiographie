const MiddleImgBlock = (props) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="w-2/3">
        <div className="relative w-full overflow-hidden group">
          <img
            src={props.imgGif}
            alt=""
            className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100"
          />
          <img
            src={props.imgFix}
            alt=""
            className="w-full group-hover:opacity-0"
          />
        </div>
        <span>{props.caption}</span>
      </div>
      <p className="w-2/3 text-sm text-justify font-poppins">
        {props.children}
      </p>
    </div>
  );
};

export default MiddleImgBlock;
