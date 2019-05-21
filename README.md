# performance-matters-server-side
## Getting started
* Run the following command in the directory of your choosing to clone the project `git clone https://github.com/NielsFS/performance-matters-server-side.git`
* In the terminal, CD into the Herkansing Folder
* Then use the command `npm start` to start the server. 

## Description
For this assignment I have converted one of my previous projects to make it render its most important content from the server. The page consists of an overview page with video's that can be opened to show the youtube player. The content and detail view can all be rendered without client-side Javascript. With Javascript turned on, other features are available such as adding video's to the page. Unfortunately I was unable to recreate this feature Server-side. I have also made several changes to make the website perform better.

## Tooling 

I made use of the following npm tools:

* Express
* Browserify
* Compression
* Uglify
* Gzip
* nodemon

Upon starting the server most of the javascript modules get bundled together with browserify which will also automatically be minified with Uglify-js. The same goes for the CSS. Gzip will automatically compress the text files. Furthermore nodemon will start watching the server for changes. 

## performance

After having altered the original project to render its dynamic content from the server, I made the first performance audit to start adding more performance improvements. Due to the main pages' content being rendered from the server side and having bundled the Javascript with bundle.js, the page is already performing quite well. However, there are some improvements to be made.

![Performance_1](https://lh3.googleusercontent.com/1RgZ5DieoOTWNEyMrVdqlPv10OCRLmzLHApGaEiLQLv1GfJ8mirHqKYvHjYmQEex6aUZi4ZIbOOGFFl1s-rvMe9wFnXwcXTbYShtW1VncGmDmVOY5ULG6STwGWV--Y5oKi7vzwIIzARRgVIqSBnjTUfYPaHit9D4VO0h6Ol2McgP05fLzijo8-1xaSNdf8BUpvc1co-nH4Y8sitU9sKN6j46SabJZ8HeIldpsCZwoR9hxYgb_luNpiyDoY2UaQYQ8yMUSB8d01CzpUTFxXTWMHSeeYvTZIpM6b0urqA3_zDCcxz6x2qAzoa_tH-4pIToY0RlNxjHodd0NJT5VilFic5iPoWVhHV_rUkZmIEQQh1EuL2TUp0tj2ePA36SNg5Sj1KWgycEeL0g_2t72rOh0VHkx3NpnOd3AKU8RTCqB24psv6pJ56WNy0ZYDhCuTiQfRz1zi-mO37GX8PPvn1IvLJMFbd-e4kbPV37hi9PXJc_qXwuZwq4GvgxFDPm6vcwferXSBGOd3ET-osjOirRPx79bJ4k4XYlPaVoXaoV7vsYIrD_Z_2Z3L58kmngXs9zu3Cy7vWjYbZ48444Qjal-jNYOpJSrnfYArQ4G9PRGbD4mJJKFw0Vu3Y8JQl9motRduHkLekg87lDIiHJEBjWzfQ8-muzpKE=w1190-h1316-no)


The main opportunities to further improve the website are:
* Adding data compression
* Async load css
* Adding critical css
* Minify CSS 
* Minify JS

### Async and critical css
The first improvement I made was to load the stylesheet async and added critical css to improve the first paint. I was quite amazed on how much this improved the performance of the load time. The first paint was improved with 0.5 seconds, which is a 31% increase in first paint load time. 

![Crit css](https://lh3.googleusercontent.com/CKUAnGT88fkwrpBduDPEWL-dJnaXj6RztnZlshS3gSDfbLUBO69o_9HlVZDZBPA0GSgCigWT3kQmHVathvfVxezsld8OpDwrTlRkHCDe3pp-QYumayx7iK5wPwnTyxUN8ebiEkhHIDYN2Wj2FvV_PgQTbhK5c1Gg3zQciAJyHk6M-iQXwwJqrsJ_s_xGjjfyxnacG4p0f7KMoTuYdzJc1Cv8I3EElPjKwYayvLcB5Gtkqe46XLVMvtNEo79SuXNjtWyvQNTPnLvLGruryPeVFvPKdLQOP0Qf3puvNb1rszm8Pt-UALWWyLEkm1Eg115jDp_HEb8Hq4Ro8_PYJRztGgrrvQyEqJ63IEdbsr9feYPKzs855x9cgiMqToIHUO1cgCOf7mw3i-NWRlQ3SktkTwpR53nmvJcLJnpuaTbrRXi4jA6k4RaYMp4Q7UwqNHzUBU_f10qyLuOfxgCCSXkbo6PjfT8MIWL7dguhrFwfkaZ-VoHb_AEI_QSmYw-TTvb4Qw0u9ehkQu5VrqzjMPFxDCAhaMUuPyvW5_6vbgyNclAiujDI1Cz42i31XZNpMRTcQWeJersIXWbZwm8ebeXrVhxecsWPokzTD8Ad4ilV2DT4r1wESDV7llrtKQwjjHkZzit_XWw0ZFGpSV8rzulNpoQOuUiZmZQ=w1194-h554-no)

### Minify JS and CSS
The second improvement was to minify the JS and CSS when starting the server. This was done by using the npm module Uglify. The results were slight as there isn't a lot of JS and CSS involved, but there was still a 0.1 secon first paint increase.
![Uglify](https://lh3.googleusercontent.com/3Pc_W2qOzcZzSiu-O6dvlFY3wgIPx8r_Tt6yFa75BuPWCy1p8V_aQ-CBIMnm1KsUOxvryN6Flsej56AXTvRS6Lv1m6tHwC9QamEk37hkr7XGKr6AAaQMugmoyh0glPJNydmMql1fKuyEi9cA9XTkOQMgOJI_tswI8fxxRUXh39GZtTf8JoFxF0sZgLKUFgSpoHjK3TE1O7WKvaRtl5vCAfQLX4pjO9Ijv6xmBjYJ-ZEYukLydMdkmVJIbdv-Tf4ycDy0UPdLC3eSuW7r3r7iL-LSTx8RSuK8vZjQ2Y9Msz-P0GAVWR8r6bKVHJVQrm2CMpD7_tHNsiA0L3IctB_5AWblW4kqtncAfaOYM8uaNIEpB8-LdQbAxZk_uDwt6aASeI9GWVZhWmmGSJtX10oFiCjvjjjG53kkT9iMHKiASsd5iIbWCkh1rpE3Q5MoHjJIRVHwxdwUMDtUxAbjQCN2lfCrZ1BgFQ7Se9D9wGMLFkls3dQmL_nX8ccMIiRE1ncVN5Alsoymim8wonQYlnq-nBFS_Q93fm4v5SNqbJXB35p0D4IjPvqcQP5nXxaetSx6TxHVRcw9TFOcme2UfcgrFNZOE0h-Yix24j_0oarKQik8silXq0G4Q45fO0ko4nSL9vnWiwEPZAr1uuDiTd3Ere7NhDIj9Aw=w1202-h520-no)

### Text compression
The third improvement was to compress the text using Gzip. This resulted in a much improved speed index and a 0.5 second faster time to interactive. It also resulted in a performance score of 100.
![Gzip](https://lh3.googleusercontent.com/g39iuvW_vFCdK9ViB0kz3PE_JbBpswaAmSzsi6IPZghHlPBEoIp_Z9Y2F5WeTRX1QcElcABpVAVtZyttoriVQqPCEtJCQyq-KXWzKikZ4DTCyaGqzwdAXWRyMH0XMRWip2C8aRFfFpp8Jjq1TfJiAWT079j58qCfM7WoFzr39h49f0lB4LkeQ05kVtFO6tnLD1YaeOPPjMHyiWpUf55dinvhYDe1VdO5H7mrqQZhMx5UlkJ4ZyNV_5r3uMAwwTDUQCs4pBubsPaGaIpaaZdHM4xbxyeWScw5JdILZagm4EeQbgqXRJcMOezswUurBJCuPn4P5we7OhuzjHPF3ecf-ynoZSZ5QrwZ2R_k5CjXbVwF9DdX9VW3vVfxqF5-bAeTJ63MctkEC9H8FoNc7WspsEAbEM9sJ0rhfYNrEr9U6S9j-gpqRmzBqM74BNa0wMtMfbzexkN1kbkzVozZ6pg3QyAC8SjJkSvwPgXd2G-1l9xkes2WbOpnUlx7V-x_mzOq_N7QghtqKlST22LObsiDt1Nn6Z9tKullsc6cPqZKTPKEt_4RP7mGogr-UOFAXip0s1nqGhrpuGCqK_pHlRCT9DbrmePPnprn42RMCgZJrv-5_d70j6jxkUiD81OgXqO3T1Uknq0ND_nFbmfBNR05jA5jo1e7Ysc=w1202-h520-no)

## Service Worker

I have also added a Service Worker that always caches the page and its assets when first loaded. This will result in a huge load time improvement and will also ensure that the user is able to still navigate the website when offline. Although video's can not be played the user can still navigate to video detail pages. These detail pages do not have to be cached to be opened as the contents are passed on from the main page. The load time of the first paint was reduced to only 0.2 seconds.

![Service Worker](https://lh3.googleusercontent.com/wrxEvrou38_Q9ViRv-iYN7i0xJye9UaW_nzNFm7iAo3vnHfIE_W2v2Um2qhn31R6H--KFAbTFKKJ-1MqMg-NlwiJ5tXRb8F4saXGUK0oTkjeNpk6FqpJSE7rtqJ5pS72DZKKjmotHHWJTe8wVNFqpRqdUzBTCQ0HFywCXObVlFqColPa-npeFsvfCncMeEGqvCwhiV7x5qPXcr_m1LlKghe8QZT9ulCYYNAPrv-ZRNvxxcf1TDS7ki2OwxWazlnAB1nGZ0vS5TGRrX_wbiQLMuNOgmNnrwcdffwUb1WbetcISsNntJ88rl0GzzqTVgnzjR4DjCDgp2yw-94RhQac5uyXNqABQvVa0ejsveEGDO_h2vnWETfye5bYtIvvx1SxzmvXCbvSFFuckyiNby7aw8GqJXl7CVMHHZcrRAlVLTF9LSrHowomIT-VBNUlrFzk1adhqeuQ9DafIJo6WSjxBkwurk66aekm9sPgA52biIFlJ0UmsstepDDwglpBay6vRkkYUoKA97c_NJk2z1CZO7poJAqxN4p5hN8R99IjQ3qE4n5M7fGYp0aUuSkJ2zL1iKncJqxuDZIbUMXBuf5sFIA2L1AEdcsqxTF0_HARQ_CbtEF0pAt7xJcMJWr0pWWmuxz-cbSJNCqfc9OcKla7T_20Zil6-O0=w1228-h520-no)