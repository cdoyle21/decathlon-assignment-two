<script>
    export let searchGlass;
    export let searchGlassAlt;
</script>

<style>
    .search-form {
        display: table-cell;
        width: 100%;
        border-left: .1rem solid #edeff1;
        vertical-align: middle;
        border-spacing: 0;
    }

    .search-form-table {
        display: table;
        width: 100%;
    }

    .search-form-table-cell{
        position: relative;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }

    #form {
        display: table;
        width: 100%;
        padding: 0 10px;
    }

    .input-wrap {
        width: 100%;
        display: table-cell;
        vertical-align: top;
    }

    #search {
        width: 100%;
        display: table-cell;
        vertical-align: top;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700;
        font-style: italic;
        width: 100%;
        height: 44px;
        line-height: 26px;
        padding: 11px 50px 11px 15px;
        border: 1px solid #d4d7d9;
        background: #edeff1;
        margin: 0;
        border-radius: 2px 0 0 2px;
        border-right: 0;
        text-overflow: ellipsis;
        font-size: 1.9rem;
        text-transform: uppercase;
        color: #575859;
        box-sizing: border-box;
        appearance: none;
    }

    .button-wrap {
        display: table-cell;
        vertical-align: top;
    }

    #search-button {
        padding: 0 15px;
        height: 42px;
        margin: 0;
        background: #fff;
        border-color: #d4d7d9;
        border-style: solid;
        border-width: 1px 0;
        box-sizing: content-box;
        position: relative;
        font-size: 2rem;
        line-height: 0;
    }

    #search-button img {
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        letter-spacing: 0;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
        zoom: 1;
    }

    .search-form button:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 20px;
        top: -1px;
        border: 1px solid #d4d7d9;
        border-left-width: 0;
        box-sizing: content-box;
        transform: skewX(-7deg);
        right: -3px;
    }

    .search-glass {
        width: 26px;
        height:26px;
        line-height: 1;
    }

    @media (min-width: 0px) and (max-width: 479px) {
    .input-wrap {
        display: none;
    }

    #form {
        width: 0;
        padding: 0;
    }

    #search-button{
        height: 30px;
        padding: 0;
    }
  }
</style>

<div class="search-form">
    <div class="search-form-table">
        <div class="search-form-table-cell">
            <form id="form">
                <div class="input-wrap">
                    <input type="search" id="search" name="search" placeholder="SEARCH FOR A PRODUCT, A SPORT OR A BRAND...">
                </div>
                <div class="button-wrap">
                    <button id="search-button"><img class="search-glass" src="{searchGlass}" alt="{searchGlassAlt}"/></button>
                </div>
            </form>
        </div>
    </div>
</div>