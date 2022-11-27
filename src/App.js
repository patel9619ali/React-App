import ExpenceItem from "./Component/ExpenceItems";
function App() {
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
  return (
    <div>
      <ExpenceItem title={expenses[0].title} idName = {expenses[0].id} amount={expenses[0].amount} dates={expenses[0].date}></ExpenceItem>
      <ExpenceItem title={expenses[1].title} idName = {expenses[1].id} amount={expenses[1].amount} dates={expenses[1].date}></ExpenceItem>
      <ExpenceItem title={expenses[2].title} idName = {expenses[2].id} amount={expenses[2].amount} dates={expenses[2].date}></ExpenceItem>
      <ExpenceItem title={expenses[3].title} idName = {expenses[3].id} amount={expenses[3].amount} dates={expenses[3].date}></ExpenceItem>
    </div>
  );
}

export default App;
