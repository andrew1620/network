(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[3],{317:function(e,t,n){e.exports={userBox:"style_userBox__bc3sa",photo:"style_photo__FgK0E",img:"style_img__1flFp",pageNumber:"style_pageNumber__14c4c",activePage:"style_activePage__1DF1r",pagesNumbersBox:"style_pagesNumbersBox__13kbn",navlink:"style_navlink__2C5KW"}},318:function(e,t,n){e.exports={activePage:"style_activePage__2U3lD",pagesNumbersBox:"style_pagesNumbersBox__UxS9h"}},322:function(e,t,n){"use strict";n.r(t);var o=n(31),a=n(32),r=n(34),s=n(33),l=n(35),u=n(0),i=n.n(u),c=n(9),p=n(142),g=n(317),h=n.n(g),m=n(76),f=n.n(m),d=n(10),k=n(26),C=n(318),b=n.n(C),w=function(e){for(var t=e.totalCount,n=e.count,o=e.currentPage,a=e.handlePageNumClick,r=e.portionSize,s=void 0===r?10:r,l=Math.ceil(t/n),c=[],p=1;p<=l;p++)c.push(p);var g=Math.ceil(l/n),h=Object(u.useState)(1),m=Object(k.a)(h,2),f=m[0],d=m[1],C=(f-1)*s+1,w=f*s,P=c.filter((function(e){return e>=C&&e<=w})).map((function(e){return i.a.createElement("span",{className:e===o&&b.a.activePage,onClick:function(){a(e)},key:e},e)}));return i.a.createElement("div",{className:b.a.pagesNumbersBox},i.a.createElement("button",{onClick:function(){d(f-1)},disabled:f<=1},"<--"),P," ",i.a.createElement("button",{onClick:function(){d(f+1)},disabled:f>=g},"--\x3e")," ")},P=function(e){return i.a.createElement("div",null,i.a.createElement(w,{totalCount:e.totalCount,count:e.count,currentPage:e.currentPage,handlePageNumClick:e.handlePageNumClick}),e.users.map((function(t){return i.a.createElement("div",{key:t.id,className:h.a.userBox},i.a.createElement("div",{className:h.a.photo},i.a.createElement(d.b,{to:"/profile/".concat(t.id),className:h.a.navlink},i.a.createElement("img",{src:null==t.photos.small?f.a:t.photos.small,className:h.a.img,alt:"avaPhoto"}))),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"info"},i.a.createElement("span",{className:"name"},t.name)),t.followed?i.a.createElement("button",{disabled:e.isFollowing.includes(t.id),onClick:function(){e.unfollowThunkCreator(t.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439"):i.a.createElement("button",{disabled:e.isFollowing.includes(t.id),onClick:function(){e.followThunkCreator(t.id)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f")))})))},_=(n(23),function(e){return e.usersPage.users}),v=function(e){return e.usersPage.count},N=function(e){return e.usersPage.currentPage},E=function(e){return e.usersPage.totalCount},y=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.isFollowing},x=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.count,this.props.currentPage)}},{key:"handlePageNumClick",value:function(e){this.props.getUsersThunkCreator(this.props.count,e),this.props.setCurrentPage(e)}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalCount/this.props.count),t=[],n=1;n<=e;n++)t.push(n);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(P,{totalCount:this.props.totalCount,count:this.props.count,currentPage:this.props.currentPage,handlePageNumClick:this.handlePageNumClick.bind(this),unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,isFollowing:this.props.isFollowing,toggleIsFollowing:this.props.toggleIsFollowing,followThunkCreator:this.props.followThunkCreator,unfollowThunkCreator:this.props.unfollowThunkCreator})))}}]),t}(i.a.Component);t.default=Object(c.b)((function(e){return{users:_(e),count:v(e),currentPage:N(e),totalCount:E(e),isFetching:y(e),isFollowing:F(e)}}),{follow:p.b,unfollow:p.g,setCurrentPage:p.e,toggleIsFollowing:p.f,getUsersThunkCreator:p.d,followThunkCreator:p.c,unfollowThunkCreator:p.h})(x)}}]);
//# sourceMappingURL=3.4c1ab193.chunk.js.map