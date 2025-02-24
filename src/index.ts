/* eslint-disable camelcase */
import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import VueI18n from "vue-i18n";
import GlobalBus from "./globalBus";

import App from "./App.vue";
import HomePage from "./components/home.vue";
import WeatherOverviewPage from "./components/weatheroverview.vue";

import en_US from "./locales/en-US";
import zh_TW from "./locales/zh-TW";
import ja_JP from "./locales/ja-JP";

import "jquery";
import "bootstrap";

type DateTimeFormats = VueI18n.DateTimeFormats;
type LocaleMessages = VueI18n.LocaleMessages;

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(GlobalBus);

const routerOption: RouterOptions = {
    routes: [
        { path: "/", component: HomePage },
        { path: "/weatheroverview", component: WeatherOverviewPage },
    ],
};

const router: VueRouter = new VueRouter(routerOption);

const dateTimeFormats: DateTimeFormats = {
    "en-US": {
        "short": {
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            hour12: localStorage.getItem("hourSystem") === "24" ? false : true,
        },
        "long": {
            year: "numeric", month: "short", day: "numeric", weekday: "short",
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            hour12: localStorage.getItem("hourSystem") === "24" ? false : true,
        },
    },
    "ja-JP": {
        "short": {
            hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
        },
        "long": {
            year: "numeric", month: "short", day: "numeric", weekday: "short",
            hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
        },
    },
    "zh-TW": {
        "short": {
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            hour12: localStorage.getItem("hourSystem") === "24" ? false : true,
        },
        "long": {
            year: "numeric", month: "short", day: "numeric",
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            hour12: localStorage.getItem("hourSystem") === "24" ? false : true,
        },
    },
};

const messages: LocaleMessages = {
    "en-US": en_US,
    "zh-TW": zh_TW,
    "ja-JP": ja_JP,
};

const i18n: VueI18n = new VueI18n({
    locale: "zh-TW",
    messages,
    dateTimeFormats,
});

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount("#app");