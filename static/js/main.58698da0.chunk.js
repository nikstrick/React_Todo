(this.webpackJsonpreact_course=this.webpackJsonpreact_course||[]).push([[0],{33:function(t,e,o){t.exports=o(61)},43:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=o(18),i=o(6),s=o(7),u=o(9),d=o(8),p=o(13),m=o(10);var f={color:"#fefefe",textDecoration:"none"},h={background:"#333",color:"#fefefe",textAlign:"center",padding:"10px"},b=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"Todo List"),a.a.createElement(p.b,{style:f,to:"/"},"Home")," | ",a.a.createElement(p.b,{style:f,to:"/About"},"About"))},y=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"3px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"X")))}}]),o}(n.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cusor:"pointer",float:"right"},g=y,E=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map((function(e){return a.a.createElement("h3",null,a.a.createElement(g,{key:e.id,todo:e,delTodo:t.props.delTodo,markComplete:t.props.markComplete}))}))}}]),o}(n.Component),j=(o(43),o(32)),k=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component);var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"It is about the v1.0.0 project of my react crash course"))},x=o(17),C=o.n(x),S=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(b,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(E,{key:t.state.todos.id,todos:t.state.todos,delTodo:t.delTodo,markComplete:t.markComplete}))}}),a.a.createElement(m.a,{path:"/about",component:O})))}}]),o}(n.Component);c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.58698da0.chunk.js.map