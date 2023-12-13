"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[416],{949:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=o(5893),t=o(1151);const l={title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},i=void 0,c={id:"framework/quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u4e0b\u9762\u5c06\u6f14\u793a\u4e00\u4e2a\u4e0a\u56fe\u4e2d \u5e94\u7528\u5f00\u53d1\u533a\u7684\u4e00\u4e2aHelloWorld\u5e94\u7528, \u5b8c\u6574\u4ee3\u7801\u8bf7\u53c2\u8003: \u6837\u4f8b\u4ee3\u7801",source:"@site/docs/framework/quickstart.md",sourceDirName:"framework",slug:"/framework/quickstart",permalink:"/docs/framework/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/quickstart.md",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},sidebar:"framework",previous:{title:"\u6846\u67b6\u6982\u8ff0",permalink:"/docs/framework"},next:{title:"\u6982\u8ff0",permalink:"/docs/framework/api/"}},a={},s=[{value:"\u5b9a\u4e49\u4e1a\u52a1",id:"\u5b9a\u4e49\u4e1a\u52a1",level:2},{value:"\u5b9e\u73b0\u4e1a\u52a1",id:"\u5b9e\u73b0\u4e1a\u52a1",level:2},{value:"\u66b4\u9732\u63a5\u53e3",id:"\u66b4\u9732\u63a5\u53e3",level:2},{value:"\u52a0\u8f7d\u4e1a\u52a1",id:"\u52a0\u8f7d\u4e1a\u52a1",level:2},{value:"\u542f\u52a8\u7a0b\u5e8f",id:"\u542f\u52a8\u7a0b\u5e8f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u5c06\u6f14\u793a\u4e00\u4e2a\u4e0a\u56fe\u4e2d \u5e94\u7528\u5f00\u53d1\u533a\u7684\u4e00\u4e2aHelloWorld\u5e94\u7528, \u5b8c\u6574\u4ee3\u7801\u8bf7\u53c2\u8003: ",(0,r.jsx)(n.a,{href:"https://github.com/infraboard/mcube/tree/master/docs/example",children:"\u6837\u4f8b\u4ee3\u7801"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u4e49\u4e1a\u52a1",children:"\u5b9a\u4e49\u4e1a\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"helloworld\u5305"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// 1. \u4e1a\u52a1\u5b9a\u4e49\ntype HelloService interface {\n\tHello() string\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u73b0\u4e1a\u52a1",children:"\u5b9e\u73b0\u4e1a\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"helloworld/impl\u5305"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func init() {\n\tioc.Controller().Registry(&HelloServiceImpl{})\n}\n\n// \u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u7c7b\ntype HelloServiceImpl struct {\n\tdb *gorm.DB\n\n\tioc.ObjectImpl\n}\n\n// \u63a7\u5236\u5668\u521d\u59cb\u5316\nfunc (i *HelloServiceImpl) Init() error {\n\t// \u4eceIoc\u603b\u83b7\u53d6GORM DB\u5bf9\u8c61, GORM\u76f8\u5173\u914d\u7f6e\u5df2\u7ecf\u6258\u7ba1\u7ed9Ioc\n\t// Ioc\u4f1a\u8d1f\u8d23GORM\u7684\u914d\u7f6e\u8bfb\u53d6\u548c\u4e3a\u4f60\u521d\u59cb\u5316DB\u5bf9\u8c61\u5b9e\u4f8b,\u4ee5\u53ca\u5173\u95ed\n\ti.db = datasource.DB()\n\treturn nil\n}\n\n// \u5177\u4f53\u4e1a\u52a1\u903b\u8f91\nfunc (i *HelloServiceImpl) Hello() string {\n\treturn "hello world"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u66b4\u9732\u63a5\u53e3",children:"\u66b4\u9732\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5b9a\u4e49Helloworl API\u63a5\u53e3: helloword/api\u5305"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func init() {\n\tioc.Api().Registry(&HelloServiceApiHandler{})\n}\n\n// 3. \u66b4\u9732HTTP\u63a5\u53e3\ntype HelloServiceApiHandler struct {\n\t// \u4f9d\u8d56\u4e1a\u52a1\u63a7\u5236\u5668\n\t// \u4f7f\u7528ioc\u6ce8\u89e3\u6765\u4ece\u81ea\u52a8\u52a0\u8f7d\u4f9d\u8d56\u5bf9\u8c61, \u7b49\u540c\u4e8e\u624b\u52a8\u6267\u884c:\n\t// \th.svc = ioc.Controller().Get("*impl.HelloService").(helloworld.HelloService)\n\tSvc helloworld.HelloService `ioc:"autowire=true;namespace=controllers"`\n\n\t// \u65e5\u5fd7\u76f8\u5173\u914d\u7f6e\u5df2\u7ecf\u6258\u7ba1\u5230Ioc\u4e2d, \u7531\u4e8e\u662f\u79c1\u6709\u5c5e\u6027\uff0c\u6240\u6709\u53d7\u5230\u6ce8\u5165, \u5177\u4f53\u89c1\u4e0b\u8fb9\u521d\u59cb\u5316\u65b9\u6cd5\n\tlog *zerolog.Logger\n\n\t// \u7ee7\u627f\u81eaIoc\u5bf9\u8c61\n\tioc.ObjectImpl\n}\n\n// \u5bf9\u8c61\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\nfunc (h *HelloServiceApiHandler) Init() error {\n\th.log = logger.Sub("helloworld.api")\n\treturn nil\n}\n\n// API\u8def\u7531\nfunc (h *HelloServiceApiHandler) Registry(r gin.IRouter) {\n\tr.GET("/", h.Hello)\n}\n\n// API\u63a5\u53e3\u5177\u4f53\u5b9e\u73b0\nfunc (h *HelloServiceApiHandler) Hello(c *gin.Context) {\n\t// \u4e1a\u52a1\u5904\u7406\n\tresp := h.Svc.Hello()\n\th.log.Debug().Msg(resp)\n\n\t// \u4e1a\u52a1\u54cd\u5e94\n\tc.JSON(http.StatusOK, gin.H{\n\t\t"data": resp,\n\t})\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u52a0\u8f7d\u4e1a\u52a1",children:"\u52a0\u8f7d\u4e1a\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u670d\u52a1: main"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n    ...\n\t// \u52a0\u8f7d\u4e1a\u52a1\u6a21\u5757\n\t_ "github.com/infraboard/mcube/docs/example/helloworld/api"\n\t_ "github.com/infraboard/mcube/docs/example/helloworld/impl"\n)\n\nfunc main() {\n\treq := ioc.NewLoadConfigRequest()\n    // \u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u8def\u5f84: etc/applicaiton.toml\n\treq.ConfigFile.Enabled = true\n\terr := ioc.ConfigIocObject(req)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u542f\u52a8\u5e94\u7528, \u5e94\u7528\u4f1a\u81ea\u52a8\u52a0\u8f7d \u521a\u624d\u5b9e\u73b0\u7684Gin Api Handler\n\terr = application.App().Start(context.Background())\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u52a8\u7a0b\u5e8f",children:"\u542f\u52a8\u7a0b\u5e8f"}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u8bf7\u53c2\u8003: ",(0,r.jsx)(n.a,{href:"https://github.com/infraboard/mcube/blob/master/docs/example/etc/application.toml",children:"\u7a0b\u5e8f\u914d\u7f6e"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'$ go run main.go \n2023-11-14T17:40:32+08:00 INFO   config/application/application.go:93 > loaded configs: [log.v1 app.v1 datasource.v1] component:APPLICATION\n2023-11-14T17:40:32+08:00 INFO   config/application/application.go:94 > loaded controllers: [log.v1 app.v1 datasource.v1] component:APPLICATION\n2023-11-14T17:40:32+08:00 INFO   config/application/application.go:95 > loaded apis: [*api.HelloServiceApiHandler.v1] component:APPLICATION\n[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.\n\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:   export GIN_MODE=release\n - using code:  gin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /exapmle/api/v1/          --\x3e github.com/infraboard/mcube/docs/example/helloworld/api.(*HelloServiceApiHandler).Hello-fm (3 handlers)\n2023-11-14T17:40:32+08:00 INFO   config/application/http.go:165 > HTTP\u670d\u52a1\u542f\u52a8\u6210\u529f, \u76d1\u542c\u5730\u5740: 127.0.0.1:8020 component:HTTP\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var r=o(7294);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);