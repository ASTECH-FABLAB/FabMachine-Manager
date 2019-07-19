(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-core></app-core>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/astech/astech.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/astech/astech.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"type\">\n\t<img src=\"assets/images/astech.png\"/>\n\t<img src=\"assets/images/floating-2.png\" class=\"rotating-slow\" />\n\t<img src=\"assets/images/floating-1.png\" class=\"rotating-fast\" />\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/header/header.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/header/header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z0\" fxLayoutAlign=\"flex-start flex-end\">\n    <mat-toolbar-row>\n        <h1>{{title}}</h1>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"center center\" class=\"container\">\n    <mat-card fxFlex=\"40%\" class=\"mat-elevation-z8\">\n        <mat-card-title fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <app-astech [type]=\"'login'\"></app-astech>\n            <h3>Login Astech</h3>\n        </mat-card-title>\n\n        <mat-card-content fxLayoutAlign=\"center\">\n            <mat-form-field class=\"form-padding\">\n                <input matInput placeholder=\"Mot de passe\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"password\"\n                    [errorStateMatcher]=\"matcher\" (keydown)=\"onKeyDown($event)\">\n                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                    [attr.aria-pressed]=\"hide\">\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n            </mat-form-field>\n        </mat-card-content>\n\n        <mat-card-actions fxLayoutAlign=\"center\">\n            <button mat-raised-button color=\"primary\" (click)=\"login()\">Se connecter</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/core.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/core.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\n    <app-toolbar *ngIf=\"authService.isLoggedIn()\" class=\"fixed-header\"></app-toolbar>\n\n    <router-outlet></router-outlet>\n</app-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout/layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n\t<div class=\"flex-wrapper\" fxFlex=\"100%\" fxFlex.lt-md=\"100%\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navigation/toolbar/toolbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navigation/toolbar/toolbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z8\">\n\t<mat-toolbar-row>\n\t\t<span>FABLAB Machine Manager</span>\n\n\t\t<button mat-button routerLink=\"/monitoring\">Monitoring</button>\n\t\t<button mat-button routerLink=\"/users\">Utilisateurs</button>\n\t\t<button mat-button routerLink=\"/machines\">Machine</button>\n\t</mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/machines/machines.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/machines/machines.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Machines'\"></app-header>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\t<div class=\"container\">\n\t\t<app-astech *ngIf=\"loading\" [type]=\"'loading'\" fxLayoutAlign=\"center center\"></app-astech>\n\n\t\t<ng-container *ngIf=\"!loading\">\n\t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n\t\t\t\t<mat-form-field fxFlex>\n\t\t\t\t\t<input matInput placeholder=\"Nouvelle machine\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"machineName\">\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field fxFlex=\"20%\">\n\t\t\t\t\t<mat-label>Autorisation par défaut</mat-label>\n\t\t\t\t\t<mat-select [(value)]=\"machineDefaultLevel\">\n\t\t\t\t\t\t<mat-option [value]=\"0\">Accès interdit</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"1\">Accès par un admin</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"2\">Accès en autonomie</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<div fxLayoutAlign=\"center center\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" fxLayoutAlign=\"center center\" (click)=\"addMachine()\">\n\t\t\t\t\t\t<mat-icon>add</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p *ngIf=\"empty\" fxLayoutAlign=\"center center\">Aucune machine n'est enregistrée</p>\n\n\t\t\t<table mat-table *ngIf=\"!empty\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> # </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let machine\"> {{machine.id}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Nom </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let machine\"> {{machine.name}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"preset\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Preset </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let machine\">\n\t\t\t\t\t\t<mat-horizontal-stepper (selectionChange)=\"setLevel($event, machine)\"\n\t\t\t\t\t\t\t[selectedIndex]=\"machine.default_level\">\n\t\t\t\t\t\t\t<mat-step [stepControl]=\"formGroups[0]\" aria-label=\"tgty\">\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Accès interdit</ng-template>\n\t\t\t\t\t\t\t</mat-step>\n\n\t\t\t\t\t\t\t<mat-step [stepControl]=\"formGroups[1]\">\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Accès par un admin</ng-template>\n\t\t\t\t\t\t\t</mat-step>\n\n\t\t\t\t\t\t\t<mat-step [stepControl]=\"formGroups[2]\">\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Accès en autonomie</ng-template>\n\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t</mat-horizontal-stepper>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Actions </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let machine\">\n\t\t\t\t\t\t<button mat-icon-button aria-label=\"Trash icon\" (click)=\"deleteMachine(machine)\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t</ng-container>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/monitoring/monitoring.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/monitoring/monitoring.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Monitoring'\"></app-header>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\t<div class=\"container\">\n\t\t<app-astech *ngIf=\"loading\" [type]=\"'loading'\" fxLayoutAlign=\"center center\"></app-astech>\n\n\t\t<p *ngIf=\"empty\" fxLayoutAlign=\"center center\">Aucune entrée de monitoring n'est présente dans la base de\n\t\t\tdonnées</p>\n\n\t\t<div fxLayout=\"column\" *ngIf=\"!empty && !loading\">\n\t\t\t<mat-form-field fxFlex>\n\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer\">\n\t\t\t</mat-form-field>\n\n\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{entry.id}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Machine </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{entry.name}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"rfid\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> RFID </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{entry.rfid}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"first_name\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Prénom </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{entry.first_name}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"last_name\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{entry.last_name}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"content\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Contenu </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\" class=\"expand\"> {{entry.content}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"date\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\"> {{format(entry.date)}} </td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Actions </th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let entry\">\n\t\t\t\t\t\t<button mat-icon-button aria-label=\"Trash icon\" (click)=\"deleteEntry(entry)\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/machine-list/machine-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/machine-list/machine-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-astech *ngIf=\"loading\" [type]=\"'loading'\" fxLayoutAlign=\"center center\"></app-astech>\n\n<ng-container *ngIf=\"!loading\">\n    <div [@fillEmpty]=\"shouldShowSelect() ? 'fill' : 'empty'\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n            <mat-form-field fxFlex>\n                <mat-label>Nouvelle Machine</mat-label>\n                <mat-select [(value)]=\"selected\">\n                    <mat-option *ngFor=\"let machine of unallowedMachines\" [value]=\"machine\">\n                        {{machine.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <div fxLayoutAlign=\"center center\">\n                <button mat-raised-button color=\"primary\" fxLayoutAlign=\"center center\" (click)=\"addMachine()\">\n                    <mat-icon>add</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <p *ngIf=\"allowedMachines.length == 0\" fxLayoutAlign=\"center center\">L'utilisateur n'a accès à aucune machine</p>\n\n    <table mat-table *ngIf=\"allowedMachines.length > 0\" [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n            <td mat-cell *matCellDef=\"let machine\"> {{machine.id}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let machine\"> {{machine.name}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"level\">\n            <th mat-header-cell *matHeaderCellDef> Niveau </th>\n            <td mat-cell *matCellDef=\"let machine\">\n                <mat-horizontal-stepper (selectionChange)=\"setLevel($event, machine)\" [selectedIndex]=\"machine.level\">\n                    <mat-step [stepControl]=\"formGroups[0]\">\n                        <ng-template matStepLabel>Pas d'accès</ng-template>\n                    </mat-step>\n\n                    <mat-step [stepControl]=\"formGroups[1]\">\n                        <ng-template matStepLabel>Accès temporaire</ng-template>\n                    </mat-step>\n\n                    <mat-step [stepControl]=\"formGroups[2]\">\n                        <ng-template matStepLabel>Accès en autonomie</ng-template>\n                    </mat-step>\n                </mat-horizontal-stepper>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\n            <td mat-cell *matCellDef=\"let machine\">\n                <button mat-icon-button aria-label=\"Trash icon\" (click)=\"deleteMachine(machine)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/rfid-list/rfid-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/rfid-list/rfid-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-astech *ngIf=\"loading\" [type]=\"'loading'\" fxLayoutAlign=\"center center\"></app-astech>\n\n<ng-container *ngIf=\"!loading\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n        <mat-form-field fxFlex>\n            <input matInput [(ngModel)]=\"newRFID\" [errorStateMatcher]=\"matcher\" placeholder=\"Nouveau rfid\">\n        </mat-form-field>\n\n        <div fxLayoutAlign=\"center center\">\n            <button mat-raised-button color=\"primary\" fxLayoutAlign=\"center center\" (click)=\"addRFID()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <p *ngIf=\"rfids.length == 0\" fxLayoutAlign=\"center center\">L'utilisateur n'a aucune carte RFID enregistrée</p>\n\n    <table mat-table *ngIf=\"rfids.length > 0\" [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"rfid\">\n            <th mat-header-cell *matHeaderCellDef> RFID </th>\n            <td mat-cell *matCellDef=\"let rfid\" class=\"expand\"> {{rfid.rfid}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\n            <td mat-cell *matCellDef=\"let rfid\">\n                <button mat-icon-button aria-label=\"Trash icon\" (click)=\"deleteRFID(rfid)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Utilisateur: ' + user.first_name + ' ' + user.last_name\"></app-header>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"container\">\n        <h1>Machines disponibles</h1>\n        <app-machine-list [idUser]=\"id\" class=\"spacer\"></app-machine-list>\n        <div class=\"spacer\"></div>\n\n        <h1>RFID</h1>\n        <app-rfid-list [idUser]=\"id\"></app-rfid-list>\n        <div class=\"spacer\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/users.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/users.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Machines'\"></app-header>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"container\">\n        <app-astech *ngIf=\"loading\" [type]=\"'loading'\" fxLayoutAlign=\"center center\"></app-astech>\n\n        <ng-container *ngIf=\"!loading\">\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n                <mat-form-field fxFlex=\"50%\">\n                    <input matInput [(ngModel)]=\"firstName\" [errorStateMatcher]=\"matcherFirst\" placeholder=\"Prénom\">\n                </mat-form-field>\n\n                <mat-form-field fxFlex=\"50%\">\n                    <input matInput [(ngModel)]=\"lastName\" [errorStateMatcher]=\"matcher\" placeholder=\"Nom\">\n                </mat-form-field>\n\n                <div fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"primary\" fxLayoutAlign=\"center center\" (click)=\"addUser()\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                </div>\n            </div>\n\n            <p *ngIf=\"empty\" fxLayoutAlign=\"center center\">Aucun utilisateur n'est enregistré</p>\n\n            <table mat-table *ngIf=\"!empty\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                <ng-container matColumnDef=\"first_name\">\n                    <th mat-header-cell *matHeaderCellDef> Prénom </th>\n                    <td mat-cell *matCellDef=\"let user\"> {{user.first_name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"last_name\">\n                    <th mat-header-cell *matHeaderCellDef> Nom </th>\n                    <td mat-cell *matCellDef=\"let user\" class=\"expand\"> {{user.last_name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef> Actions </th>\n                    <td mat-cell *matCellDef=\"let user\">\n                        <button mat-icon-button aria-label=\"Search icon\" (click)=\"showUser(user)\">\n                            <mat-icon>search</mat-icon>\n                        </button>\n                        <button mat-icon-button aria-label=\"Trash icon\" (click)=\"deleteUser(user)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n        </ng-container>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/api/services/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/api/services/api.service.ts ***!
  \*********************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var apiUrl = 'http://192.168.137.233:5000/api/v0/admin/';
var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
    }
    APIService.prototype.login = function (password) {
        return this.http.post(apiUrl + 'login', { password: password });
    };
    APIService.prototype.getAllUsers = function (token) {
        return this.http.post(apiUrl + 'users/all', { token: token });
    };
    APIService.prototype.getUser = function (token, idUser) {
        return this.http.post(apiUrl + 'users/get', { token: token, id_user: idUser });
    };
    APIService.prototype.addUser = function (token, firstName, lastName) {
        return this.http.post(apiUrl + 'users/add', { token: token, first_name: firstName, last_name: lastName });
    };
    APIService.prototype.deleteUser = function (token, idUser) {
        return this.http.post(apiUrl + 'users/delete', { token: token, id_user: idUser });
    };
    APIService.prototype.getUserMachines = function (token, idUser) {
        return this.http.post(apiUrl + 'users/machine/all', { token: token, id_user: idUser });
    };
    APIService.prototype.getUserUnallowedMachines = function (token, idUser) {
        return this.http.post(apiUrl + 'users/machine/unallowed', { token: token, id_user: idUser });
    };
    APIService.prototype.setUserMachineLevel = function (token, idUser, idMachine, level) {
        return this.http.post(apiUrl + 'users/machine/set', { token: token, id_user: idUser, id_machine: idMachine, level: level });
    };
    APIService.prototype.deleteUserMachine = function (token, idUser, idMachine) {
        return this.http.post(apiUrl + 'users/machine/delete', { token: token, id_user: idUser, id_machine: idMachine });
    };
    APIService.prototype.getUserRFIDs = function (token, idUser) {
        return this.http.post(apiUrl + 'users/rfid/get', { token: token, id_user: idUser });
    };
    APIService.prototype.addUserRFID = function (token, idUser, rfid) {
        return this.http.post(apiUrl + 'users/rfid/add', { token: token, id_user: idUser, rfid: rfid });
    };
    APIService.prototype.deleteUserRFID = function (token, rfid) {
        return this.http.post(apiUrl + 'users/rfid/delete', { token: token, rfid: rfid });
    };
    APIService.prototype.getAllMachines = function (token) {
        return this.http.post(apiUrl + 'machines/all', { token: token });
    };
    APIService.prototype.addMachine = function (token, name, defaultLevel) {
        return this.http.post(apiUrl + 'machines/add', { token: token, name: name, default_level: defaultLevel });
    };
    APIService.prototype.setMachineDefaultLevel = function (token, idMachine, defaultLevel) {
        return this.http.post(apiUrl + 'machines/set', { token: token, id_machine: idMachine, default_level: defaultLevel });
    };
    APIService.prototype.deleteMachine = function (token, idMachine) {
        return this.http.post(apiUrl + 'machines/delete', { token: token, id_machine: idMachine });
    };
    APIService.prototype.getAllMonitoringEntries = function (token) {
        return this.http.post(apiUrl + 'monitoring/all', { token: token });
    };
    APIService.prototype.deleteMonitoringEntry = function (token, idEntry) {
        return this.http.post(apiUrl + 'monitoring/delete', { token: token, id_entry: idEntry });
    };
    APIService.API_ADMIN_INVALID_PASSWORD = 'INVALID_PASSWORD';
    APIService.API_ADMIN_INVALID_TOKEN = 'INVALID_TOKEN';
    APIService.API_ADMIN_MYSQL_ERROR_SELECT = 'ERROR_SELECT';
    APIService.API_ADMIN_MYSQL_ERROR_INSERT = 'ERROR_INSERT';
    APIService.API_ADMIN_MYSQL_ERROR_DELETE = 'ERROR_DELETE';
    APIService.API_ADMIN_MYSQL_ERROR_UPDATE = 'ERROR_UPDATE';
    APIService.API_ADMIN_SUCCESS = 'SUCCESS';
    APIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/monitoring/monitoring.component */ "./src/app/pages/monitoring/monitoring.component.ts");
