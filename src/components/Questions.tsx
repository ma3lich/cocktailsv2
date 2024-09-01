type QuestionsProps = {
  title: string;
  description: string;
};

const Questions: React.FC<{ data: Array<QuestionsProps> }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 my-20 md:px-36 text-black">
      <span className="font-bold text-2xl md:text-4xl uppercase">Questions fréquentes</span>
      <div className="flex md:flex-row flex-col md:items-start md:justify-start justify-center items-center gap-10 md:px-0 px-5">
        {data.map((question, index) => {
          return (
            <div
              className="flex flex-col justify-start items-start gap-4 w-full md:w-1/3 "
              key={index}
            >
              <span className="font-bold text-start">{question.title}</span>
              <p>{question.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
