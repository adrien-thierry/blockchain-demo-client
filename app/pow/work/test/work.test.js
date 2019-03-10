/*
 * This file is part of blockchain-demo-server
 * Copyright (c) 2019 Adrien THIERRY
 * https://github.com/adrien-thierry/blockchain-demo-server
 *
 * sources : https://github.com/adrien-thierry/blockchain-demo-server
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var wf = WF();
var CURRENT = ["all", "etape4", "hash"];
var DO_TEST = false;
var OK = false;

for(var s in wf.cli.stack)
{
  if(CURRENT.indexOf(wf.cli.stack[s].toLowerCase()) > -1) DO_TEST = true;
}

if(!DO_TEST) return;

var test =  require("../work.app.js");
test = new test({init:{version:"TEST"}});

console.log("[*] Verifing calcHash");

var _str = "a";
var _difficulty = 14;

var result = test.accessCalcHash(_str, _difficulty);

if(!result)
{
  console.error("[!] ERROR : result of accessCalcHash is null or undefined");
  process.exit(1);
}

if(typeof result != "object")
{
  console.error("[!] ERROR : result should be an object, it's : " + typeof result);
  process.exit(1);
}

if(!result.seal)
{
  console.error("[!] ERROR : result should contains seal");
  process.exit(1);
}

if(!result.junk)
{
  console.error("[!] ERROR : result should contains junk");
  process.exit(1);
}

if(typeof result.seal != "string")
{
  console.error("[!] ERROR : result.seal should be a string, it's : " + typeof result.seal);
  process.exit(1);
}

if(typeof result.junk != "string")
{
  console.error("[!] ERROR : result.junk should be a string, it's : " + typeof result.junk);
  process.exit(1);
}

if(result.seal.length != 64)
{
  console.error("[!] ERROR : result.seal should be a string of 64 char");
  process.exit(1);
}

if(result.seal != wf.Crypto.createSHA256(_str + result.junk))
{
  console.error("[!] ERROR : result.seal doesn't correspond to hash of _str + junk");
  process.exit(1);
}

for(var c in result.seal)
{
  _tmp = parseInt(result.seal[c], 16);
  if(_tmp > _difficulty)
  {
    console.error("[!] ERROR : Bad hash, difficulty not respected");
    process.exit(1);
  }
}

console.log("[+] calcHash is ok");
