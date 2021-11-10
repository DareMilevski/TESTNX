import './star-comp.module.css';
import { StarOutlined } from "@ant-design/icons";

export function StarComp({stars}) {
  return (
    <>
    {stars.map((el,index) => (
      <StarOutlined key={index} />
    ))}
  </>
  );
}
export default StarComp;