/* harmony import */ var _pages_machines_machines_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/machines/machines.component */ "./src/app/pages/machines/machines.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_user_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/user/machine-list/machine-list.component */ "./src/app/pages/user/machine-list/machine-list.component.ts");
/* harmony import */ var _pages_user_rfid_list_rfid_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user/rfid-list/rfid-list.component */ "./src/app/pages/user/rfid-list/rfid-list.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_11__["MonitoringComponent"],
                _pages_machines_machines_component__WEBPACK_IMPORTED_MODULE_12__["MachinesComponent"],
                _pages_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _pages_user_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_15__["MachineListComponent"],
                _pages_user_rfid_list_rfid_list_component__WEBPACK_IMPORTED_MODULE_16__["RfidListComponent"]
            ],
            imports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/guards/authentication.guard */ "./src/app/core/guards/authentication.guard.ts");
/* harmony import */ var _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/monitoring/monitoring.component */ "./src/app/pages/monitoring/monitoring.component.ts");
/* harmony import */ var _pages_machines_machines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/machines/machines.component */ "./src/app/pages/machines/machines.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/pages/user/user.component.ts");








var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'monitoring'
    },
    {
        path: 'monitoring',
        component: _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_4__["MonitoringComponent"],
        canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'users',
        component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
        canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'machines',
        component: _pages_machines_machines_component__WEBPACK_IMPORTED_MODULE_5__["MachinesComponent"],
        canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'user/:id',
        component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
        canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/components/astech/astech.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/astech/astech.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  position: absolute;\n}\n\n.login {\n  width: 200px;\n  height: 200px;\n}\n\n.login > img {\n  width: 200px;\n  height: 200px;\n}\n\n.loading {\n  width: 500px;\n  height: 500px;\n}\n\n.loading > img {\n  width: 500px;\n  height: 500px;\n}\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rotating {\n  from {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n.login > img.rotating-slow {\n  -webkit-animation: rotating 50s linear infinite;\n  animation: rotating 50s linear infinite;\n}\n\n.login > img.rotating-fast {\n  -webkit-animation: rotating 40s linear infinite;\n  animation: rotating 40s linear infinite;\n}\n\n.loading > img.rotating-slow {\n  -webkit-animation: rotating 5s linear infinite;\n  animation: rotating 5s linear infinite;\n}\n\n.loading > img.rotating-fast {\n  -webkit-animation: rotating 4s linear infinite;\n  animation: rotating 4s linear infinite;\n}"

/***/ }),

