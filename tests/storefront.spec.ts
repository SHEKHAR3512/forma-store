import { test, expect } from '@playwright/test';

test.describe('Forma Storefront Complete Flow', () => {
  test('homepage displays brand, hero, and navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Forma/);
    await expect(page.locator('.wordmark').first()).toContainText('forma');
    await expect(page.locator('h1')).toContainText('Good things.');
    await expect(page.locator('.hero-visual img')).toBeVisible();
    await expect(page.locator('.benefits')).toBeVisible();
    await expect(page.locator('.category-card')).toHaveCount(4);
  });

  test('shop page supports search and category filtering', async ({ page }) => {
    await page.goto('/shop');
    await expect(page.locator('h1')).toContainText('Good things, all in one place.');
    
    // Check that products are loaded
    const cards = page.locator('.product-card');
    await expect(cards.first()).toBeVisible();
    
    // Filter by category
    await page.locator('text=Home & Living').first().click();
    await expect(page).toHaveURL(/category=Home/);
    await expect(page.locator('h1')).toContainText('Home & Living');
  });

  test('product detail page shows gallery, details, and can add to bag', async ({ page }) => {
    await page.goto('/shop');
    // Click on the first product
    await page.locator('.product-name').first().click();
    await expect(page.locator('.product-info h1')).toBeVisible();
    await expect(page.locator('.detail-price')).toBeVisible();

    // Check add to bag
    const addBtn = page.locator('.buy-row .button');
    await expect(addBtn).toBeVisible();
    await addBtn.click();

    // Check toast notification and bag count
    await expect(page.locator('.toast')).toHaveClass(/visible/);
    await expect(page.locator('.bag-count')).toHaveText('1');
  });

  test('shopping bag allows applying coupon code WELCOME10', async ({ page }) => {
    // Add product directly by navigating to it
    await page.goto('/shop');
    await page.locator('.quick-add').first().click();
    
    await page.goto('/cart');
    await expect(page.locator('h1')).toContainText('A bag full of good things.');
    
    // Apply promo code
    await page.locator('#coupon').fill('WELCOME10');
    await page.locator('button:has-text("Apply")').click();
    await expect(page.locator('.summary-line.discount')).toBeVisible();
  });

  test('complete checkout flow in demo mode generates order reference', async ({ page }) => {
    // Navigate to shop and add product
    await page.goto('/shop');
    await page.locator('.quick-add').first().click();

    // Go to checkout
    await page.goto('/checkout');
    await expect(page.locator('h1')).toContainText('A few details.');

    // Step 1: Details
    await page.locator('input[autoComplete="email"]').fill('jane.doe@example.com');
    await page.locator('input[autoComplete="name"]').fill('Jane Doe');
    await page.locator('input[autoComplete="street-address"]').fill('123 Considered Way');
    await page.locator('input[autoComplete="address-level2"]').fill('Portland');
    await page.locator('input[autoComplete="address-level1"]').fill('OR');
    await page.locator('input[autoComplete="postal-code"]').fill('97201');
    await page.locator('button:has-text("Continue to delivery")').click();

    // Step 2: Delivery
    await page.locator('button:has-text("Continue to payment")').click();

    // Step 3: Payment
    await page.locator('input[type="checkbox"]').check();
    await page.locator('button[type="submit"]:has-text("Place demo order")').click();

    // Order Success
    await expect(page).toHaveURL(/checkout\/success/);
    await expect(page.locator('h1')).toContainText('Good choice. Great taste.');
    await expect(page.locator('.confirmation-card strong')).toContainText(/FM-/);
  });

  test('all supporting pages render properly', async ({ page }) => {
    const routes = [
      '/about',
      '/contact',
      '/faq',
      '/shipping',
      '/returns',
      '/track-order',
      '/account',
      '/orders',
      '/journal',
      '/privacy',
      '/terms',
      '/accessibility',
      '/collections',
      '/wishlist',
    ];

    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      // Ensure no horizontal scroll at viewport width
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    }
  });
});

