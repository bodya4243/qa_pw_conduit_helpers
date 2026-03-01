import { ViewArticlePage } from '../../pages/article/ViewArticlePage';

export async function checkCreatedArticlePresent(createdArticle, page) {
    const viewArticlePage = new ViewArticlePage(page)

    await viewArticlePage.assertArticleTextIsVisible(createdArticle.text)
    await viewArticlePage.assertArticleTitleIsVisible(createdArticle.title)
}