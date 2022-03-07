import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'


createServer({
    models:{
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id:1,
            item:"Freela",
            amount:'6000',
            type: 'income',
            category: 'dev',
            date: new Date('2022-02-01 09:00:00'),
          },
          {
            id:2,
            item:"Curso Udemy",
            amount:'50',
            type: 'spending',
            category: 'study',
            date: new Date('2022-02-01 19:00:00'),
          },
        ], 
      })
    },

    routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