/***/ "./src/app/core/components/astech/astech.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/astech/astech.component.ts ***!
  \************************************************************/
/*! exports provided: AstechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstechComponent", function() { return AstechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AstechComponent = /** @class */ (function () {
    function AstechComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AstechComponent.prototype, "type", void 0);
    AstechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-astech',
            template: __webpack_require__(/*! raw-loader!./astech.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/astech/astech.component.html"),
            styles: [__webpack_require__(/*! ./astech.component.scss */ "./src/app/core/components/astech/astech.component.scss")]
        })
    ], AstechComponent);
    return AstechComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  height: 144px;\n  margin-bottom: 15px;\n}\n\nmat-toolbar-row {\n  margin: 5px;\n}\n\nh1 {\n  font-size: 125%;\n  font-weight: 200 !important;\n}"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding-top: 1%;\n  padding-bottom: 5%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.container {\n  height: 100vh;\n}\n\n.form-padding {\n  padding: 10px;\n}"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/error-matcher.utils */ "./src/app/core/utils/error-matcher.utils.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, authService, router, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.hide = true;
        this.matcher = new _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_5__["ErrorMatcher"]();
    };
    LoginComponent.prototype.onKeyDown = function (event) {
        if (event.key === "Enter") {
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.apiService.login(this.password).subscribe(function (response) {
            if (response.validity) {
                if (response.message === src_app_api_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"].API_ADMIN_SUCCESS) {
                    _this.authService.setToken(response.result);
                    _this.router.navigate([_this.authService.REDIRECT_URL]);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.matcher.setErrorState(true);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_api_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.component.scss":
/*!******************************************!*\
  !*** ./src/app/core/core.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100% !important;\n}"

/***/ }),

/***/ "./src/app/core/core.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/core/services/authentication.service.ts");



var CoreComponent = /** @class */ (function () {
    function CoreComponent(authService) {
        this.authService = authService;
    }
    CoreComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    CoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! raw-loader!./core.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.scss */ "./src/app/core/core.component.scss")]
        })
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.routing */ "./src/app/core/core.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/toolbar/toolbar.component */ "./src/app/core/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core.component */ "./src/app/core/core.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _components_astech_astech_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/astech/astech.component */ "./src/app/core/components/astech/astech.component.ts");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/core/guards/authentication.guard.ts");
/* harmony import */ var _guards_no_authentication_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/no-authentication.guard */ "./src/app/core/guards/no-authentication.guard.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");


















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _core_component__WEBPACK_IMPORTED_MODULE_10__["CoreComponent"],
                _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_astech_astech_component__WEBPACK_IMPORTED_MODULE_12__["AstechComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _core_routing__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"]
            ],
            exports: [_core_component__WEBPACK_IMPORTED_MODULE_10__["CoreComponent"], _components_astech_astech_component__WEBPACK_IMPORTED_MODULE_12__["AstechComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"]],
            providers: [_api_services_api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticationGuard"], _guards_no_authentication_guard__WEBPACK_IMPORTED_MODULE_14__["NoAuthenticationGuard"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/core.routing.ts":
/*!**************************************!*\
  !*** ./src/app/core/core.routing.ts ***!
  \**************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _guards_no_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/no-authentication.guard */ "./src/app/core/guards/no-authentication.guard.ts");





