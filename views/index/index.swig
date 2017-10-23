{% extends '../layout.swig' %}

{% block body %}
<header class="site__header">
<div class="grid">
	<div class="site__logo">
		<a href="/">
			<i class="icon ion-chevron-right chevron-icon"></i>
			&nbsp;Plex
		</a>
	</div>
	<nav class="navigation navigation--inline navigation--main"></nav>
</div>
</header>
<main class="site__main">
	<section class="site__section site__section--start align text--center">
		<div class="grid">
			<img class="main-img" src="/static/img/plex-logo.png"></img>
			<h1>Plex and Plex related things</h1>
		</div>
	</section>
</main>
{% endblock %}

{% block scripts %}
<script>
	$(function() {
		$.get('/links', function (data){
			data.links = _.sortBy(data.links, "order");
			var navTemplateContent = $("#nav-template").html();
			var navTemplate = Handlebars.compile(navTemplateContent);
			$(".navigation").html(navTemplate(data));
		});
	});
</script>
{% endblock %}