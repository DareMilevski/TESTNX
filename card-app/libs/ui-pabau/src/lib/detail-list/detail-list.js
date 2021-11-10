import './detail-list.module.css';
import { ClockCircleOutlined } from "@ant-design/icons";
import StarComp from '../star-comp/star-comp'
import DetailMenu from '../detail-menu/detail-menu';

export function DetailList({ items, setItems }) {
  return (
    <div className="detail">
      <DetailMenu
         items={items}
         setItems={setItems}
      />
    {items.map((el, i) => (
          <div className="detailInner" key={i}>
            <div className="detailContainer">
              <div className="menu-items-detail">
                <span className="subtitle">{el.name}</span>
                <span className="subprice">$ {el.price}</span>
              </div>
              <div className="detailContainerSub">
                <span>
                  {el.time} min <ClockCircleOutlined />{" "}
                </span>
                <span className='service-number'>{el.key} services</span>
              </div>
              <div className="detailContainerBottom">
                <div>
                  <span>
                    <StarComp stars={items} />
                  </span>
                  <span className="reviewStar">{el.review} reviews</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
    
  </div>
  );
}
export default DetailList;