var routes = [
    {
        path: 'login',
        component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards_no_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["NoAuthenticationGuard"]]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/guards/authentication.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate([this.authService.LOGIN_URL]);
        return false;
    };
    AuthenticationGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/no-authentication.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/core/guards/no-authentication.guard.ts ***!
  \********************************************************/
/*! exports provided: NoAuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthenticationGuard", function() { return NoAuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");




var NoAuthenticationGuard = /** @class */ (function () {
    function NoAuthenticationGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NoAuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate([this.authService.REDIRECT_URL]);
            return true;
        }
        return true;
    };
    NoAuthenticationGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    NoAuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoAuthenticationGuard);
    return NoAuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/core/layout/layout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/layout/layout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/layout/layout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/core/layout/layout.component.scss")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/toolbar/toolbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/navigation/toolbar/toolbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  padding: 0 14px;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/core/navigation/toolbar/toolbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/navigation/toolbar/toolbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navigation/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/navigation/toolbar/toolbar.component.scss")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.LOGIN_URL = 'login';
        this.REDIRECT_URL = '';
    }
    AuthenticationService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.token != null;
    };
    AuthenticationService.prototype.disconnect = function () {
        this.token = null;
        this.router.navigate([this.LOGIN_URL]);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/utils/error-matcher.utils.ts":
/*!***************************************************!*\
  !*** ./src/app/core/utils/error-matcher.utils.ts ***!
  \***************************************************/
/*! exports provided: ErrorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMatcher", function() { return ErrorMatcher; });
var ErrorMatcher = /** @class */ (function () {
    function ErrorMatcher() {
        this.error = false;
    }
    ErrorMatcher.prototype.isErrorState = function (control, form) {
        return this.error;
    };
    ErrorMatcher.prototype.setErrorState = function (error) {
        this.error = error;
    };
    return ErrorMatcher;
}());



/***/ }),

