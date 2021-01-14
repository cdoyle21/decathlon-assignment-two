<script>
    export let menu;
</script>

<style>
    .menu-button {
        display: block;
        position: relative;
        height: 4rem;
        width: 4rem;
        font-size: .7em;
        color: #575859;
        text-align: center;
        text-transform: uppercase;
        background-color: #fff;
        border-width: 0;
    }

    .menu-button span {
        position: absolute;
        height: 3px;
        width: 40%;
        left: 0;
        margin-right: 30%;
        margin-left: 30%;
        background-color: currentColor;
        opacity: 1;
        transform: rotate(0deg) scale(1);
        transition: top .4s ease,opacity .4s ease,transform .4s ease;
    }

    .menu-button span:first-child {
        top: 19px;
    }

    .menu-button span:nth-child(2) {
        top: 26px;
    }

    .menu-button span:nth-child(3) {
    top: 33px;
    }

    .menu-button-label {
        overflow: hidden;
        margin-bottom: 0;
        padding-top: 1.4rem;
        text-overflow: ellipsis;
        white-space: pre;
    }

@media (min-width: 0px) and (max-width: 479px) {

}
</style>

<button class="menu-button">
    <span></span>
    <span></span>
    <span></span>
    <p class="menu-button-label">{menu}</p>
</button>