const RightImgBlock = (props) => {
  return (
    <div className="flex gap-x-3">
      <p className="w-1/2 text-sm text-justify font-poppins">
        {props.children}
      </p>
      <div className="w-1/2">
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
    </div>
  );
};

export default RightImgBlock;
