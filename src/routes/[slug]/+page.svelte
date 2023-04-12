<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    let thumb = "?w=800";
</script>

<svelte:head>
  <title>ブログ</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<h1 class="">{data.title}</h1>
<section class="uk-container uk-container-small uk-margin-large-bottom">
  
  <div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slider>
    <ul class="uk-slider-items uk-child-width-1-2" uk-grid>
        <li>
            <img src="{data.eyecatch?.url + thumb}" alt="">
            <div class="step-description" uk-grid><div class="uk-grid-1-6">1</div><div class="uk-grid-expand">aaaaa</div></div>
        </li>
        <li>
          <img src="{data.eyecatch?.url + thumb}" width="" height="" alt="">
          <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
          <img src="{data.eyecatch?.url + thumb}" width="" height="" alt="">
          <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
    </ul>
  </div>
  <ul class="uk-thumbnav" uk-margin>
    <li class="uk-active"><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
    <li><a href=" "><img src="{data.eyecatch?.url + '?w=100'}" width="100" height="67" alt=""></a></li>
  </ul>
</section>
<section class="uk-container uk-container-small">
  <div class="uk-child-width-1-2@s" uk-grid>
    <div>
      <div class="uk-background-primary uk-light step-number"><span class="uk-text-large">1</span>/150</div>
      <div class="uk-card uk-card-default uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
    <div><img src="{data.eyecatch?.url + thumb}" width="" height="" alt=""></div>
  </div>
</section>
<section class="uk-container uk-container-small">

</section>
<div class="uk-margin">{@html data.content}</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .step-description{

  }
  .step-number{
    width:60px;
    height:60px;
    border-radius:50%;
  }
</style>