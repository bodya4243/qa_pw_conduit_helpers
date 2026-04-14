import { ViewArticlePage } from '../../pages/article/ViewArticlePage';
import {
    BODY_CANNOT_BE_EMPTY,
    DESCRIPTION_CANNOT_BE_EMPTY,
    TITLE_CANNOT_BE_EMPTY,
} from '../../constants/articleErrorMessages';

export class CheckArticleUtil{
    constructor(page) {
        this.page = page;
    }

    static async checkArticleFields(article, page){
        const viewArticlePage = new ViewArticlePage(page)

        await viewArticlePage.assertArticleTextIsVisible(article.body)
        await viewArticlePage.assertArticleTitleIsVisible(article.title)
        await viewArticlePage.assertArticleTagsVisible(article.tags)
    }

    static async checkErrorMessageVisible(article, page){
        const viewArticlePage = new ViewArticlePage(page)

        if (article.title === null) {
            await viewArticlePage.assertErrorMessageContainsText(TITLE_CANNOT_BE_EMPTY)
        }

        if (article.description === null) {
            await viewArticlePage.assertErrorMessageContainsText(DESCRIPTION_CANNOT_BE_EMPTY)
        }

        if (article.body === null) {
            await viewArticlePage.assertErrorMessageContainsText(BODY_CANNOT_BE_EMPTY)
        }
    }
}