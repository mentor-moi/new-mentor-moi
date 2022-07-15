import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://new-mentor-moi.vercel.app/')
  // Find an element with the text 'About Page' and click on it
  //await  page.locator('span:has-text("Twitter")')
  // The new url should be "/about" (baseURL is used there)
 // await expect(page).toHaveURL('http://localhost:3000/')
//   // The new page should contain an h1 with "About Page"
//   await expect(page.locator('h1')).toContainText('Hello')
  await expect(page.locator('text=Mentors').first()).toBeVisible()
})


test('Test links', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://new-mentor-moi.vercel.app/')
  await page.locator('text=Twitter').click();
   await expect(page.url()).toMatch("https://new-mentor-moi.vercel.app/")
})
