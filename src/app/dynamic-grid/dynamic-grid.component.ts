import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit {
  tiles = [
    {text: '', cols: 1, rows: 29, color: 'none'},
    // {text: 'gutter', cols: 1, rows: 29, color: 'none'},

    {text: 'project one', cols: 6, rows: 6, color: 'lightpink'},
    {text: 'description', cols: 4, rows: 6, color: 'lightblue'},

    {text: '', cols: 1, rows: 29, color: 'none'},
    // {text: 'gutter', cols: 1, rows: 29, color: 'none'},

    {text: '', cols: 10, rows: 1, color: 'none'},
    // {text: 'divider', cols: 10, rows: 1, color: '#555'},

    {text: 'description', cols: 4, rows: 6, color: 'lightblue'},
    {text: 'project two', cols: 6, rows: 6, color: 'lightpink'},

    {text: '', cols: 10, rows: 1, color: 'none'},
    // {text: 'divider', cols: 10, rows: 1, color: '#555'},

    {text: '', cols: 2, rows: 6, color: 'none'},
    // {text: 'divider', cols: 2, rows: 6, color: '#555'},
    {text: 'project three', cols: 4, rows: 5, color: 'lightblue'},

    {text: '', cols: 4, rows: 3, color: 'none'},
    // {text: 'divider', cols: 4, rows: 3, color: '#555'},

    {text: 'description', cols: 4, rows: 3, color: 'lightpink'},

    {text: '', cols: 10, rows: 1, color: 'none'},
    // {text: 'divider', cols: 10, rows: 1, color: '#555'},
    
    {text: '', cols: 4, rows: 4, color: 'none'},
    // {text: 'divider', cols: 4, rows: 4, color: '#777'},

    {text: 'project four', cols: 4, rows: 5, color: 'lightblue'},

    {text: '', cols: 2, rows: 7, color: 'none'},
    // {text: 'divider', cols: 2, rows: 7, color: '#aaa'},

    {text: 'description', cols: 4, rows: 3, color: 'lightpink'},

    {text: '', cols: 10, rows: 1, color: 'none'},
    // {text: 'divider', cols: 10, rows: 1, color: '#555'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