/***/ "./src/app/pages/machines/machines.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/machines/machines.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-horizontal-content-container {\n  display: none !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.container {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 60% !important;\n  min-width: 60%;\n}"

/***/ }),

/***/ "./src/app/pages/machines/machines.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/machines/machines.component.ts ***!
  \******************************************************/
/*! exports provided: MachinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesComponent", function() { return MachinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/utils/error-matcher.utils */ "./src/app/core/utils/error-matcher.utils.ts");








var MachinesComponent = /** @class */ (function () {
    function MachinesComponent(apiService, authService, formBuilder, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'preset', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.machines);
        this.loading = true;
        this.empty = true;
    }
    MachinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllMachines(this.authService.getToken()).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.machines = response.result;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.machines);
                    _this.matcher = new _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_7__["ErrorMatcher"]();
                    _this.machineName = '';
                    _this.machineDefaultLevel = 0;
                    _this.formGroups = [];
                    for (var i = 0; i < 3; i++) {
                        _this.formGroups.push(_this.formBuilder.group({
                            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                        }));
                    }
                    _this.loading = false;
                    _this.empty = _this.machines.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachinesComponent.prototype.addMachine = function () {
        var _this = this;
        if (this.machineName === '') {
            this.matcher.setErrorState(true);
            return;
        }
        this.apiService.addMachine(this.authService.getToken(), this.machineName, this.machineDefaultLevel).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.machines.push(response.result);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.machines);
                    _this.empty = false;
                    _this.machineName = '';
                    _this.machineDefaultLevel = 0;
                    _this.matcher.setErrorState(false);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachinesComponent.prototype.setLevel = function (event, machine) {
        var _this = this;
        this.apiService.setMachineDefaultLevel(this.authService.getToken(), machine.id, event.selectedIndex).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    machine.default_level = event.selectedIndex;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachinesComponent.prototype.deleteMachine = function (machine) {
        var _this = this;
        this.apiService.deleteMachine(this.authService.getToken(), machine.id).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.machines.splice(_this.machines.indexOf(machine), 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.machines);
                    _this.empty = _this.machines.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachinesComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    MachinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machines',
            template: __webpack_require__(/*! raw-loader!./machines.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/machines/machines.component.html"),
            styles: [__webpack_require__(/*! ./machines.component.scss */ "./src/app/pages/machines/machines.component.scss")]
        })
    ], MachinesComponent);
    return MachinesComponent;
}());



