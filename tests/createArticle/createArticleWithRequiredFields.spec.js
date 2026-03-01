import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import { checkCreatedArticlePresent } from '../../src/ui/actions/article/checkCreatedArticlePresent';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';

let createArticlePage

test.beforeEach(async ({ page }) => {
    const user = generateNewUserData();
    createArticlePage = new CreateArticlePage(page);
    await signUpUser(page, user);
});

test('Creat an article with required fields', async ({page}) => {
    const createdArticle = await createNewArticle({}, page, createArticlePage);
    await checkCreatedArticlePresent(createdArticle, page)
});
