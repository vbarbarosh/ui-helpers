vue_component('virtual-grid', {
    props: ['items', 'getcellsize'],
    template: `
        <div>
            <div v-bind:style="virtual_style" class="rel">
                <template v-for="cell in details.cells" v-bind:key="cell.key">
                    <slot v-bind:cell="cell">
                        <div v-bind:style="cell.style" class="oh">
                            {{ cell }}
                        </div>
                    </slot>
                </template>
            </div>
        </div>
    `,
    data: function () {
        return {
            rows: null,
            cols: null,
            cell_width: null,
            cell_height: null,
            client_width: null,
            client_height: null,
            scroll_x: null,
            scroll_y: null,
        };
    },
    computed: {
        details: function () {
            const {rows, cols, client_width, client_height, scroll_x, scroll_y, cell_width, cell_height} = this;
            const virtual_width = cols * cell_width;
            const virtual_height = rows * cell_height;
            const visible_x1 = Math.floor(scroll_x);
            const visible_y1 = Math.floor(scroll_y);
            const visible_x2 = Math.ceil(scroll_x + client_width);
            const visible_y2 = Math.ceil(scroll_y + client_height);
            const col_begin = Math.floor(visible_x1 / cell_width);
            const col_end = Math.ceil(visible_x2 / cell_width);
            const row_begin = Math.floor(visible_y1 / cell_height);
            const row_end = Math.ceil(visible_y2 / cell_height);
            const cells = [];
            const extra_rows = Math.ceil(client_height / cell_height);
            const extra_cols = Math.ceil(client_width / cell_width);
            for (let row = Math.max(0, row_begin - extra_rows), end = Math.min(rows, row_end + extra_rows); row < end; ++row) {
                for (let col = Math.max(0, col_begin - extra_cols), end2 = Math.min(cols, col_end + extra_cols); col < end2; ++col) {
                    const i = row * cols + col;
                    if (i < this.items.length) {
                        const key = `${row}-${col}`;
                        const item = this.items[i];
                        const style = {
                            position: 'absolute',
                            transform: `translate(${this.px(col*cell_width)},${this.px(row*cell_height)})`,
                            width: this.px(cell_width),
                            height: this.px(cell_height),
                        };
                        cells.push({key, row, col, item, style});
                    }
                }
            }
            return {
                virtual_width,
                virtual_height,
                visible_x1,
                visible_y1,
                visible_x2,
                visible_y2,
                col_begin,
                col_end,
                row_begin,
                row_end,
                cells,
            };
        },
        virtual_style: function () {
            return {
                width: this.px(this.cols * this.cell_width),
                height: this.px(this.rows * this.cell_height),
            };
        },
    },
    watch: {
        items: async function () {
            await this.$nextTick();
            this.refresh();
        },
    },
    methods: {
        public_virtual_grid_scroll_to: async function (item) {
            const i = this.items.indexOf(item);
            if (i === -1) {
                return false;
            }
            const row = Math.floor(i/this.cols);
            const col = this.cols % i;
            this.$el.scrollTop = row*this.cell_height;
            this.$el.scrollLeft = col*this.cell_width;
            this.refresh();
            await this.$nextTick();
            return true;
        },
        refresh: function () {
            const {clientWidth, clientHeight, scrollTop, scrollLeft} = this.$el;
            this.client_width = clientWidth;
            this.client_height = clientHeight;
            this.scroll_x = scrollLeft;
            this.scroll_y = scrollTop;
            const [cell_width, cell_height, cols] = this.getcellsize(clientWidth);
            this.cell_width = cell_width;
            this.cell_height = cell_height;
            this.cols = cols;
            this.rows = Math.ceil(this.items.length/cols);
        },
    },
    mounted: function () {
        this.refresh();
        this.$el.addEventListener('scroll', this.refresh, {passive: true});
        this._observer = new ResizeObserver(this.refresh);
        this._observer.observe(this.$el);
    },
    unmounted: function () {
        this.$el.removeEventListener('scroll', this.refresh);
        this._observer.unobserve(this.$el);
    },
});
