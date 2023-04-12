<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    import Searchfilter from './Searchfilter.svelte';
    import Counter from './Counter.svelte';
    let thumb = "?w=400";
</script>

<svelte:head>
    <title>Top</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="uk-container">
    <h1>ページタイトル</h1>
    <div class="uk-width-expand" uk-grid>
        <div class="uk-width-1-4@m">
            <Counter />
            <Searchfilter />
            <form class="uk-margin uk-width-full">
                <fieldset class="uk-fieldset">
                    <ul class="uk-nav-default" uk-nav="multiple: true">
                        <li class="uk-parent">
                            <a href=" ">カテゴリ <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 折り図</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 展開図</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 動画</label></li>
                            </ul>
                        </li>
                        <li class="uk-parent">
                            <a href=" ">難易度 <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 初級</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 中級</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 上級</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 超難解</label></li>
                            </ul>
                        </li>
                        <li class="uk-parent">
                            <a href=" ">枚数 <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 一枚</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 複数</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> ユニット</label></li>
                            </ul>
                        </li>
                        <li class="uk-parent">
                            <a href=" ">道具 <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><label><input class="uk-checkbox" type="checkbox" checked> はさみ</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> のり</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> 針金</label></li>
                                <li><label><input class="uk-checkbox" type="checkbox" checked> テープ</label></li>
                            </ul>
                        </li>
                    </ul>
                </fieldset>
                <button class="uk-button uk-button-default uk-button-small">Clear</button>
                <button class="uk-button uk-button-primary uk-button-small">Search</button>
            </form>
        </div>
        <div class="uk-width-3-4@m">
            <div class="uk-search uk-search-navbar">
                <a href=" " uk-search-icon> </a>
                <input class="uk-search-input uk-width-full" type="search" placeholder="検索" aria-label="Search">
            </div>
            <div uk-grid>
                <div class="uk-width-expand@s"><label><input class="uk-checkbox" type="checkbox"> 無料アイテムを非表示</label></div>
                <div class="uk-width-1-3@s">
                    <select class="uk-select" aria-label="Select">
                        <option>評価順</option>
                        <option>新着順</option>
                        <option>売上順</option>
                        <option>工程数の多い順</option>
                        <option>工程数の少ない順</option>
                        <option>価格の高い順</option>
                        <option>価格の安い順</option>
                    </select>
                </div>
            </div>
            <div class=" uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
            {#each data.contents as content}
            <div>
                <div class="uk-card">
                    <div class="uk-card-media-top">
                        <div class="uk-card-badge uk-label-danger">1</div>
                        <a href="{content.id}">
                            <img src={content.eyecatch?.url + thumb} alt=""/>
                        </a>
                    </div>
                    <h3 class="uk-card-title uk-text-muted uk-margin-small">{content.title}</h3>

                        <div class="uk-flex uk-flex-between">
                            <p class="uk-text-muted uk-margin-remove uk-text-small"><span uk-icon="icon: user; ratio: 0.8" ></span> Author</p>
                            <p class="uk-text-emphasis uk-text-bold uk-margin-remove">¥600</p>
                        </div>

                </div>
            </div>
            {/each}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>