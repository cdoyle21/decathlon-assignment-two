<script>
    import IntersectionObserver from "../Homepage/IntersectionObserver.svelte";
    import Image from "./Image.svelte";
    
    export let src;
    export let alt;
    export let customClassName;
    export let media;
    export let srcset;

    let nativeLoading = false;
    
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Image {media} {srcset} {customClassName} {alt} {src} />
    {/if}
  </IntersectionObserver> 