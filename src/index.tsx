import React from 'react';
import ReactDOM from 'react-dom';
import { ActiveModelSerializer, createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Developer',
          amount: 7000,
          createdAt: new Date('2021-09-28 23:00'),
        },
        {
          id: 2,
          title: 'Shop',
          type: 'withdraw',
          category: 'Buy',
          amount: 1000,
          createdAt: new Date('2021-06-24 17:00'),
        }
      ]
    })
  },
  
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () =>{
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

