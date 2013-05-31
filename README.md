# Uneeq

[![Build Status](https://secure.travis-ci.org/shapeshed/uneeq.png)](http://travis-ci.org/shapeshed/uneeq)

A tiny module to generate a unique identifier for a node process. Useful where you have multiple processes in a load balanced environment.

## Installation

    npm install uneeq

## Usage

    var uneeq = require('uneeq');
    console.log(uneeq);

    > 01a7f0f678cc2555dac40dfa070e09cb
