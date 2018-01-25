import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Font } from '../interfaces/Font';
import { Template } from '../interfaces/Template';

@Component
({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit
{
    ngOnInit(): void {
        console.log("i will always love u chen si qi");
    }
  private font_list: Font[] = [];
  private template: Template = 
  {
    id: undefined,
    name: '未命名',
    product: '',
    width: 60,
    height: 30,
    gap: 1,
    radius: 2,
    primary_font: undefined,
    secondary_font: undefined,
    attributes: 
    [{
      offset: 
      {
        x: 25,
        y: 5
      },
      label: '型号',
      variable: 'model',
      default: 'CL-ODFM2'
    }],
    literals: 
    [{
      text: '物联网井盖报警器',
      offset: 
      {
        x: 25,
        y: 1
      }
    }],
    qr_codes: 
    [{
      size: 
      {
        width: 22,
        height: 22
      },
      offset: 
      {
        x: 1,
        y: 1
      },
      variable: 'info',
      default: 'https://odfbox.com'
    }]
  };
  private test_input = '{}';
  private input_schema = '{}';
  private char_map: string;
  private product_list = 
  [
    {name: '物联网光交箱'},
    {name: '物联网箱变锁'},
    {name: '物联网井盖'},
    {name: '其它产品'}
];



  onAddLiteral () {
    this.template.literals.push({
      text: null,
      offset: {
        x: undefined,
        y: undefined
      }
    });
  }

  onAddAttribute () {
    this.template.attributes.push({
      offset: {
        x: undefined,
        y: undefined
      },
      label: null,
      variable: null,
      default: null
    });
  }

  onAddQrCode () {
    this.template.qr_codes.push({
      size: {
        width: undefined,
        height: undefined
      },
      offset: {
        x: undefined,
        y: undefined
      },
      variable: null,
      default: null
    });
  }

  onDeleteLiteral (literal) {
    this.template.literals = this.template.literals.filter(item => {
      return item !== literal;
    });
  }

  onDeleteAttribute (attr) {
    this.template.attributes = this.template.attributes.filter(item => {
      return item !== attr;
    });
  }

  onDeleteQrCode (qr) {
    this.template.qr_codes = this.template.qr_codes.filter(item => {
      return item !== qr;
    });
  }
}

