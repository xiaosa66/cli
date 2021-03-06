import { getAll } from './rc';
import downloadGit from 'download-git-repo';

export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();
    let api = `${config.registry}/${templateName}`;
    console.log('download will start from ',api);
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}