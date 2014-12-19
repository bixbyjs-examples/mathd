/**
 * Module dependencies.
 */
var IoC = require('electrolyte'),
    express = require('express'),
    bootable = require('bootable');

// Initialize a bootable Express app.
var app = bootable(express());
app.phase(bootable.di.initializers(__dirname + '/init'));
app.phase(bootable.di.routes(__dirname + '/routes'));
app.phase(IoC.create('boot/httpserver'));

module.exports = app;
