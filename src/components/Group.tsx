import type { GroupProps } from "../helper/types";
export default function Group({ data, onClick }: GroupProps) {
  return (
    <div className="item" onClick={onClick}>
      <div className="top">
        <div className="indicator" style={{ background: data.color }}></div>
        <div className="name">{data.name}</div>
      </div>
      <div className="bot">
        {data.daysSinceLastTime === 0 ? (
          <p className="date">Just trained</p>
        ) : data.daysSinceLastTime === 1 ? (
          <p className="date">was not trained in {data.daysSinceLastTime} day</p>
        ) : (
          <p className="date">was not trained in {data.daysSinceLastTime} days</p>
        )}
      </div>
    </div>
  );
}
