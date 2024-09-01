type PointsFortProps = {
  text: string;
  icon: string;
};

const PointsFort: React.FC<{ data: Array<PointsFortProps> }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 my-20 text-black">
      <span className="font-bold text-2xl md:text-4xl uppercase">Nos Points Fort</span>
      <div className="flex md:flex-row flex-col md:items-start md:justify-start justify-center items-center gap-10 md:px-0 px-5">
        {data.map((point, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-4 w-full md:w-1/3 text-center"
              key={index}
            >
              <div>
                <img src={point.icon} alt="image" className="w-24" />
              </div>
              <p>{point.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PointsFort;
