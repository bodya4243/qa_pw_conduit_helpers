import { generateNewArticleData } from '../../../common/testData/generateNewArticleData';
import { HomePage } from '../../pages/HomePage';

export async function createNewArticle(customData = {}, page, createArticlePage) {
    const homePage = new HomePage(page);
    const articlePageData = generateNewArticleData(3);

    const data = {...articlePageData, ...customData}

    await homePage.clickNewArticleLink()
    await createArticlePage.fillTitleField(data.title)
    await createArticlePage.fillDescriptionField(data.description)
    await createArticlePage.fillTextField(data.body)
    await createArticlePage.fillTagsField(data.tags)

    await createArticlePage.clickPublishArticleButton()

    return data
}
