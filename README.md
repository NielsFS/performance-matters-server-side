# performance-matters-server-side
## Getting started
* Run the following command in the directory of your choosing to clone the project `git clone https://github.com/NielsFS/performance-matters-server-side.git`
* In the terminal, CD into the Herkansing Folder
* Then use the command `npm start` to start the server. 

## Description
For this assignment I have converted one of my previous projects to make it render its most important content from the server. The page consists of an overview page with video's that can be opened to show the youtube player. The content and detail view can all be rendered without client-side Javascript. With Javascript turned on, other features are available such as adding video's to the page. Unfortunately I was unable to recreate this feature Server-side. I have also made several changes to make the website perform better.

## Tooling 

## performance

After having altered the original project to render the first paint from the server side, I made the first performance audit to start adding more performance improvements. Due to main page being rendered form the server side and having bundled the Javascript with bundle.js, the page is already performin quite well. However, there are some improvements to be made.

![Performance_1](https://lh3.googleusercontent.com/1RgZ5DieoOTWNEyMrVdqlPv10OCRLmzLHApGaEiLQLv1GfJ8mirHqKYvHjYmQEex6aUZi4ZIbOOGFFl1s-rvMe9wFnXwcXTbYShtW1VncGmDmVOY5ULG6STwGWV--Y5oKi7vzwIIzARRgVIqSBnjTUfYPaHit9D4VO0h6Ol2McgP05fLzijo8-1xaSNdf8BUpvc1co-nH4Y8sitU9sKN6j46SabJZ8HeIldpsCZwoR9hxYgb_luNpiyDoY2UaQYQ8yMUSB8d01CzpUTFxXTWMHSeeYvTZIpM6b0urqA3_zDCcxz6x2qAzoa_tH-4pIToY0RlNxjHodd0NJT5VilFic5iPoWVhHV_rUkZmIEQQh1EuL2TUp0tj2ePA36SNg5Sj1KWgycEeL0g_2t72rOh0VHkx3NpnOd3AKU8RTCqB24psv6pJ56WNy0ZYDhCuTiQfRz1zi-mO37GX8PPvn1IvLJMFbd-e4kbPV37hi9PXJc_qXwuZwq4GvgxFDPm6vcwferXSBGOd3ET-osjOirRPx79bJ4k4XYlPaVoXaoV7vsYIrD_Z_2Z3L58kmngXs9zu3Cy7vWjYbZ48444Qjal-jNYOpJSrnfYArQ4G9PRGbD4mJJKFw0Vu3Y8JQl9motRduHkLekg87lDIiHJEBjWzfQ8-muzpKE=w1190-h1316-no)


The main opportunities to further improve the website are:
* Adding data compression
* Async load css
* Adding critical css
* Minify CSS 
* Minify JS



