export const HOME_TITLE = "Poor Man's Twitter"

export const Constants = {
    HomeTitle: "Poor Man's Twitter"
};

Constants.install = function (Vue) {
    Vue.prototype.$constLib = (key) => {
        return Constants[key];
    }
};

export default Constants;