<script>
    import SectionLoader from "../UI/ProductSlide/SectionLoader.svelte";

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
</script>

<SectionLoader 
    customClassName="productSlide"
    mostSearched={mostSearched}
    weights={weights}
    weightsMob={weightsMob}
    weightsProductAlt={weightsProductAlt}
    weightsProductHeadline={weightsProductHeadline}
    weightsProductText={weightsProductText}
    barbells={barbells}
    barbellsProductAlt={barbellsProductAlt}
    barbellsProductHeadline={barbellsProductHeadline}
    barbellsProductText={barbellsProductText}
    dumbells={dumbells}
    dumbellsProductAlt={dumbellsProductAlt}
    dumbellsProductHeadline={dumbellsProductHeadline}
    dumbellsProductText={dumbellsProductText}
    iconsLeft={iconsLeft}
    iconsLeftAlt={iconsLeftAlt}
    iconsRight={iconsRight}
    iconsRightAlt={iconsRightAlt}
    seeMore={seeMore}
    ></SectionLoader>