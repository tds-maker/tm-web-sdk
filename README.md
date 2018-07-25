# TDS Maker Web SDK
To use this web sdk you should have a TDSMaker account.

## Installation
- Add web sdk address to your web page.
  ```
  <script src="http://cdn.tdsmaker.net/tds-web-sdk.min.js"></script>
  ```
- Inıt your sdk at the bottom of your 'body' tag
  ```
  <body>
    ....
    tdsWebSdk.init("your-account-key");
  </body>
  ```
  ## Adding Datasheet link in your web page
    You can use any kind of HTML tag with data- attribute. If you use "div, h, span etc...", this sdk will add an onclick event for your tags. You can also use "a" tag to create HTML link to your datasheets. For anchor tags, sdk will generate "href" attribute for datasheets.

    Product number attribute ("data-pn") is mandatory. Default language is english ("en"), but you can define attribute for other languages like "data-lang=fr"

## Sample tags
```
<div data-pn="A123" data-lang="tr">Click here to show datasheet.</div>
```

```
<a href="#" data-pn="A123" data-lang="en">Click Here</a>
```

