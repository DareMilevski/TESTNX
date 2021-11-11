import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { defaultItems } from './db/data';
import { Navbar } from '@card-app/ui-pabau';
import { BoxCard } from '@card-app/ui-pabau';
import { FilterList } from '@card-app/ui-pabau';
import { DetailList } from '@card-app/ui-pabau';
import { UiPabau } from '@card-app/ui-pabau';

import { Layout } from 'antd';
import logo from './img/icon-pabau-blue.png';

const { Footer } = Layout;

const App = (props) => {
  const getSubCategories = (categories) => {
    let out = [];
    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        out = [...out, ...categories[i].subCategory];
      }
    } else {
      out = defaultItems[0].category[0].subCategory;
    }
    return out;
  };
  console.log(getSubCategories());
  const getAllCategories = () => {
    let out = [];
    for (let i = 0; i < defaultItems.length; i++) {
      for (let j = 0; j < defaultItems[i].category.length; j++) {
        out = [...out, ...defaultItems[i].category[j].subCategory];
      }
    }
    return out;
  };
  console.log(getAllCategories());
  const getAllMainCategories = () => {
    let out = [];
    for (let i = 0; i < defaultItems.length; i++) {
      out = [...out, ...defaultItems[i].category];
    }
    return out;
  };
  console.log(getAllMainCategories());

  const [data, setData] = useState(getAllMainCategories());
  const [items, setItems] = useState(getSubCategories());

  return (
    <div className="App">
      <Navbar name="Steps" title="Navbar from Storybook" />
      <BoxCard setData={setData} defaultItems={defaultItems} />
      <UiPabau
        backgroundColor="pink"
        name="dare"
        color="red"
        handleClick={() => {
          props.handleClick();
        }}
      />
      <div className="main">
        <FilterList data={data} setItems={setItems} />
        <DetailList items={items} setItems={setItems} />
      </div>
      <Layout>
        <Footer>
          Powered by:{' '}
          <a href="https://www.pabau.com/">
            <img src={logo} alt="img" /> Pabau
          </a>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
