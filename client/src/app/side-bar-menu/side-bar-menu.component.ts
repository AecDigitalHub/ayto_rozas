import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

export class FileFlatNode {
  constructor(
    public expandable: boolean, public filename: string, public level: number, public type: any) {}
}

const TREE_DATA = JSON.stringify({
  Areas: {
    'Coordinación. General Gobierno': '/Area/Coordinación General Gobierno',
    'Secretaría General': '/Area/Secretaría General',
    'Servicios Jurídicos': '/Area/Servicios Jurídicos',
    // 'Hacienda': '/Area/Hacienda',
    'Intervención General': '/Area/Intervención General',
    'Gestión e Inspección Tributaria': '/Area/Gestión e Inspección Tributaria',
    'Tesorería': '/Area/Tesorería',
    'Régimen Interior': '/Area/Régimen Interior',
    'Recursos Humanos': '/Area/Recursos Humanos',
    'Economía y Empleo': '/Area/conomía y Empleo',
    // 'Admón Electrónica': '/Area/Admón Electrónica',
    'Informática': '/Area/Informática',
    'Urbanismo': '/Area/Urbanismo',
    'Servicios a la Ciudad': '/Area/Servicios a la Ciudad',
    'Espacios a la Ciudad': '/Area/Espacios a la Ciudad',
    'Seguridad Ciudadana': '/Area/Seguridad Ciudadana',
    'Protección Civil y SAMER': '/Area/Protección Civil y SAMER',
    'Sanidad': '/Area/Sanidad',
    'Familia y Serv. Sociales': '/Area/Familia y Serv. Sociales',
    'Deportes': '/Area/Deportes',
    'Juventud': '/Area/Juventud',
    'Educación y Cultura': '/Area/Educación y Cultura',
    'Ferias': '/Area/Ferias',
    'Distrito Norte': '/Area/Distrito Norte'
  },
});

@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  buildFileTree(obj: {[key: string]: any}, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent {
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
  constructor(database: FileDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  }

  private _getLevel = (node: FileFlatNode) => node.level;

  private _isExpandable = (node: FileFlatNode) => node.expandable;

  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;
}

