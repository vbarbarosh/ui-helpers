// https://www.jacklmoore.com/autosize/

(function () {

document.write(`
<script src="https://unpkg.com/autosize@6.0.1/dist/autosize.js"></script>
`);

Vue.directive('autosize', {
    inserted: function (el) {
        autosize(el);
    },
    update: function (el) {
        autosize.update(el);
    },
    unbind: function (el) {
        autosize.destroy(el);
    },
});

})();
