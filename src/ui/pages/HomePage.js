import { expect, test } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.yourFeedTab = page.getByText('Your Feed')
        this.newArticleLink = page.getByRole('link', { name: 'New Article' })
        this.noArticleText = page.getByText('No articles are here... yet.')
    }

    async clickNewArticleLink() {
        await test.step(`Click the 'New Article' link`, async () => {
            await this.newArticleLink.click();
        });
    }

    async assertYourFeedTabIsVisible() {
        await test.step(`Assert the 'Your Feed' tab is visible`, async () => {
            await expect(this.yourFeedTab).toBeVisible();
        });
    }

    async assertArticlesPresent() {
        try {
            await this.noArticleText.waitFor({ state: 'visible', timeout: 3000 });
            return false
        } catch {
            return true
        }
    }
}
