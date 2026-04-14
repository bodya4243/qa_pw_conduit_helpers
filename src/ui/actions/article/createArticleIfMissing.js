import { HomePage } from '../../pages/HomePage';
import { createNewArticle } from './createNewArticle';
import { CreateArticlePage } from '../../pages/article/CreateArticlePage';

export async function createArticleIfMissing(page) {
    const homePage = new HomePage(page)
    const createArticlePage = new CreateArticlePage(page)

    const isArticlePresent = await homePage.assertArticlesPresent()

    if (!isArticlePresent) {
        await createNewArticle({}, page, createArticlePage)
    }
}