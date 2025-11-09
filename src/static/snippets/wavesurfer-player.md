# Wavesurfer.js

```vue
<data-vars v-slot="vars" :vars="{selection: [], items: `
    /files/all-things-new-417537.mp3
    /files/beyond-the-time-2min-428678.mp3
    /files/corporate-video-loop-199080.mp3
    /files/corporate-video-main-199079.mp3
    /files/epic-heart-long-version-8640.mp3
    /files/far-from-the-city-long-6min-114443.mp3
    /files/path-to-you-263955.mp3
    /files/perfect-beauty-191271.mp3
    /files/upbeat-inspiring-happy-corporate-long-342375.mp3
`.split('\n').filter(v => v).map(v => ({file: v.trim()}))}">
    <div class="hsplit">
        <div>
            <table-sel :selection="vars.selection" :items="vars.items" />
        </div>
        <div class="fluid">
            <wavesurfer-player v-if="(vars.selection.length === 1)" v-bind:src="vars.selection[0].file" autoplay controls class="p10 h150" />
        </div>
    </div>    
</data-vars>
```
