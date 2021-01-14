<script>
    import IntersectionObserver from "../../Homepage/IntersectionObserver.svelte";
    import Section from "./Section.svelte";

    export let mostSearched;
    export let weights;
    export let weightsMob;
    export let weightsProductAlt;
    export let weightsProductHeadline;
    export let weightsProductText;
    export let barbells;
    export let barbellsProductAlt;
    export let barbellsProductHeadline;
    export let barbellsProductText;
    export let dumbells;
    export let dumbellsProductAlt;
    export let dumbellsProductHeadline;
    export let dumbellsProductText;
    export let iconsLeft;
    export let iconsLeftAlt;
    export let iconsRight;
    export let iconsRightAlt;
    export let seeMore;
    
    export let customClassName;

    let nativeLoading = false;
    
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Section {customClassName}
        {mostSearched}
        {weights}
        {weightsMob}
        {weightsProductAlt}
        {weightsProductHeadline}
        {weightsProductText}
        {barbells}
        {barbellsProductAlt}
        {barbellsProductHeadline}
        {barbellsProductText}
        {dumbells}
        {dumbellsProductAlt}
        {dumbellsProductHeadline}
        {dumbellsProductText}
        {iconsLeft}
        {iconsLeftAlt}
        {iconsRight}
        {iconsRightAlt}
        {seeMore} />
    {/if}
  </IntersectionObserver> 