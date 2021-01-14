<script>
    import { onMount } from "svelte";

    import ImageLoader from '../ImageLoader.svelte';

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
    
    let loaded = false;
    let thisSection;

    onMount(() => {
      thisSection.onload = () => {
        loaded = true;
      }
    }) 
  </script>
  
<style>
    .comporganismheadlinedesktoph2 {
        width: 354px;
        height: 54px;
        margin: 0 413px 40px;
        padding: 0 0.5px;
    }

    .Top-Products {
        width: 411px;
        height: 42px;
        margin: 0 0 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 36px;
        font-weight: bold;
        font-stretch: condensed;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #1a171b;
    }

    .Rectangle {
        width: 115px;
        height: 4px;
        margin: 8px 120.5px 0 117.5px;
        background-color: #0082c3;
    }

    .Mask {
        height: 316px;
        margin: 40px 0 0;
        padding: 0 0 0 50px;
        background-color: #ffffff;
    }

    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    .swiper-products {
        margin: 0 30px;
        padding-left: 25px;
    }

    .label {
        width: 280px;
        height: 24px;
        margin: 16px 0 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: bold;
        font-stretch: condensed;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4d4d4d;
    }

    .Lorem-ipsum-dolor-si {
        width: 269px;
        height: 32px;
        margin: 8px 11px 8px 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-stretch: condensed;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #7c7c7c;
    }

    #seeMoreButton {
        background-color: #ffffff;
        border: none;
        cursor: pointer;
    }

@media (min-width: 0px) and (max-width: 479px) {
    .comporganismheadlinedesktoph2 {
        width: 236px;
        height: 28px;
        margin: 0 0 12px;
    }

    .Top-Products {
        font-size: 21px;
        width: 292px;
    }

    .Rectangle {
        width: 70px;
        height: 2px;
        margin: 12px 114px 0;
    }

    .Mask {
        padding: 0;
    }

    .swiper-wrapper {
        width: 87%;
    }

    .swiper-products {
        width: 260px;
        height: 198px;
        margin: 32px 15px 0 0px;
        padding: 16px;
        border-radius: 2px;
        box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.24);
        background-color: #ffffff;
    }

    .swiper-products:nth-child(3), .swiper-products:nth-child(4) {
        display: none;
    }
}
</style>
  
<section class={customClassName} class:loaded bind:this={thisSection} loading="lazy">
    <div class="comporganismheadlinedesktoph2">
        <div class="Top-Products">{mostSearched}</div>
        <div class="Rectangle"></div>
    </div>
    <div class="Mask">
        <div class="swiper-wrapper">
            <ImageLoader 
                media="" 
                srcset="" 
                customClassName="iconsleft" 
                src="{iconsLeft}" 
                alt="{iconsLeftAlt}" />
                <div class="swiper-products">
                    <ImageLoader 
                        media="(min-width: 0px) and (max-width: 479px)" 
                        srcset="{weightsMob}"
                        customClassName="image43" 
                        src="{weights}" 
                        alt="{weightsProductAlt}" />
                    <div class="label">
                        {weightsProductHeadline}
                            <div class="Lorem-ipsum-dolor-si">
                                {weightsProductText}
                            </div>
                            <button id="seeMoreButton">
                                <ImageLoader
                                    media="" 
                                    srcset="" 
                                    customClassName="seeMore" 
                                    src="{seeMore}" 
                                    alt="{iconsRightAlt}" />
                            </button>
                    </div> 
                </div>
                <div class="swiper-products">
                <ImageLoader 
                    media="" 
                    srcset="" 
                    customClassName="image43" 
                    src="{barbells}" 
                    alt="{barbellsProductAlt}" />
                    <div class="label">
                        {barbellsProductHeadline}
                            <div class="Lorem-ipsum-dolor-si">
                                {barbellsProductText}
                            </div>
                            <button id="seeMoreButton">
                                <ImageLoader
                                    media="" 
                                    srcset="" 
                                    customClassName="seeMore" 
                                    src="{seeMore}" 
                                    alt="{iconsRightAlt}" />
                            </button>
                    </div>
                </div>
                <div class="swiper-products">
                <ImageLoader 
                    media="" 
                    srcset="" 
                    customClassName="image43" 
                    src="{dumbells}" 
                    alt="{dumbellsProductAlt}" />
                    <div class="label">
                        {dumbellsProductHeadline}
                            <div class="Lorem-ipsum-dolor-si">
                                {dumbellsProductText}
                            </div>
                            <button id="seeMoreButton">
                                <ImageLoader
                                    media="" 
                                    srcset="" 
                                    customClassName="seeMore" 
                                    src="{seeMore}" 
                                    alt="{iconsRightAlt}" />
                            </button>
                    </div> 
                </div>
            <ImageLoader 
                media="" 
                srcset="" 
                customClassName="buttonsteritaryicon-rightnormal" 
                src="{iconsRight}" 
                alt="{iconsRightAlt}" />
        </div>
    </div>
</section>