/***/ }),

/***/ "./src/app/pages/monitoring/monitoring.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/monitoring/monitoring.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.container {\n  min-width: 60%;\n}\n\n.expand {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 40% !important;\n  width: 40%;\n}"

/***/ }),

/***/ "./src/app/pages/monitoring/monitoring.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/monitoring/monitoring.component.ts ***!
  \**********************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(apiService, authService, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'rfid', 'first_name', 'last_name', 'content', 'date', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.monitoringEntries);
        this.loading = true;
        this.empty = true;
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.sort = this.sort;
        this.apiService.getAllMonitoringEntries(this.authService.getToken()).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.monitoringEntries = response.result;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.monitoringEntries);
                    _this.loading = false;
                    _this.empty = _this.monitoringEntries.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MonitoringComponent.prototype.deleteEntry = function (entry) {
        var _this = this;
        this.apiService.deleteMonitoringEntry(this.authService.getToken(), entry.id).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.monitoringEntries.splice(_this.monitoringEntries.indexOf(entry), 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.monitoringEntries);
                    _this.empty = _this.monitoringEntries.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MonitoringComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MonitoringComponent.prototype.format = function (date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date, 'dd/MM/yy hh:mm', 'en-US');
    };
    MonitoringComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], MonitoringComponent.prototype, "sort", void 0);
    MonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitoring',
            template: __webpack_require__(/*! raw-loader!./monitoring.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/monitoring/monitoring.component.html"),
            styles: [__webpack_require__(/*! ./monitoring.component.scss */ "./src/app/pages/monitoring/monitoring.component.scss")]
        })
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/machine-list/machine-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user/machine-list/machine-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-horizontal-content-container {\n  display: none !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.container {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 60% !important;\n  min-width: 60%;\n}"

/***/ }),

