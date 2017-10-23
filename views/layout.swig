<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	{% include 'partials/head.swig' %}
	<link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
	<link rel="stylesheet" href="/static/css/main.css" />
	{% block style %}{% endblock %}
	{% include 'templates/client-templates.swig' %}
</head>
<div class="body-wrap">
	{% block body %}{% endblock %}
</div>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js" integrity="sha256-obZACiHd7gkOk9iIL/pimWMTJ4W/pBsKu+oZnSeBIek=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js" integrity="sha256-R1IFHT0MWkbgu6vXgT4RE7TST4ROLDZRKtpRZeZ/Ke8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js" integrity="sha256-+JMHsXRyeTsws/tzbIh5YHQxRdKCuNjmvNcTFtY6DLc=" crossorigin="anonymous"></script>
<script id="init">
	$(function(){
		if ($.browser.mobile)
			$('body').addClass('mobile');
	});
</script>
{% block scripts %}{% endblock %}
</body>
</html>