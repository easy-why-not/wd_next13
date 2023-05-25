export interface IConfigDto {
  id: number;
  propertytypename: string;
  propertyvalue: string;
  last_check: string;
}

export interface IConfigFilesDto {
  id: number;
  file_type_id: number;
  row_number: number;
  row_content: string;
  collected: string;
}

export interface ICurrentInstanceDto {
  id: number;
  instancename: string;
  inform_system: string;
  ci: string;
  critical: string;
  version: string;
  portnumber: number;
  cluster: string;
  segment: string;
  temperature: number;
  src_status: boolean;
  mon_status: boolean;
  ris_id: number;
  databases: IDatabasesDto[];
  instance_config: IConfigDto[];
}

export interface IInstanceDto {
  id: number;
  instancename: string;
  portnumber: number;
  error: number;
  errordesc: string;
  version: string;
  edition: string;
  cluster: string;
  ci: string;
  critical: string;
  instanceisactive: boolean;
  email: string;
  instancedateadded: string;
  inform_system: string;
  mon_status: boolean;
  ris_id: number;
  segment: string;
  src_status: boolean;
  temperature: number;
}

export interface IDatabasesDto {
  id: number;
  database_id: number;
  name: string;
  owner: string;
  encoding: string;
  datcollate: string;
  datctype: string;
  datsize: string;
  datallowconn: string;
  datconnlimit: string;
  date_added: Date;
  last_check: Date;
}

export interface IRolesDto {
  id: number;
  name: string;
  rolsuper: string;
  rolinherit: string;
  rolcreaterole: string;
  rolcreatedb: string;
  rolcanlogin: string;
  rolreplication: string;
  rolconnlimit: string;
  rolvaliduntil: string;
  memberof: string;
  rolconfig: string;
  date_added: Date;
  last_check: Date;
}

export interface IExtensionsDto {
  id: number;
  database_id: number;
  itemid: number;
  extension: string;
  extschema: string;
  extversion: string;
  date_added: Date;
  last_check: Date;
}

export interface IInstancesDto {
  count: number;
  next: string;
  previous: null;
  results: IInstanceDto[];
}

export interface ISchemasDto {
  id: number;
  database_id: number;
  name: string;
  owner: string;
  date_added: Date;
  last_check: Date;
}

export interface ITablespacesDto {
  id: number;
  name: string;
  owner: string;
  location: string;
  options: string;
  size: string;
  description: string;
  last_check: string;
}

export interface ICheckListDto {
  id: number;
  itemid: number;
  parentitemid: number;
  itemname: null;
  templateitemid: number;
  propertytypeid: number;
  propertytypename: string;
  propertyvalue: string;
  operator: string;
  checkvalue: string;
  risk: 0 | 1;
  itemriskscore: number;
  environmenttype: number;
  overwrite_rule: null;
}

export interface IApprovedDto {
  recid: number;
  datecreated: string;
  instanceitemid: number;
  itemid: number;
  propertytypeid: number;
  isactive: boolean;
  propertyvalue: string;
  actor: string;
  overridedescription: string;
}