/***/ "./src/app/pages/user/machine-list/machine-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/machine-list/machine-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MachineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineListComponent", function() { return MachineListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var MachineListComponent = /** @class */ (function () {
    function MachineListComponent(apiService, authService, formBuilder, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'level', 'delete'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allowedMachines);
        this.loading = true;
    }
    MachineListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUserMachines(this.authService.getToken(), this.idUser).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.allowedMachines = response.result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allowedMachines);
                    _this.formGroups = [];
                    for (var i = 0; i < 3; i++) {
                        _this.formGroups.push(_this.formBuilder.group({
                            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }));
                    }
                    _this.loading = false;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
        this.apiService.getUserUnallowedMachines(this.authService.getToken(), this.idUser).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.unallowedMachines = response.result;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachineListComponent.prototype.addMachine = function () {
        var _this = this;
        if (this.selected) {
            this.apiService.setUserMachineLevel(this.authService.getToken(), this.idUser, this.selected.id, 0).subscribe(function (response) {
                if (response.validity) {
                    if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                        var newMachine = { name: _this.selected.name, id: _this.selected.id, level: 0 };
                        _this.allowedMachines.push(newMachine);
                        _this.unallowedMachines.splice(_this.unallowedMachines.indexOf(_this.selected), 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allowedMachines);
                        _this.selected = null;
                    }
                    else {
                        _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                    }
                }
                else {
                    _this.authService.disconnect();
                }
            });
        }
    };
    MachineListComponent.prototype.setLevel = function (event, machine) {
        var _this = this;
        this.apiService.setUserMachineLevel(this.authService.getToken(), this.idUser, machine.id, event.selectedIndex).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    machine.default_level = event.selectedIndex;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachineListComponent.prototype.deleteMachine = function (machine) {
        var _this = this;
        this.apiService.deleteUserMachine(this.authService.getToken(), this.idUser, machine.id).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    var deletedMachine = { id: machine.id, name: machine.name, default_level: 0 };
                    _this.allowedMachines.splice(_this.allowedMachines.indexOf(machine), 1);
                    _this.unallowedMachines.push(deletedMachine);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allowedMachines);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    MachineListComponent.prototype.shouldShowSelect = function () {
        if (this.unallowedMachines) {
            if (this.unallowedMachines.length > 0) {
                return true;
            }
        }
        return false;
    };
    MachineListComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MachineListComponent.prototype, "idUser", void 0);
    MachineListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machine-list',
            template: __webpack_require__(/*! raw-loader!./machine-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/machine-list/machine-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fillEmpty', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        transform: 'scaleY(1) translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('empty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        transform: 'scaleY(0) translateY(-20px)',
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('fill => empty', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('empty => fill', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./machine-list.component.scss */ "./src/app/pages/user/machine-list/machine-list.component.scss")]
        })
    ], MachineListComponent);
    return MachineListComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/rfid-list/rfid-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/rfid-list/rfid-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.container {\n  min-width: 60%;\n}\n\n.expand {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 80% !important;\n  width: 80%;\n}"

/***/ }),

/***/ "./src/app/pages/user/rfid-list/rfid-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/rfid-list/rfid-list.component.ts ***!
  \*************************************************************/
/*! exports provided: RfidListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfidListComponent", function() { return RfidListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/error-matcher.utils */ "./src/app/core/utils/error-matcher.utils.ts");






