#!/usr/bin/env node

const name = 'create-zigzag-app';
const fs = require('fs-extra');
const inquirer = require('inquirer');

inquirer
  .prompt({
    name,
    type: 'list',
    message: '고르세요. Choose..',
    choices: [
      'Vanilla',
      'React',
      'React + MaterialUI',
      'Next.js',
      'Next.js + MaterialUI'
    ]
  })
  .then((v) => {
    console.log(v[name]);
    fs.copy(__dirname, `${process.cwd()}/${name}`)
      .then(() => console.log('성공했어요! Success!!'))
      .catch(console.error);
  });
