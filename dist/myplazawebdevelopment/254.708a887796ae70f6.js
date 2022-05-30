"use strict";(self.webpackChunkmyplazawebdevelopment=self.webpackChunkmyplazawebdevelopment||[]).push([[254],{9254:(Q,p,a)=>{a.r(p),a.d(p,{TypeModule:()=>O});var s=a(1048),T=a(8834),e=a(9724),C=a(2508),Z=a(366),A=a(7280);let b=(()=>{class o{constructor(t){this._service=t,this.resultsLength=0,this.displayedColumns=["name","type","action"],this.displayedLabel=["Name","Measure","Action"],this.dataSource=new T.by(this.type),this.tableAction={isDelete:!0,isEdit:!0}}ngOnInit(){this.getUserList()}getUserList(){this.sub=this._service.getTypeList({sortDirection:"desc",limit:10,page:1,sortColumn:"name"}).subscribe(n=>{this.resultsLength=n.totalCount,this.dataSource.data=n.types})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.m))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-type"]],decls:2,vars:5,consts:[[3,"displayedColumns","displayedLabel","dataSource","resultsLength","tableAction"]],template:function(t,n){1&t&&(e._UZ(0,"app-manage-custom-header"),e._UZ(1,"data-table",0)),2&t&&(e.xp6(1),e.Q6J("displayedColumns",n.displayedColumns)("displayedLabel",n.displayedLabel)("dataSource",n.dataSource)("resultsLength",n.resultsLength)("tableAction",n.tableAction))},directives:[Z.C,A.Q],styles:[""]}),o})();var m=a(8413),r=a(1659),x=a(8810),c=a(5395),u=a(5691),d=a(8904),y=a(3472),h=a(7043),L=a(4659);function M(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",14),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().index;return e.oxw().removetype(l)}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA(),e.qZA(),e.BQk()}}function F(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"div",11),e.TgZ(2,"mat-form-field",3),e._UZ(3,"input",12),e.TgZ(4,"mat-error"),e._uU(5," Please provide a valid label name "),e.qZA(),e.qZA(),e.YNc(6,M,4,0,"ng-container",13),e.qZA(),e.BQk()),2&o){const t=i.$implicit,n=e.oxw();e.xp6(1),e.Q6J("formGroup",t),e.xp6(5),e.Q6J("ngIf",n.types().controls.length>1)}}let g=(()=>{class o{constructor(t,n,l,v){this.formBuilder=t,this._save=n,this._activeRoute=l,this._loc=v,this.typeForm=this.formBuilder.group({name:["",r.kI.required],label:["",r.kI.required],list:this.formBuilder.array([this.newType()])})}ngOnInit(){var t;this.typeId=this._activeRoute.snapshot.paramMap.get("id");let n=null===(t=this._activeRoute.snapshot.data.detail)||void 0===t?void 0:t.type;n&&this.getDetail(n)}getDetail(t){console.log(t),this.typeForm=this.formBuilder.group({name:[t.name,r.kI.required],label:[t.label,r.kI.required],list:this.formBuilder.array([])}),t.list.map(n=>{this.types().push(this.formBuilder.group({type:[n,r.kI.required]}))})}types(){return this.typeForm.get("list")}newType(){return this.formBuilder.group({type:["",r.kI.required]})}addMainType(){this.types().push(this.newType())}removetype(t){this.types().removeAt(t)}onSave(){if(this.typeForm.valid){let t=this.typeForm.value.list.map(n=>n.type);this.typeForm.value.list=t,console.log(this.typeId),this.sub=this._save.onSaveType(this.typeForm.value,this.typeId).subscribe(n=>{console.log(n),this._loc.back()})}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(x.m),e.Y36(m.gz),e.Y36(s.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-type"]],decls:21,vars:2,consts:[[3,"formGroup"],["fxLayout","column","fxLayoutAlign","start center",1,"main-wrapper"],["fxLayout","column","fxLayoutAlign","center center",1,"location-form"],["appearance","outline"],["matInput","","type","text","placeholder","Name","formControlName","name","name","name","required",""],["matInput","","type","text","placeholder","Label Name","formControlName","label","name","labelName","required",""],["fxLayout","row","fxLayoutAlign","space-between center",2,"width","100%","margin-top","14px"],["mat-mini-fab","","aria-label","Add button","color","primary",3,"click"],["formArrayName","list"],[4,"ngFor","ngForOf"],[3,"click"],["fxLayoutAlign","start start",1,"type-wrapper",3,"formGroup"],["matInput","","type","text","placeholder","Label Name","formControlName","type","name","type","required",""],[4,"ngIf"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"mat-form-field",3),e._UZ(4,"input",4),e.TgZ(5,"mat-error"),e._uU(6," Please provide a valid name "),e.qZA(),e.qZA(),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",5),e.TgZ(9,"mat-error"),e._uU(10," Please provide a valid label name "),e.qZA(),e.qZA(),e.TgZ(11,"div",6),e.TgZ(12,"label"),e._uU(13,"Type"),e.qZA(),e.TgZ(14,"button",7),e.NdJ("click",function(){return n.addMainType()}),e.TgZ(15,"mat-icon"),e._uU(16,"add"),e.qZA(),e.qZA(),e.qZA(),e.ynx(17,8),e.YNc(18,F,7,2,"ng-container",9),e.BQk(),e.TgZ(19,"app-primary-button",10),e.NdJ("click",function(){return n.onSave()}),e._uU(20," Create "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",n.typeForm),e.xp6(18),e.Q6J("ngForOf",n.types().controls))},directives:[r._Y,r.JL,r.sg,c.xw,c.Wh,u.KE,d.Nt,r.Fj,r.JJ,r.u,r.Q7,u.TO,y.lW,h.Hw,r.CE,s.sg,s.O5,L.C],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%;margin-right:20px}.main-wrapper[_ngcontent-%COMP%]{height:calc(100vh - 80px);padding:30px 0}.location-form[_ngcontent-%COMP%]{width:600px}.type-wrapper[_ngcontent-%COMP%]{width:100%;margin-top:16px}"]}),o})();var I=a(3249),N=a(5523),U=a(6329);let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[N.ie,U.o9,d.c,h.Ps,y.ot]}),o})();var f=a(6325);const J=[{path:"",component:b},{path:"create",component:g},{path:"create/:id",component:g,resolve:{detail:f.H}}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[f.H],imports:[[s.ez,m.Bz.forChild(J),I.C,r.u5,r.UX,B]]}),o})()}}]);