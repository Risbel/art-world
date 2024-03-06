import Xarrow from "react-xarrows";

const Arrow = ({ color, strokeWidth, headSize, start, end }: IArrow) => {
  return <Xarrow curveness={0} color={color} strokeWidth={strokeWidth} headSize={headSize} start={start} end={end} />;
};

export default Arrow;

export interface IArrow {
  color: string;
  strokeWidth: number;
  headSize: number;
  start: any;
  end: string;
}
