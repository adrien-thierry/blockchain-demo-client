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
var blockchainConf=
{
    "state": true, // true | false, default is true
    "type": "http", // "http", "net", ... see base/server/
    "name": "Test server", // Server name
    "port": {"http": 9393}, // { "http": 80, "http2":81 }
    "thread": 1, // int value or os.cpus().length
    "engine":
    {
      "http-start": {at: "start"},
      "http-data": {at: "start"},
      "http-zone": {at: "start"},
      "http-page": {at: "start"},
      "http-default": { at: "default"},
      "http-route": {at: "route"},
      "http-error": {at: "error"}
    },
    "map": ["start", "app", "default", "route", "error" ] // Order app/engine launching map
}
module.exports = blockchainConf;
