<script lang="ts">
    
</script>

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

