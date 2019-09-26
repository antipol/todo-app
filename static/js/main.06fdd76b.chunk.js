(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(7),c=o.n(r),l=o(1),s=o(2),i=o(4),u=o(3),m=o(5),d=function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"What to do?"),n.a.createElement("span",{className:"tagline"},"This could be your ",e.tagline," list"))},p=function(e){function t(){var e,o;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).textInput=n.a.createRef(),o.handleSubmit=function(e){e.preventDefault();var t=o.textInput.current.value.trim();console.log(t),o.props.addToDo(t),e.currentTarget.reset()},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"input-group my-3",onSubmit:this.handleSubmit},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Add a new todo item...",ref:this.textInput}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},n.a.createElement("i",{className:"fas fa-plus","area-hidden":"true"}),"Add Item")))}}]),t}(n.a.Component),h=function(e){function t(){var e,o;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleKeyUp=function(e){13===e.keyCode&&e.target.blur()},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data;return n.a.createElement("tr",{className:"todo-item","data-id":t.uuid},n.a.createElement("td",null,n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{className:"custom-control-input",value:t.uuid,id:"todo-done-".concat(t.uuid),type:"checkbox",checked:t.done,onChange:this.props.toggleToDoDone}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"todo-done-".concat(t.uuid)},"\xa0"))),n.a.createElement("td",{className:"col-1"},n.a.createElement("input",{className:"form-control",type:"text",value:t.text,onChange:function(o){e.props.editToDoText(t.uuid,o.target.value)},onKeyUp:function(t){e.handleKeyUp(t)}})),n.a.createElement("td",{className:"col-action"},n.a.createElement("i",{className:"icon-remove far fa-trash-alt",onClick:function(o){return e.props.removeToDo(t.uuid)}})))}}]),t}(n.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"todo-list"},n.a.createElement("table",{className:"todo-items"},n.a.createElement("tbody",null,Object.keys(this.props.items).map((function(t){return n.a.createElement(h,{key:"todo-item-".concat(t),data:e.props.items[t],editToDoText:e.props.editToDoText,toggleToDoDone:e.props.toggleToDoDone,removeToDo:e.props.removeToDo})})))))}}]),t}(n.a.Component),g=o(8),b=o.n(g);function v(){var e;return(e=["Christmas","holiday","shopping"])[Math.floor(Math.random()*e.length)]}var D=new(function(){function e(){if(Object(l.a)(this,e),this.canUseLocalStorage=function(){try{localStorage.setItem("test","test"),localStorage.removeItem("test")}catch(e){return!1}return!0},!this.canUseLocalStorage())throw Error("The local storage is full or disabled!")}return Object(s.a)(e,[{key:"set",value:function(e,t){localStorage.setItem(e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=localStorage.getItem(e);return null!==o?o:t}}]),e}()),y=function(e){function t(e){var o;Object(l.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).addToDo=function(e){var t={uuid:b()(),text:e,done:!1};o.setState((function(e){return e.toDoItems[t.uuid]=t,e}))},o.editToDoText=function(e,t){o.setState((function(o){return o.toDoItems[e].text=t,o}))},o.toggleToDoDone=function(e){var t=e.target;o.setState((function(e){return e.toDoItems[t.value].done=t.checked,e}))},o.removeToDo=function(e){o.setState((function(t){return delete t.toDoItems[e],t}))},o.storageKey="react-todo";var a=D.get(o.storageKey);return o.state=a?JSON.parse(a):{toDoItems:{}},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){D.set(this.storageKey,JSON.stringify(this.state))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(d,{tagline:v()}),n.a.createElement(p,{addToDo:this.addToDo}),n.a.createElement(f,{items:this.state.toDoItems,editToDoText:this.editToDoText,toggleToDoDone:this.toggleToDoDone,removeToDo:this.removeToDo}))}}]),t}(n.a.Component);o(16),o(17);c.a.render(n.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,o){e.exports=o(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.06fdd76b.chunk.js.map