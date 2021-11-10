import './detail-menu.module.css';
import { MedicineBoxOutlined, LaptopOutlined } from "@ant-design/icons";

export function DetailMenu({ items, setItems }) {
  const filterList = (onlyOnline) => {
    setItems(
      items.filter((item) => {
        if (onlyOnline && !item.online) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className="showSubcategory">
      <div
        className="showSubcategoryInner"
        onClick={() => {
          filterList(false);
        }}
      >
        <MedicineBoxOutlined />
        In clinic
      </div>
      <div
        className="showSubcategoryInner"
        onClick={() => {
          filterList(true);
        }}
      >
        <LaptopOutlined />
        Virtual Consultation
      </div>
    </div>
  );
}
export default DetailMenu;
