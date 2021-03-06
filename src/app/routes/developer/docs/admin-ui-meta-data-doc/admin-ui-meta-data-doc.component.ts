import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';


interface ComDef{
    component: string;
    type: string;
    summary: string;
    propertys: {key: string, type: string, summary: string, required?: boolean}[];
}

@Component({
  selector: 'admin-ui-meta-data-doc',
  templateUrl: './admin-ui-meta-data-doc.component.html',
  styleUrls: ['./admin-ui-meta-data-doc.component.css']
})
export class AdminUiMetaDataDocComponent {
    keyword = '';
  columns: STColumn[] = [
    {index: 'component', title: '组件'},
    {index: 'type', title: '类型'},
    {index: 'summary', title: '简述'},
    {index: 'propertys', title: '属性数量', format: (item: any) => item.propertys.length + ''},
      
  ];
  dataList: ComDef[] = [
      {component: 'DataGridConfig', summary: '表格', type: 'DataGrid', 
      propertys: [
        {key: 'componentAlias', summary: '组件别名', type: '常量DataGrid', required: true},
        {key: 'title', type: 'string', summary: '页面标题', required: true},
        {key: 'columns', type: 'BasicColumn[]', summary: '表格列', required: true},
        {key: 'loadUrl', type: 'string', summary: '数据加载Url'},
        {key: 'queryToolbar', type: 'QueryToolbarConfig', summary: '查询工具条'},
        {key: 'editor', type: 'EditorConfig', summary: '表单'},
        {key: 'dataManager', type: 'BasicDataManager', summary: '数据源'}
      ]},
      {
        
      component: 'EditorConfig', summary: '表单', type: 'Editor', 
      propertys: [
        {key: 'componentAlias', summary: '组件别名', type: '常量Editor', required: true},
        {key: 'fields', type: 'BasicFieldConfig[]', summary: '表单字段'},
        {key: 'insertUrl', type: 'string', summary: '新增Url'},
        {key: 'loadUrl', type: 'string', summary: '加载详情Url'},
        {key: 'dataManager', type: 'BasicDataManager', summary: '数据源'}
      ]},
     
      {component: 'QueryToolbarConfig', summary: '查询工具条', type: 'QueryToolbarConfig', 
      propertys: [
        {key: 'componentAlias', summary: '组件别名', type: '常量QueryToolbar', required: true},
        {key: 'loadUrl', type: 'string', summary: '数据加载Url'},
        {key: 'queryFields', type: 'BasicFieldConfig[]', summary: '查询字段'}
      ]},
      {component: 'BasicColumn', summary: '表格列', type: 'BasicColumnConfig', 
      propertys: [
        {key: 'componentAlias', summary: '组件别名', type: 'ColumnString|ColumnDate|ColumnBoolean|ColumnNumber', required: true},
        {key: 'key', type: 'string', summary: '属性名'},
        {key: 'label', type: 'string', summary: '列名'},
        {key: 'isPrimaryKey', type: 'boolean', summary: '是否主键'},
        
      ]},
      {component: 'BasicFieldConfig', summary: '表单字段', type: 'BasicFieldConfig', 
      propertys: [
        {key: 'componentAlias', summary: '组件别名', type: 'FieldString|FieldDate|FieldBoolean|FieldNumber', required: true},
        {key: 'key', type: 'string', summary: '字段名', required: true},
        {key: 'label', type: 'string', summary: '标签'},
        {key: 'index', type: 'number', summary: '下标'},
        {key: 'readonly', type: 'boolean', summary: '只读'},
        {key: 'condition', type: ` '=' | 'like' | '>' | '<'`, summary: '作为查询工具条时的附加查询条件'},
        {key: 'required', type: 'boolean', summary: '是否必填'},
        {key: 'isPrimaryKey', type: 'boolean' , summary: '是否主键'}
        
      ]},
      {
        component: 'DataManager',
        summary: '数据源',
        type: 'DataManager',
    
        propertys: [
          {key: 'adaptor',  type: 'boolean', summary: '适配器', required: true},
          {key: 'autoLoad',  type: 'boolean', summary: '自动查询'},
          {key: 'autoInsert',  type: 'boolean', summary: '自动新增'},
          {key: 'autoUpdate', type: 'boolean', summary: '自动更新'},
          {key: 'autoRemove', type: 'boolean', summary: '自动删除'},
          {key: 'loadUrl', type: 'string', summary: '加载数据url'},
          {key: 'insertUrl', type: 'string', summary: '新增数据url'},
          {key: 'updateUrl', type: 'string', summary: '更新url'},
          {key: 'removeUrl', type: 'string', summary: '移除url'},
        ]
      },
      {
        component: 'QueryObject',
        summary: '集成查询对象',
        type: 'QueryObject',
        propertys: [
          {key: 'queryConditions', type: 'QueryCondition[]', summary: '查询条件'},
          {key: 'take', type: 'number', summary: '数据数量'},
          {key: 'skip', type: 'number', summary: '跳过数量'},

        ]
      }
      
  ];
  displayDataList = this.dataList.map(item => item);
  subTableColumns: STColumn[] = [
    {index: ''},
    {index: 'key', title: '属性'},
    {index: 'type', title: '类型'},
    {index: 'summary', title: '简述'},
    {index: 'required', title: '必填', type: 'yn'}
  ];
  search(){
    this.displayDataList = this.dataList.filter(item => item.component.indexOf(this.keyword) !== -1);
  }
}
