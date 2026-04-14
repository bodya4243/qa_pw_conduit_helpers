import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import {
    BODY_CANNOT_BE_EMPTY,
    DESCRIPTION_CANNOT_BE_EMPTY,
    TITLE_CANNOT_BE_EMPTY,
} from '../../src/ui/constants/articleErrorMessages';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { checkArticleFields } from '../../src/ui/actions/article/CheckArticleUtil';

let createArticlePage;

test.beforeEach(async ({ page }) => {
    createArticlePage = new CreateArticlePage(page);
    const user = generateNewUserData();

    await signUpUser(page, user);
});

test('Create an article without required fields', async ({page}) => {
    await createNewArticle({ title: '', tags: Array.from('') }, page, createArticlePage);
    await createArticlePage.assertErrorMessageContainsText(TITLE_CANNOT_BE_EMPTY);
});

test('Create an article without description field', async ({ page }) => {
    await createNewArticle({ description: '', tags: Array.from('') }, page, createArticlePage);
    await createArticlePage.assertErrorMessageContainsText(DESCRIPTION_CANNOT_BE_EMPTY);
});

test('Create an article without body field', async ({ page }) => {
    await createNewArticle({ body: '', tags: Array.from('') }, page, createArticlePage);
    await createArticlePage.assertErrorMessageContainsText(BODY_CANNOT_BE_EMPTY);
});

test('Create an article without tags field', async ({ page }) => {
    const createdArticleData = await createNewArticle({ tags: Array.from('') }, page, createArticlePage);
    await checkArticleFields(createdArticleData, page)
});
