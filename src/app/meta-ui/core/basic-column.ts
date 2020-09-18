import { ComponentAlias } from '../component-alais';
import { BasicDynamicComponentConfig } from './basic-dynamic-component.config';

export abstract class BasicColumn extends BasicDynamicComponentConfig {
  index?: number;
  key?: string;
  label?: string;
  isPrimaryKey?: boolean;
}