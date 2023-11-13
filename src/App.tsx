import React from 'react';
import './App.css';
import { observer } from "mobx-react-lite";
import { useStores } from "./features";

export const App = observer(() => {
  const { coins: { getCoinList } } = useStores();
  console.log(getCoinList());
  return (

    <div className="converter">
    </div>
  );
});
