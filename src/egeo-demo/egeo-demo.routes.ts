/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StMainDemoComponent } from './main/main';

export class EgeoDemoMenu {
   id: string;
   name: string;
   path: string;
}

export const EGEO_DEMO_MENU: EgeoDemoMenu[] = [
   { id: 'st-main', name: 'Main', path: 'main-demo' },
   { id: 'st-alerts', name: 'Alerts', path: 'alerts-demo' },
   { id: 'st-breadcrumbs', name: 'Breadcrumbs', path: 'breadcrumbs' },
   { id: 'st-button', name: 'Button', path: 'button-demo' },
   { id: 'st-checkbox', name: 'Checkbox', path: 'checkbox-demo' },
   { id: 'st-dropdown-menu', name: 'Dropdown menu', path: 'dropdown-menu-demo' },
   { id: 'st-dropdown', name: 'Dropdown', path: 'dropdown-demo' },
   { id: 'st-form', name: 'Form', path: 'form-demo' },
   { id: 'st-header', name: 'Header', path: 'header-demo' },
   { id: 'st-help', name: 'Help', path: 'help-demo' },
   { id: 'st-info-box', name: 'Info Box', path: 'info-box-demo' },
   { id: 'st-input', name: 'Input', path: 'input' },
   { id: 'st-item-list', name: 'Item List', path: 'item-list-demo' },
   { id: 'st-label', name: 'Label', path: 'label-demo' },
   { id: 'st-modal', name: 'Modal', path: 'modal-demo' },
   { id: 'st-page-title', name: 'Page Title', path: 'page-title-demo' },
   { id: 'st-pagination', name: 'Pagination', path: 'pagination-demo' },
   { id: 'st-radio-menu', name: 'Radio Menu', path: 'radio-menu-demo' },
   { id: 'st-radio', name: 'Radio', path: 'radio-demo' },
   { id: 'st-search', name: 'Search', path: 'search-demo' },
   { id: 'st-select', name: 'Select', path: 'select-demo' },
   { id: 'st-switch', name: 'Switch', path: 'switch-demo' },
   { id: 'st-table', name: 'Table', path: 'table-demo' },
   { id: 'st-textarea', name: 'Textarea', path: 'textarea' },
   { id: 'st-tip', name: 'Tip', path: 'tip-demo' },
   { id: 'st-tooltip', name: 'Tooltip', path: 'tooltip-demo' },
   { id: 'st-tree', name: 'Tree', path: 'tree-demo' },
   { id: 'st-two-list-selection', name: 'Two List Selection', path: 'two-list-selection-demo' }
];

// tslint:disable:max-line-length
const routes: Routes = [
   { path: 'main-demo', component: StMainDemoComponent },
   { path: 'alerts-demo', loadChildren: './st-alert-demo/st-alerts-demo.module#StAlertsDemoModule' },
   { path: 'breadcrumbs', loadChildren: './st-breadcrumbs-demo/st-breadcrumbs-demo.module#StBreadcrumbsDemoModule' },
   { path: 'button-demo', loadChildren: './st-button-demo/st-button-demo.module#StButtonDemoModule' },
   { path: 'checkbox-demo', loadChildren: './st-checkbox-demo/st-checkbox-demo.module#StCheckboxDemoModule' },
   { path: 'dropdown-demo', loadChildren: './st-dropdown-demo/st-dropdown-demo.module#StDropdownDemoModule' },
   { path: 'dropdown-menu-demo', loadChildren: './st-dropdown-menu-demo/st-dropdown-menu-demo.module#StDropdownMenuDemoModule' },
   { path: 'form-demo', loadChildren: './st-form-demo/st-form-demo.module#StFormDemoModule' },
   { path: 'header-demo', loadChildren: './st-header-demo/st-header-demo.module#StHeaderDemoModule' },
   { path: 'help-demo', loadChildren: './st-help-demo/st-help-demo.module#StHelpDemoModule' },
   { path: 'info-box-demo', loadChildren: './st-info-box-demo/st-info-box-demo.module#StInfoBoxDemoModule' },
   { path: 'input', loadChildren: './st-input-demo/st-input-demo.module#StInputDemoModule' },
   { path: 'item-list-demo', loadChildren: './st-item-list-demo/st-item-list-demo.module#StItemListDemoModule' },
   { path: 'label-demo', loadChildren: './st-label-demo/st-label-demo.module#StLabelDemoModule' },
   { path: 'modal-demo', loadChildren: './st-modal-demo/st-modal-demo.module#StModalDemoModule' },
   { path: 'page-title-demo', loadChildren: './st-page-title-demo/st-page-title-demo.module#StPageTitleDemoModule' },
   { path: 'pagination-demo', loadChildren: './st-pagination-demo/st-pagination-demo.module#StPaginationDemoModule' },
   { path: 'radio-demo', loadChildren: './st-radio-demo/st-radio-demo.module#StRadioDemoModule' },
   { path: 'radio-menu-demo', loadChildren: './st-radio-menu-demo/st-radio-menu-demo.module#StRadioMenuDemoModule' },
   { path: 'search-demo', loadChildren: './st-search-demo/st-search-demo.module#StSearchDemoModule' },
   { path: 'select-demo', loadChildren: './st-select-demo/select-demo.module#StSelectDemoModule' },
   { path: 'switch-demo', loadChildren: './st-switch-demo/st-switch-demo.module#StSwitchDemoModule' },
   { path: 'table-demo', loadChildren: './st-table-demo/st-table-demo.module#StTableDemoModule' },
   { path: 'textarea', loadChildren: './st-textarea-demo/st-textarea-demo.module#StTextareaDemoModule' },
   { path: 'tip-demo', loadChildren: './st-tip-demo/st-tip-demo.module#StTipDemoModule' },
   { path: 'tooltip-demo', loadChildren: './st-tooltip-demo/st-tooltip-demo.module#StTooltipDemoModule' },
   { path: 'tree-demo', loadChildren: './st-tree-demo/st-tree-demo.module#StTreeDemoModule' },
   { path: 'two-list-selection-demo', loadChildren: './st-two-list-selection-demo/st-two-list-selection-demo.module#StTwoListSelectionDemoModule' }
];
// tslint:enable


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
