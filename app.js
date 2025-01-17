const express = require("express"); //express
const formidable = require("express-formidable"); //upload module
const { Configuration, OpenAIApi } = require("openai"); //openAI module
const fs = require("fs"); //file management module
const path = require("path"); //path

const app = express(); //new server
const PORT = 3000; //port