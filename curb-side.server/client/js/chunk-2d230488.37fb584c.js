(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230488"],{ec2f:function(t,e,r){"use strict";r.r(e);var c=r("7a23");const a={class:"container"},o=Object(c["j"])("div",{class:"row"},[Object(c["j"])("div",{class:"col"},[Object(c["j"])("h3",null,"Archived Order")])],-1),s={class:"row"},n={class:"col"};function d(t,e,r,d,p,j){const i=Object(c["A"])("order-component");return Object(c["t"])(),Object(c["f"])("div",a,[o,Object(c["j"])("div",s,[Object(c["j"])("div",n,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(d.sortDates(),t=>(Object(c["t"])(),Object(c["f"])(i,{key:t.id,"order-prop":t,archived:!0},null,8,["order-prop"]))),128))])])])}var p=r("cfd9"),j=r("6c02"),i=r("8a4e"),b=r("83fc"),O={setup(){const t=Object(j["c"])(),e=Object(c["x"])({orders:Object(c["d"])(()=>b["AppState"].orders)});return Object(c["r"])(async()=>{try{await p["a"].getOrders(t.params.id),b["AppState"].orders=b["AppState"].orders.filter(t=>"pending"!==t.status)}catch(e){i["a"].error(e)}}),Object(c["s"])(()=>{b["AppState"].date=""}),{state:e,sortDates(){return e.orders.forEach(t=>{const e=new Date(t.createdAt),r=e.getMonth(),c=e.getFullYear(),a=e.getDate(),o=c.toString()+r.toString()+a.toString();t.date=o,i["a"].log(o)}),b["AppState"].orders.sort((function(t,e){return t.date-e.date})),b["AppState"].orders}}}};O.render=d;e["default"]=O}}]);