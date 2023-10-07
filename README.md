A set of ready components for fast prototyping.

## Usage

    <script src="https://unpkg.com/vue@2.7.14/dist/vue.js"></script>
    <script src="https://unpkg.com/@vbarbarosh/ui-helpers@0.0.0/dist/vue-codemirror.js"></script>

    <div id="app">
        <vue-codemirror v-model="html" mode="htmlmixed"></vue-codemirror>
    </div>

    <script>
    new Vue({
        el: '#app',
        data: {
            html: '<strong>hello</strong>',
        },
    });
    </script>
