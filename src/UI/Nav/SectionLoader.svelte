<script>
    import IntersectionObserver from "../../Homepage/IntersectionObserver.svelte";
    import Section from "./Section.svelte";

    export let navAllSports;
    export let navMen;
    export let navWomen;
    export let navKids;
    export let navAccessories;
    export let navNutritionAndBodyCare;
    
    export let customClassName;

    let nativeLoading = false;
    
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Section {customClassName}
      {navAllSports}
      {navMen}
      {navWomen}
      {navKids}
      {navAccessories}
      {navNutritionAndBodyCare} />
    {/if}
  </IntersectionObserver> 