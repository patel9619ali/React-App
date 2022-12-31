import React from 'react';
import ExpenceItem from "./Component/Expence Component/ExpenceItems";
import NewExpenceItem from "./Component/Expence Component/NewExpenceTracker/NewExpenceItem";
import Card from './Component/Expence Component/Card';
import './App.css';
const App = () => {
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { 
        id: 'e2', 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) 
      },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];

  const checkAllDate = (expenseScheduledData) =>{
    const expenseSchedled = {
      ...expenseScheduledData,
    }
    console.log(expenseSchedled)
  }
  // return React.createElement(Card , {className: main_wrapper}, React.createElement(ExpenceItem,{title : expenses[0].title, amount:expenses[0].amount,dates:expenses[0].date})
return(
  
  <div className='main_wrapper'>
    <Card className="form_wrapper">
        <NewExpenceItem OnCheckData={checkAllDate} />
    </Card>
    <Card className='card_wrapper'>
      <ExpenceItem items={expenses} />
    </Card>
  </div>

  );
};

export default App;
