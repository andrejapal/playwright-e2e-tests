import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('https://www.carvertical.com/');

  const pageTitle = page.title()
  console.log('Page tile is:', pageTitle);

  await expect(page).toHaveTitle('Car and Motorcycle History Check | carVertical');

  await expect(page).toHaveURL('https://www.carvertical.com/');

  await page.getByRole('button', { name: 'Accept all' }).click();

  await page.getByRole('button', { name: 'Switch to Lithuania' }).click();

  const selector1 = 'a[href="/lt/"]';
  await page.click(selector1);

  await page.fill('input.IdentifierInput_input__gfgg0', 'SALLAAA146A396339');

  await page.getByRole('button', { name: 'Gauti ataskaitą' }).first().click();

  await page.evaluate(() => {
    window.scrollBy(0, 400);
  })

  await page.click('label[for="package-special"]');

  const selector2 = 'a[href="/lt/checkout?package=special"]';
  await page.click(selector2);

  await page.getByTestId('Checkout-EmailInput').fill('testing01carvertical@gmail.com');

  await page.click('div.Checkbox_box__hvQz9');

  await page.getByRole('button', { name: 'Toliau' }).click();

  await page.waitForTimeout(4000);
  await page.evaluate(() => {
    window.scrollBy(0, 400);
  })

  await page.getByRole('button', { name: 'Pridėti' }).click();

  await page.getByPlaceholder('Kupono kodas').fill('qahomework');

  await page.getByRole('button', { name: 'Pritaikyti' }).click();

  await page.waitForTimeout(3000);

  const actualPrice = page.getByTestId('Checkout-TotalAmount');
  const priceValue = await actualPrice.innerText();
  const expectedPrice = '35.61' + String.fromCharCode(160) + '€';
  expect(priceValue).toBe(expectedPrice);
  if (priceValue === expectedPrice) {
    console.log('Price is correct');
  } else {
    console.log('Price is incorrect');
  }

  await page.close();

});