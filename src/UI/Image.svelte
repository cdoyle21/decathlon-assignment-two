<script>
    import { onMount } from "svelte";

    export let src;
    export let alt;
    export let customClassName;
    export let media;
    export let srcset;
    
    let loaded = false;
    let thisImage;

    onMount(() => {
      thisImage.onload = () => {
        loaded = true;
      }
    }) 
  </script>
  
  <style>
    img {
      height: 200px;
      opacity: 0;
      transition: opacity 1200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }

    .image43 {
        width: 280px;
        height: 210px;
        margin: 0 0 16px;
        opacity: 0.64;
    }

    .iconsleft, .buttonsteritaryicon-rightnormal {
        background: #fff;
        border: 1.5px solid #0082c3;
        color: #0082c3;
        border-radius: 100%;
        width: 27px;
        height: 44px;
        padding: 12px 15px 10px 16px;
        text-align: center;
        z-index: 20;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.5);
        position: absolute;
        top: 50%;
        margin-top: -22px;
        cursor: pointer;
    }

    .iconsleft {
        left: 10px;
        right: auto;
    }

    .buttonsteritaryicon-rightnormal {
        right: 75px;
        left: auto;
    }

    .seeMore {
        height: 100%;
    }

  @media (min-width: 0px) and (max-width: 479px) {
    .iconsleft {
        right: 193px;
        left: auto;
        top: 183px;
    }

    .buttonsteritaryicon-rightnormal {
        left: 225px;
        top: 183px;
    }

    .image43 {
      width: 60px;
      height: 60px;
      margin: 0 168px 16px 0;
      padding: 10px;
      border-radius: 8px;
      background-color: #f6d8c2;
      object-fit: contain;
    }
  }
  </style>
  
  <picture>
    <source media="{media}" 
      srcset="{srcset}">
    <img {src} {alt} class={customClassName} class:loaded bind:this={thisImage} loading="lazy" />
</picture>