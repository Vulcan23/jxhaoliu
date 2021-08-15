export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        for (let item of routerData) {
            if (to.path === item.path) {
                try {
                    document.title = item.name + " | 好六网络";
                } catch (e) { }
                break;
            }
        }
        next();
    });
}

let routerData = [
    {
        name: "首页",
        path: "/",
    },
    {
        name: "广告投放",
        path: "/wechatad",
    },
    {
        name: "品牌案例",
        path: "/brandcase",
    },
    {
        name: "公司介绍",
        path: "/companyprofile",
    },
    {
        name: "联系我们",
        path: "/contactus",
    },
    {
        name: "测试",
        path: "/test",
    },
];

export { routerData };