var RfidListComponent = /** @class */ (function () {
    function RfidListComponent(apiService, authService, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.displayedColumns = ['rfid', 'delete'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.rfids);
        this.loading = true;
    }
    RfidListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUserRFIDs(this.authService.getToken(), this.idUser).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.rfids = response.result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.rfids);
                    _this.matcher = new _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_5__["ErrorMatcher"]();
                    _this.newRFID = '';
                    _this.loading = false;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    RfidListComponent.prototype.addRFID = function () {
        var _this = this;
        if (this.newRFID === '' || isNaN(+this.newRFID)) {
            this.matcher.setErrorState(true);
            return;
        }
        this.apiService.addUserRFID(this.authService.getToken(), this.idUser, +this.newRFID).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    var newRFID = { rfid: +_this.newRFID };
                    _this.rfids.push(newRFID);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.rfids);
                    _this.matcher.setErrorState(false);
                }
                else if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_MYSQL_ERROR_INSERT) {
                    _this.snackBar.open('Ce RFID est déjà enregistrée dans la base de données', '', { duration: 2500 });
                    _this.matcher.setErrorState(true);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    RfidListComponent.prototype.deleteRFID = function (rfid) {
        var _this = this;
        this.apiService.deleteUserRFID(this.authService.getToken(), rfid.rfid).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.rfids.splice(_this.rfids.indexOf(rfid), 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.rfids);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    RfidListComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RfidListComponent.prototype, "idUser", void 0);
    RfidListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rfid-list',
            template: __webpack_require__(/*! raw-loader!./rfid-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/rfid-list/rfid-list.component.html"),
            styles: [__webpack_require__(/*! ./rfid-list.component.scss */ "./src/app/pages/user/rfid-list/rfid-list.component.scss")]
        })
    ], RfidListComponent);
    return RfidListComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  min-width: 60%;\n}\n\n.spacer {\n  padding-bottom: 20px;\n}"

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");






var UserComponent = /** @class */ (function () {
    function UserComponent(apiService, authService, route, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.route = route;
        this.snackBar = snackBar;
        this.user = { id: 0, first_name: '', last_name: '' };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.apiService.getUser(this.authService.getToken(), this.id).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"].API_ADMIN_SUCCESS) {
                    _this.user = response.result;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/user/user.component.scss")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.container {\n  min-width: 60%;\n}\n\n.expand {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 70% !important;\n  width: 70%;\n}"

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _api_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/services/api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/error-matcher.utils */ "./src/app/core/utils/error-matcher.utils.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(apiService, authService, router, snackBar) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['first_name', 'last_name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.users);
        this.loading = true;
        this.empty = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllUsers(this.authService.getToken()).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"].API_ADMIN_SUCCESS) {
                    _this.users = response.result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
                    _this.matcherFirst = new _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_6__["ErrorMatcher"]();
                    _this.matcherLast = new _core_utils_error_matcher_utils__WEBPACK_IMPORTED_MODULE_6__["ErrorMatcher"]();
                    _this.firstName = '';
                    _this.lastName = '';
                    _this.loading = false;
                    _this.empty = _this.users.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        var cancel = false;
        if (this.firstName === '') {
            this.matcherFirst.setErrorState(true);
            cancel = true;
        }
        else {
            this.matcherFirst.setErrorState(false);
        }
        if (this.lastName === '') {
            this.matcherLast.setErrorState(true);
            cancel = true;
        }
        else {
            this.matcherLast.setErrorState(false);
        }
        if (cancel) {
            return;
        }
        this.apiService.addUser(this.authService.getToken(), this.firstName, this.lastName).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"].API_ADMIN_SUCCESS) {
                    _this.users.push(response.result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
                    _this.empty = false;
                    _this.matcherFirst.setErrorState(false);
                    _this.matcherLast.setErrorState(false);
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.apiService.deleteUser(this.authService.getToken(), user.id).subscribe(function (response) {
            if (response.validity) {
                if (response.message === _api_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"].API_ADMIN_SUCCESS) {
                    _this.users.splice(_this.users.indexOf(user), 1);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
                    _this.empty = _this.users.length == 0;
                }
                else {
                    _this.snackBar.open("Unhandled error: " + response.message, '', { duration: 2500 });
                }
            }
            else {
                _this.authService.disconnect();
            }
        });
    };
    UsersComponent.prototype.showUser = function (user) {
        this.router.navigate(['user/' + user.id]);
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _api_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/pages/users/users.component.scss")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\fablab\_smart_edition\frontend\fab-machine\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);