<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Clinton Tapia</title>
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