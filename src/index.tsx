import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'


createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [{
          id: 1,
          item: 'Transaction1',
          amount: 400,
          type: 'income',
          category: 'food',
          createDate: new Date(),
        }]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

