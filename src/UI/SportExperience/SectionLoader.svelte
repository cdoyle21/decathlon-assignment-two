<script>
    import IntersectionObserver from "../../Homepage/IntersectionObserver.svelte";
    import Section from "./Section.svelte";

    export let sportsExperience;
    export let dumbells;
    
    export let customClassName;

    let nativeLoading = false;
    
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Section {customClassName}
        {sportsExperience}
        {dumbells} />
    {/if}
  </IntersectionObserver> 