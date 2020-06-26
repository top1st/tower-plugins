
import { TowerPlugin, TowerPluginInterface } from '../TowerPlugin';
import { ieoActions, ieoMenuIcons, ieoMenuItem } from './constants';
import { ieoRoutes } from './containers';
import { ieoPluginReducer, rootIEOPluginsSaga } from './modules';

export * from './containers';
export * from './components';
export * from './modules';

export const IeoPlugin: TowerPluginInterface =
    new TowerPlugin(ieoPluginReducer, rootIEOPluginsSaga, ieoRoutes, ieoActions, ieoMenuItem, ieoMenuIcons);
