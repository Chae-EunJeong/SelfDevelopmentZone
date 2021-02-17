/* data-binding.html의 <script> 내용에 이 내용 복사해서 새로고침하면 생명주기 확인 가능 */
var APP_LOG_LIFECYCLE_EVENTS = true;

var webstore = new Vue({
    el: "#app",
    data: {
        sitename: "Vue.js 애견용품샵",
    },
    beforeCreate: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeCreate");
        }
    },
    created: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("created");
        }
    },
    beforeMount: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount");
        }
    },
    mounted: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("mounted");
        }
    },
    beforeUpdate: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeUpdate");
        }
    },
    updated: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("updated");
        }
    },
    beforeDestroy: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeDestroy");
        }
    },
    destroyed: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log("destroyed");
        }
    }
})