<script id="nav-template" type="text/x-handlebars-template">
  <ul>
    {{#each links}}
    <li class="nav-link">
      <a href="{{href}}" {{#if class}}class="{{class}}" {{/if}}>{{name}}</a>
    </li>
    {{/each}}
  </ul>
</script>