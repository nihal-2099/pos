import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  topCards: Array<any> = [
    {
      type: 'white',
      items: [
        {
          icon: 'shopping-bag',
          text: 'Total Purchase Due',
          background: '#FEEDED',
          iconcolor: '#FF9F43',
          price: '307,144',
        },
        {
          icon: 'dollar-sign',
          text: 'Total Sales Due',
          background: '#E5F8ED',
          iconcolor: '#28C76F',
          price: '4,385',
        },
        {
          icon: 'download',
          text: 'Total Sale Amount',
          background: '#E0F9FC',
          iconcolor: '#00CFE8',
          price: '385,657',
        },
        {
          icon: 'upload',
          text: 'Total Expense Amount',
          background: '#FCEAEA',
          iconcolor: '#EA5455',
          price: '385,657',
        },
      ],
    },
    {
      type: 'colored',
      items: [
        {
          icon: 'users',
          text: 'Customers',
          background: '#ff9f43',
          iconcolor: '#FF9F43',
          price: '100',
        },
        {
          icon: 'user',
          text: 'Suppliers',
          background: '#00CFE8',
          iconcolor: '#28C76F',
          price: '110',
        },
        {
          icon: 'file-text',
          text: 'Purchase Invoice',
          background: '#1B2850',
          iconcolor: '#00CFE8',
          price: '150',
        },
        {
          icon: 'file',
          text: 'Sales Invoice',
          background: '#28C76F',
          iconcolor: '#EA5455',
          price: '170',
        },
      ],
    },
  ];

    // Dynamic column definitions
    columns = [
      { key: 'id', label: 'ID' },
      { key: 'branch', label: 'Branch' },
      { key: 'item', label: 'Item' },
      { key: 'transaction', label: 'Transaction Id' },
    ];
  
    // Dynamic table data
    tableData = [
      {
        id: 1,
        branch: 'Branch 1',
        item: 'Pasta',
        mainId: 'nmansajkjk12',
        transaction: 'PBX1234455',
      },
      {
        id: 2,
        branch: 'Branch 2',
        item: 'Pizza',
        mainId: 'nmansajkjk13',
        transaction:  'PBX12344500',
      },
      {
        id: 3,
        branch: 'Branch 2',
        item: 'Pan Cakes',
        mainId: 'nmansajkjk13',
        transaction:  'PBX1234457878'
      },
      {
        id: 4,
        branch: 'Branch 3',
        item: 'Chilly Panner',
        mainId: 'nmansajkjk13',
        transaction:  'PBX12344578754'
      },
    ];
  
    tableAction(event: any) {
      console.log(event);
    }
  
}
