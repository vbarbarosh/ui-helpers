vue_component('wavesurfer-player', {
    props: ['src', 'autoplay', 'controls'],
    template: `
        <div class="vsplit gap10">
            <div class="rel fluid">
                <div v-once ref="waveform" class="abs-f" />
                <div v-if="loading" class="abs-c flex-row-center gap10 white p10 br4 bs5 z2">
                    <spinner class="w20 h20" />
                    <span>{{ loading }}%</span>
                </div>
            </div>
            <audio ref="audio" class="ww" />
        </div>
    `,
    data: function () {
        return {
            loading: null,
            wavesurfer: null,
        };
    },
    watch: {
        src: function () {
            this.wavesurfer.setTime(0);
            this.wavesurfer.load(this.src);
        },
    },
    created: function () {
        // console.log('[wavesurfer_player.created]');
    },
    mounted: function () {
        // console.log('[wavesurfer_player.mounted]');

        this.resize_observer = new ResizeObserver(() => this.wavesurfer.setOptions({height: this.$refs.waveform.clientHeight}));
        this.resize_observer.observe(this.$el);

        this.wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform,
            fillParent: true,
            waveColor: '#4F4A85',
            progressColor: '#383351',
            height: this.$refs.waveform.clientHeight,
            interact: true,
            dragToSeek: true,
            media: this.$refs.audio,
            url: this.src,
            autoplay: (this.autoplay === '') || Boolean(this.autoplay),
            mediaControls: (this.controls === '') || Boolean(this.controls),
        });
        this.wavesurfer.on('loading', progress => this.loading = progress);
        this.wavesurfer.on('ready', () => this.loading = false);
    },
    unmounted: function () {
        // console.log('[wavesurfer_player.unmounted]');
        this.wavesurfer?.destroy();
        this.resize_observer?.disconnect();
    },
});

// https://wavesurfer.xyz/
html`
    <script src="https://cdn.jsdelivr.net/npm/wavesurfer.js@7"></script>
`;
