<script>
    import SectionLoader from "./SectionLoader.svelte";

    export let getReady;
    export let discoverYourself;
    export let discover;
    export let discoverAlt;
    export let getReadyImg;
    export let getReadyImgAlt;
    export let getReadyImgMob;
</script>

<SectionLoader 
    customClassName="fullscreen"
    getReady={getReady}
    discoverYourself={discoverYourself}
    discover={discover}
    discoverAlt={discoverAlt}
    getReadyImg={getReadyImg}
    getReadyImgAlt={getReadyImgAlt}
    getReadyImgMob={getReadyImgMob} >
</SectionLoader>