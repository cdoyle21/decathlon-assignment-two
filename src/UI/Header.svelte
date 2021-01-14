<script>
  import Menu from "../Homepage/Menu.svelte";
  import SearchBar from "../Homepage/SearchBar.svelte";

  export let decathlonLogo;
  export let decathlonLogoAlt;
  export let contactUs;
  export let contactUsAlt;
  export let contactUsText;
  export let findAStore;
  export let findAStoreAlt;
  export let findAStoreText;
  export let myAccount;
  export let myAccountAlt;
  export let myAccountText;
  export let myBasket;
  export let myBasketAlt;
  export let myBasketText;
  export let searchGlass;
  export let searchGlassAlt;
  export let menu;

</script>

<style>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  }

  .main-header {
    background: #fff;
    display: table;
    border-collapse: collapse;
    position: relative;
    width: 100%;
    height: 66px;
    z-index: 9998;
  }

  #header-main-col{
    width: 100%;
    padding: 0 0 0 14px;
    border-left: .1rem solid #edeff1;
    display: table-cell;
    vertical-align: middle;
    border-spacing: 0;
  }

  #header-main {
    display: table;
    width: 100%;
    padding: 11px 0 11px 14px;
  }

  #header-main-logo {
    display: table-cell;
    vertical-align: middle;
    border-spacing: 0;
    margin-left: 14px;
  }

  .decathlon-logo {
    vertical-align: middle;
    margin: 0 0 0 14px;
    max-width: 176px;
  }

  .header-member-area {
    display: table-cell;
    vertical-align: middle;
    border-spacing: 0;
    width: 40%;
    padding-right: 25px;
    text-align: center;
  }

  .header-member-area .list-unstyled {
    float: right;
    display: table;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 288px;
  }

  .header-member-area li {
    display: table-cell;
  }

  .header-member-area .nav-link {
    min-width: 78px;
    width: 100%;
    padding: 11px 5px;
    height: 48px;
    position: relative;
    display: block;
  }

  .header-my-cart {
    background: #ffea28;
    display: table-cell;
    vertical-align: middle;
    border-spacing: 0;
    min-width: 105px;
  }

  .my-cart-area {
    float: right;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }

  .my-cart-area .nav-link {
    display: table;
    position: relative;
    width: 100%;
    padding-right: 20px;
  }

  .my-cart-area-inner {
    margin: 0;
    display: table-cell;
    padding: 0 22px 0 16px;
  }

  .my-cart-area .my-cart-area-inner:after {
    content: "";
    position: absolute;
    background: #ffea28;
    height: 100%;
    width: 20px;
    top: 0;
    box-sizing: content-box;
    right: 91px;
    z-index: 0;
    transform: skewX(-7deg);
  }

  #cartItemsCount {
    background: #0082c3;
    position: absolute;
    z-index: 5;
    top: 5px;
    right: 18px;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-family: Helvetica,Helvetica,Arial,"\5FAE\8F6F\96C5\9ED1","\5B8B\4F53",sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 22px;
  }

  .contact-us, .find-as-store, .my-account, .my-basket {
    width: 26px;
    height:26px;
  }

  .text {
    position: relative;
    top: 4px;
    z-index: 1;
    display: block;
    text-transform: uppercase;
    font-size: 0.6rem;
    line-height: 1.2;
    font-family: sans-serif;
    overflow: hidden;
    height: 24px;
    color: #323233;
  }

  @media (min-width: 0px) and (max-width: 479px) {
    .main-header {
      width: 100%;
      border-collapse: inherit;
    }
    .header-member-area {
      display: none;
    }

    #header-main {
      padding: 11px 0;
      width: 73%
    }
    #header-main-col {
      padding: 0;
    }

    .decathlon-logo {
      width: 100px;
      height: 30px;
    }

    .header-my-cart {
      min-width: 76px;
    }

    .my-cart-area {
      float: left;
    }

    .my-cart-area-inner {
      padding-left: 8px;
    }

    .my-cart-area .my-cart-area-inner:after {
      right: 61px;
    }

    .text {
      display: none;
    }
  }
</style>

<header class="main-header">
  <Menu menu={menu} />
  <div id="header-main-col">
    <div id="header-main">
      <div id="header-main-logo">
        <img class="decathlon-logo" src="{decathlonLogo}" alt="{decathlonLogoAlt}"/>
      </div>
      <SearchBar searchGlass={searchGlass} searchGlassAlt={searchGlassAlt}/>    
    </div>
  </div>  
  <div class="header-member-area">
    <ul class="list-unstyled">
      <li><a href="#" class="nav-link"><img class="contact-us" src="{contactUs}" alt="{contactUsAlt}"/><span class="text">{contactUsText}</span></a></li>
      <li><a href="#" class="nav-link"><img class="find-as-store" src="{findAStore}" alt="{findAStoreAlt}"/><span class="text">{findAStoreText}</span></a></li>
      <li><a href="#" class="nav-link"><img class="my-account" src="{myAccount}" alt="{myAccountAlt}"/><span class="text">{myAccountText}</span></a></li>
    </ul>
  </div>
  <div class="header-my-cart">
    <div class="my-cart-area">
      <div class="my-cart-area-inner">
        <div id="cartItemsCount"></div>
        <a href="#" class="nav-link"><img class="my-basket" src="{myBasket}" alt="{myBasketAlt}"/><span class="text">{myBasketText}</span></a>
    </div>
    </div>
  </div>
</header>
