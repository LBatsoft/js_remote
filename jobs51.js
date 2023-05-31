const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false,
    executablePath: '/Users/morein/.cache/puppeteer/chrome/mac-1056772/chrome-mac/Chromium.app/Contents/MacOS/Chromium'
}).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    // await page.goto("https://jobs.51job.com/shaoxing-ycq/144626603.html")// 操作...
    await page.goto("https://bot.sannysoft.com/")
    await page.waitForTimeout(4000)
    await page.goto("https://jobs.51job.com/shaoxing-ycq/144626603.html")// 操作...
    await page.waitForTimeout(2000)
    const sliderSelector = '#nc_1_n1z'
    const slidBut = await page.waitForSelector(sliderSelector, {timeout: 2000})
    if (slidBut){
        console.log("需要滑动滑块");
        await page.hover(sliderSelector);
        const butInfo = await slidBut.boundingBox();
        console.log(butInfo)
        let track = 12
        page.mouse.down();
        while (  track < 300) {
            page.mouse.move(track + butInfo.x, butInfo.y);
            await page.waitForTimeout(50)
            track += 10
            console.log(track)
        }
        page.mouse.up();
    }
    await page.waitForTimeout(4000)
    await page.screenshot({path: 'testresult.png', fullPage: true})
    await browser.close()
    console.log(`All done, check the screenshot. ✨`)
})