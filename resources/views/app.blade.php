<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="google-site-verification" content="" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Programador web - Clinton Tapia</title>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="canonical" href="{{ Request::fullUrl() }}">
    <meta name="description" content="Soy programador web, me desempeño en Backend. Uso las mejores prácticas con Laravel y Vuejs en el Stack LAMP.">
    <meta name="author" content="Clinton Tapia Lagar">
    <meta name="keywords" content="programador web, clinton tapia, desarrollador php, programador fullstack"/>
    <meta property="og:url" content="{{ Request::fullUrl() }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Programador web - Clinton Tapia">
    <meta property="og:description" content="Soy programador web, me desempeño en Backend. Uso las mejores prácticas con Laravel y Vuejs en el Stack LAMP.">
    <meta property="og:image" content="{{ asset('assets/img/bg_og.jpg') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/color.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet">
    <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/nprogress.css') }}">
    <script src="{{ asset('js/app.js') }}" defer></script>
    @routes
  </head>
  <body>
    @inertia

    <script src="{{ asset('assets/js/jquery-2.2.4.min.js')}}"></script>
    <script src="{{ asset('assets/js/popper.min.js')}}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js')}}"></script>
    <script src="{{ asset('assets/js/jquery.waypoints.js')}}"></script>
    <script src="{{ asset('assets/js/section.js')}}"></script>
    <script src="{{ asset('assets/js/mbclicker.min.js')}}"></script>
  </body>
</html>