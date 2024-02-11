# Recommendation widget

## How to use
Put this code into <head> part:
```
    <script
    app_apikey="..."
    app_type="desktop"
    count="10"
    id="taboola-recommendations-script"
    source_id="..."
    source_type="video"
    source_url="..."
    src="../src/main.js"
    type="module"
    ></script>
```

Example:
```    
    <script
            app_apikey="f9040ab1b9c802857aa783c469d0e0ff7e7366e4"
            app_type="desktop"
            count="10"
            id="taboola-recommendations-script"
            source_id="214321562187"
            source_type="video"
            source_url="http://www.site.com/videos/214321562187.html"
            src="../src/main.js"
            type="module"
    ></script>
```

And this code into your body part:
```
    <div id="taboola-recommendations"></div>
```

Recommendations will be inside div with id="taboola-recommendations"

In ./demo/index.html you can see an example.