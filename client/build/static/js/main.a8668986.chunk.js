(this["webpackJsonpred-todo-list"]=this["webpackJsonpred-todo-list"]||[]).push([[0],{54:function(e,t,i){},55:function(e,t,i){},61:function(e,t,i){},81:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i(0),a=i(14),c=i.n(a),l=(i(50),i(51),i(54),i(8)),r=i(9),o=i(18),d=i(12),h=i(11),u=(i(55),i(85)),j=i(26),m=i(25),p=i(83),b=i(84),O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e,n){var s;return Object(l.a)(this,i),(s=t.call(this,e)).openModal=function(){s.setState({show:!0})},s.closeModal=function(){s.resetState(),s.props.onHide()},s.saveChanges=function(e){s.closeModal()},s.state={show:e.openModal,modalName:n},s}return Object(r.a)(i,[{key:"resetState",value:function(){this.setState({show:!1})}},{key:"componentDidUpdate",value:function(e){var t=this.props.show;e.show!==t&&(!0===t?this.openModal():this.closeModal())}},{key:"renderHeader",value:function(){return Object(n.jsx)(p.a.Title,{children:"Insert Title Here"})}},{key:"renderBody",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:"Test Body Here"})})}},{key:"renderFooter",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{variant:"outline-primary",onClick:this.saveChanges,children:"Save Changes"}),Object(n.jsx)(u.a,{variant:"outline-secondary",onClick:this.closeModal,children:"Cancel"})]})}},{key:"render",value:function(){return Object(n.jsxs)(p.a,{show:this.state.show,onHide:this.closeModal,centered:!0,children:[Object(n.jsx)(p.a.Header,{children:this.renderHeader()}),Object(n.jsx)(p.a.Body,{children:this.renderBody()}),Object(n.jsx)(p.a.Footer,{children:this.renderFooter()})]})}}]),i}(s.Component),x=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){return Object(l.a)(this,i),t.call(this,e,"edit-item")}return Object(r.a)(i,[{key:"renderHeader",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p.a.Title,{children:"Edit Item"})})}},{key:"renderBody",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(b.a.Group,{id:"listTitle",children:[Object(n.jsx)(b.a.Label,{children:"Item Title"}),Object(n.jsx)(b.a.Control,{id:"item-title",as:"input",maxLength:"50",defaultValue:this.props.itemTitle||"",placeholder:"Enter item title here."})]}),Object(n.jsxs)(b.a.Group,{id:"listDescription",children:[Object(n.jsx)(b.a.Label,{children:"Item Description"}),Object(n.jsx)(b.a.Control,{id:"item-description",as:"textarea",rows:"3",maxLength:"150",defaultValue:this.props.itemDescription||"",placeholder:"Enter item description here."})]})]})})}}]),i}(O),f=(i(61),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={openEditModal:!1,itemTitle:n.props.itemTitle||"",itemDescription:n.props.itemDescription||"",checked:n.props.checked||!1},n}return Object(r.a)(i,[{key:"handleEdit",value:function(e,t){this.setState({openEditModal:!0,modalName:""})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{show:this.state.openEditModal,onHide:function(){e.setState({openEditModal:!1,modalName:"edit-item"})},itemTitle:this.state.itemTitle,itemDescription:this.state.itemDescription}),Object(n.jsxs)("div",{className:"row todo-item",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center item-status",children:Object(n.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{className:"item-status-checkbox custom-control-input",type:"checkbox",defaultChecked:this.state.checked}),Object(n.jsx)("label",{className:"custom-control-label",children:Object(n.jsx)("span",{className:"text-hide",children:"Invisible"})})]})}),Object(n.jsxs)("div",{className:"col-6 item-information",children:[Object(n.jsx)("div",{className:"row item-title",children:this.props.title||"Test Title Here"}),Object(n.jsx)("div",{className:"row item-details",children:this.props.description||"Message here"})]}),Object(n.jsxs)("div",{className:"col-4 item-operations d-flex justify-content-end",children:[Object(n.jsx)("button",{type:"button",className:"item-edit btn btn-outline-primary",onClick:function(){e.setState({openEditModal:!0,itemTitle:e.props.title,itemDescription:e.props.description})},children:Object(n.jsx)(m.a,{icon:j.a})}),Object(n.jsx)("button",{type:"button",className:"item-delete btn btn-outline-primary",children:Object(n.jsx)(m.a,{icon:j.b})})]})]})]})}}]),i}(s.Component)),v=i(40),g=i(44),y=i(15),k=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e,"edit-list-settings")).countCharacters=function(e){var t=e.target.value.length;n.setState(Object(v.a)({},e.target.id+"_length",t))},n}return Object(r.a)(i,[{key:"renderHeader",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p.a.Title,{children:"Edit List Settings"})})}},{key:"resetState",value:function(){Object(g.a)(Object(y.a)(i.prototype),"resetState",this).call(this),this.setState({list_description_textarea_length:0,list_title_input_length:0})}},{key:"renderBody",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Label,{children:"List Title"}),Object(n.jsx)(b.a.Control,{id:"list_title_input",as:"input",maxLength:50,onChange:this.countCharacters,defaultValue:this.props.listSettings.title,placeholder:"Enter list title here."}),Object(n.jsxs)(b.a.Text,{children:["(",this.state.list_title_input_length||this.props.listSettings.title.length," / ",50,")"]})]}),Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Label,{children:"List Description"}),Object(n.jsx)(b.a.Control,{id:"list_description_textarea",as:"textarea",rows:"3",maxLength:150,defaultValue:this.props.listSettings.description,onChange:this.countCharacters,placeholder:"Enter list description here."}),Object(n.jsxs)(b.a.Text,{children:["(",this.state.list_description_textarea_length||this.props.listSettings.description.length," / ",150,")"]})]})]})}}]),i}(O),C=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){return Object(l.a)(this,i),t.call(this,e,"add-item")}return Object(r.a)(i,[{key:"renderHeader",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p.a.Title,{children:"Add List Item"})})}},{key:"renderBody",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{id:"add-item-form",children:[Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Label,{children:"Item Title"}),Object(n.jsx)(b.a.Control,{id:"item-title",as:"input",maxLength:"50",placeholder:"Enter item title here."})]}),Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Label,{children:"Item Description"}),Object(n.jsx)(b.a.Control,{id:"item-description",as:"textarea",rows:"3",maxLength:"150",placeholder:"Enter item description here."})]})]})})}}]),i}(O),T=i(41),M=i.n(T).a.create({baseURL:"http://192.168.86.165:3000/api",headers:{"Content-type":"application/json"}}),S=new(function(){function e(){Object(l.a)(this,e)}return Object(r.a)(e,[{key:"getAll",value:function(){return M.get("/items")}},{key:"create",value:function(e){return M.post("/items/add",JSON.stringify(e))}}]),e}()),w=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).listItemsContent=[{itemTitle:"This is a Title",itemDescription:"Hello!",checked:!1},{itemTitle:"This is also a Title",itemDescription:"How Are You?",checked:!1},{itemTitle:"This is not a Title",itemDescription:"How Well Are You?",checked:!0}],n.state={openModal:!1,modalName:"",listItems:[],listSettings:{title:"My List",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin eget tortor vel aliquam. Curabitur velit lectus, sodales in massa tempor, co"}},n.handleCloseModal=n.handleCloseModal.bind(Object(o.a)(n)),n.handleOpenModal=n.handleOpenModal.bind(Object(o.a)(n)),n}return Object(r.a)(i,[{key:"populateList",value:function(){this.listItemsContent.forEach((function(e){var t={itemTitle:e.itemTitle,itemDescription:e.itemDescription,checked:e.checked};S.create(t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}))}},{key:"componentDidMount",value:function(){var e=this;S.getAll().then((function(t){e.setState({listItems:t.data}),e.state.listItems=t.data,console.log(t.data),console.log(e.state.listItems)})).catch((function(e){console.log(e)}))}},{key:"handleCloseModal",value:function(){this.setState((function(e){return{openModal:!1,modalName:""}}))}},{key:"handleOpenModal",value:function(e){this.setState((function(t){return{openModal:!0,modalName:e}}))}},{key:"handleShowModal",value:function(e){return this.state.modalName===e?this.state.openModal:0}},{key:"renderListItems",value:function(){return Object(n.jsx)(n.Fragment,{children:this.state.listItems.map((function(e){return Object(n.jsx)(f,{title:e.itemTitle,description:e.itemDescription,checked:e.checked},e.id)}))})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-center h-100 overflow-auto App",children:[Object(n.jsx)(k,{listSettings:this.state.listSettings,show:this.handleShowModal("edit-list-settings"),onHide:this.handleCloseModal}),Object(n.jsx)(C,{show:this.handleShowModal("add-item"),onHide:this.handleCloseModal}),Object(n.jsx)("div",{className:"row d-flex flex-column align-items-center justify-content-center list-title",children:Object(n.jsxs)("div",{className:"container-fluid",style:{maxWidth:750},children:[Object(n.jsxs)("h1",{children:[" ",this.state.listSettings.title," "]}),Object(n.jsxs)("p",{children:[" ",this.state.listSettings.description," "]})]})}),Object(n.jsx)("div",{className:"row list-contents h-50",children:Object(n.jsx)("div",{className:"container-fluid justify-content-center h-100 overflow-auto",style:{maxWidth:750},children:this.renderListItems()})}),Object(n.jsxs)("div",{className:"row justify-content-center list-operations",children:[Object(n.jsx)(u.a,{variant:"outline-primary",onClick:function(){return e.handleOpenModal("add-item")},children:"Add New Item"}),Object(n.jsx)(u.a,{variant:"outline-primary",onClick:function(){return e.handleOpenModal("edit-list-settings")},children:"List Settings"})]})]})}}]),i}(s.Component),N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,86)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))},L=i(43);c.a.render(Object(n.jsx)(L.a,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),N()}},[[81,1,2]]]);
//# sourceMappingURL=main.a8668986.chunk.js.map