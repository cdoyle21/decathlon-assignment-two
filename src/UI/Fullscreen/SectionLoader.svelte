<script>
    import IntersectionObserver from "../../Homepage/IntersectionObserver.svelte";
    import Section from "./Section.svelte";

    export let getReady;
    export let discoverYourself;
    export let discover;
    export let discoverAlt;
    export let getReadyImg;
    export let getReadyImgAlt;
    export let getReadyImgMob;
    
    export let customClassName;

    let nativeLoading = false;
    
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Section {customClassName}
      {getReady}
      {discoverYourself}
      {discover}
      {discoverAlt}
      {getReadyImg}
      {getReadyImgAlt}
      {getReadyImgMob} />
    {/if}
  </IntersectionObserver> 